<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="student_orders" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-money"></i>学员
                        <span class="label bg-info ng-binding">威锋</span>订单缴费
                    </h3>
                </div>
                <div class="modal-body">
                    <ul class="list-group ng-scope" ng-if="order_rest.$loaded && order_rest.$list.length > 0">
                        <li class="list-group-item ng-scope" ng-repeat="item in order_rest.$list">
                            <span class="pull-right label bg-info ng-binding">￥2000.00</span>
                            <h4 class="list-group-item-heading ng-binding">1对1课[古典吉他初级]20次</h4>
                            <p class="list-group-item-text ng-binding">
                                订单编号:OC1161217130540023908405,
                                <span ng-bind-html="item.pay_status|pay_status" class="ng-binding">
                                    <span class="badge bg-danger">未付款</span>
                                </span>
                            </p>
                            <p class="m-t-xs">
                                <a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)" @click="lbShowDailog($event,'lb-paynowmodal')">
                                    <i class="icon-wallet"></i>现场缴费
                                </a>
                                <a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)" @click="lbShowDailog($event,'lb-payregmodal')">
                                    <i class="icon-note"></i>缴费登记
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'orders.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>