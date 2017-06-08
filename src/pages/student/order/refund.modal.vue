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
                        <i class="fa fa-calendar"></i>学员{{student.student_name}}
                        <span class="label bg-info ng-binding"></span>订单退费  
                    </h3>
                </div>
                <div class="modal-content">
                    <ul class="list-group ng-scope" v-if="getTablesData().length>0">
                        <template v-for="item in getTablesData()">
                            <li class="list-group-item ng-scope">
                                <span class="pull-right label bg-info ng-binding">￥270.00</span>
                                <h4 class="list-group-item-heading ng-binding">班课[1班]{{item.origin_times}}次</h4>
                                <p class="list-group-item-text ng-binding">
                                    订单编号:{{item.order_no}}}
                                    <span ng-bind-html="item.pay_status|pay_status" class="ng-binding">
                                    <span class="badge bg-warning">部分付款</span>
                                    </span>
                                    <span ng-if="item.pay_status == '1'" class="ng-binding ng-scope">已付款:{{item.unpay_amount}}元</span>
                                    <span class="label bg-danger ng-binding ng-scope" ng-if="item.refund_status > 0">退款:30.00元</span>
                                </p>
                                <p class="m-t-xs">
                                    <a @click="handleShowDialog('lb-refunds')"class="btn btn-xs btn-default ng-click-active">
                                        <i ></i>办理退款
                                    </a>
                                    <a @click="lbShowdialog($event,'lb-paynowmodal')" class="btn btn-xs btn-default ng-click-active">
                                        <i ></i>现场缴费
                                    </a>
                                </p>
                            </li>
                        </template>
                          <div class="row ng-scope wrapper">
                        <lb-pagination class="pull-right el-pagination  el-pages" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </lb-pagination>
                    </div>
                    </ul>
                    <div class="wrapper ng-scope" ng-if="order_rest.$loaded &amp;&amp; order_rest.$list.length == 0" v-else>
                        <p class="text-center text-2x"><i class="fa fa-frown-o"></i> 没有未付款订单!</p>
                    </div>
                  
                    <div class="modal-footer text-center ng-scope ">
                        <button class="btn btn-primary ng-click-active" @click="lbClosedialog($event)">确定</button>
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
            student: {},

        }
    },
    mounted: function() {
        this.pagination.pagesize = 5
        this.student = this.$store.state.dialogs.dailogdata
        this.handleSearch()
    },
    computed: {},
    watch: {},
    methods: {
        handleSearch() {
            let filterObj = []
            if (this.student._id) {
                let student_id = this.student._id.trim()
                if (student_id.length > 0) {
                    filterObj.push({
                        'key': 'student_id',
                        'value': student_id,
                        'type': ''
                    })
                }
                let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                this.handleGetFilterTable(filterTxt)
            }
        },
    }
}
</script>
