<template>
    <div tabindex="-1" role="dialog" class="modal fade ng-isolate-scope in" ng-class="{in: animate}" ng-style="{'z-index': 1050 + index*10, display: 'block'}" ng-click="close($event)" modal-window="" size="lg" index="0" animate="animate" style="z-index: 1050; display: block;">
        <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude="">
                <div oc-lazy-load="['js/modules/order.js?v=2']" class="ng-scope"></div>
                <div ng-init="init_pays()" ng-controller="OrderPrintBillCtrl" class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">关闭</span>
                        </button>
                        <h3 class="modal-title">
                            <i class="icon-printer"></i>打印订单号
                            <span class="label bg-info ng-binding">OP1167917120528043712540</span>的收据
                        </h3>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive ng-scope" ng-if="pays_rest.$loaded && pays_rest.$list.length > 0">
                            <table class="table table-striped b-t b-light">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>缴费日期</th>
                                        <th>缴费金额</th>
                                        <th>付款方式</th>
                                        <th>收据</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat="item in pays_rest.$list" class="ng-scope">
                                        <td>
                                            <i ng-if="item.bill_no=='' && item.org_bill_no == ''" ng-click="item.$$selected = !item.$$selected" class="fa cursor-default ng-scope fa-square-o" ng-class="{'fa-square-o':!item.$$selected,' fa-check-square-o':item.$$selected}"></i>
                                        </td>
                                        <td class="ng-binding">2017-05-12</td>
                                        <td>
                                            <label class="label ng-binding bg-success" ng-class="{'bg-success':item.is_pay=='1','bg-danger':item.is_pay == '0'}">3000.00</label>
                                        </td>
                                        <td class="ng-binding">现金</td>
                                        <td>
                                            <div class="inline ng-scope" ng-if="item.orb_id == '0'">
                                                <span class="m-l-xs ng-scope" ng-if="item.bill_no == ''">收据未开</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" ng-disabled="selected_count() < 1 || saving" ng-click="do_print()" disabled="disabled">
                            <i class="icon-printer" ng-hide="saving"></i>打印
                        </button>
                        <button class="btn btn-warning m-l" ng-click="vm.dismiss()" @click="lbClosedialog($event)">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'print-orders',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>