<template>
    <div class="modal-over bg-black" style="z-index: 6000;margin: -100px 0px 0px -100px;">
        <el-dialog :visible.sync="dialogVisible" size="large">
            <span>
                <div class="modal-content">
                    <div class="regcontent">
                        <h1>鲁班云端校务管理平台</h1>
                        <p>服务协议</p>
                        <p>请您认真阅读并充分理解《鲁班云端校务管理平台服务协议》（下称“本协议”）。您注册、登录、使用“鲁班云端校务管理平台” （下称“鲁班”）等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。</p>
                        <p>本协议是您（下称“用户”）与福州布尔斯科技有限公司(下称“布尔斯科技”) 之间关于用户注册、登录、使用“鲁班”服务（下称“本服务”）所订立的协议。</p>
                        <p>
                            <strong>一、注册信息和隐私保护</strong>
                        </p>
                        <p>1.1 用户在使用本服务时，可能需要提供一些必要的能够对用户的客户进行个人辨识或涉及个人通信的信息，用户应按照要求提供及时、详尽及准确的个人资料，并不断更新个人资料。因个人信息不真实而引起的风险由用户自行承担。</p>
                        <p>1.2 鲁班帐号的所有权归布尔斯科技所有。用户不应将其帐号、密码转让、出售或出借予他人使用，若用户授权他人使用账户，应对被授权人在该账户下发生所有行为负全部责任。</p>
                        <p>1.3 保护用户个人隐私信息是布尔斯科技的一贯制度，布尔斯科技将会采取合理的措施保护用户的个人隐私信息。具体详见《隐私权保护声明》&nbsp;。</p>
                        <p>
                            <strong>二、提供服务</strong>
                        </p>
                        <p>2.1 用户使用本服务需要在鲁班进行注册。布尔斯科技发放给用户不可转让及非排他性的许可用于使用鲁班平台时享受的功能服务。用户仅可为访问或使用本服务的目的而使用这些软件及服务。</p>
                        <p>
                            <strong>三、使用规则</strong>
                        </p>
                        <p>3.1 用户在使用本服务时，必须遵守中华人民共和国相关法律法规的规定，不得利用本服务进行任何违法或不正当的活动，包括但不限于制作、上载、展示、张贴、传播或以其它方式传送如下内容： (1) 反对宪法所确定的基本原则的；
                            <br> (2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
                            <br> (3) 损害国家荣誉和利益的；
                            <br> (4) 煽动民族仇恨、民族歧视、破坏民族团结的；
                            <br> (5) 破坏国家宗教政策，宣扬邪教和封建迷信的；
                            <br> (6) 散布谣言，扰乱社会秩序，破坏社会稳定的；
                            <br> (7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
                            <br> (8) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；
                            <br> (9) 含有任何性或性暗示、骚扰、辱骂、恐吓、威胁、侵害他人隐私等恶意信息的；
                            <br> (10) 含有法律、行政法规禁止的其他内容的信息。
                        </p>
                        <p>3.2 用户充分了解并同意对自己账号下的一切行为负责，包括但不限于用户所传送的任何内容以及由此产生的任何结果。用户承担法律责任的形式包括但不限于：对遭受侵害者进行赔偿，以及在布尔斯科技首先承担了因用户行为导致的行政处罚或侵权损害赔偿责任后，用户给予布尔斯科技等额的赔偿。布尔斯科技有权视用户的行为性质，采取包括但不限于删除用户发布信息内容、暂停使用许可、终止服务、限制使用、回收鲁班帐号、追究法律责任等措施。对恶意注册鲁班帐号或利用鲁班帐号进行违法活动或其他违反本协议的行为，布尔斯科技有权回收其帐号。同时，布尔斯科技会视司法部门的要求，协助调查。
                        </p>
                        <p>3.3 用户不得对本服务任何部分或本服务之使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目的。</p>
                        <p>
                            <strong>四、免责及责任限制</strong>
                        </p>
                        <p>4.1 用户因互联网网络故障、计算机病毒、黑客攻击、系统不稳定、电信部门的通讯线路故障及其他各种不可抗力原因而遭受的一切损失，用户须自行承担，布尔斯科技不承担任何责任。</p>
                        <p>4.2 用户违反本协议或相关的服务条款的规定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户同意赔偿布尔斯科技，并使之免受损害。</p>
                        <p>4.3 用户须了解，在使用本服务过程中存在有来自他人的包括威胁性的、诽谤性的、令人反感的非法的内容或行为，或对他人权利的侵犯（包括知识产权）的匿名或冒名的信息的风险，用户须承担以上风险，布尔斯科技对本服务不作任何类型的担保。</p>
                        <p>4.4 维护软件安全与正常使用是布尔斯科技和用户的共同责任，布尔斯科技将按照行业标准合理审慎地采取必要技术措施保护用户的终端设备信息和数据安全，但是用户承认和同意布尔斯科技并不能就此提供完全保证。布尔斯科技不对用户在本服务中相关数据的删除或存储失败负责。</p>
                        <p>4.5在任何情况下，布尔斯科技均不对间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害承担责任，布尔斯科技对用户承担的全部责任，无论因何原因或何种行为方式，始终不超过用户因使用本服务而支付给布尔斯科技的费用。</p>
                        <p>
                            <strong>五、权利声明</strong>
                        </p>
                        <p>本服务涉及的一切知识产权，以及与本服务相关的所有信息内容，包括但不限于：文字表述及其组合、图标、图饰、图表、色彩、界面设计、版面框架、有关数据、印刷材料、电子文档等均为布尔斯科技所有（涉及第三方授权的除外），受中华人民共和国著作权法、商标法、专利法、反不正当竞争法和相应的国际条约以及知识产权法律法规的保护。</p>
                        <p>
                            <strong>六、其他</strong>
                        </p>
                        <p>6.1 布尔斯科技郑重提醒用户注意本协议中免除布尔斯科技责任的条款，请用户仔细阅读，自主考虑风险。布尔斯科技有权根据互联网的发展、中华人民共和国有关法律法规的变化以及公司经营状况和经营策略的调整，不断地完善本服务质量并依此修改本协议条款。更新后的协议条款一旦公布即代替原来的协议条款，用户可通过网页查阅最新版协议条款。如果用户不接受修改后的条款，请立即停止使用本服务，用户继续使用本服务将被视为接受修改后的协议。</p>
                        <p>6.2 本协议的效力、解释及纠纷的解决，适用于中华人民共和国法律。若用户和布尔斯科技之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交布尔斯科技所在地有管辖权的人民法院管辖。</p>
                        <p>6.3 以上各项条款内容的最终解释权及修改权归布尔斯科技所有。</p>
                    </div>
                </div>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <div class="data">
            <el-card class="box-card" style="background:rgba(255,255,255,0.9)">
                <el-row :gutte="50">
                    <el-col :span="5" style="padding:2rem">
                        <el-steps :active="active" :space="165" direction="vertical" finish-status="success">
                            <el-step title="申请注册"></el-step>
                            <el-step title="填写信息"></el-step>
                            <el-step title="确认资料"></el-step>
                        </el-steps>
                    </el-col>
                    <el-col :span="19" v-if="active==0">
                        <el-card class="box-card" style="padding:2.5rem">
                            <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-registerForm">
                                <el-form-item label="注册手机" prop="phone" style="margin:1.5rem;width:90%">
                                    <el-input v-model="registerForm.phone" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item label="设置密码" prop="pass" style="margin:1.5rem;width:90%">
                                    <el-input type="password" v-model="registerForm.pass" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="checkpass" style="margin:1.5rem;width:90%">
                                    <el-input type="password" v-model="registerForm.checkpass" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item label="图形验证码" prop="shape" style="margin:1.5rem;width:90%;padding:3px">
                                    <el-input v-model="registerForm.shape" style="width:35%" :disabled="shapeDisabled"></el-input>
                                    <span @click="imagedata=makeregImage()" style="cursor:pointer">
                                        <img :src="imagedata" style=";vertical-align:middle;">
                                        <span @click="imagedata=makeregImage()" style="color:#00CACA">看不清?点击换一个</span>
                                    </span>
                                </el-form-item>
                                <el-form-item label="短信验证码" prop="phonemsg" style="margin:1.5rem;width:90%" v-if="isMsg">
                                    <el-input v-model="registerForm.phonemsg" style="width:35%"></el-input>
                                    <el-button @click="getMsg()" :disabled="msgDisabled">{{msgText}}</el-button>
                                </el-form-item>
                                <el-form-item prop="ischecked" style="margin-left:1.5rem">
                                    <el-checkbox v-model="registerForm.ischecked" @change="submitServer()">同意 </el-checkbox>
                                    <el-button type="text" @click="dialogVisible = true">注册条款</el-button>
                                </el-form-item>
                                <el-form-item style="margin:1.5rem;width:90%">
                                    <el-button type="primary" @click="submitForm('registerForm')">下一步</el-button>
                                    <el-button @click="resetForm('registerForm')">重置</el-button>
                                    <el-button @click="login()">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-col>
                    <el-col :span="19" v-if="active==1">
                        <el-card class="box-card" style="padding:2.5rem">
                            <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="100px" class="demo-infoForm">
                                <el-form-item label="您的姓名" prop="uname" style="margin:2rem;width:90%">
                                    <el-input v-model="infoForm.uname" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item label="机构名称" prop="name" style="margin:2rem;width:90%">
                                    <el-input v-model="infoForm.name" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item label="机构简称" prop="short_name" style="margin:2rem;width:90%">
                                    <el-input v-model="infoForm.short_name" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话" prop="tel" style="margin:2rem;width:90%">
                                    <el-input v-model="infoForm.tel" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item label="机构地址" prop="address" style="margin:2rem;width:90%">
                                    <el-input v-model="infoForm.address" style="width:90%"></el-input>
                                </el-form-item>
                                <el-form-item style="margin:2rem;width:90%">
                                    <el-button type="primary" @click="submitForm('infoForm')">下一步</el-button>
                                    <el-button @click="resetForm('infoForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-col>
                    <el-col :span="19" v-if="active==2">
                        <el-card class="box-card" style="padding:2.5rem">
                            <el-form :model="infoForm" label-width="100px" class="demo-infoForm">
                                <h3 style="margin-left:30%">确认以下资料，点击确定完成注册!</h3>
                                <el-form-item label="您的姓名：" style="margin:1.5rem;width:90%">
                                    {{infoForm.uname}}
                                </el-form-item>
                                <el-form-item label="您的电话：" style="margin:1.5rem;width:90%">
                                    {{registerForm.phone}}
                                </el-form-item>
                                <el-form-item label="机构名称：" prop="name" style="margin:1.5rem;width:90%">
                                    {{infoForm.name}}
                                </el-form-item>
                                <el-form-item label="机构简称：" prop="short_name" style="margin:1.5rem;width:90%">
                                    {{infoForm.short_name}}
                                </el-form-item>
                                <el-form-item label="机构电话：" prop="tel" style="margin:1.5rem;width:90%">
                                    {{infoForm.tel}}
                                </el-form-item>
                                <el-form-item label="机构地址：" prop="address" style="margin:1.5rem;width:90%">
                                    {{infoForm.name}}
                                </el-form-item>
                                <el-form-item style="margin:1.5rem;width:90%">
                                    <el-button type="primary" @click="handleclick">确定</el-button>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-col>
                </el-row>
            </el-card>
        </div>
    </div>
</template>
<style>
.data {
    padding: 10em 10em;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
}

.regcontent {
    padding: 2em 1em;
}
</style>
<script>
import md5 from '~/api/md5.min.js'

export default {
    data() {
        var checkphone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('注册手机号不能为空'))
            } else {
                let Regphone = /(^(\+86|0086)?\s*1[34578]\d{9}$)/
                if (!Regphone.test(value)) {
                    callback(new Error('请输入11位手机号码'))
                } else {
                    Vue.http.get('http://app.bullstech.cn/luban8/count/phone' + value).then(obj => {
                        if (obj.data.count > 0) {
                            callback(new Error('用户已经存在,请直接登录.'))
                        } else {
                            callback()
                        }
                    }).catch(() => {
                        callback(new Error('服务端校验失败'))
                    })
                }
            }
        }
        var checkPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('密码不能为空'));
            } else {
                let RegPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
                if (!RegPass.test(value)) {
                    callback(new Error('请输入6-21位字母和数字组合的密码!'))
                } else {
                    callback()
                }
            }
        }
        var checkshape = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('图形验证码不能为空'))
            } else {
                if (value.toLowerCase() != this.validdata.toLowerCase()) {
                    callback(new Error('请输入右边验证码'))
                } else {
                    this.isMsg = true
                    this.shapeDisabled = true
                    callback()
                }
            }
        }
        var checkserver = (rule, value, callback) => {
            if (value == false) {
                callback(new Error('请先阅读并同意注册条款后再进行注册'))
            } else {
                callback()
            }
        }
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.registerForm.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        var checktel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入机构对外电话'))
            } else {
                let Regtel = /^((\d{3,4}\-)|)\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$/
                if (!Regtel.test(value)) {
                    callback(new Error('请输入区号-电话号码!'))
                } else {
                    callback()
                }
            }
        }
        return {
            active: 0,
            imagedata: '',
            validdata: '',
            isMsg: false,
            msgDisabled: false,
            shapeDisabled: false,
            dialogVisible: false,
            msgText: '获取验证码',
            registerForm: {
                phone: '',
                pass: '',
                checkpass: '',
                shape: '',
                phonemsg: '',
                ischecked: false,
            },
            infoForm: {
                uname: '',
                name: '',
                short_name: '',
                tel: '',
                address: ''
            },
            rules: {
                phone: [
                    { required: true, validator: checkphone, trigger: 'change' },
                ],
                pass: [
                    //{ required: true, validator: checkPass, trigger: 'change' },
                    { required: true, message: '请输入密码', trigger: 'change' },
                    { min: 6, max: 50, message: '请输入6位以上密码', trigger: 'change' }
                ],
                checkpass: [
                    { required: true, validator: validatePass, trigger: 'change' }
                ],
                shape: [
                    { required: true, validator: checkshape, trigger: 'change' }
                ],
                phonemsg: [
                    { required: true, message: '请输入正确的短信验证码', trigger: 'change' }
                ],
                uname: [
                    { required: true, message: '请输入您的名字', trigger: 'change' },
                    { min: 2, max: 50, message: '请输入您的名字', trigger: 'change' }
                ],
                name: [
                    { required: true, message: '请输入您的机构名称', trigger: 'change' },
                    { min: 2, max: 100, message: '请输入您的机构名称', trigger: 'change' }
                ],
                short_name: [
                    { required: true, message: '请输入您的机构简称', trigger: 'change' },
                    { min: 2, max: 8, message: '请输入您的机构名称,2-8个字符', trigger: 'change' }
                ],
                tel: [
                    { validator: checktel, trigger: 'change' }
                ],
                address: [
                    { required: true, message: '请输入您的机构的详细地址', trigger: 'change' },
                    { min: 5, max: 250, message: '请输入您的机构的详细地址', trigger: 'change' }
                ],
                ischecked: [
                    { validator: checkserver, trigger: 'change' }
                ]
            }
        }
    },
    mounted() {
        this.imagedata = this.makeregImage()
    },
    methods: {
        makeregImage() {
            let codes = [];
            for (let i = 48; i < 57; codes.push(i), i++) {
            }
            for (let i = 60; i < 90; codes.push(i), i++) {
            }
            for (let i = 97; i < 122; codes.push(i), i++) {
            }
            let arr = []
            for (let i = 0; i < 4; i++) {
                let index = Math.floor(Math.random() * (61 - 0 + 1) + 0)
                let char = String.fromCharCode(codes[index])
                arr.push(char)
            }
            this.validdata = arr.join("")
            let code = arr.join(" ")
            var canvas = document.createElement('canvas')
            canvas.style.marginTop = '5px'
            canvas.width = 70
            canvas.height = 25
            var ctx = canvas.getContext('2d')
            ctx.fillStyle = '#5bc0de'
            ctx.fillRect(10, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'white'
            ctx.font = '14px arial'
            ctx.textAlign = 'center'
            ctx.fillText(code, 40, 20)
            var dataurl = canvas.toDataURL('image/png')
            return dataurl
        },
        submitServer() {
            this.$refs.registerForm.validateField('ischecked')
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (formName == 'registerForm') {
                        this.active = 1
                    } else if (formName == 'infoForm') {
                        this.active = 2
                    } else {
                        this.active = 3
                    }
                } else {
                    return false;
                }
            });
        },
        login() {
            this.$store.state.models.login = false
            this.$store.commit('user', { login: false })
            this.$store.state.system.router = 'lb-systemsign_in'
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        handleclick() {
            let createtime = new Date()
            let db = 'luban_' + createtime.getTime()
            let user = {
                lock: false,
                admin: true,
                phone: this.registerForm.phone,
                createtime: createtime.getTime(),
                name: this.infoForm.uname,
                pwd: md5(this.registerForm.pass)
            }
            Vue.http.post('http://app.bullstech.cn/luban8/api/user', user).then(obj => {
                this.infoForm.user_id = obj.data._id
                this.$store.state.system.name = obj.data.name
                this.$store.state.system.phone = obj.data.phone
                this.$store.state.system.pwd = obj.data.pwd
                this.infoForm.createtime = obj.data.createtime
                let createtime = (new Date()).getTime()
                let db = 'luban_' + createtime
                this.infoForm.db = db
                return Vue.http.post('http://app.bullstech.cn/luban8/api/org', this.infoForm)
            }).then(obj => {
                this.initdbdata(obj.data).then(obj => {
                    this.login()
                })
            }).catch(() => {
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
        },
        getMsg() {
            this.msgDisabled = true
            let count = 60
            let msg = setInterval(() => {
                count--
                this.msgText = count + 's后重新获取'
                //console.log(this.msgText)
                if (count <= 0) {
                    clearInterval(msg)
                    this.msgDisabled = false
                    this.msgText = '获取验证码'
                }
            }, 1000)
        }
    }

}
</script>