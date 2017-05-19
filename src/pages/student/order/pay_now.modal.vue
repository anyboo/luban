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
                    <i class="icon-wallet"></i>为订单号
                    <span class="label bg-info ng-binding">OC1161217130540023908405</span>缴费
                </h3>
            </div>
            <div class="modal-body ng-scope" ng-init="init_payment()" ng-controller="OrderPayNowCtrl">
                <div ng-if="step==1" class="ng-scope">
                    <form name="form1" class="form-horizontal form-validation ng-pristine ng-valid ng-valid-b ng-valid-a" novalidate>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">学员:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">威锋</p>
                            </div>
                        </div>
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
                        <div class="form-group text-muted">
                            <label class="control-label col-xs-12 col-md-2">已缴金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">0.00元</p>
                            </div>
                        </div>
                        <div class="form-group text-muted">
                            <label class="control-label col-xs-12 col-md-2">未缴金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">2000.00元</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">现款缴费:</label>
                            <div class="col-xs-12 col-md-4">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-b ng-valid-a" name="money_pay_amount" ui-validate="{ a:'$value >= 0', b:'$value <= order_unpay_amount' }" v-model="lb_localdata.form.lb_pay_money_pay_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="pay.money_pay_amount > 0">
                            <label class="control-label col-xs-12 col-md-2">缴费方式:</label>
                            <div class="col-xs-12 col-md-10">
                                <ul class="list-group ng-scope" ng-if="payment_rest.$loaded">
                                    <li class="list-group-item ng-scope" ng-click="select_pay(item)" ng-repeat="item in payment_rest.$list">
                                        <img ng-src="http://s1.xiao360.com/public/images/logo_cash.png" alt="现金支付" src="http://s1.xiao360.com/public/images/logo_cash.png">
                                    </li>
                                </ul>
                                <p class="alert alert-danger ng-scope" ng-if="payment_rest.$loaded && payment_rest.$list.length == 1">您还没有开通微信支付,可在【系统设置】》【支付设置】申请开通微信支付!</p>
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2">
                                <button class="btn btn-primary" ng-click="do_pay() || form1.$invalid" ng-disabled="is_pay_disable()" disabled="disabled">确认缴费</button>
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
    name: 'pay_now.modal',
    data() {
        let lb_localdata = {
            'form': {
                'lb_pay_money_pay_amount': ''
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