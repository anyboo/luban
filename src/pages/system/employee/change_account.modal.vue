<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="change_account" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user-md"></i>更换
                        <span class="badge bg-info ng-binding">陈佳木</span>的登录账号
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-valid">
                        <div class="form-group">
                            <label class="control-label col-md-3 col-xs-12">原来登录账号:</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="mobile" class="form-control" value="13609598376" readonly="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-3 col-xs-12">新的登录账号:</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="new_account" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_reset_account">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok()">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'change_account.modal',
    data() {
        let lb_localdata = {
            'form': {
                'lb_reset_account': ''
            }
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>