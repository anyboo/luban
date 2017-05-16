<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/modules/order.js?v=2','xeditable']" class="ng-scope"></div>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-shopping-cart"></i>学员
                    <span class="label bg-info ng-binding">张磊</span>报名&缴费
                </h3>
            </div>
            <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl">
                <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
                    <div ng-controller="OrderCreateOtherCtrl" class="ng-scope">
                        <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                            <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                                <h4 class="padder">1.创建订单</h4>
                            </div>
                            <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                                <h4 class="padder">2.缴费</h4>
                            </div>
                        </div>
                        <form name="form1" class="form-horizontal ng-pristine ng-valid ng-valid-required">
                            <div class="form-group m-t">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">缴费项目:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <div class="w-sm">
                                        <select class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" ui-jq="chosen" ng-model="order.odi_id" ng-options="item.odi_id as item.text for item in $gv.dicts[5]" required="" style="display: none;">
                                            <option value="" class="">请选择</option>
                                            <option value="0">教材费</option>
                                            <option value="1">赛事报名费</option>
                                            <option value="2">服装费</option>
                                        </select>
                                        <div class="chosen-container chosen-container-single" style="width: 120px;" title="">
                                            <a class="chosen-single" tabindex="-1">
                                                <span>请选择</span>
                                                <div>
                                                    <b></b>
                                                </div>
                                            </a>
                                            <div class="chosen-drop">
                                                <div class="chosen-search">
                                                    <input type="text" autocomplete="off">
                                                </div>
                                                <ul class="chosen-results">
                                                    <li class="active-result result-selected" data-option-array-index="0">请选择</li>
                                                    <li class="active-result" data-option-array-index="1">教材费</li>
                                                    <li class="active-result" data-option-array-index="2">赛事报名费</li>
                                                    <li class="active-result" data-option-array-index="3">服装费</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单金额:</label>
                                <div class="col-xs-12 col-sm-9 col-md-5">
                                    <div class="input-group">
                                        <input type="number" name="origin_amount" ng-model="order.origin_amount" ng-change="order.order_amount = order.origin_amount" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" required="">
                                        <span class="input-group-addon">元</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid" name="order_remark" ng-disabled="order.oc_id == 0" ng-model="order.order_remark" placeholder="如有备注请输入">
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
                        </form>
                        <div class="row no-gutter b-t m-t">
                            <div class="col-xs-8">
                                <button type="button" ng-click="save_order()" ng-disabled="form1.$invalid || saving" class="btn btn-block btn-primary">
                                    <i class="fa fa-save" ng-hide="saving"></i>
                                    <i class="fa fa-spin fa-spinner ng-hide" ng-show="saving"></i>确定订单
                                </button>
                            </div>
                            <div class="col-xs-4">
                                <button type="button" class="btn btn-warning btn-block" ng-disabled="saving" ng-click="back_menu()">
                                    <i class="fa fa-reply"></i>返回
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sundryfees',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>