<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div>
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>
                        <span class="badge bg-info">{{name}}</span>的账号设置
                    </h3>
                </div>
                <div class="modal-body ">
                    <el-form :model="localdata.form" :rules="rules" label-width="100px" ref="ruleForm">
                        <el-form-item label="登录账号" prop="username" :class="{'logininput':getuserid}">
                            <el-input :disabled="getuserid" v-model.trim="localdata.form.username"></el-input>
                            <el-button v-if="getuserid" @click="freeuser">解绑</el-button>
                        </el-form-item>
                        <el-form-item label="登录密码" prop="reset_password">
                            <el-input v-model.trim="localdata.form.reset_password"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="do_reset_account()" :disabled="localdata.form.reset_password<6">确定</button>
                    <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.logininput .el-input {
    width: 80%;
}
</style>
<script>
import md5 from '~/api/md5.min.js'
export default {
    name: 'reset_account',
    data() {
        let localdata = {
            'form': {
                'reset_password': '',
                'username': ''
            }
        }
        var checkphone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('注册账号不能为空'))
            } else {
                if (value.length < 2) {
                    callback(new Error('请输入2位以上账号'))
                } else {
                    Vue.http.get('http://app.bullstech.cn/luban8/count/user/phone/' + value).then(obj => {
                        if (obj.data > 0) {
                            callback(new Error('账号已经存在,请重新输入.'))
                        } else {
                            callback()
                        }
                    }).catch(() => {
                        callback(new Error('服务端校验失败'))
                    })
                }
            }
        }
        return {
            localdata,
            name: '',
            uid: '',
            user_id: '',
            rules: {
                username: [
                    { required: true, validator: checkphone, trigger: 'blur' },
                ],
                reset_password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'change' }
                ],
            }
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.uid = this.$store.state.dialogs.dailogdata._id
            this.handleGetTableID('employee', this.uid).then(obj => {
                if (obj.data.length > 0) {
                    this.name = obj.data[0].name
                    this.localdata.form.username = obj.data[0].phone
                    this.user_id = obj.data[0].user_id
                }
            })
        }
    },
    computed: {
        getuserid() {
            let bind = false
            if (this.user_id && this.user_id.length > 0) {
                bind = true
            }
            return bind
        }
    },
    methods: {
        freeuser() {
            this.updateTeble('employee', this.uid, {
                'user_id': ''
            }).then(() => {
                return this.updateTeble('user', this.user_id, {
                    'bind': false
                }, 'luban8')
            }).then(() => {
                this.user_id = ''
                this.$message({
                    message: '设置成功！',
                    type: 'success'
                })
            })
        },
        do_reset_account() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    if (this.user_id && this.user_id.length > 0) {
                        this.updateTeble('user', this.user_id, {
                            'pwd': md5(this.localdata.form.reset_password)
                        }, 'luban8').then(() => {
                            this.$message({
                                message: '设置成功！',
                                type: 'success'
                            })
                            this.lbClosedialog()
                        })
                    } else {
                        let createtime = (new Date()).getTime()
                        let user = {
                            lock: false,
                            bind: true,
                            admin: false,
                            phone: this.localdata.form.username,
                            db: this.$store.state.system.db,
                            createtime: createtime,
                            name: this.name,
                            pwd: md5(this.localdata.form.reset_password)
                        }
                        Vue.http.post('http://app.bullstech.cn/luban8/api/user', user).then(obj => {
                            return this.updateTeble('employee', this.uid, {
                                'user_id': obj.data._id
                            })
                        }).then(() => {
                            this.$message({
                                message: '设置成功！',
                                type: 'success'
                            })
                            this.lbClosedialog()
                        })
                    }
                }
            })
        }
    }
}
</script>