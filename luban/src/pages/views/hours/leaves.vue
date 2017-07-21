<template>
    <div ui-view class="ng-scope wrapper">
        <div class="wrapper-xs ng-scope">
            <div class="panel panel-default ng-scope" :class="{result:getSelectStudentName}">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-3 m-t">
                        <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                    </div>
                    <div class="col-xs-12 col-md-5 m-t">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                        <!--
                                                                                    <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status"></lb-buttongroup>
                                                                               -->
                        <div class="inline w-sm va-m m-l-xs">
                            <div class="input-group">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly" :placeholder="localdata.form.student_name">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" @click="handSelectStudent(false)">
                                        <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4 m-t">
                        <button class="btn btn-primary pull-right" @click="handSelectStudent(true)">
                            <i class="icon-plus glyphicon glyphicon-user"></i>请假登记
                        </button>
                    </div>
                </div>
                <div class="table-responsive">
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column width="80" prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row" @command="handleCommand">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="localdata.dropDownMenu" class="btn btn-info btn-xs">
                                        <i class="fa fa-cog"></i>操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="请假学员">
                            <template scope="scope">{{ getLookUp(scope.row.student,'student_name') }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="请假时间">
                            <template scope="scope">{{ getDateFormat(scope.row.daterange1) }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="复课时间">
                            <template scope="scope">{{ getDateFormat(scope.row.daterange2) }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="请假原因">
                            <template scope="scope">{{ scope.row.reason }} </template>
                        </el-table-column>
                        <el-table-column prop="data" label="登记时间">
                            <template scope="scope">{{ getDateFormat(scope.row.createtime) }}</template>
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
</template>
<script>
export default {
    name: 'leavess',
    data() {
        let localdata = {
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
            'status': [{
                'value': '',
                'text': '所有'
            }, {
                'value': '1',
                'text': '请假中'
            }, {
                'value': '0',
                'text': '待请假'
            }, {
                'value': '2',
                'text': '已复课'
            }],
            'form': {
                'status': '',
                'student_name': '学员',
                'student_id': '',
                'daterange': '',
            },
            'lookupstudent': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            },
         
        }
        return {
            localdata,
            tables: ['leaves'],
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    if (this.selStudentAddInquiry) {
                        let student = this.$store.state.envs.currDialogResult
                        this.$store.state.envs.currStudent = student
                        this.handleShowDialog('lb-leaveshours', student)
                    } else {
                        this.localdata.form.student_name = this.$store.state.envs.currDialogResult.student_name
                        this.localdata.form.student_id = this.$store.state.envs.currDialogResult._id
                        this.handleSearch()
                    }
                } else {
                    if (!this.selStudentAddInquiry) {
                        this.localdata.form.student_id = ''
                        this.localdata.form.student_name = '学员'
                        this.handleSearch()
                    }
                }
            }
            if (this.$store.state.envs.currDialog == 'lb-leaveshours') {
                this.handleSearch()
            }
            return true
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
        handleCommand({
        action,
            data
    }) {
            if (action == 'delete') {
                this.$confirm('此操作将永久删除该学员, 是否继续?', '提示', {
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
                        message: '已取消删除'
                    })
                })
            }
        },
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            this.handleSearch()
        },
        handSelectStudent(add) {
            this.selStudentAddInquiry = add
            if (add) {
                this.$store.state.envs.currDialog = ''
                this.$store.state.envs.currDialogResult = null
            }
            this.handleShowDialog('lb-selectstudenttpl')
        },
        handleSearch() {
            let filterObj = []

            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookupstudent,
                'type': 'lookup'
            })
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
                        'key': 'daterange1',
                        'value': startTime,
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'daterange1',
                        'value': endTime,
                        'type': 'lte'
                    })
                }
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then((obj) => {
            })
        },
    }
}
</script>
