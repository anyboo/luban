<template>
    <div>
        <div class="modal-body ng-scope">
            <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
                <div ng-controller="OrderCreateOtherCtrl" class="ng-scope">
                    <div class="row no-gutter" :class="{step2:order,step1:!order}">
                        <div class="col-xs-6 bg-light lter  step1 .bg-success:after" :class="{'bg-success':!order}">
                            <h4 class="padder">1.创建订单</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" :class="{'bg-success':order}">
                            <h4 class="padder">2.缴费</h4>
                        </div>
                    </div>
                    <form name="form1" class="form-horizontal ng-pristine ng-valid ng-valid-required" v-if="!order">
                        <div class="form-group m-t">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">缴费项目:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="w-sm">
                                    <select class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" required v-model="order_link_name">
                                        <option value class>请选择</option>
                                        <option value="教材费">教材费</option>
                                        <option value="赛事报名费">赛事报名费</option>
                                        <option value="服装费">服装费</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" required v-model="localdata.form.origin_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid" name="order_remark" placeholder="如有备注请输入" v-model="localdata.form.order_remark">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">应缴金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static">
                                    <span class="text-bold text-danger ng-binding">{{localdata.form.origin_amount }}</span>
                                    <small>元</small>
                                </p>
                            </div>
                        </div>
                        <div class="row no-gutter b-t m-t">
                            <div class="col-xs-8">
                                <button type="button" class="btn btn-block btn-primary" @click="open()" :disabled="localdata.form.origin_amount==0">
                                    <i class="fa fa-save" ng-hide="saving"></i>确定订单
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
<script>
import orderandpay from './orderandpay2.vue'
export default {
    name: 'miscellaneousFees',
    data() {
        let localdata = {
            'form': {
                'class_id': '',
                'course_id': '',
                'origin_times': '',
                'unit_price': 0,
                'origin_amount': 0,
                'refund_status':0, 
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
                'order_type': 3,
                'body': ''
            }
        }
        return {
            localdata,
            order: false,
            currorder: null,
            model: 'order',
            order_link_name: ''
        }
    },
    components: {
        'lb-orderandpay': orderandpay,
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.localdata.form.student_id = this.$store.state.dialogs.dailogdata._id
        }
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
            if (this.order_link_name.length > 0) {
                this.localdata.form.body = '学杂费[' + this.order_link_name + ']'
            } else {
                this.localdata.form.body = '学杂费'
            }

            this.handleSave().then((data) => {
                this.order = true
                this.currorder = data
            })
        }
    }
}
</script>
