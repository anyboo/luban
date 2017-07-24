<template>
    <div ui-view class="wrapper">
        <div class="wrapper-xs">
            <div ui-view >
                <div class="panel panel-default" xo-rest="arrearages" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="arrearages">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="   ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <input type="text" id="ctl_date_end" class="  " style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" :placeholder="getSelectStudentName" class="form-control" ng-readonly="true" readonly="readonly" v-model="localdata.form.student_name">
                                    <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                      <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                </button>
                            </span>
                                </div>
                            </div>
                            <div id="fct-arrearages" style="display:none;">
                                <form name="export_form_arrearages" action="/api/export" method="post" target="_blank" class="">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="cee96e8dd9bbce533937bb8352bc7dde">
                                    <input type="hidden" name="resource" value="arrearages">
                                    <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" >
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" >
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" >
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="操作">
                                <template scope="scope">
                                    <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="scope.row">
                                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                            操作
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                    </lb-dropdown>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="日期">
                                <template scope="scope">{{getDatetimeFormat(scope.row.creattime)}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="订单号">
                                <template scope="scope">{{ scope.row.order_no}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="订单内容">
                                <template scope="scope">{{ scope.row.body}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="欠费金额">
                                <template scope="scope">
                                    <span class="badge bg-danger">{{ getToFixed(scope.row.unpay_amount)}}  </span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="总金额">
                                <template scope="scope">
                                    <span class="badge bg-info">{{ getToFixed(scope.row.order_amount)}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="学员">
                                <template scope="scope">{{ getLookUp(scope.row.student,'student_name') }}</template>
                            </el-table-column>
                        </el-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
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
    name: 'list3',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'date_end': '',
                'duration': '',
                'student_name': '',
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
            'lookup': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            },        
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
                'key': 'unpay_amount',
                'value': 0,
                'type': 'gt'
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
