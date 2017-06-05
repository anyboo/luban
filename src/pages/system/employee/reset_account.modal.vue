<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="rest_account" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>重置
                        <span class="badge bg-info ng-binding">陈佳木</span>的账号密码
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-invalid ng-invalid-required ng-valid-minlength">
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">登录账号</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="mobile" class="form-control" value="13609598376" readonly="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">登录密码</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="password" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" ng-minlength="6" required v-model="localdata.form.lb_reset_password">
                            </div>
                            <div class="col-md-5 col-xs-12">
                                <a href="javascript:;" class="btn btn-default btn-xs m-l" ng-click="reset.password=$util.random(6)">随机</a>
                                <a href="javascript:;" class="btn btn-default btn-xs m-l" ng-click="reset.password='123456'">123456</a>
                                <a href="javascript:;" class="btn btn-default btn-xs m-l" ng-click="reset.password='888888'">6个8</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_reset_account()" disabled="disabled">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reset_account.modal',
    data() {
        let localdata = {
            'form': {
                'lb_reset_password': ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>