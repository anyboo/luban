
<template>
    <div class="wrapper bg-light b-a m-t-xs">
        <p class="m-t m-b text-success text-2x">
            <i class="fa fa-check-circle-o"></i>订单创建成功！
        </p>
        <p>
            订单编号:
            <span class="text-info ng-binding">OB1161217130558042657424</span>，应缴金额:
            <span class="text-success ng-binding">3000</span>元,请选择接下来的操作.
        </p>
        <div class="row no-gutter m-t">
            <div class="col-xs-3">
                <button ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',order)" @click="lbShowdialog($event,'lb-paynowmodal')" class="btn btn-primary btn-block">
                    <i class="icon-wallet"></i>现场缴费
                </button>
            </div>
            <div class="col-xs-3 ng-scope" ng-if="order.order_amount > 0">
                <button ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',order)" @click="lbShowdialog($event,'lb-payregmodal')" class="btn btn-warning btn-block">
                    <i class="icon-note"></i>缴费登记
                </button>
            </div>
            <div class="col-xs-2 pull-right">
                <a class="btn btn-warning btn-block" ng-click="vm.dismiss()" @click="lbClosedialog($event)">
                    <i class="fa fa-sign-out"></i>关闭
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'orderandpay2',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>