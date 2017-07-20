<template>
    <div ui-view class="ng-scope wrapper ">
        <div class="wrapper-xs ng-scope">
            <div class="ng-scope">
                <div class=" wrapper panel panel-default bg-white ng-scope">
                    <div class="row no-gutter ">
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
                                <i class="icon-plus glyphicon glyphicon-user"></i>跟踪回访登记
                            </button>
                        </div> 
                    </div>
                    <div class="row m-t m-t-t">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column width="100" prop="data" label="学员" class="widthes">
                                <template scope="scope">
                                    <a class="link" @click="handleAddTrack(scope.row.student)" tooltip="新增记录">
                                        <i class="fa fa-plus"></i>
                                    </a>
                                    <a class="ng-binding" @click="handleRouter($event,scope.row.student)">
                                        <span class="ng-binding"></span>{{ getLookUp(scope.row.student,'student_name') }}
                                    </a>
                                </template>
                            </el-table-column>
                            <el-table-column width="100" prop="data" label="状态" class="widthes">
                                <template scope="scope">
                                    <span class="label bg-success ng-scope pull" width="100">已报读</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="沟通内容">
                                <template scope="scope">
                                    <pre class="ng-binding widths">{{ scope.row.detail}}</pre>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="沟通方式" width="120">
                                <template scope="scope">{{ scope.row.track_way }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="接洽人" width="100">
                                <template scope="scope">{{scope.row.op_name}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="沟通时间" width="130">
                                <template scope="scope">{{getDateFormat(scope.row.track_time)}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="类型" width="80">
                                <template scope="scope">{{ getButtongroupText(localdata.track_type,scope.row.track_type)}}</template>
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
<style type="text/css">
pre {
    display: block;
    padding: 6px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 30px;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.widths {
    max-width: 1090px;
}

.pull {
    margin-bottom: 10px !important;
}
</style>
<script>
export default {
    name: 'tracks',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
                'duration': '',
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
            }],
            'track_type': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
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
            tables: ['inquiry'],
            'student_name': '学员',
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    if (this.selStudentAddInquiry) {
                        let student = this.$store.state.envs.currDialogResult
                        this.$store.state.envs.currStudent = student
                        this.handleShowDialog('lb-addtrackmodal', student)
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
            if (this.$store.state.envs.currDialog == 'lb-inquiry') {
                this.handleSearch()
            }
            return this.student_name
        },
    },
    watch: {},
    methods: {
        handleRouter(event, item) {
            this.$store.state.envs.currStudent = item
            this.$router.push('/student/info')
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
            let student = this.getLookUp(item)
            this.$store.state.envs.currStudent = student
            this.handleShowDialog('lb-addtrackmodal', student)
        },
        handleSearch() {
            let filterObj = []
            let status = this.localdata.form.track_type.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'track_type',
                    'value': status,
                    'type': ''
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
            if (this.localdata.form.daterange && this.localdata.form.daterange.length == 2) {
                let startTime = this.getDatetime(this.localdata.form.daterange[0])
                let endTime = this.getDatetime(this.localdata.form.daterange[1])
                if (startTime > 0) {
                    if (startTime == endTime) {
                        endTime = this.getDatetimeEndOf(this.localdata.form.daterange[1])
                    }

                    filterObj.push({
                        'key': 'track_time',
                        'value': startTime,
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'track_time',
                        'value': endTime,
                        'type': 'lte'
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
        }
    }
}
</script>
