<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/modules/order.js?v=2','xeditable']" class="ng-scope"></div>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                <h3 class="modal-title"><i class="fa fa-shopping-cart"></i>学员 <span class="label bg-info ng-binding">威锋</span> 报名&amp;缴费</h3></div>
            <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl">
                <!-- ngInclude: 'tpl/app/student/order/'+$action+'.html' -->
                <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
                    <div class="ng-scope">
                        <div class="row no-gutter step2" ng-class="{'step1':step==1,'step2':step==2}">
                            <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==1}">
                                <h4 class="padder">1.创建订单</h4></div>
                            <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==2}">
                                <h4 class="padder">2.缴费</h4></div>
                        </div>
                        <div class="wrapper bg-light b-a m-t-xs">
                            <p class="m-t m-b text-success text-2x"><i class="fa fa-check-circle-o"></i> 订单创建成功！</p>
                            <p>订单编号:<span class="text-info ng-binding">OB1161217130558042657424</span>，应缴金额:<span class="text-success ng-binding">3000</span>元,请选择接下来的操作.</p>
                            <div class="row no-gutter m-t">
                                <div class="col-xs-5">
                                    <button class="btn btn-primary btn-block" ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',order)" ng-disabled="order.order_amount == 0"><i class="icon-wallet"></i> 现场缴费</button>
                                </div>
                                <!-- ngIf: order.order_amount > 0 -->
                                <div class="col-xs-4 ng-scope" ng-if="order.order_amount > 0">
                                    <button class="btn btn-info btn-block" ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',order)" ng-disabled="order.order_amount == 0"><i class="icon-note"></i> 缴费登记</button>
                                </div>
                                <!-- end ngIf: order.order_amount > 0 -->
                                <div class="col-xs-3"><a class="btn btn-warning btn-block" ng-click="vm.dismiss()"><i class="fa fa-sign-out"></i> 关闭</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'orderandpay2',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
