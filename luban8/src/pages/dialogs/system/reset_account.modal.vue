<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div >
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>重置
                        <span class="badge bg-info">{{name}}</span>的账号密码
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal  ng-invalid ng-invalid-required -minlength">
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">登录账号</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="mobile" class="form-control" :value="username" readonly="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">登录密码</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="password" class="form-control   ng-invalid ng-invalid-required -minlength" minlength="6" required v-model.trim="localdata.form.reset_password">
                            </div>
                            <div class="col-md-5 col-xs-12">
                                <a href="javascript:;" class="btn btn-default btn-xs m-l" @click="localdata.form.reset_password='123456'">123456</a>
                                <a href="javascript:;" class="btn btn-default btn-xs m-l" @click="localdata.form.reset_password='888888'">6个8</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="do_reset_account()" :disabled="localdata.form.reset_password<6">确定</button>
                    <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import md5 from '~/api/md5.min.js'
export default {
    name: 'reset_account',
    data() {
        let localdata = {
            'form': {
                'reset_password': ''
            }
        }
        return {
            localdata,
            name: '',
            username: '',
            uid: ''
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.name = this.$store.state.dialogs.dailogdata.name
            this.username = this.$store.state.dialogs.dailogdata.tel
            this.uid = this.$store.state.dialogs.dailogdata._id
        }
    },
    methods: {
        do_reset_account() {
            this.updateTeble('employee', this.uid, {
                'pwd': md5(this.localdata.form.reset_password)
            }).then(() => {
                this.$message({
                    message: '设置成功！',
                    type: 'success'
                })
                this.lbClosedialog()
            })
        }
    }
}
</script>