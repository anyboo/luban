<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/modules/order.js?v=3']" class="ng-scope"></div>
            <div ng-init="init_pays()" ng-controller="OrderRefundCtrl" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span @click="lbClosedialog($event)">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="icon-note"></i>为订单号 <span class="label bg-info ng-binding">OB1167817060605052907844</span> 办理退款</h3></div>
                <div class="modal-body">
                    <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder manages">1.选择缴费记录</h4></div>
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder  manages">2.确认退款</h4></div>
                    </div>
                    <div class="m-t ng-scope" ng-if="step==1">
                        <ul class="list-group ng-scope" ng-if="pays_rest.$loaded &amp;&amp; pays_rest.$list.length > 0">
                            <li class="list-group-item ng-scope ng-click-active" ng-click="select_oph(item)" ng-repeat="item in pays_rest.$list" ng-class="{'active':item.oph_id == refund.oph_id}">
                                <h4 class="list-group-item-heading ng-binding">缴费日期:2017-06-06 17:29</h4>
                                <p class="list-group-item-text ng-binding">缴费金额:<span class="text-danger ng-binding">10.00元</span>,缴费方式:现金
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button ng-show="step == 1" class="btn btn-primary" @click="handleShowDialog('lb-refundstwo')" >下一步</button>
                    <button class="btn btn-warning m-l" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'refunds',
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
