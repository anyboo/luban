<template>
    <div>
        <div ui-view class="ng-scope wrapper ">
            <div class="wrapper-xs ng-scope">
                <div class="panel panel-default">
                    <div class="panel-body ng-scope" ui-view="">
                        <div class="row no-gutter " style="margin-top:-14px;">
                            <div class="col-xs-12 col-md-4 m-t">
                                <el-date-picker ref="picker" v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                            </div>
                            <div class="col-xs-12 col-md-8 m-t">
                                <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                                <div class="inline w-sm va-m m-l-xs">
                                    <div class="input-group">
                                        <input type="text" :placeholder="getSelectStudentName" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly">
                                        <span class="input-group-btn">
                                <button class="btn btn-default" @click="handSelectStudent(false)">
                                  <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                </button>
                            </span>
                                    </div>
                                </div>
                                <lb-buttongroup :group-data="localdata.track_type" v-model="localdata.form.track_type" @input="handleSearch"></lb-buttongroup>
                                <button class="btn btn-primary pull-right" @click="handSelectStudent(true)">
                                    <i class="icon-plus"></i>添加赛事记录
                                </button>
                            </div>
                        </div>
                        <div class="row m-t m-t-t">
                            <el-table :data="getTablesData()" stripe>
                                <el-table-column width="100" prop="data" label="学员" class="widthes">
                                    <template scope="scope">
                                        <a class="ng-binding" @click="handleRouter($event,scope.row.student)">
                                            <span class="ng-binding"></span>{{ getLookUp(scope.row.student,'student_name') }}
                                        </a>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="data" label="日期">
                                    <template scope="scope">
                                        {{getDateFormat(scope.row.creattime)}}
                                    </template>
                                </el-table-column>
                                <el-table-column prop="data" label="赛事名称">
                                    <template scope="scope"> {{scope.row.match_name}}</template>
                                </el-table-column>
                                <el-table-column prop="data" label="比赛成绩">
                                    <template scope="scope"> {{scope.row.result}}</template>
                                </el-table-column>
                                <el-table-column prop="data" label="录入时间">
                                    <template scope="scope">
                                        2017-06-06
                                    </template>
                                </el-table-column>
                                <el-table-column prop="data" label="操作">
                                    <template scope="scope"><a class="btn btn-default btn-xs" @click="handleShowDialog('lb-details',scope.row)">查看详情</a> <a class="btn btn-danger btn-xs ng-isolate-scope" @click="handleDelClick(scope.row._id)">删除</a></template>
                                </el-table-column>
                            </el-table>
                            <div class="panel-footer ">
                                <div class="row ">
                                    <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                                    </el-pagination>
                                </div>
                            </div>
                            <div class="grid-data-result">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'recording',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
                'duration': '',
                'student_id': '',
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
            }
        }
        return {
            localdata,
            tables: ['recording'],
            'student_name': '学员',
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    if (this.selStudentAddInquiry) {
                        this.$store.state.envs.currStudent = this.$store.state.envs.currDialogResult
                        this.handleShowDialog('lb-regstudentmatchmodal')
                    } else {
                        this.student_name = this.$store.state.envs.currDialogResult.student_name
                        this.localdata.form.student_id = this.$store.state.envs.currDialogResult._id
                        this.handleSearch()
                    }
                } else {
                    if (!this.selStudentAddInquiry) {
                        this.localdata.form.student_id = ''
                        this.student_name = '学员'
                        this.handleSearch()
                    }
                }
            }
            if (this.$store.state.envs.currDialog == 'lb-recording') {
                this.handleSearch()
            }
            return this.student_name
        },
    },
    watch: {},
    methods: {
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.handleGetTable()
            })
        },
        handleRouter(event, item) {
            this.$store.state.envs.currStudent = item
            this.$router.push('/student/info/')
            event.stopPropagation()
        },
        handSelectStudent(add) {
            this.selStudentAddInquiry = add
            if (add) {
                this.$store.state.envs.currDialog = ''
                this.$store.state.envs.currDialogResult = null
            }
            this.handleShowDialog('lb-selectstudenttpl')
        },
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            this.handleSearch()
        },
        handleAddTrack(item) {
            this.$store.state.envs.currStudent = this.getLookUp(item)
            this.handleShowDialog('lb-addtrackmodal')
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
                        'key': 'join_date',
                        'value': startTime,
                        'type': 'gt'
                    })
                    filterObj.push({
                        'key': 'join_date',
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

            //console.log(filterObj)
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
