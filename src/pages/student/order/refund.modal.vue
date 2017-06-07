<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="student_order_refund" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>学员
                        <span class="label bg-info ng-binding">李哥d</span>订单退费 
                    </h3>
                </div>
                <div class="modal-body">
                    <ul class="list-group ng-scope" ng-if="order_rest.$loaded && order_rest.$list.length > 0">
                        <template v-for="item in getTablesData()">
                            <li class="list-group-item ng-scope" ng-repeat="item in order_rest.$list">
                                <span class="pull-right label bg-info ng-binding">￥270.00</span>
                                <h4 class="list-group-item-heading ng-binding">班课[1班]20次</h4>
                                <p class="list-group-item-text ng-binding">
                                    订单编号:OB1161217170444033750849,
                                    <span ng-bind-html="item.pay_status|pay_status" class="ng-binding">
                                    <span class="badge bg-warning">部分付款</span>
                                    </span>
                                    <span ng-if="item.pay_status == '1'" class="ng-binding ng-scope">已付款:230.00元</span>
                                    <span class="label bg-danger ng-binding ng-scope" ng-if="item.refund_status > 0">退款:30.00元</span>
                                </p>
                                <p class="m-t-xs">
                                    <a ng-click="$util.open('tpl/app/lesson/order/order_refund.modal.html','md',item)" @click="lbShowdialog($event,'lb-orderrefundmodal')">
                                        <i class="fa fa-reply"></i>办理退款
                                    </a>
                                </p>
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="panel-footer ">
                    <div class="row ">
                        <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </lb-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'refund',
    data() {
        let localdata = {}
        return {
            localdata,
            tables: ['order'],
        }
    },
    mounted: function() {
        this.pagination.pagesize = 5
    },
    computed: {},
    watch: {},
    methods: {
        handleSearch() {
            let filterObj = []
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
    }
}
</script>
