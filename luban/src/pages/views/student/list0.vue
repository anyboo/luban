<template>
    <div class="ng-scope wrapper ">
        <div class="wrapper-xs ng-scope">
            <div class="wrapper panel panel-default bg-white ng-scope">
                <div class="row no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline">
                            <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                        <div class="inline w-sm va-m m-l-xs">
                            <div class="input-group">
                                <input type="text" :placeholder="getSelectStudentName" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" @click="handleSelectStudent">
                                        <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <lb-buttongroup :group-data="localdata.region_oe_id" v-model="localdata.form.region_oe_id" @input="handleRegion"></lb-buttongroup>
                    </div>
                </div>
                <div class="row m-t m-t-t">
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column width="90" prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="ng-scope">操作</span>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </el-table-column>
                        <el-table-column width="100" prop="data" label="学员">
                            <template scope="scope">
                                <a class="link ng-binding" @click="handleRouter($event,scope.row)">
                                    <span class="ng-binding">
                                        <i class="fa" :class="{'fa-female':scope.row.sex=='2','fa-male':scope.row.sex=='1'}"></i>
                                    </span>{{ scope.row.student_name }}
                                    <span v-if="scope.row.nickname != ''" class="ng-binding ng-scope">{{ scope.row.nickname }}</span>
                                </a>
                            </template>
                        </el-table-column>
                        <el-table-column width="150" prop="data" label="联系电话">
                            <template scope="scope">{{ scope.row.first_tel }}</template>
                        </el-table-column>
                        <el-table-column width="120" prop="data" label="学员归属">
                            <template scope="scope">
                                <span class="label ng-scope" :class="{'bg-info':getEmployeeName(scope.row)!='未设定','bg-gray':getEmployeeName(scope.row)=='未设定'}">{{ getEmployeeName(scope.row) }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column width="100" prop="data" label="意向程度">
                            <template scope="scope">
                                <span class="label ng-scope" :class="{'bg-info':scope.row.purpose!='0','bg-gray':scope.row.purpose=='0'}">{{ getButtongroupText(localdata.purpose,scope.row.purpose)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column width="100" prop="data" label="来源渠道">
                            <template scope="scope">{{scope.row.track_from}}</template>
                        </el-table-column>
                        <el-table-column width="150" prop="data" label="建档日期">
                            <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="档案备注">
                            <template scope="scope">
                                <p ng-bind-html="item.note" class="ng-binding">{{scope.row.note}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="最后跟踪">
                            <template scope="scope">
                                <div v-if="scope.row.inquiry && scope.row.inquiry.length > 0" class="ng-binding ng-scope">{{getDateFormat(getLookUp(scope.row.inquiry, 'track_time'))}}
                                    <p class="text-muted ng-binding">{{getLookUp(scope.row.inquiry, 'detail')}}</p>
                                    <p class="text-gray text-right ng-binding">{{getLookUp(scope.row.inquiry, 'op_name')}}</p>
                                </div>
                                <span v-else class="label bg-danger ng-scope">
                                    无跟踪记录
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="wrapper" style="height:80px"></div>
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
</template>
<script>
export default {
    name: 'list0',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
                'duration': '',
                'region_oe_id': '',
                'student_name': '学员',
                'student_id': '',
            },
            'region_oe_id': [{
                'value': '1',
                'text': '所有'
            }, {
                'value': '0',
                'text': '未归属'
            }],
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
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
            'lookupinquiry': {
                'localField': 'inquiry_id',
                'from': 'inquiry',
                'foreignField': '_id',
                'as': 'inquiry'
            }
        }
        return {
            localdata,
            tables: ['student']
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.localdata.form.student_name = this.$store.state.envs.currDialogResult.student_name
                    this.localdata.form.student_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.localdata.form.student_id = ''
                    this.localdata.form.student_name = '学员'
                }
                this.handleSearch()
            }
            if (this.$store.state.envs.currDialog == 'lb-changestudent') {
                this.handleSearch()
            }
            return this.localdata.form.student_name
        },
    },
    watch: {},
    methods: {
        handleSelectStudent() {
            //this.$store.state.envs.currDialog = ''
            //this.$store.state.envs.currDialogResult = null
            this.handleShowDialog('lb-selectstudenttpl')
        },
        getEmployeeName(item) {
            let name = '未设定'
            if (item.employee && item.employee.length > 0) {
                name = this.getLookUp(item.employee, 'name')
            }
            return name
        },
        handleRouter(event, item) {
            this.$store.state.envs.currStudent = item
            this.$router.push('/student/info')
            event.stopPropagation()
        },
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            this.handleSearch()
        },
        handleRegion(value) {
            this.handleSearch()
        },
        handleSearch() {
            let filterObj = []
            let student_id = this.localdata.form.student_id.trim()
            if (student_id.length > 0) {
                filterObj.push({
                    'key': '_id',
                    'value': student_id,
                    'type': ''
                })
            }
            if (this.localdata.form.region_oe_id == '0') {
                filterObj.push({
                    'key': 'region_oe_id',
                    'value': '0',
                    'type': ''
                })
            }
            if (this.localdata.form.daterange && this.localdata.form.daterange.length == 2) {
                let startTime = this.getDatetime(this.localdata.form.daterange[0])
                let endTime = this.getDatetime(this.localdata.form.daterange[1])
                if (startTime > 0) {
                    if (startTime == endTime) {
                        startTime = this.getDatetimeStartOf('day')
                        endTime = this.getDatetimeStartOf('day', true)
                    }
                    filterObj.push({
                        'key': 'inquiry.track_time',
                        'value': startTime,
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'creattime',
                        'value': endTime,
                        'type': 'lte'
                    })
                }
            }
            filterObj.push({
                'key': 'isdel',
                'value': false,
                'type': ''
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookupinquiry,
                'type': 'lookup'
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
