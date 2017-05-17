<template>
    <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl" v-if="ok">
        <!-- ngInclude: 'tpl/app/student/order/'+$action+'.html' -->
        <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
            <div ng-controller="OrderCreateClassCtrl" ng-init="init_os_class()" class="ng-scope">
                <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                    <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                        <h4 class="padder">1.创建订单</h4></div>
                    <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                        <h4 class="padder">2.缴费</h4></div>
                </div>
                <form name="form1" class="form-horizontal ng-pristine ng-invalid ng-invalid-required">
                    <div class="form-group m-t">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">报名班级:</label>
                        <div class="col-xs-12 col-sm-9 col-md-10">
                            <div class="inline">
                                <div class="input-group">
                                    <input type="text" placeholder="班级" ng-model="selected_class_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" ng-readonly="true" required="" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default" select-tpl="tpl/directive/selectClassTpl.html" select-id-field="oc_id" max-num="1" on-selected="select_class" select-params="{ob_id:user.gv.ob_id,t:'order'}" select-title="请选择班级"><i class="fa fa-flag"></i>选择班级</button></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                            <!-- ngIf: !in_this_class --><span ng-if="!in_this_class" class="ng-scope">报名</span>
                            <!-- end ngIf: !in_this_class -->
                            <!-- ngIf: in_this_class -->课次:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <div class="input-group">
                                <input type="number" name="origin_times" ng-readonly="order.oc_id==0" ng-model="order.origin_times" ng-change="cacu_order_amount()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" required="" readonly="readonly"> <span class="input-group-addon">次</span></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">课次单价:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <div class="input-group">
                                <input type="number" name="unit_price" ng-readonly="order.oc_id==0" ng-model="order.unit_price" ng-change="cacu_order_amount()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" required="" readonly="readonly"> <span class="input-group-addon">元/次</span></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单金额:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <div class="input-group">
                                <input type="number" name="origin_amount" ng-model="order.origin_amount" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-addon">元</span></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">折扣金额:</label>
                        <div class="col-xs-12 col-sm-9 col-md-10">
                            <label class="i-switch m-t-xs m-r">
                                <input type="checkbox" ng-change="cacu_order_amount()" ng-true-value="1" ng-disabled="order.oc_id == 0" ng-model="order.has_discount" class="ng-pristine ng-untouched ng-valid" disabled="disabled"> <i></i></label>
                            <!-- ngIf: order.has_discount -->
                            <!-- ngIf: order.has_discount && order.$$discount_caculator -->
                            <!-- ngIf: order.has_discount -->
                        </div>
                    </div>
                    <!-- ngIf: os_info.balance_times > 0 -->
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">赠送课次:</label>
                        <div class="col-xs-12 col-sm-9 col-md-10">
                            <label class="i-switch m-t-xs m-r">
                                <input type="checkbox" ng-change="cacu_order_amount()" ng-true-value="1" ng-disabled="order.oc_id == 0" ng-model="order.has_present" class="ng-pristine ng-untouched ng-valid" disabled="disabled"> <i></i></label>
                            <!-- ngIf: order.has_present -->
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">课耗单价:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <div class="input-group">
                                <input type="number" name="c_unit_price" ng-disabled="order.oc_id == 0" ng-model="order.c_unit_price" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required="" disabled="disabled"> <span class="input-group-addon">元/次</span></div>
                            <p class="alert alert-info no-padder m-t-xs">用于计算课耗金额 = 应缴金额 ÷ 报名课次(不包括赠送课次) （保留2位小数点，4舍五入）</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                        <div class="col-xs-12 col-sm-9 col-md-10">
                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" name="order_remark" ng-disabled="order.oc_id == 0" ng-model="order.order_remark" placeholder="如有备注请输入" disabled="disabled">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">应缴金额:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <p class="form-control-static"><span class="text-bold text-danger ng-binding">0</span> <small>元</small></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">总课次:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <p class="form-control-static"><span class="text-bold text-danger ng-binding">0</span> <small>次</small></p>
                        </div>
                    </div>
                </form>
                <div class="row no-gutter b-t m-t">
                    <div class="col-xs-8">
                        <button type="button" ng-click="save_order()" ng-disabled="form1.$invalid || saving" class="btn btn-block btn-primary" disabled="disabled"><i class="fa fa-save" ng-hide="saving"></i><i class="fa fa-spin fa-spinner ng-hide" ng-show="saving"></i> 确定订单</button>
                    </div>
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-warning btn-block" ng-disabled="saving" ng-click="back_menu()" @click="handleOpen($event)"><i class="fa fa-reply"></i> 返回</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'classClass',
    props: [''],
    data() {
        return {
            ok: true

        }
    },
    computed: {},
    watch: {},
    methods: {
        handleOpen(event) {
            event.preventDefault()
            if (this.$parent && this.$parent.handleOpen) {
                clearTimeout(this.timeCloseId)
                this.$parent.handleOpen()
            }

        },
    }
}
</script>
