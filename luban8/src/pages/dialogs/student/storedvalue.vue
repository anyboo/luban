<template>
    <div>
        <div class="modal-body">
            <div >
                <div >
                    <div class="row no-gutter" :class="{step2:order,step1:!order}">
                        <div class="col-xs-6 bg-light lter  step1 .bg-success:after" :class="{'bg-success':!order}">
                            <h4 class="padder">1.创建订单</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" :class="{'bg-success':order}">
                            <h4 class="padder">2.缴费</h4>
                        </div>
                    </div>
                    <form name="form1" class="form-horizontal  " v-if="!order">
                        <div class="form-group m-t">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">当前余额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static">{{amount}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">充值金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <lb-numberinput type="number" class="form-control" v-model="localdata.form.origin_amount">
                                    </lb-numberinput>
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">返现金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <lb-numberinput type="number" class="form-control" v-model="localdata.form.back_amount">
                                    </lb-numberinput>
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" class="form-control" placeholder="如有备注请输入" v-model="localdata.form.order_remark">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">应缴金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static">
                                    <span class="text-bold text-danger">{{localdata.form.origin_amount }}</span>
                                    <small>元</small>
                                </p>
                            </div>
                        </div>
                        <div class="row no-gutter b-t m-t">
                            <div class="col-xs-8">
                                <button type="button" class="btn btn-block btn-primary" @click="open()" :disabled="localdata.form.origin_amount==0">
                                    <i class="fa fa-save"></i>确定订单
                                </button>
                            </div>
                            <div class="col-xs-4">
                                <button type="button" class="btn btn-warning btn-block" @click="switchPage('lb-ordermain')">
                                    <i class="fa fa-reply"></i>返回
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <lb-orderandpay v-if="order" :order="currorder"></lb-orderandpay>
    </div>
</template>
<style>
.heighs {
    height: 39px;
    font-size: 18px;
    line-height: 39px;
}
</style>
<script>
import orderandpay from './orderandpay2.vue'
export default {
    name: 'storedValue',
    data() {
        let localdata = {
            'form': {
                'class_id': '',
                'course_id': '',
                'origin_times': '',
                'unit_price': 0,
                'origin_amount': 0,
                'refund_status': 0,
                'back_amount': 0,
                'has_discount': '',
                'has_present': '',
                'c_unit_price': '',
                'order_remark': '',
                'present_times': '',
                'discount': 0,
                'discount_amount': 0,
                'order_amount': 0,
                'unpay_amount': 0,
                'pay_status': 0,
                'student_id': '',
                'order_no': '',
                'order_type': 2,
                'body': ''
            }
        }
        return {
            localdata,
            order: false,
            currorder: null,
            amount: 0,
            model: 'order',
            currStudent: null
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.localdata.form.student_id = this.$store.state.dialogs.dailogdata._id
            this.handleGetTableID('student', this.localdata.form.student_id).then((obj) => {
                if (obj.data && obj.data.length > 0) {
                    this.currStudent = obj.data[0]
                    this.amount = this.currStudent.amount
                }
            })
        }
    },
    components: {
        'lb-orderandpay': orderandpay,
    },
    computed: {},
    watch: {},
    methods: {
        switchPage(page) {
            if (this.$parent && this.$parent.switchPage) {
                this.$parent.switchPage(page)
            }
        },
        open() {
            this.localdata.form.order_amount = this.localdata.form.origin_amount
            this.localdata.form.unpay_amount = this.localdata.form.origin_amount
            this.localdata.form.order_no = 'LB' + this.moment().format('YYYYMMDDssSSSS')
            this.localdata.form.body = '预交费[' + this.localdata.form.order_amount + '元]'
            this.handleSave().then((data) => {
                this.order = true
                this.currorder = data
            })
        }
    }
}
</script>
