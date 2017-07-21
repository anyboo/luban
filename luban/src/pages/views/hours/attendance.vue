<template>
    <div ui-view class="ng-scope wrapper">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="attendances" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="attendances">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t" :class="{result:getdialog}">
                            <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                        </div>
                        <div class="col-xs-12 col-md-5 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.student_name">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                            <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <template v-if="getActionOption('hoursattendance')">
                        <div class="col-xs-12 col-md-3 m-t">
                            <button class="btn btn-primary pull-right" @click="handleShowDialog('lb-attendance')">
                                <i class="icon-plus glyphicon glyphicon-user"></i>考勤
                            </button>
                        </div>
                        </template>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="学员">
                                <template scope="scope">
                                    <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                        <i class="fa" :class="{'fa-female':getLookUp(scope.row.student,'sex')=='2','fa-male':getLookUp(scope.row.student,'sex')=='1'}"></i>
                                    </span>{{ getLookUp(scope.row.student,'student_name') }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="班级">
                                <template scope="scope">{{getLookUp(scope.row.classes, 'class_name')}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="上课老师">
                                <template scope="scope">{{getLookUp(scope.row.employee, 'name')}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="考勤时间">
                                <template scope="scope">{{getDatetimeFormat(scope.row.arrangestart)}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="出勤状态">
                                <template scope="scope">
                                    <span class="label bg-success">正常出勤</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="登记时间">
                                <template scope="scope">{{getDatetimeFormat(scope.row.creattime)}}</template>
                            </el-table-column>
                        </el-table>
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
    name: 'attendance',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': '',
                'student_name': '',
                'student_id': ''
            },
            'duration': [{
                'value': 'today',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }],
            'lookup': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
            'lookuparrange': {
                'localField': 'arrange_id',
                'from': 'arrange',
                'foreignField': '_id',
                'as': 'arrange'
            },
            'lookupclasses': {
                'localField': 'classes_id',
                'from': 'classes',
                'foreignField': '_id',
                'as': 'classes'
            },
            'lookupstudent': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            }
        }
        return {
            localdata,
            tables: ['attendance']
        }
    },
    computed: {
        getdialog() {
            if (this.$store.state.envs.currDialog == 'lb-attendance') {
                this.handleSearch()
            } else if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.localdata.form.student_name = this.$store.state.envs.currDialogResult.student_name
                    this.localdata.form.student_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.localdata.form.student_id = ''
                    this.localdata.form.student_name = '学员'
                }
                this.handleSearch()
            }
            return true
        },
    },
    watch: {},
    methods: {
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            this.handleSearch()
        },
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
                        'key': 'arrangestart',
                        'value': startTime,
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'arrangestart',
                        'value': endTime,
                        'type': 'lte'
                    })
                }
            }
            filterObj.push({
                'key': 'student',
                'value': '$student_id',
                'type': 'unwind'
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookupclasses,
                'type': 'lookup'
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookuparrange,
                'type': 'lookup'
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookupstudent,
                'type': 'lookup'
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then((obj) => {

            })
        },
    }
}
</script>
