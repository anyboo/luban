<template>
    <div ui-view class="ng-scope wrapper ">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="bills" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="bills">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                            <lb-buttongroup :group-data="localdata.check_status" v-model="localdata.form.check_status"></lb-buttongroup>
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" :placeholder="getSelectStudentName" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.param_student_name">
                                    <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                     <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                </button>
                            </span>
                                </div>
                            </div>
                            <div id="fct-bills" style="display:none;">
                                <form name="export_form_bills" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="3fcd68790fbf79751a57ca8fbda8b037">
                                    <input type="hidden" name="resource" value="bills">
                                    <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="date_start" value="2017-04-01" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="学员">
                                <template scope="scope">{{ getLookUp(scope.row.student,'student_name') }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="付款日期">
                                <template scope="scope">{{ getDateFormat(scope.row.create_time) }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="金额">
                                <template scope="scope">
                                    <span class="badge bg-success ng-binding">{{scope.row.amount}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="付款方式">
                                <template scope="scope">现金</template>
                            </el-table-column>
                            <el-table-column prop="data" label="备注">
                                <template scope="scope">{{scope.row.note}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="经办人">
                                <template scope="scope">陈佳木</template>
                            </el-table-column>
                            <el-table-column prop="data" label="对账状态">
                                <template scope="scope">
                                    <span v-if="scope.row.check_status == '0'" class="badge bg-warning ng-scope">未对账</span>
                                    <span v-if="scope.row.check_status == '0'" class="badge bg-success ng-scope">未对账</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="操作">
                                <template scope="scope">
                                    <a  v-if="scope.row.check_status == '0'" class="btn btn-xs btn-default"  @click="handleCommand">核对</a>
                                    <span v-if="scope.row.check_status == '1'" class="info bg-success ng-scope">已核对</span>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer ">
                        <div class="row ">
                            <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'income',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': '',
                'check_status': '',
                'param_student_name': '',
                'type': '',
                'student_id': ''
            },
            'duration': [{
                'value': 'day',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }],
            'check_status': [{
                'value': '0',
                'text': '未对账'
            }, {
                'value': '1',
                'text': '已对账'
            }, ],
            'lookup': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            }

        }
        return {
            localdata,
            tables: ['flow'],
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
        handleSearch() {
            let filterObj = []

            let student_id = this.localdata.form.student_id.trim()
            if (student_id.length > 0) {
                filterObj.push({
                    'key': 'student_id',
                    'value': student_id,
                    'type': ''
                })
            }
            if (this.localdata.form.daterange && this.localdata.form.daterange.length == 2) {
                let startTime = this.getDatetime(this.localdata.form.daterange[0])
                let endTime = this.getDatetime(this.localdata.form.daterange[1])
                if (startTime > 0) {
                    if (startTime == endTime) {
                        endTime = this.getDatetimeEndOf(this.localdata.form.daterange[1])
                    }

                    filterObj.push({
                        'key': 'creattime',
                        'value': startTime,
                        'type': 'gt'
                    })
                    filterObj.push({
                        'key': 'creattime',
                        'value': endTime,
                        'type': 'lt'
                    })
                }
            }
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            this.handleSearch()
        },
        handleCommand() {
            this.$confirm('是否要核对?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleDelete(data._id).then(() => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.handleGetTable()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已确定核对'
                })
            })

        }

    }
}
</script>
