<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/modules/order.js?v=2','lodop.print']" class="ng-scope"></div>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                <h3 class="modal-title"><i class="icon-wallet"></i>为订单号 <span class="label bg-info ng-binding">OB1167817130555041543344</span> 缴费</h3></div>
            <div class="modal-body ng-scope" ng-init="init_payment()" ng-controller="OrderPayNowCtrl">
                <!-- ngIf: step==1 -->
                <div ng-if="step==1" class="ng-scope">
                    <form name="form1" class="form-horizontal form-validation ng-pristine ng-valid ng-valid-b ng-valid-a" novalidate="">
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">学员:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">zzzsz
                                    <!-- ngIf: os_balance_amount > 0 -->
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单号:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">OB1167817130555041543344</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单内容:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">班课[11]1次</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">22000.00元</p>
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
                                <p class="form-control-static ng-binding">22000.00元</p>
                            </div>
                        </div>
                        <!-- ngIf: os_balance_amount > 0 && order.order_type != '2' -->
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">现款缴费:</label>
                            <div class="col-xs-12 col-md-4">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-b ng-valid-a" name="money_pay_amount" ng-model="pay.money_pay_amount" ui-validate="{ a:'$value >= 0', b:'$value <= order_unpay_amount' }"> <span class="input-group-addon">元</span></div>
                            </div>
                        </div>
                        <!-- ngIf: pay.money_pay_amount > 0 -->
                        <div class="form-group ng-scope" ng-if="pay.money_pay_amount > 0">
                            <label class="control-label col-xs-12 col-md-2">缴费方式:</label>
                            <div class="col-xs-12 col-md-10">
                                <!-- ngIf: payment_rest.$loaded -->
                                <ul class="list-group ng-scope" ng-if="payment_rest.$loaded">
                                    <!-- ngRepeat: item in payment_rest.$list -->
                                    <li class="list-group-item ng-scope" ng-click="select_pay(item)" ng-repeat="item in payment_rest.$list"><img ng-src="http://s1.xiao360.com/public/images/logo_cash.png" alt="现金支付" src="http://s1.xiao360.com/public/images/logo_cash.png">
                                        <!-- ngIf: item.pay_name == pay.pay_name -->
                                    </li>
                                    <!-- end ngRepeat: item in payment_rest.$list -->
                                </ul>
                                <!-- end ngIf: payment_rest.$loaded -->
                                <!-- ngIf: payment_rest.$loaded && payment_rest.$list.length == 1 -->
                                <p class="alert alert-danger ng-scope" ng-if="payment_rest.$loaded &amp;&amp; payment_rest.$list.length == 1">您还没有开通微信支付,可在【系统设置】》【支付设置】申请开通微信支付!</p>
                                <!-- end ngIf: payment_rest.$loaded && payment_rest.$list.length == 1 -->
                            </div>
                        </div>
                        <!-- end ngIf: pay.money_pay_amount > 0 -->
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2">
                                <button class="btn btn-primary" ng-click="do_pay() || form1.$invalid" ng-disabled="is_pay_disable()" disabled="disabled">
                                    <!-- ngIf: saving -->确认缴费</button>
                                <button class="btn btn-danger m-l" ng-disabled="saving" ng-click="vm.dismiss()">关闭</button>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- end ngIf: step==1 -->
                <!--支付步骤-->
                <!-- ngIf: step == 2 -->
                <!--支付完成步骤-->
                <!-- ngIf: step == 3 -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pay_now.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
