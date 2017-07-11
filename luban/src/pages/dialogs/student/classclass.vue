<template>
    <div>
        <div class="modal-body ng-scope">
            <div class="ng-scope">
                <div class="ng-scope">
                    <div class="row no-gutter" :class="{step2:order,step1:!order}">
                        <div class="col-xs-6 bg-light lter  step1 .bg-success:after" :class="{'bg-success':!order}">
                            <h4 class="padder ">1.创建订单</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" :class="{'bg-success':order}">
                            <h4 class="padder ">2.缴费</h4>
                        </div>
                    </div>
                    <form name="form1" class="form-horizontal ng-pristine ng-invalid ng-invalid-required" v-if="!order">
                        <div class="form-group m-t">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">报名课程:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group">
                                    <input type="text" :placeholder="lesson_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" ng-readonly="true" required readonly="readonly" v-model="lesson_name">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectlessontpl')">
                                            <i class="fa fa-book"></i>选择
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">报名班级:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline">
                                    <div class="input-group">
                                        <input type="text" :placeholder="getSelectClassName" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required readonly="readonly" v-model="class_name">
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-default" @click="lbShowdialog($event,'lb-selectclasstpl')">
                                                <i class="fa fa-flag"></i>选择
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                                <span class="ng-scope">报名</span>课次:
                            </label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" v-model="localdata.form.origin_times" @change="cacu_order_amount()">
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">课次单价:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" @change="cacu_order_amount()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" v-model="localdata.form.unit_price">
                                    <span class="input-group-addon">元/次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid" readonly v-model="localdata.form.origin_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <!--
                                <div class="form-group">
                                    <label class="col-xs-12 col-sm-3 col-md-2 control-label">时间限制:</label>
                                    <div class="col-xs-12 col-sm-9 col-md-10">
                                        <label class="i-switch m-t-xs m-r">
                                            <input type="checkbox" ng-true-value="1" ng-disabled="order.ol_id == 0" class="ng-pristine ng-untouched ng-valid" disabled="disabled" v-model="localdata.form.order_has_time_limited">
                                            <i></i>
                                        </label>
                                    </div>
                                </div>-->
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">折扣金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" @change="cacu_order_amount()" class="ng-pristine ng-untouched ng-valid i-switch m-t-xs m-r" v-model="localdata.form.has_discount">
                                    <i></i>
                                </label>
                                <a class="btn btn-default btn-xs pull-right ng-scope" @click="discount_caculator = !discount_caculator" v-if="localdata.form.has_discount">
                                    <span v-if="discount_caculator" class="ng-scope">关闭</span> 折扣计算器
                                </a>
                                <div v-if="discount_caculator" class="ng-scope">
                                    <div class="input-group">
                                        <input type="number" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.discount" placeholder="输入折扣,打几折输入几，比如打8.5折，请输入8.5">
                                        <span class="input-group-btn">
                                            <a class="btn btn-info" @click="cacu_discount_amount()">
                                                <i class="icon-calculator"></i> 计算</a>
                                        </span>
                                    </div>
                                </div>
                                <div class="input-group w m-t-xs ng-scope" v-if="localdata.form.has_discount">
                                    <span class="input-group-addon">
                                        <i class="fa fa-minus"></i>
                                    </span>
                                    <input type="number" @change="cacu_order_amount()" v-model="localdata.form.discount_amount" class="form-control ng-pristine ng-valid ng-touched">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">赠送课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" @change="cacu_order_amount()" class="ng-pristine ng-untouched ng-valid " v-model="localdata.form.has_present">
                                    <i></i>
                                </label>
                                <div class="input-group w m-t-xs ng-scope" v-if="localdata.form.has_present">
                                    <span class="input-group-addon">
                                        <i class="fa fa-plus"></i>
                                    </span>
                                    <input type="number" v-model="localdata.form.present_times" class="form-control ng-pristine ng-valid ng-touched">
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">课耗单价:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" v-model="localdata.form.c_unit_price">
                                    <span class="input-group-addon">元/次</span>
                                </div>
                                <p class="alert alert-info no-padder m-t-xs">用于计算课耗金额 = 应缴金额 ÷ 报名课次(不包括赠送课次) （保留2位小数点，4舍五入）</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="如有备注请输入" v-model="localdata.form.order_remark">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">应缴金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static">
                                    <span class="text-bold text-danger ng-binding">{{ this.localdata.form.order_amount }}</span>
                                    <small>元</small>
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">总课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static">
                                    <span class="text-bold text-danger ng-binding">{{ Number(this.localdata.form.origin_times) + Number(this.localdata.form.present_times)}}</span>
                                    <small>次</small>
                                </p>
                            </div>
                        </div>
                        <div class="row no-gutter b-t m-t">
                            <div class="col-xs-8">
                                <button type="button" class="btn btn-block btn-primary" @click="open()" :disabled="this.localdata.form.origin_amount - this.localdata.form.discount_amount==0">
                                    <i class="fa fa-save" ng-hide="saving"></i> 确定订单
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

