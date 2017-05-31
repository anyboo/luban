<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="ng-scope">
                <div class=" wrapper panel panel-default bg-white ng-scope">
                    <div class="row no-gutter ">
                        <div class="col-xs-12 col-md-4 m-t">
                            <lb-date-picker ref="picker" v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></lb-date-picker>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" :placeholder="getSelectStudentName" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly">
                                    <span class="input-group-btn">
                                <button class="btn btn-default" @click="handSelectStudent(false)">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                                </div>
                            </div>
                            <lb-buttongroup :group-data="localdata.track_type" v-model="localdata.form.track_type" @input="handleSearch"></lb-buttongroup>
                            <button class="btn btn-primary pull-right" @click="handSelectStudent(true)">
                                <i class="icon-plus"></i>跟踪回访登记
                            </button>
                        </div>
                    </div>
                    <div class="table-responsive m-t">
                        <lb-table :data="getTablesData()" stripe>
                            <lb-table-column width="100" prop="data" label="学员">
                                <template scope="scope">
                                    <a class="link" @click="handleAddTrack(scope.row.student)" tooltip="新增记录"><i class="fa fa-plus"></i></a>
                                    <a class="ng-binding" href="#/student/64267">
                                        <span class="ng-binding"></span>{{ getLookUp(scope.row.student,'student_name') }}
                                    </a>
                                    <span class="label bg-success ng-scope" ng-if="item.student.status > 0">已报读</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="沟通内容">
                                <template scope="scope">
                                    <pre class="ng-binding">{{ scope.row.detail}}</pre>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="沟通方式">
                                <template scope="scope">{{ scope.row.track_way }}</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="接洽人">
                                <template scope="scope">{{scope.row.op_name}}</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="沟通时间">
                                <template scope="scope">{{getDateFormat(scope.row.track_time)}}</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="类型">
                                <template scope="scope">{{ getButtongroupText(localdata.track_type,scope.row.track_type)}}</template>
                            </lb-table-column>
                        </lb-table>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-4 col-xs-12"></div>
                            <div class="col-sm-4 text-center">
                                <small class="text-muted inline m-t-sm m-b-sm ng-binding">共 4 条记录</small>
                            </div>
                            <div class="col-sm-4 text-right text-center-xs">
                                <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import base64 from '~/api/base64.js'
export default {
    name: 'tracks',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
                'date_start': '',
                'date_end': '',
                'duration': '',
                'student_id': '',
                'student_name': '学员',
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
            lb_tables: ['inquiry'],
            selStudentAddInquiry: false
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    if (this.selStudentAddInquiry) {
                        this.$store.state.envs.currStudent = this.$store.state.envs.currDialogResult
                        this.handleShowDialog('lb-addtrackmodal')
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
            return this.localdata.form.student_name
        },
    },
    watch: {},
    methods: {
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
            if (this.localdata.form.daterange.length == 2) {
                let startTime = this.getDatetime(this.localdata.form.daterange[0])
                let endTime = this.getDatetime(this.localdata.form.daterange[1])
                if (startTime == endTime) {
                    endTime = this.getDatetimeEndOf(this.localdata.form.daterange[1])
                }
                filterObj.push({
                    'key': 'track_time',
                    'value': startTime,
                    'type': 'gt'
                })
                filterObj.push({
                    'key': 'track_time',
                    'value': endTime,
                    'type': 'lt'
                })
            }
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            console.log(filterObj)
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
