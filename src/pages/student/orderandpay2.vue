<template>
    <div class="wrapper bg-light b-a m-t-xs">
        <p class="m-t m-b text-success text-2x">
            <i class="fa fa-check-circle-o"></i>订单创建成功！
        </p>
        <p>
            订单编号:
            <span class="text-info ng-binding">{{order.order_no}}</span>，应缴金额:
            <span class="text-success ng-binding">{{order.order_amount}}</span>元,请选择接下来的操作.
        </p>
        <div class="row no-gutter m-t">
            <div class="col-xs-3">
                <button type="button" @click="handleShowDialog('lb-paynowmodal',order)" class="btn btn-primary btn-block">
                    <i class="icon-wallet"></i>缴费
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
    props: ['order'],
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
