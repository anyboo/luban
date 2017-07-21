<template>
    <div class="wrapper ">
        <div class="butterbar hide">
            <span class="bar"></span>
        </div>
        <a href="" class="off-screen-toggle hide"></a>
        <div class="app-content-body fade-in-up ng-scope" ui-view="">
            <div class="bg-white ng-scope">
                <div class="wrapper-md m-t" ng-switch="$action" v-if="status==0">
                    <div ng-switch-when="profile" class="ng-scope">
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>登录账号</dt>
                            <dd class="ng-binding">{{$store.state.system.tel}}</dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>账号密码</dt>
                            <dd>*********
                                <template v-if="getActionOption('systempersonapassword')">
                                    <a class="link pull-right" @click="status=3" style="height:31px;">修改密码</a>
                                </template>
                                <p class="text-muted">修改密码请点击右边"修改密码"链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>真实姓名</dt>
                            <dd class="ng-binding" style="height:31px;">{{$store.state.system.name}}
                                <template v-if="getActionOption('systempersonaname')">
                                    <a class="link pull-right" @click="status=1">修改姓名</a>
                                </template>
                                <p class="text-muted">修改姓名请点击右边"修改姓名"" 链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>生日</dt>
                            <dd class="ng-binding" style="height:31px;">{{ getDateFormat($store.state.system.birth)}}
                                <template v-if="getActionOption( 'systempersonabirthd')">
                                    <a class="link pull-right" @click="status=2">设置生日</a>
                                </template>
                                <p class="text-muted">设置出生日期请点击右边"设置生日" 链接</p>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="wrapper-md m-t" v-if="status==3">
                    <form name="edit_pwd_form" class="form-horizontal form-validation ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-validator" ng-switch-when="edit_pwd" novalidate="">
                        <h4 class="b-b m-b padder-v" style="text-align:center">修改登录密码</h4>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">原密码:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="password" v-model="old_pwd" placeholder="输入原来密码" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">新密码:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="password" v-model.trim="new_pwd" placeholder="输入新密码" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">重复一遍:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="password" v-model.trim="new_pwd_repeat" placeholder="重复输入新密码" class="form-control ng-pristine ng-untouched ng-valid-validator ng-invalid ng-invalid-required" ui-validate=" '$value==edit.pwd.new_pwd' " ui-validate-watch=" 'edit.pwd.new_pwd' " required="">
                            </div>
                            <div class="col-xs-12 col-md-3 ng-hide" v-if="pwderror">两次输入密码不一致</div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2" style="text-align:center">
                                <button class="btn btn-primary" type="button" @click="handleChangePwd" :disabled="new_pwd.length==0">修改密码</button>
                                <a class="link m-l" @click="status=0">返回</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="wrapper-md m-t" v-if="status==1">
                    <form name="edit_name_form" class="form-horizontal form-validation ng-pristine ng-valid ng-scope ng-valid-required ng-valid-parse" ng-switch-when="edit_name" novalidate="">
                        <h4 class="b-b m-b padder-v" style="text-align:center">修改姓名</h4>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">姓名:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="text" v-model.trim="localdata.form.name" placeholder="输入真实姓名" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-parse" required="">
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2" style="text-align:center">
                                <button class="btn btn-primary" type="button" @click="handleChangeInfo" :disabled="localdata.form.name.length==0">确认修改</button>
                                <a class="link m-l" @click="status=0">返回</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="wrapper-md m-t" v-if="status==2">
                    <form name="edit_birth_form" class="form-horizontal form-validation ng-pristine ng-valid ng-scope">
                        <h4 class="b-b m-b padder-v" style="text-align:center">修改生日</h4>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">生日:</label>
                            <div class="col-xs-12 col-md-3">
                                <div class="w-sm">
                                    <el-date-picker type="date" name="birth" v-model="localdata.form.birth"></el-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2" style="text-align:center">
                                <button class="btn btn-primary" type="button" @click="handleChangeInfo">确认修改</button>
                                <a class="link m-l" @click="status=0">返回</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
a.link {
    color: #4d90fe;
    position: relative;
}
</style>
<script>
import md5 from '~/api/md5.min.js'
export default {
    name: 'personal_information',
    data() {
        let localdata = {
            form: {
                birth: '',
                name: '',
            }
        }
        return {
            localdata,
            status: 0,
            old_pwd: '',
            new_pwd: '',
            new_pwd_repeat: '',
            model: 'employee',
            pwderror: false
        }
    },
    mounted() {
        this.localdata.form.birth = this.$store.state.system.birth
        this.localdata.form.name = this.$store.state.system.name
        this.setEditModle(this.$store.state.system.id)
    },
    computed: {},
    watch: {},
    methods: {
        handleChangePwd() {
            if (this.new_pwd_repeat != this.new_pwd) {
                this.pwderror = true
            } else {
                this.pwderror = false
                let account = { user: this.$store.state.system.tel, pwd: md5(this.old_pwd) }
                this.$store.dispatch(this.types.LOGIN_API, account).then((data) => {
                    if (data.code == 0) {
                        this.updateTeble('employee', this.$store.state.system.id, {
                            'pwd': md5(this.new_pwd)
                        }).then(() => {
                            this.$message({
                                message: '设置成功！',
                                type: 'success'
                            })
                        })
                        this.new_pwd_repeat = ''
                        this.new_pwd = ''
                        this.old_pwd = ''
                    } else {
                        this.$message({
                            message: '旧密码错误！',
                            type: 'error'
                        })
                        this.old_pwd = ''
                    }
                })


            }
        },
        handleChangeInfo() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.$store.state.system.birth = this.localdata.form.birth
                this.$store.state.system.name = this.localdata.form.name
                window.localStorage.setItem('system', JSON.stringify(this.$store.state.system))
            }, () => {
            })
        }
    }
}
</script>