</style>
<script>
import orderandpay from './orderandpay2.vue'
export default {
    name: 'classClass',
    props: [''],
    data() {
        let localdata = {
            'form': {
                'class_id': '',
                'course_id': '',
                'origin_times': 0,
                'refund_status': 0,
                'back_amount': 0,
                'unit_price': 0,
                'origin_amount': 0,
                'has_discount': '',
                'has_present': '',
                'c_unit_price': '',
                'order_remark': '',
                'present_times': 0,
                'discount': 0,
                'discount_amount': 0,
                'order_amount': 0,
                'unpay_amount': 0,
                'pay_status': 0,
                'student_id': '',
                'order_no': '',
                'order_type': 1,
                'body': ''
            }
        }
        return {
            localdata,
            order: false,
            class_name: '请选择班级',
            lesson_name: '请选择课程',
            model: 'order',
            discount_caculator: false,
            currorder: null
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.localdata.form.student_id = this.$store.state.dialogs.dailogdata._id
        }
    },
    components: {
        'lb-orderandpay': orderandpay,
    },
    computed: {
        getSelectClassName() {
            if (this.$store.state.envs.currDialog == 'lb-selectclasstpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.class_name = this.$store.state.envs.currDialogResult.class_name
                    this.localdata.form.class_id = this.$store.state.envs.currDialogResult._id
                    this.localdata.form.origin_times = this.$store.state.envs.currDialogResult.total_times
                } else {
                    this.localdata.form.class_id = ''
                    this.class_name = '请选择班级'
                    this.localdata.form.origin_times = ''
                }
            } else if (this.$store.state.envs.currDialog == 'lb-selectlessontpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.lesson_name = this.$store.state.envs.currDialogResult.lesson_name
                    this.localdata.form.course_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.lesson_name = '请选择老师'
                    this.localdata.form.course_id = ''
                }
            }
            return this.class_name
        },
    },
    watch: {},
    methods: {
        cacu_discount_amount() {
            this.localdata.form.discount_amount = this.localdata.form.origin_amount * this.localdata.form.discount * 10 / 100
            this.cacu_order_amount()
        },
        cacu_order_amount() {
            if (!this.has_discount) {
                this.localdata.form.discount_amount = 0
            }
            this.localdata.form.origin_amount = this.localdata.form.origin_times * this.localdata.form.unit_price
            let origin_times = Number(this.localdata.form.origin_times)
            if (origin_times != 0) {
                this.localdata.form.c_unit_price = (this.localdata.form.origin_amount - this.localdata.form.discount_amount) / origin_times
            }

            this.localdata.form.order_amount = this.localdata.form.origin_amount - this.localdata.form.discount_amount

            this.localdata.form.unpay_amount = this.localdata.form.order_amount
        },
        switchPage(page) {
            if (this.$parent && this.$parent.switchPage) {
                this.$parent.switchPage(page)
            }
        },
        open() {
            let count = Number(this.localdata.form.origin_times) + Number(this.localdata.form.present_times)
            this.localdata.form.order_no = 'LB' + this.moment().format('YYYYMMDDssSSSS')
            this.localdata.form.body = `班课[${this.class_name}]${count}次`
            this.handleSave().then((data) => {
                this.order = true
                this.currorder = data
            })
        }
    }
}
</script>
