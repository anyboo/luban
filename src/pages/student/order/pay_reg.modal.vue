<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div oc-lazy-load="['js/modules/order.js?v=2','lodop.print']" class="ng-scope"></div>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="icon-note"></i>为订单号
                    <span class="label bg-info ng-binding">OC1161217130540023908405</span>登记缴费记录
                </h3>
            </div>
            <div class="modal-body ng-scope" ng-init="init_payment()" ng-controller="OrderPayRegCtrl">
                <div ng-if="step==1" class="ng-scope">
                    <form name="form1" class="form-horizontal for-validation ng-pristine ng-valid" novalidate>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单号:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">OC1161217130540023908405</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单内容:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">1对1课[古典吉他初级]20次</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">2000.00元</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">缴费金额:</label>
                            <div class="col-xs-12 col-md-3">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid" name="pay_amount" v-model="lb_localdata.form.lb_pay_pay_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">付款方式:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <select class="form-control w-xs ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="pay_type" ng-options="item.odi_id as item.text for item in $gv.dicts[2]" style="display: none;" v-model="lb_localdata.form.lb_pay_pay_type">
                                    <option value class>请选择</option>
                                    <option value="0" selected="selected">现金</option>
                                    <option value="1">刷卡</option>
                                    <option value="2">微信支付</option>
                                    <option value="3">支付宝</option>
                                    <option value="4">银行转账</option>
                                    <option value="5">其他</option>
                                </select>
                                <div class="chosen-container chosen-container-single" style="width: 90px;" title>
                                    <a class="chosen-single" tabindex="-1">
                                        <span>现金</span>
                                        <div>
                                            <b></b>
                                        </div>
                                    </a>
                                    <div class="chosen-drop">
                                        <div class="chosen-search">
                                            <input type="text" autocomplete="off">
                                        </div>
                                        <ul class="chosen-results"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">缴费日期:</label>
                            <div class="col-xs-12 col-md-4">
                                <lb-date-picker type="datetime" name="pay_time" v-model="lb_localdata.form.lb_pay_pay_time"></lb-date-picker>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">缴费备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-6">
                                <input type="text" name="pay_note" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_pay_pay_note">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-md-2 control-label">经办人:</label>
                            <div class="col-xs-12 col-md-3">
                                <div class="input-group ng-valid" ng-model="pay.op_name" select-title="请选择经办人" select-params="{ob_id:user.gv.ob_id}">
                                    <input type="text" name="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="valueField != 'name'" v-model="lb_localdata.form.lb_name">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default " select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" select-title="请选择经办人" on-selected="set_user" select-params="selectParams" @click="lbShowdialog($event,'lb-selectteachertpl')">
                                            <i class="fa fa-user"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2">
                                <button class="btn btn-primary" ng-click="do_reg()" ng-disabled="saving">确认登记</button>
                                <button class="btn btn-danger m-l" ng-disabled="saving" ng-click="vm.dismiss()" @click="lbClosedialog($event)">关闭</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pay_reg.modal',
    data() {
        let lb_localdata = {
            'form': {
                'lb_pay_pay_amount': '',
                'lb_pay_pay_type': '',
                'lb_pay_pay_time': '',
                'lb_pay_pay_note': '',
                'lb_name': ''
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