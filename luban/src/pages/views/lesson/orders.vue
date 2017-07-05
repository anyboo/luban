<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="panel panel-default ng-scope" xo-rest="orders" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="orders" loading-text="正在加载订单..." empty-text="没有符合条件的订单!">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="padder">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <lb-dropdowns menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                {{localdata.search.search_value}}
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                <template v-for="item in localdata.search.fields">
                                                    <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                                </template>
                                            </lb-dropdown-menu>
                                        </lb-dropdowns>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                    <span class="input-group-btn">
                                <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <div class="inline w va-m">
                            <div class="input-group">
                                <input type="text" :placeholder="getSelectStudentName" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.student_name">
                                <span class="input-group-btn">
                            <button class="btn btn-default"  @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                <i class="icon-user"></i>
                            </button>
                        </span>
                            </div>
                        </div>
                        <lb-buttongroup :group-data="localdata.pay_status" v-model="localdata.form.pay_status" @input="handleSearch"></lb-buttongroup>
                    </div>
                </div>
                <div class="table-responsive">
                    <lb-table :data="getTablesData()" stripe>
                        <lb-table-column prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="学员">
                            <template scope="scope">{{ getLookUp(scope.row.student,'student_name') }}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="类型">
                            <template scope="scope">{{getButtongroupText(localdata.order_type,scope.row.order_type)}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="订单号">
                            <template scope="scope">{{scope.row.order_no}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="订单金额">
                            <template scope="scope">{{scope.row.origin_amount}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="订单内容">
                            <template scope="scope">{{scope.row.body}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="下单日期">
                            <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="付款情况">
                            <template scope="scope">{{ getButtongroupText(localdata.pay_status,scope.row.pay_status) }}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="备注">
                            <template scope="scope">{{scope.row.order_remark}}</template>
                        </lb-table-column>
                    </lb-table>
                    <div class="grid-data-result"></div>
                </div>
                <div class="panel-footer ">
                    <div class="row ">
                        <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </lb-pagination>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'orders',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'pay_status': -1,
                'student_id': ''
            },
            'lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '10',
                'text': '课时包'
            }],
            'dropDownMenu': [{
                'url': 'lb-editlessonmodal',
                'icon': 'icon-printer',
                'text': '打印收据'
            }, {
                'url': 'lb-editlessonmodal',
                'icon': 'fa fa-reply',
                'text': '办理退款'
            }, {
                'url': 'lb-editlessonmodal',
                'icon': 'icon-note',
                'text': '修改订单'
            }, {
                'url': 'lb-editlessonmodal',
                'icon': 'fa fa-times',
                'text': '删除订单'
            }], 
            'order_type': [{
                'value': 1,
                'text': '报名费'
            }, {
                'value': 2,
                'text': '预交费'
            }, {
                'value': 3,
                'text': '学杂费'
            }],
            'pay_status': [{
                'value': -1,
                'text': '所有'
            }, {
                'value': 0,
                'text': '未付款'
            }, {
                'value': 1,
                'text': '部分付款'
            }, {
                'value': 2,
                'text': '已付款'
            }],
            'search': {
                'fields': [{
                    'name': 'order_no',
                    'value': '订单号'
                }],
                'search_key': 'order_no',
                'search_value': '订单号'
            },
            'lookup': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            }
        }
        return {
            localdata,
            tables: ['order'],
            student_name: ''
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.student_name = this.$store.state.envs.currDialogResult.student_name
                    this.localdata.form.student_id = this.$store.state.envs.currDialogResult._id
                    this.handleSearch()
                } else {
                    this.localdata.form.student_id = ''
                    this.student_name = '学员'
                    this.handleSearch()
                }
            }
            return this.student_name
        },
    },
    watch: {},
    methods: {
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.localdata.form.search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let student_id = this.localdata.form.student_id.trim()
            if (student_id.length > 0) {
                filterObj.push({
                    'key': 'student_id',
                    'value': student_id,
                    'type': ''
                })
            }
            let status = this.localdata.form.pay_status
            if (status != -1) {
                filterObj.push({
                    'key': 'pay_status',
                    'value': status,
                    'type': ''
                })
            }

            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            console.log(filterObj)
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },

    }
}
</script>
