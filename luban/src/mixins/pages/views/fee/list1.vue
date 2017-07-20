<template>
    <div ui-view class="ng-scope wrapper ">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="pay_history" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id,is_pay:1}}" xo-rest-ctrl="pay_history">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
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
                        </div>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="日期">
                                <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="金额">
                                <template scope="scope">
                                    <span class="badge bg-success ng-binding">{{scope.row.money_pay_amount}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="学员">
                                <template scope="scope">{{ getLookUp(scope.row.student,'student_name') }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="付款方式">
                                <template scope="scope">现金</template>
                            </el-table-column>
                            <!--
                            <el-table-column prop="data" label="收据">
                                <template scope="scope">
                                    <div class="inline ng-scope" ng-if="item.orb_id == '0'">
                                        <span class="m-l-xs ng-scope" ng-if="item.bill_no == ''">收据未开</span>
                                    </div>
                                </template>
                            </el-table-column>
                            -->
                            <el-table-column prop="data" label="课程/班级">
                                <template scope="scope">
                                    <span class="ng-scope">
                                        <a class="link ng-binding">{{ getLookUp(scope.row.classes,'class_name') }}</a>
                                    </span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="备注">
                                <template scope="scope">{{scope.row.order_remark}}</template>
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
    name: 'list1',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
                'duration': '',
                'param_student_name': '',
                'student_id': '',
                'track_type': ''
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
            },],
            'lookup': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            },
            'classeslookup': {
                'localField': 'class_id',
                'from': 'classes',
                'foreignField': '_id',
                'as': 'classes'
            }
        }
        return {
            localdata,
            tables: ['pay'],
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
             filterObj.push({
                'key': 'lookup',
                'value': this.localdata.classeslookup,
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
        }
    }
}
</script>
