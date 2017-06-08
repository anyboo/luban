<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/modules/order.js?v=3']" class="ng-scope"></div>
            <div ng-init="init_pays()" ng-controller="OrderRefundCtrl" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span @click="lbClosedialog($event)">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="icon-note"></i>为订单号 <span class="label bg-info ng-binding">OB1167817060605052907844</span> 办理退款</h3></div>
                <div class="modal-body">
                    <div class="row no-gutter step2" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==1}">
                            <h4 class="padder manages">1.选择缴费记录</h4></div>
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==2}">
                            <h4 class="padder manages">2.确认退款</h4></div>
                    </div>
                    <div class="m-t ng-scope" ng-if="step==2">
                        <form name="form1" class="form-horizontal for-validation ng-valid ng-dirty ng-valid-parse" novalidate="">
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">学员:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">qq1dd</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">订单号:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">OB1167817060605052907844</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">订单内容:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">班课[阿诗丹顿]5次
                                        <span class="text-danger ng-binding ng-scope" ng-if="oph.remain_times > -1">剩余 5 次</span>
                                    </p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">订单金额:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">20.00元</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">缴费金额:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">10.00元</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">缴费方式:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">现金
                                    </p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">缴费日期:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">2017-06-06 17:29</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">退款金额:</label>
                                <div class="col-xs-12 col-md-3">
                                    <div class="input-group">
                                        <input type="number" class="form-control ng-pristine ng-untouched ng-valid" name="pay_amount" ng-model="refund.amount" ng-change="set_refund_policy()"> <span class="input-group-addon">元</span></div>
                                </div>
                            </div>
                            <div class="form-group ng-hide" ng-hide="oph.create_type == '0' || oph.pay_type == '1'">
                                <label class="control-label col-xs-12 col-md-2">退款方式:</label>
                                <div class="col-xs-12 col-md-9">
                                    <div class="btn-group">
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid active" ng-model="refund.refund_to" btn-radio="0">现金</label>
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="refund.refund_to" btn-radio="1">原路返回</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope" ng-if="oph.money_pay_amount > 0 &amp;&amp; vm.input.order_type != '2'">
                                <label class="control-label col-xs-12 col-md-2">现金退款:</label>
                                <div class="col-xs-12 col-md-9">
                                    <div class="btn-group">
                                        <label class="btn btn-default ng-untouched ng-valid ng-dirty" ng-model="refund.money_refund_to" btn-radio="0">退现金</label>
                                        <label class="btn btn-default ng-untouched ng-valid ng-dirty active ng-valid-parse" ng-model="refund.money_refund_to" btn-radio="1">退到钱包余额</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope" ng-if="order.order_type == '0' || order.order_type == '1' || order.order_type == '10'">
                                <label class="control-label col-xs-12 col-md-2">课时处理:</label>
                                <div class="col-xs-12 col-md-9">
                                    <div class="btn-group">
                                        <label class="btn btn-default ng-untouched ng-valid ng-dirty" ng-model="refund.refund_times_policy" btn-radio="0">不用处理</label>
                                        <label class="btn btn-default ng-untouched ng-valid ng-dirty" ng-model="refund.refund_times_policy" btn-radio="2">直接结课</label>
                                        <label class="btn btn-default ng-untouched ng-valid ng-dirty active ng-valid-parse" ng-model="refund.refund_times_policy" btn-radio="1">扣减课次</label>
                                    </div>
                                    <div class="input-group w m-t-xs ng-scope" ng-if="refund.refund_times_policy == 1"><span class="input-group-addon"><i class="fa fa-minus"></i></span>
                                        <input type="number" name="refund_times" ng-model="refund.refund_times" class="form-control ng-pristine ng-untouched ng-valid"> <span class="input-group-addon">次</span></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">退款备注:</label>
                                <div class="col-xs-12 col-sm-9 col-md-6">
                                    <input type="text" name="refund_note" ng-model="refund.refund_note" class="form-control ng-pristine ng-untouched ng-valid">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button ng-show="step == 1" class="btn btn-primary ng-hide" @click="handleShowDialog('lb-refunds')">上一步</button>
                    <button ng-show="step == 2" class="btn btn-primary" ng-disabled="saving" ng-click="do_refund()">
                        确定退款</button>
                    <button class="btn btn-warning m-l" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'refunds_two',
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
