<template>
    <div>
        <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl" v-if="body">
            <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
                <div ng-controller="OrderCreatePrechargeCtrl" class="ng-scope">
                    <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder heighs">1.创建订单</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder heighs">2.缴费</h4>
                        </div>
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
                                    <input type="number" name="origin_amount" ng-change="order.order_amount = order.origin_amount" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_order_origin_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid" name="order_remark" ng-disabled="order.oc_id == 0" placeholder="如有备注请输入" v-model="lb_localdata.form.lb_order_order_remark">
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
    name: 'storedValue',
    data() {
        let lb_localdata = {
            'form': {
                'lb_order_origin_amount': '',
                'lb_order_order_remark': ''
            }
        }
        return {
            lb_localdata,
            body: true,
            order: false
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