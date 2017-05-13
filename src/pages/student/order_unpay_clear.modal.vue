<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="student_unpay_orders" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-money"></i>学员 <span class="label bg-info ng-binding">李哥</span> 欠费订单</h3></div>
                <div class="modal-body">
                    <!-- ngIf: order_rest.$loaded && order_rest.$list.length > 0 -->
                    <ul class="list-group ng-scope" ng-if="order_rest.$loaded &amp;&amp; order_rest.$list.length > 0">
                        <!-- ngRepeat: item in order_rest.$list -->
                        <li class="list-group-item ng-scope" ng-repeat="item in order_rest.$list"><span class="pull-right label bg-info ng-binding">￥3000.00</span>
                            <h4 class="list-group-item-heading ng-binding">班课[3期班]62次</h4>
                            <p class="list-group-item-text ng-binding">订单编号:OB1161217050557024328509,<span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-warning">部分付款</span></span>
                                <!-- ngIf: item.pay_status == '1' --><span ng-if="item.pay_status == '1'" class="ng-binding ng-scope">已付款:2000.00元</span>
                                <!-- end ngIf: item.pay_status == '1' -->
                            </p>
                            <p class="m-t-xs"><a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/order/unpay_clear.modal.html','md',item)"><i class="icon-ban"></i> 欠费清除</a></p>
                        </li>
                        <!-- end ngRepeat: item in order_rest.$list -->
                        <li class="list-group-item ng-scope" ng-repeat="item in order_rest.$list"><span class="pull-right label bg-info ng-binding">￥270.00</span>
                            <h4 class="list-group-item-heading ng-binding">班课[1班]20次</h4>
                            <p class="list-group-item-text ng-binding">订单编号:OB1161217170444033750849,<span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-warning">部分付款</span></span>
                                <!-- ngIf: item.pay_status == '1' --><span ng-if="item.pay_status == '1'" class="ng-binding ng-scope">已付款:230.00元</span>
                                <!-- end ngIf: item.pay_status == '1' -->
                            </p>
                            <p class="m-t-xs"><a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/order/unpay_clear.modal.html','md',item)"><i class="icon-ban"></i> 欠费清除</a></p>
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
    name: 'order_unpay_clear.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
