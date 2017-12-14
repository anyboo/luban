<template>
    <div class="wrapper bg-light b-a m-t-xs">
        <p class="m-t m-b text-success text-2x">
            <i class="fa fa-check-circle-o"></i>订单创建成功！
        </p>
        <ul class="ulURL">
            <li>
                <span class="text-info">订单编号:{{stepsdata.order_no}}</span>
            </li>
            <li>
                <span class="text-info">应缴金额:{{stepsdata.order_amount}}元</span>
            </li>
            <li>
                <span class="text-info">订单名:{{stepsdata.body}}</span>
            </li>
            <li>
                <span class="text-info">订单备注:{{stepsdata.order_remark}}</span>
            </li>
        </ul>
        <p>请选择接下来的操作.</p>
        <div class="row no-gutter m-t">
            <div class="col-xs-3">
                <button type="button" @click="switchPage" class="btn btn-primary btn-block">
                    <i class="icon-wallet"></i>支付宝缴费
                </button>

            </div>
        </div>
    </div>
</template>
<style>
.ulURL {
    margin-bottom: 15px;
    margin-left: 9rem;
}

.ulURL>li>span.text-info {
    display: inline-block;
    padding: 10px 0;
    font-size: 16px !important;
}
</style>
<script>
export default {
    name: 'orderandpay',
    props: ['stepsdata'],
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {
        switchPage() {
            let urls = window.open()
            Vue.http.post('http://api.luban8.cn:8888/alipay', { "order": this.stepsdata.order_no, "amount": this.stepsdata.order_amount, "name": this.stepsdata.body, "body": this.stepsdata.order_remark }).then(data => {
                console.log(data)
                urls.location = data.data
            })

        }
    }
}
</script>
