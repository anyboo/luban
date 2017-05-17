<template>
    <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl">
        <!-- ngInclude: 'tpl/app/student/order/'+$action+'.html' -->
        <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
            <div ng-controller="OrderCreatePrechargeCtrl" class="ng-scope">
                <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                    <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                        <h4 class="padder">1.创建订单</h4></div>
                    <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                        <h4 class="padder">2.缴费</h4></div>
                </div>
                <form name="form1" class="form-horizontal ng-pristine ng-valid">
                    <div class="form-group m-t">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">当前余额:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <p class="form-control-static ng-binding">0.00</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-12 col-sm-3 col-md-2 control-label">充值金额:</label>
                        <div class="col-xs-12 col-sm-9 col-md-5">
                            <div class="input-group">
                                <input type="number" name="origin_amount" ng-model="order.origin_amount" ng-change="order.order_amount = order.origin_amount" class="form-control ng-pristine ng-untouched ng-valid"> <span class="input-group-addon">元</span></div>
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
                            <p class="form-control-static"><span class="text-bold text-danger ng-binding">0</span> <small>元</small></p>
                        </div>
                    </div>
                </form>
                <div class="row no-gutter b-t m-t">
                    <div class="col-xs-8">
                        <button type="button" ng-click="save_order()" ng-disabled="form1.$invalid || saving" class="btn btn-block btn-primary"><i class="fa fa-save" ng-hide="saving"></i><i class="fa fa-spin fa-spinner ng-hide" ng-show="saving"></i> 确定订单</button>
                    </div>
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-warning btn-block" ng-disabled="saving" ng-click="back_menu()" @click="handleOpens($event)"><i class="fa fa-reply"></i> 返回</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'storedValue',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
        handleOpens(event) {
            event.preventDefault()
            if (this.$parent && this.$parent.handleOpens) {
                clearTimeout(this.timeCloseId)
                this.$parent.handleOpens()
            }

        },
    }
}
</script>
