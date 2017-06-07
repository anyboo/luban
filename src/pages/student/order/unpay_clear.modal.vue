<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="OrderUnpayClear" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="icon-ban"></i>清除订单
                        <span class="label bg-info ng-binding">OB1161217050557024328509</span>未付款
                    </h3>
                </div>
                <div class="modal-body ng-scope" ng-if="order.order_type == '0' || order.order_type == '1' || order.order_type == '10'">
                    <form name="form1" class="form-horizontal form-validation ng-pristine ng-valid ng-valid-required ng-valid-number ng-valid-parse">
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单号:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">OB1161217050557024328509</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">订单内容:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">班课[3期班]62次</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">购买课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static ng-binding">60</p>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="order.present_times > 0">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">赠送课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <p class="form-control-static ng-binding">2 次</p>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="order.present_times > 0">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">总课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static ng-binding">62 次</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">课次单价:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <p class="form-control-static ng-binding">50</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">总金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">3000元</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">已付款:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">2000.00元</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">欠费金额:</label>
                            <div class="col-xs-12 col-md-5">
                                <p class="form-control-static ng-binding">1000元</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">订单备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <p class="form-control-static ng-binding"></p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">清除课次:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" name="times" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-number" required v-model="localdata.form.clear_data_times">
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">清除金额:</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="number" name="amount" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.clear_data_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">清除备注:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-parse" name="note" placeholder="请输入清除原因" required v-model="localdata.form.clear_data_note">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_save()">确定</button>
                    <button class="btn btn-warning m-l" ng-click="vm.dismiss()" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'unpay_clear',
    data() {
        let localdata = {
            'form': {
                'clear_data_times': '',
                'clear_data_amount': '',
                'clear_data_note': ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>