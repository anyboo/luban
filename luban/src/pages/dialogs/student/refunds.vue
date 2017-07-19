<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope"></div>
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)"><span>×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="icon-note"></i>为订单号 <span class="label bg-info ng-binding">{{order.order_no}}</span> 办理退款</h3></div>
                <div class="modal-body">
                    <div class="row no-gutter " :class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter" :class="{'bg-success':step==1}">
                            <h4 class="padder manages">1.选择缴费记录</h4></div>
                        <div class="col-xs-6 bg-light lter" :class="{'bg-success':step==2}">
                            <h4 class="padder  manages">2.确认退款</h4></div>
                    </div>
                    <div class="m-t ng-scope" v-if="step==1">
                        <ul class="list-group ng-scope">
                            <template v-for="item in getTablesData()">
                                <li class="list-group-item ng-scope ng-click-active" :class="getCheckRowClass(item._id)" @click="handleListChange(item)">
                                    <h4 class="list-group-item-heading ng-binding">缴费日期:{{getDatetimeFormat(item.creattime)}}</h4>
                                    <p class="list-group-item-text ng-binding">缴费金额:<span class="text-danger ng-binding">{{item.money_pay_amount}}元</span>,缴费方式:现金
                                    </p>
                                </li>
                            </template>
                            <div class="row ng-scope wrapper">
                                <el-pagination class="pull-right el-pagination  el-pages" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                                </el-pagination>
                            </div>
                        </ul>
                    </div>
                    <div class="m-t ng-scope" v-if="step==2">
                        <form name="form1" class="form-horizontal for-validation ng-valid ng-dirty ng-valid-parse" novalidate="">
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">学员:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">{{currStudent.student_name}}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">订单号:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">{{order.order_no}}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">订单内容:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">{{order.body}}
                                        <!--
                                        <span class="text-danger ng-binding ng-scope" ng-if="oph.remain_times > -1">剩余 5 次</span>
                                        -->
                                    </p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">订单金额:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">{{order.order_amount}}元</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">缴费金额:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">{{currentRow.money_pay_amount}}元</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">缴费方式:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">现金
                                    </p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">缴费日期:</label>
                                <div class="col-xs-12 col-md-5">
                                    <p class="form-control-static ng-binding">{{getDatetimeFormat(currentRow.creattime)}}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-xs-12 col-md-2">退款金额:</label>
                                <div class="col-xs-12 col-md-3">
                                    <div class="input-group">
                                        <input type="number" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.amount"> <span class="input-group-addon">元</span></div>
                                </div>
                            </div>
                            <div class="form-group ng-hide">
                                <label class="control-label col-xs-12 col-md-2">退款方式:</label>
                                <div class="col-xs-12 col-md-9">
                                    <div class="btn-group">
                                        <lb-buttongroup :group-data="localdata.refund_to" v-model="localdata.form.refund_to" @input="handleTimes_policy"></lb-buttongroup>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope">
                                <label class="control-label col-xs-12 col-md-2">现金退款:</label>
                                <div class="col-xs-12 col-md-9">
                                    <div class="btn-group">
                                        <lb-buttongroup :group-data="localdata.money_refund_to" v-model="localdata.form.money_refund_to" @input="handleTimes_policy"></lb-buttongroup>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope">
                                <label class="control-label col-xs-12 col-md-2">课时处理:</label>
                                <div class="col-xs-12 col-md-9">
                                    <div class="btn-group">
                                        <lb-buttongroup :group-data="localdata.times_policy" v-model="localdata.form.times_policy" @input="handleTimes_policy"></lb-buttongroup>
                                    </div>
                                    <div class="input-group w m-t-xs ng-scope" v-if="localdata.form.times_policy == 3"><span class="input-group-addon"><i class="fa fa-minus"></i></span>
                                        <input type="number" @model="localdata.form.times" class="form-control ng-pristine ng-untouched ng-valid"> <span class="input-group-addon">次</span></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">退款备注:</label>
                                <div class="col-xs-12 col-sm-9 col-md-6">
                                    <input type="text" @model="localdata.form.note" class="form-control ng-pristine ng-untouched ng-valid">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button v-if="step == 1" class="btn btn-primary" @click="step=2" :disabled="currentRow==null">下一步</button>
                    <button v-if="step == 2" class="btn btn-primary" @click="do_refund" :disabled="localdata.form.amount==0">
                        确定退款</button>
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
        let localdata = {
            form: {
                'order_id': '',
                'student_id': '',
                'pay_id': '',
                'class_id': '',
                'amount': 0,
                'refund_to': '1',
                'money_refund_to': '2',
                'times_policy': '1',
                'times': 0,
                'note': ''
            },
            'refund_to': [{
                'value': '1',
                'text': '现金'
            }, {
                'value': '2',
                'text': '原路返回'
            }],
            'money_refund_to': [{
                'value': '1',
                'text': '退现金'
            }, {
                'value': '2',
                'text': '退到钱包余额'
            }],
            'times_policy': [{
                'value': '1',
                'text': '不用处理'
            }, {
                'value': '2',
                'text': '直接结课'
            }, {
                'value': '3',
                'text': '扣减课次'
            }],
        }
        return {
            localdata,
            order: {},
            model: 'refund',
            tables: ['pay'],
            currentRow: null,
            step: 1,
            currStudent: {}
        }
    },
    mounted() {
        this.pagination.pagesize = 5
        let vm = this
        if (vm.$store.state.dialogs.dailogdata) {
            vm.order = vm.$store.state.dialogs.dailogdata
            vm.localdata.form.order_id = vm.order._id
            vm.localdata.form.student_id = vm.order.student_id
            vm.localdata.form.class_id = vm.order.class_id
            vm.handleGetTableID('student', vm.order.student_id).then((obj) => {
                if (obj.data && obj.data.length > 0) {
                    vm.currStudent = obj.data[0]
                }
            })
            this.handleSearch()
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleTimes_policy() {

        },
        handleListChange(row) {
            this.currentRow = row
        },
        getCheckRowClass(rowid) {
            let classStr = ''
            if (this.getCheckRow(rowid)) {
                classStr = 'active'
            }
            return classStr
        },
        getCheckRow(rowid) {
            let result = false
            if (this.currentRow && this.currentRow._id == rowid) {
                result = true
                this.localdata.form.pay_id = this.currentRow._id
            }
            return result
        },
        do_refund() {
               /*   let orders = parseInt(this.order.order_amount)
                let pays = parseInt(this.currentRow.money_pay_amount)
                let froms = parseInt(this.localdata.from.amount)
                if(orders<=0){
                    alert('订单金额错误，不可退款')
                }else if(pays<froms){
                    alert('缴费金额不足以退款')
                }else{  */
            this.handleSave().then((data) => {
                     this.$message({
                    message: '退款成功',
                    type: 'success'
                })
                this.lbClosedialog() 
            })
          /*   }  */
        },
        handleSearch() {
            if (this.order._id) {
                let filterObj = []
                let order_id = this.localdata.form.order_id.trim()
                if (order_id.length > 0) {
                    filterObj.push({
                        'key': 'order_id',
                        'value': order_id,
                        'type': ''
                    })
                }
                console.log(filterObj)
                let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                this.handleGetFilterTable(filterTxt)
            }
        },
    }
}
</script>
