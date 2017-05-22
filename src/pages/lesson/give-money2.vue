<template>
    <div tabindex="-1" role="dialog" class="modal fade ng-isolate-scope in" ng-class="{in: animate}" ng-style="{'z-index': 1050 + index*10, display: 'block'}" ng-click="close($event)" modal-window size="md" index="0" animate="animate" style="z-index: 1050; display: block;">
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude>
                <div oc-lazy-load="['js/modules/order.js?v=3']" class="ng-scope"></div>
                <div ng-init="init_pays()" ng-controller="OrderRefundCtrl" class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">关闭</span>
                        </button>
                        <h3 class="modal-title">
                            <i class="icon-note"></i>为订单号
                            <span class="label bg-info ng-binding">OC1167917120512043566309</span>办理退款
                        </h3>
                    </div>
                    <div class="modal-body">
                        <div class="row no-gutter step2" ng-class="{'step1':step==1,'step2':step==2}">
                            <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==1}">
                                <h4 class="padder">1.选择缴费记录</h4>
                            </div>
                            <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==2}">
                                <h4 class="padder">2.确认退款</h4>
                            </div>
                        </div>
                        <div class="m-t ng-scope" ng-if="step==2">
                            <form name="form1" class="form-horizontal for-validation ng-pristine ng-valid" novalidate>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">学员:</label>
                                    <div class="col-xs-12 col-md-5">
                                        <p class="form-control-static ng-binding">小林</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">订单号:</label>
                                    <div class="col-xs-12 col-md-5">
                                        <p class="form-control-static ng-binding">OC1167917120512043566309</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">订单内容:</label>
                                    <div class="col-xs-12 col-md-5">
                                        <p class="form-control-static ng-binding">
                                            1对1课[舞蹈]10次
                                            <span class="text-danger ng-binding ng-scope" ng-if="oph.remain_times > -1">剩余 10 次</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">订单金额:</label>
                                    <div class="col-xs-12 col-md-5">
                                        <p class="form-control-static ng-binding">1000.00元</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">缴费金额:</label>
                                    <div class="col-xs-12 col-md-5">
                                        <p class="form-control-static ng-binding">1000.00元</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">缴费方式:</label>
                                    <div class="col-xs-12 col-md-5">
                                        <p class="form-control-static ng-binding">现金</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">缴费日期:</label>
                                    <div class="col-xs-12 col-md-5">
                                        <p class="form-control-static ng-binding">2017-05-12 16:35</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-xs-12 col-md-2">退款金额:</label>
                                    <div class="col-xs-12 col-md-3">
                                        <div class="input-group">
                                            <input type="number" class="form-control ng-pristine ng-untouched ng-valid" name="pay_amount" ng-change="set_refund_policy()" v-model="lb_localdata.form.lb_refund_amount">
                                            <span class="input-group-addon">元</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-hide" ng-hide="oph.create_type == '0' || oph.pay_type == '1'">
                                    <label class="control-label col-xs-12 col-md-2">退款方式:</label>
                                    <div class="col-xs-12 col-md-9">
                                        <lb-buttongroup :group-data="lb_localdata.lb_refund_refund_to" v-model="lb_localdata.form.lb_refund_refund_to"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="oph.money_pay_amount > 0 && vm.input.order_type != '2'">
                                    <label class="control-label col-xs-12 col-md-2">现金退款:</label>
                                    <div class="col-xs-12 col-md-9">
                                        <lb-buttongroup :group-data="lb_localdata.lb_refund_money_refund_to" v-model="lb_localdata.form.lb_refund_money_refund_to"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="order.order_type == '0' || order.order_type == '1' || order.order_type == '10'">
                                    <label class="control-label col-xs-12 col-md-2">课时处理:</label>
                                    <div class="col-xs-12 col-md-9">
                                        <lb-buttongroup :group-data="lb_localdata.lb_refund_refund_times_policy" v-model="lb_localdata.form.lb_refund_refund_times_policy"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-xs-12 col-sm-3 col-md-2 control-label">退款备注:</label>
                                    <div class="col-xs-12 col-sm-9 col-md-6">
                                        <input type="text" name="refund_note" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_refund_refund_note">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button ng-show="step == 1" class="btn btn-primary ng-hide" ng-disabled="refund.oph_id == 0" ng-click="go_step(2)" style>下一步</button>
                        <button ng-show="step == 2" class="btn btn-default" ng-click="go_step(1)" style>上一步</button>
                        <button ng-show="step == 2" class="btn btn-primary" ng-disabled="saving" ng-click="do_refund()" style>确定退款</button>
                        <button class="btn btn-warning m-l" ng-click="vm.dismiss()" @click="lbClosedialog($event)">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'give-money2',
    data() {
        let lb_localdata = {
            'form': {
                'lb_refund_amount': '',
                'lb_refund_refund_to': '',
                'lb_refund_money_refund_to': '',
                'lb_refund_refund_times_policy': '',
                'lb_refund_refund_note': ''
            },
            'lb_refund_refund_to': [{
                'value': '0',
                'text': '现金'
            }, {
                'value': '1',
                'text': '原路返回'
            }],
            'lb_refund_money_refund_to': [{
                'value': '0',
                'text': '退现金'
            }, {
                'value': '1',
                'text': '退到钱包余额'
            }],
            'lb_refund_refund_times_policy': [{
                'value': '0',
                'text': '不用处理'
            }, {
                'value': '2',
                'text': '直接结课'
            }, {
                'value': '1',
                'text': '扣减课次'
            }]
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>