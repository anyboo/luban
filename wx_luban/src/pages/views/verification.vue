<template>
    <div class='modal'>
        <div class="modal-head">
            <h3 class='txt-center greener'>
                验证
            </h3>
        </div>
        <div class='modal-body'>
            <el-form :model="numberValidateForm" :rules="rules" ref="numberValidateForm" label-width='60px'>
                <el-form-item label="电话" prop="number">
                    <el-input v-model="numberValidateForm.number" auto-complete="off" @blur="handleblur"></el-input>
                </el-form-item>
                <el-form-item class='padbom' label="验证" prop="verification">
                    <el-row>
                        <el-col :span="12">
                            <el-input v-model="numberValidateForm.verification"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button class="floatright" type="button" style="width:80%" @click="handleVerification" :disabled='choose'>{{views}}</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <div class='text-center login_padleft'>
                    <el-row>
                        <el-col :span="24" class='padbom'>
                            <el-button class="login_button" type="Success" @click="submitForm('numberValidateForm')">登陆</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>
    </div>
</template>
<style>
.touch {
    color: #D1D1D1;
}
</style>
<script>
import md5 from '~/api/md5.min.js'
export default {
    name: 'verification',
    data() {
        let localdata = {}
        return {
            localdata,
            numberValidateForm: {
                number: '',
                verification: '',

            },
            choose: true,
            iscolor: false,
            timer: 0,
            views: '验证码',
            rules: {
                number: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
                ],
                verification: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 4, max: 6, message: '长度在 4 到 6 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        button_rule() {
            this.choose = !this.choose
            let num = 120
            this.timer = setInterval(() => {
                this.views = num + 's'
                num--;
                if (num === 0) {
                    clearInterval(this.timer)
                    this.views = '验证码'
                    this.choose = !this.choose
                }
            }, 1000)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    Vue.http.post('http://api.luban8.cn:8888/checksms/', { phone: this.numberValidateForm.number, number: this.numberValidateForm.verification }).then(obj => {
                        console.log(obj.data.status)
                        if (obj.data.status == 0) {
                            this.resiget()
                        } else {
                            this.$message({
                                message: '验证码错误',
                                type: 'error'
                            })
                        }
                    })
                    clearInterval(this.timer)
                } else {
                    alert('错误！')
                    return false
                }
            });
        },
        resiget() {
            //键值
            let token = window.localStorage.getItem('token')
            let tokentime = window.localStorage.getItem('tokentime')
            Vue.http.headers.common['authorization'] = token
            Vue.http.headers.common['authtime'] = tokentime
            //查询
            var student_ids = ''
            let filterObj = []
            filterObj.push({
                'key': 'first_tel',
                'value': this.numberValidateForm.number,
                'type': ''
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            Vue.http.get('http://api.luban8.cn:8888/lubandemo/api/student?filter=' + filterTxt).then(obj => {
                console.log(obj)
                if (obj.data.count > 0) {
                    student_ids = obj.body.data[0]._id
                    this.$store.commit('student', student_ids)
                    //绑定
                    Vue.http.put('http://api.luban8.cn:8888/lubandemo/api/student/' + this.$store.state.student_id.student_id, { openid: this.$store.state.openid.openid }).then(obj => {
                        console.log(obj)
                    })
                    this.$store.commit('homes', 'lb-home')

                }
            })
        },
        handleblur() {
            console.log(this.choose)
            let token = window.localStorage.getItem('token')
            let tokentime = window.localStorage.getItem('tokentime')
            Vue.http.headers.common['authorization'] = token
            Vue.http.headers.common['authtime'] = tokentime
            //查询
            let filterObj = []
            filterObj.push({
                'key': 'first_tel',
                'value': this.numberValidateForm.number,
                'type': ''
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            Vue.http.get('http://api.luban8.cn:8888/lubandemo/api/student?filter=' + filterTxt).then(obj => {
                if (obj.data.count <= 0) {
                    this.$message({
                        message: '该用户不存在',
                        type: 'warning'
                    })
                } else {
                    this.choose = !this.choose
                }

            })
        },
        handleVerification() {
            this.button_rule()
            Vue.http.post('http://api.luban8.cn:8888/sms/', { phone: this.numberValidateForm.number })
        }
    }
}
</script>