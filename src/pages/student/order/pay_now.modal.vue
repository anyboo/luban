<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope"></div>
            <div class="modal-header ng-scope">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="icon-wallet"></i>为订单号
                    <span class="label bg-info ng-binding">{{order.order_no}}</span>缴费
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div class="wrapper bg-light b-a m-t-xs ng-scope" v-if="dopay">
                    <p class="m-t m-b text-success text-2x"><i class="fa fa-check-circle-o"></i> 订单缴费成功！</p>
                    <p>订单编号:<span class="text-info ng-binding">{{order.order_no}}</span>，应缴金额:<span class="text-success ng-binding">{{order.unpay_amount}}</span>元,本次缴费:<span class="text-success ng-binding">{{localdata.form.money_pay_amount}}</span>元,请选择接下来的操作.</p>
                    <div class="row no-gutter m-t">
                        <div class="col-xs-6"><a class="btn btn-primary btn-block" @click="print_bill()"><i class="icon-printer"></i> 打印收据</a></div>
                        <div class="col-xs-6"><a class="btn btn-warning btn-block" @click="lbClosedialog($event)"><i class="fa fa-sign-out"></i> 结束缴费</a></div>
                    </div>
                </div>
                <div v-if="!dopay" class="ng-scope">
                    <form name="form1" class="form-horizontal form-validation ng-pristine ng-valid ng-valid-b ng-valid-a" novalidate>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">学员:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">{{ currStudent.student_name}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单号:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">{{order.order_no}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单内容:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">{{order.body}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">{{order.order_amount}}元</p>
                            </div>
                        </div>
                        <div class="form-group text-muted">
                            <label class="control-label col-xs-12 col-md-2">已缴金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">{{order.order_amount-order.unpay_amount}}元</p>
                            </div>
                        </div>
                        <div class="form-group text-muted">
                            <label class="control-label col-xs-12 col-md-2">未缴金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">{{order.unpay_amount}}元</p>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="os_balance_amount > 0 &amp;&amp; order.order_type != '2'">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">余额付款:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" @change="cacu_money_amount" v-model="localdata.form.use_balance" class="ng-valid ng-dirty ng-valid-parse ng-touched"> <i></i></label>
                                <div class="input-group w m-t-xs ng-scope" v-if="localdata.form.use_balance">
                                    <input type="number"  @change="cacu_money_amount" v-model.lazy="localdata.form.balance_pay_amount" class="form-control ng-pristine ng-untouched ng-valid ng-valid-b ng-valid-a"> <span class="input-group-addon">元</span></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">现款缴费:</label>
                            <div class="col-xs-12 col-md-4">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-b ng-valid-a" v-model="localdata.form.money_pay_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ng-scope" v-if="localdata.form.pay_amount > 0">
                            <label class="control-label col-xs-12 col-md-2">缴费方式:</label>
                            <div class="col-xs-12 col-md-10">
                                <ul class="list-group ng-scope">
                                    <li class="list-group-item ng-scope" @click="select_pay()">
                                        <img alt="现金支付" src="/assets/images/logo_cash.png">
                                        <span class="text-success text-2x pull-right ng-scope"><i class="fa fa-check-circle"></i></span>
                                    </li>
                                </ul>
                                <!--
                                <p class="alert alert-danger ng-scope" ng-if="payment_rest.$list.length == 1">您还没有开通微信支付,可在【系统设置】》【支付设置】申请开通微信支付!</p>
                                -->
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2">
                                <button type="button" class="btn btn-primary" @click="do_pay()" :disabled="localdata.form.pay_amount==0">确认缴费</button>
                                <button type="button" class="btn btn-danger m-l" @click="lbClosedialog($event)">关闭</button>
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
    name: 'pay_now',
    data() {
        let localdata = {
            'form': {
                'order_id': '',
                'student_id': '',
                'class_id': '',
                'money_pay_amount': '',
                'pay_type': 0,
                'use_balance':false,
                'balance_pay_amount':0
            }
        }
        return {
            localdata,
            order: {},
            model: 'pay',
            dopay: false,
            currStudent: {}
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.order = this.$store.state.dialogs.dailogdata
            this.localdata.form.order_id = this.order._id
            this.localdata.form.student_id = this.order.student_id
            this.localdata.form.class_id = this.order.class_id
            this.localdata.form.money_pay_amount = this.order.unpay_amount
            this.handleGetTableID('student', this.order.student_id).then((obj) => {
                if (obj.data && obj.data.length > 0) {
                    this.currStudent = obj.data[0]
                }
            })
        }
    },
    computed: {},
    watch: {},
    methods: {
        cacu_money_amount(){
            this.localdata.form.money_pay_amount =  this.order.order_amount  - this.localdata.form.balance_pay_amount
        },
        select_pay() {

        },
        do_pay() {
            this.handleSave().then((data) => {
                console.log(data)
                this.dopay = true
            })
        },
        print_bill() {

        }
    }
}
</script>
