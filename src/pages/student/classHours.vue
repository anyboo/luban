<template>
    <div>
        <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl" v-if="body">
            <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
                <div ng-controller="OrderCreatePackageCtrl" class="ng-scope">
                    <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder heighs">1.创建订单</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder heighs">2.缴费</h4>
                        </div>
                    </div>
                    <form name="form1" class="form-horizontal ng-pristine ng-invalid ng-invalid-required">
                        <div class="form-group m-t">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">课时包:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group">
                                    <input type="text" placeholder="课时包" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" ng-readonly="true" required readonly="readonly" v-model="localdata.form.lb_selected_lesson_name">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" select-tpl="tpl/directive/selectLessonTpl.html" select-id-field="ol_id" max-num="1" on-selected="select_lesson" select-params="{lesson_type:10}" select-title="请选择课时包" @click="lbShowdialog($event,'lb-selectlessontpl')">
                                            <i class="fa fa-clock-o"></i>选择课时包
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">购买课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" name="origin_times" ng-readonly="order.ol_id==0" ng-change="cacu_order_amount()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" required readonly="readonly" v-model="localdata.form.lb_order_origin_times">
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">课次单价:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" name="unit_price" ng-readonly="order.ol_id==0" ng-change="cacu_order_amount()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" required readonly="readonly" v-model="localdata.form.lb_order_unit_price">
                                    <span class="input-group-addon">元/次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" name="origin_amount" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.lb_order_origin_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">时间限制:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" ng-true-value="1" ng-disabled="order.ol_id == 0" class="ng-pristine ng-untouched ng-valid" disabled="disabled" v-model="localdata.form.lb_order_has_time_limited">
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">折扣金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" ng-change="cacu_order_amount()" ng-true-value="1" ng-disabled="order.ol_id == 0" class="ng-pristine ng-untouched ng-valid" disabled="disabled" v-model="localdata.form.lb_order_has_discount">
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">赠送课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" ng-change="cacu_order_amount()" ng-true-value="1" ng-disabled="order.ol_id == 0" class="ng-pristine ng-untouched ng-valid" disabled="disabled" v-model="localdata.form.lb_order_has_present">
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">课耗单价:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" name="c_unit_price" ng-disabled="order.ol_id == 0" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required disabled="disabled" v-model="localdata.form.lb_order_c_unit_price">
                                    <span class="input-group-addon">元/次</span>
                                </div>
                                <p class="alert alert-info no-padder m-t-xs">用于计算课耗金额 = 应缴金额 ÷ 报名课次(不包括赠送课次) （保留2位小数点，4舍五入）</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid" name="order_remark" ng-disabled="order.ol_id == 0" placeholder="如有备注请输入" disabled="disabled" v-model="localdata.form.lb_order_order_remark">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">应缴金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static">
                                    <span class="text-bold text-danger ng-binding">0</span>
                                    <small>元</small>
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">总课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static">
                                    <span class="text-bold text-danger ng-binding">0</span>
                                    <small>次</small>
                                </p>
                            </div>
                        </div>
                    </form>
                    <div class="row no-gutter b-t m-t">
                        <div class="col-xs-8">
                            <button type="button" class="btn btn-block btn-primary" @click="open()">
                                <i class="fa fa-save" ng-hide="saving"></i>
                                <i class="fa fa-spin fa-spinner ng-hide" ng-show="saving"></i>确定订单
                            </button>
                        </div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-warning btn-block" ng-disabled="saving" ng-click="back_menu()" @click="switchPage('lb-ordermain')">
                                <i class="fa fa-reply"></i>返回
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <lb-orderandpay v-if="order"></lb-orderandpay>
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
    name: 'classHours',
    data() {
        let localdata = {
            'form': {
                'lb_selected_lesson_name': '',
                'lb_order_origin_times': '',
                'lb_order_unit_price': '',
                'lb_order_origin_amount': '',
                'lb_order_has_time_limited': '',
                'lb_order_has_discount': '',
                'lb_order_has_present': '',
                'lb_order_c_unit_price': '',
                'lb_order_order_remark': ''
            }
        }
        return {
            localdata,
            order: false,
            body: true
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
            this.body = false
            this.order = true
        }
    }
}
</script>