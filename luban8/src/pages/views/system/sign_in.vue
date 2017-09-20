<template>
    <div class="modal-over bg-black" style="z-index: 1000;    margin: -100px 0px 0px -100px;">
        <div class="modal-center text-center" style="width:200px;margin:-100px 0 0 -100px">
            <div class="userbg">
                <div class="fa fa-user-o usersize"></div>
            </div>
            <p class="h4 m-t m-b">
                <span style="color:white;" v-if="username.length>0">{{username}}</span>
            </p>
            <div class="input-group" v-if="username.length==0">
                <input type="text" v-model="localdata.form.user" class="form-control text-sm  no-border" placeholder="请输入账号" style="width:198px;    border-top-left-radius : 50px !important;border-top-right-radius: 50px !important;border-bottom-right-radius: 50px !important;border-bottom-left-radius: 50px !important;">
                <span class="input-group-btn"></span>
            </div>
            <br>
            <div class="input-group">
                <input type="password" v-on:keyup.enter="login" v-model="localdata.form.pwd" class="form-control text-sm btn-rounded no-border" placeholder="请输入密码" style="   border-top-left-radius : 50px !important;border-bottom-left-radius: 50px !important;">
                <span class="input-group-btn circles">
                    <a @click="login" class="btn btn-success btn-rounded no-border" style="height:34px ;  border-top-left-radius : 0px !important;border-top-right-radius: 50px !important;border-bottom-right-radius: 50px !important;border-bottom-left-radius: 0px !important;">
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>
<style >
.userbg {
    border-radius: 65px;
    width: 65px;
    height: 65px;
    background: rgba(255, 255, 255, 0.2);
    margin-left:60px;
}

.usersize {
    font-size: 58;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 3px;
}
</style>
<script>
import md5 from '~/api/md5.min.js'

export default {
    name: 'signIn',
    data() {
        let localdata = {
            form: {
                user: '',
                pwd: ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {
        username() {
            let name = ''
            if (this.$store.state.system.name) {
                name = this.$store.state.system.name
            }
            return name
        }
    },
    watch: {},
    methods: {
        login() {
            let vm = this
            if (this.$store.state.system.name && this.$store.state.system.name.length > 0) {
                this.localdata.form.user = this.$store.state.system.user
            }
            this.localdata.form.pwd = md5(this.localdata.form.pwd)
            let account = { user: this.localdata.form.user, pwd: this.localdata.form.pwd }
            vm.$store.dispatch(this.types.LOGIN_API, account).then((data) => {
                if (data.code == 0) {
                    let filterObj = []
                    filterObj.push({
                        'key': 'user_id',
                        'value': data.account._id,
                        'type': ''
                    })
                    filterObj.push({
                        'key': 'lock',
                        'value': false,
                        'type': ''
                    })
                    let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                    let db = data.account.db
                    this.handleGetFilterTableTable('employee', filterTxt, db).then((obj) => {
                        if (obj.data.count > 0) {
                            let account = obj.data.data[0]
                            account.db = db
                            account.user = data.account.user
                            account.login = data.account.login
                            account.admin = data.account.admin
                            
                            this.getroles()
                            this.$store.commit('user', account)
                            this.$store.commit('router', '/web')
                        } else {
                            this.$message({
                                message: '用户不存在或者已经被禁用！',
                                type: 'error'
                            })
                        }
                    })
                } else {
                    this.$store.commit('user', { login: false })
                    this.$message({
                        message: '用户或密码错误！',
                        type: 'error'
                    })
                }
            })
            this.localdata.form = {
                user: '',
                pwd: ''
            }
        }
    }
}
</script>
