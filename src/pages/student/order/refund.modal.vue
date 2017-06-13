<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope" :class="{result:getPay}">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>学员{{student.student_name}}
                        <span class="label bg-info ng-binding"></span>订单缴/退费  
                    </h3>
                </div>
                <div class="modal-content">
                    <ul class="list-group ng-scope" v-if="getTablesData().length>0">
                        <template v-for="item in getTablesData()">
                            <li class="list-group-item ng-scope">
                                <span class="pull-right label bg-info ng-binding">￥{{item.order_amount}}</span>
                                <h4 class="list-group-item-heading ng-binding">{{item.body}}</h4>
                                <p class="list-group-item-text ng-binding">
                                    订单编号:{{item.order_no}}
                                    <span class="ng-binding">
                                    <span class="badge bg-danger" v-if="item.pay_status==0">未付款</span>
                                    <span class="badge bg-warning" v-if="item.pay_status==1">部分付款</span>
                                    <span class="badge bg-green" v-if="item.pay_status==2">支付完成</span>
                                    </span>
                                    <span v-if="item.pay_status == '1'" class="ng-binding ng-scope">已付款:{{item.order_amount-item.unpay_amount}}元</span>
                                    <span class="label bg-danger ng-binding ng-scope" v-if="item.refund_status > 0">退款:{{item.back_amount}}元</span>
                                </p>
                                <p class="m-t-xs">
                                    <a @click="handleShowDialog('lb-refunds',item)" class="btn btn-xs btn-default ng-click-active" v-if="item.refund_status != '2'">
                                        <i></i>办理退款
                                    </a>
                                    <a @click="handleShowDialog('lb-paynowmodal',item)" class="btn btn-xs btn-default ng-click-active" v-if="item.pay_status != '2'">
                                        <i></i>现场缴费
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
    computed: {
        getPay() {
            if (this.$store.state.envs.currDialog == 'lb-paynow') {
                this.handleSearch()
            }
            return true
        }
    },
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
