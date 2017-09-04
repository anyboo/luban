<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog()">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="icon-check"></i>{{order.order_no}}订单缴费
                </h3>
            </div>
            <div class="modal-body" style="padding-bottom: 0px;">
                <i class="fa fa-check-circle-o"></i> 订单缴费成功！</p>
                <p>订单编号:
                    <span class="text-info">{{order.order_no}}</span>，应缴金额:
                    <span class="text-success">{{order.unpay_amount}}</span>元,本次缴费:
                    <span class="text-success">{{order.money_pay_amount}}</span>元,请选择接下来的操作.
                </p>
            </div>
            <div class="modal-footer">
                <a @click="handleShowDialog('lb-printerreceipt',{order,pay})" class="btn btn-info">报打印收据</a>
                <a class="btn btn-success" @click="lbClosedialog($event)">结束缴费</a>
            </div>
        </div>
    </div>
</template>
<style>
.panel-footer .btn {
    margin-left: 0% !important;
    margin-top: 0px !important;
}
</style>
<script>
export default {
    name: 'finishorder',
    data() {
        let localdata = {}
        return {
            localdata,
            pay:{},
            order:{}
        }
    },
    created() {
        if (this.$store.state.dialogs.dailogdata) {
            console.log(this.$store.state.dialogs.dailogdata)
            this.pay = this.$store.state.dialogs.dailogdata.pay
            this.order = this.$store.state.dialogs.dailogdata.order
        }
    }
}
</script>