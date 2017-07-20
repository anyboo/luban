<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" @click="lbClosedialog($event)" class="close  ">
                    <span class="text-right" style="float:right">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i>考勤</i>
                </h3>
            </div>
            <div class="modal-body">
                <el-steps :center="true" :active="steps" finish-status="success">
                    <el-step title="选择班级"></el-step>
                    <el-step title="选择排课"></el-step>
                    <el-step title="考勤"></el-step>
                </el-steps>
                <div class="panel panel-default" v-if="steps==1">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-7">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <el-dropdown menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                {{localdata.search.search_value}}
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <el-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                <template v-for="item in localdata.search.fields">
                                                    <el-dropdown-item :command="item.name">{{item.value}}</el-dropdown-item>
                                                </template>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="list-group m-t">
                        <template v-for="item in getTablesData()">
                            <li class="list-group-item ng-scope" :class="getCheckRowClass(item._id)" @click="handleListChange(item)">
                                <h4 class="list-group-item-heading ng-binding">{{item.class_name}}</h4>
                                <p class="list-group-item-text text-muted ng-binding">老师:{{getLookUp(item.employee, 'name')}},已报人数:3/{{item.max_student_num}},上课次数:0/{{item.total_times}}</p>
                            </li>
                        </template>
                    </ul>
                    <div class="panel-footer">
                        <div class="row ">
                            <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
                <div class="wrapper panel panel-default" v-if="steps==2">
                    <div class=" row  m-t " v-if="arrangetitle.length>0">
                        当前选择
                        <br>开始时间：{{arrangestart}}
                        <br>结束时间：{{arrangeend}}
                        <br>{{arrangetitle}}
                    </div>
                    <div class=" row  m-t ">
                        <div id='calendar'></div>
                    </div>
                </div>
                <div class="wrapper panel panel-default" v-if="steps==3">
                    <div class=" row  m-t " v-if="arrangetitle.length>0">
                        开始时间：{{arrangestart}}
                        <br>结束时间：{{arrangeend}}
                        <br>{{arrangetitle}}
                    </div>
                    <div class=" row  m-t ">
                        <el-table @selection-change="handleSelectionChange" :data="orderdata" border tooltip-effect="dark" style="width: 100%">
                            <el-table-column type="selection" width="55">
                            </el-table-column>
                            <el-table-column label="学生">
                                <template scope="scope">{{ getLookUp(scope.row.student,'student_name') }}</template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleSelectClass(false)" :disabled="steps==1">上一步</button>
                <button class="btn btn-primary" @click="handleSelectClass(true)" :disabled="getNextButtonDisable">{{steps==3?'签到':'下一步'}}</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'suspendshours',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': '',
            },
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '班级名称'
                }, {
                    'name': 'employee.name',
                    'value': '老师姓名'
                }],
                'search_key': 'class_name',
                'search_value': '班级名称'
            },
            'lookup': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
            'lookupclasses': {
                'localField': 'classes_id',
                'from': 'classes',
                'foreignField': '_id',
                'as': 'classes'
            },
            'lookupsclasses': {
                'localField': 'sclasses_id',
                'from': 'sclasses',
                'foreignField': '_id',
                'as': 'sclasses'
            },
            'lookuptech': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
            'lookupstudent': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            }
        }
        return {
            status: 0,
            model: 'attendance',
            tables: ['classes'],
            currentRow: null,
            arrangeid: '',
            arrangetitle: '',
            arrangestart: '',
            arrangeend: '',
            steps: 1,
            localdata,
            orderdata: [],
            multipleSelection: []
        }
    },
    computed: {
        getNextButtonDisable() {
            let result = false
            if (this.steps == 1 && this.currentRow == null) {
                result = true
            }
            if (this.steps == 2 && this.arrangeid.length == 0) {
                result = true
            }
            if (this.steps == 3 && this.multipleSelection.length == 0) {
                result = true
            }
            return result
        }
    },
    watch: {

    },
    updated() {
        if (this.steps == 2) {
            this.getArrange()
        }
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        getArrange() {
            let vm = this
            $('#calendar').fullCalendar({
                schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
                nowIndicator: true,
                editable: false,
                aspectRatio: 1.8,
                scrollTime: '07:00',
                header: {
                    left: 'today,prev,next',
                    center: 'title',
                    right: ''
                },
                allDaySlot: false,
                defaultView: 'listMonth',
                navLinks: true,
                eventClick: function (calEvent, jsEvent, view) {
                    console.log(calEvent)
                    vm.arrangeid = calEvent.id
                    vm.arrangetitle = calEvent.title
                    vm.arrangestart = calEvent.start._i
                    vm.arrangeend = calEvent.end._i
                },
                events: function (start, end, timezone, callback) {
                    let filterObj = []
                    let startTime = vm.getDatetimeStartEndOf(start._d)
                    let endTime = vm.getDatetimeStartEndOf(end._d, end)
                    let id = ''
                    if (vm.currentRow) {
                        id = vm.currentRow._id
                    }
                    filterObj.push({
                        'key': 'classes_id',
                        'value': id,
                        'type': ''
                    })

                    filterObj.push({
                        'key': 'daterange2',
                        'value': startTime,
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'lookup',
                        'value': vm.localdata.lookupclasses,
                        'type': 'lookup'
                    })
                    filterObj.push({
                        'key': 'lookup',
                        'value': vm.localdata.lookupsclasses,
                        'type': 'lookup'
                    })
                    filterObj.push({
                        'key': 'lookup',
                        'value': vm.localdata.lookuptech,
                        'type': 'lookup'
                    })
                    let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
                    vm.handleGetFilterTableTable('arrange', filterTxt).then(function (obj) {
                        let eve = []
                        for (var item of obj.data.data) {
                            let evnitem = {}
                            evnitem.id = item._id
                            evnitem.resourceId = item.sclasses_id
                            evnitem.title = ''
                            if (item.employee && item.employee.length > 0) {
                                evnitem.title = '老师：' + item.employee[0].name
                            }
                            if (item.classes && item.classes.length > 0) {
                                evnitem.title += ' 班级：' + item.classes[0].class_name
                            }
                            if (item.sclasses && item.sclasses.length > 0) {
                                evnitem.title += ' 教室：' + item.sclasses[0].class_name
                            }
                            if (item.dayloop) {
                                let loopdatastart = item.daterange1
                                let loopdataend = item.daterange2
                                let loopcount = 0
                                while (loopdatastart <= loopdataend) {
                                    if (loopcount > 1000) {
                                        break
                                    }
                                    let days = vm.moment(loopdatastart).days()
                                    if (item['day_' + days]) {
                                        evnitem.start = vm.getDate2timeFormat(loopdatastart, item.timerange1)
                                        evnitem.end = vm.getDate2timeFormat(loopdatastart, item.timerange2)
                                        let evncpitem = {}
                                        Object.assign(evncpitem, evnitem)
                                        eve.push(evncpitem)
                                    }
                                    loopdatastart = vm.moment(loopdatastart).add(1, 'days').toDate().getTime()
                                    loopcount++
                                }
                            } else {
                                evnitem.start = vm.getDate2timeFormat(item.daterange1, item.timerange1)
                                evnitem.end = vm.getDate2timeFormat(item.daterange1, item.timerange2)
                                eve.push(evnitem)
                            }
                        }
                        callback(eve)
                    })
                }
            })
        },
        handleSelectClass(add) {
            if (add) {
                if (this.steps == 3) {
                    this.Save()
                } else {
                    this.steps++
                    if (this.steps == 3) {
                        let filterObj = []
                        filterObj.push({
                            'key': 'class_id',
                            'value': this.currentRow._id,
                            'type': ''
                        })
                        filterObj.push({
                            'key': 'order_type',
                            'value': 1,
                            'type': ''
                        })
                        filterObj.push({
                            'key': 'lookup',
                            'value': this.localdata.lookupstudent,
                            'type': 'lookup'
                        })
                        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                        this.handleGetFilterTableTable('order', filterTxt).then((obj) => {
                            this.orderdata = obj.data.data
                        })
                    }
                }
            } else {
                this.steps--
                this.arrangeid = ''
                this.arrangetitle = ''
                this.arrangestart = ''
                this.arrangeend = ''
            }
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
            }
            return result
        },
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
            this.handleSearch()
        },
        Save() {
            let form = {}
            form.classes_id = this.currentRow._id
            form.arrange_id = this.arrangeid
            form.teacher_id = this.currentRow.teacher_id
            form.arrangetitle = this.arrangetitle
            console.log(this.arrangestart)
            form.arrangestart = this.getDatetime(this.arrangestart)
            form.arrangeend = this.getDatetime(this.arrangeend)
            form.student_id = []
            for (var item of this.multipleSelection) {
                form.student_id.push(item.student_id)
            }
            this.handleSave(form).then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-attendance'
            })
        },
        handleSearch() {
            let filterObj = []
            this.currentRow = null
            let search_value = this.localdata.form.search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let status = this.localdata.form.status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'track_type',
                    'value': status,
                    'type': ''
                })
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
