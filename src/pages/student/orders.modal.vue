<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="student_orders" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-money"></i>学员 <span class="label bg-info ng-binding">威锋</span> 订单缴费</h3></div>
                <div class="modal-body">
                    <!-- ngIf: order_rest.$loaded && order_rest.$list.length > 0 -->
                    <ul class="list-group ng-scope" ng-if="order_rest.$loaded &amp;&amp; order_rest.$list.length > 0">
                        <!-- ngRepeat: item in order_rest.$list -->
                        <li class="list-group-item ng-scope" ng-repeat="item in order_rest.$list"><span class="pull-right label bg-info ng-binding">￥2000.00</span>
                            <h4 class="list-group-item-heading ng-binding">1对1课[古典吉他初级]20次</h4>
                            <p class="list-group-item-text ng-binding">订单编号:OC1161217130540023908405,<span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                                <!-- ngIf: item.pay_status == '1' -->
                            </p>
                            <p class="m-t-xs"><a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a> <a class="btn btn-xs btn-default m-l-xs" ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></p>
                        </li>
                        <!-- end ngRepeat: item in order_rest.$list -->
                    </ul>
                    <!-- end ngIf: order_rest.$loaded && order_rest.$list.length > 0 -->
                </div>
                <!-- ngIf: order_rest.$loading -->
                <!-- ngIf: order_rest.$loaded && order_rest.$list.length == 0 -->
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
