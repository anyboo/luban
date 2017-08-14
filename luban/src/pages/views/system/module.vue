<template>
    <div class="table-box" :class="{'table-blockinfo':info,'table-block':!info}">
        <div class="search" v-if="getSearch">
            <el-row :gutter="12">
                <el-col :span="6" v-if="textSearch">
                    <el-input placeholder="请输入内容" v-model="textSearchValue" @change="handleSearch">
                        <el-select v-model="textSearchKey" slot="prepend" placeholder="请选择" @change="handleSearch">
                            <el-option v-for="item in textSearchInfo" :key="item.value" :value="item.value" :label="item.label"></el-option>
                        </el-select>
                        <el-button slot="append" icon="search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="5" v-if="dateSearch">
                    <div class="block">
                        <el-date-picker v-model="datevalue" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions" @change="handleSearch">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="4" v-if="classesSearch">
                    <el-select v-model="classesId" filterable placeholder="请选择班级">
                        <el-option v-for="item in getClassesData" :key="item._id" :label="item.class_name" :value="item._id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="5" v-if="selectUserSearch">
                    <div class="input-group">
                        <input type="text" :placeholder="getSelectStudentName" class="form-control" ng-readonly="true" readonly="readonly" v-model="studentname">
                        <span class="input-group-btn">
                            <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                            </button>
                        </span>
                    </div>
                </el-col>
                <el-col :span="getModuleSearchSpan('radioGroupSearch',6)" v-if="radioGroupSearch">
                    <template v-for="item in radioGroupSearchInfo">
                        <el-radio-group v-model="radiovalue" @change="handleSearch">
                            <template v-for="(value,index) in item.labels">
                                <el-radio-button :label="index">{{value.label}}</el-radio-button>
                            </template>
                        </el-radio-group>
                    </template>
                </el-col>
                <el-col :span="5" v-if="groupBtnSearch">
                    <el-button-group>
                        <template v-for="item in groupBtnSearchInfo">
                            <el-button :type="item.type">{{item.label}}</el-button>
                        </template>
                    </el-button-group>
                </el-col>
                <el-col :span="getModuleSearchSpan('singleBtnSearch',3)" v-if="singleBtnSearch" class="pull-right">
                    <template v-for="item in singleBtnSearchInfo">
                        <template v-if="getActionOption(item.actionoption)">
                            <el-button :type="item.type" @click="lbShowdialog($event,item.showdialog)" :icon="item.icon">{{item.label}}</el-button>
                        </template>
                    </template>
                </el-col>
            </el-row>
        </div>
        <el-table :data="moduleTableData" stripe border>
            <template v-for="item in textTableInfo">
                <el-table-column :label="item.label">
                    <template scope="scope">
                        <template v-if="item.type=='constant'">{{item.prop}}</template>
                        <template v-if="item.type=='payment'">{{getDictText('2',scope.row[item.prop])}}</template>
                        <template v-if="item.type=='lessoncount'">
                            {{ scope.row[item.prop]?scope.row[item.prop].length:0 }}
                        </template>
                        <template v-if="item.type=='content'">
                            <pre class="ng-binding widths">{{ scope.row[item.prop]}}</pre>
                        </template>
                        <template v-if="item.type=='datetime'">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ getDateFormat(scope.row[item.prop]) }}</span>
                        </template>
                        <template v-if="item.type=='lesson'">
                            <p>
                                <span class="label bg-danger">{{getButtongroupText(item.othertype,scope.row[item.lesson_type])}}</span>{{scope.row[item.lesson_name]}}
                                <small class="label bg-info m-l">{{scope.row[item.lesson_no]}}</small>
                            </p>
                        </template>
                        <template v-if="item.type=='getButtongroupText'">
                            {{getButtongroupText(item.othertype,scope.row[item.prop])}}
                        </template>
                        <template v-if="item.type=='getdataPurpose'">
                            <span class="label" :class="{'bg-info':getDictText('6',scope.row[item.prop])==getdataPurpose(scope.row[item.prop]),'bg-gray':getDictText('6',scope.row[item.prop])!=getdataPurpose(scope.row[item.prop])||scope.row[item.prop]==getDictDefvalue('6')}">
                                {{ getdataPurpose(scope.row[item.prop])}}
                            </span>
                        </template>
                        <template v-if="item.type=='getEmployeeName'">
                            <span class="" :class="{'bg-info':getEmployeeName(scope.row)!='未设定','bg-gray':getEmployeeName(scope.row)=='未设定'}">{{ getEmployeeName(scope.row) }}</span>
                        </template>
                        <template v-if="item.type=='studenttracksadd'">
                            <template v-if="getActionOption('studenttracksadd')">
                                <a class="link" @click="handleAddTrack(scope.row[item.prop])" tooltip="新增记录">
                                    <i class="fa fa-plus"></i>
                                </a>
                            </template>
                            <a @click="handleRouter($event,scope.row[item.prop])">
                                {{ getLookUp(scope.row[item.prop],'student_name') }}
                            </a>
                        </template>
                        <template v-if="item.type=='lastTrack'">
                            <div v-if="scope.row[item.prop] && scope.row[item.prop].length > 0">{{getDateFormat(getLookUp(scope.row[item.prop], 'track_time'))}}
                                <p class="text-muted">{{getLookUp(scope.row[item.prop], 'detail')}}</p>
                                <p class="text-gray text-right">{{getLookUp(scope.row[item.prop], 'op_name')}}</p>
                            </div>
                            <span v-else class="label bg-danger">
                                无跟踪记录
                            </span>
                        </template>
                        <template v-if="item.type=='openlessonsstatus'">
                            <small class="label bg-success" v-if="getOpen(scope.row,'open')">已开课</small>
                            <small class="label bg-red" v-if="getOpen(scope.row,'')">未开课</small>
                            <small class="label bg-blue" v-if="getOpen(scope.row,'close')">已结课</small>
                        </template>
                        <template v-if="item.type=='checkStatus'">
                            <span v-if="scope.row[item.check_status] == '0'" class="badge bg-warning">未对账</span>
                            <span v-if="scope.row[item.check_status] == '1'" class="badge bg-success">已对账</span>
                        </template>
                        <template v-if="item.type=='checkAccount'">
                            <a v-if="scope.row[item.check_status] == '0'" class="btn btn-xs btn-default" @click="handleCheck(scope.row[item._id])">核对</a>
                            <span v-if="scope.row[item.check_status] == '1'" class="info bg-success">已核对</span>
                        </template>
                        <template v-if="item.type=='text'">{{ scope.row[item.prop] }}</template>
                        <template v-if="item.type=='fromNow'">{{ fromNow(scope.row.birth) }}</template>
                        <template v-if="item.type=='studentRouter'">
                            <a class="link" @click="handleRouter($event,scope.row)">
                                <span>
                                    <i class="fa" :class="{'fa-female ':scope.row[item.sex]=='2','fa-male':scope.row[item.sex]=='1'
                                                             ,'mans':scope.row[item.sex]=='1','woman':scope.row[item.sex]=='2'}"></i>
                                </span>{{ scope.row[item.student_name] }}
                                <span v-if="scope.row[item.nickname] != ''">{{ scope.row[item.nickname] }}</span>
                            </a>
                        </template>
                        <template v-if="item.type=='studentlink'">
                            <a @click="handleRouter($event,scope.row[item.prop])">
                                <span></span>{{ getLookUp(scope.row[item.prop],'student_name') }}
                            </a>
                        </template>
                        <template v-if="item.type=='tabletext'">{{ getLookUp(scope.row[item.table],item.prop) }}</template>
                        <template v-if="item.type=='operation'">
                            <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="scope.row" @command="handleCommand">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="getMenuOption" class="btn btn-info btn-xs">
                                    <i class="fa fa-cog"></i>操作
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                        <template v-if="item.type=='textTag'">
                            <el-tag :type="item.color">{{ getToFixed(scope.row[item.prop])}}</el-tag>
                        </template>
                        <template v-if="item.type=='negativeTag'">
                            <el-tag :type="item.color">-{{ getToFixed(scope.row[item.prop])}}</el-tag>
                        </template>
                        <template v-if="item.type=='payment1'">
                            ￥{{getPayAmout(scope.row[item.order])}}/￥{{getTotalAmout(scope.row[item.order])}}
                        </template>
                        <template v-if="item.type=='progress'">
                            <lb-progress :text-inside="true" :stroke-width="18" :percentage="getPercentage(scope.row[item.order],scope.row[item.max_student_num])" :text="getPressageText(scope.row)"></lb-progress>
                        </template>
                        <template v-if="item.type=='priceText'">
                            <div class="inline w va-m">
                                <div class="progress-bar progress-bar-danger" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude="">
                                    <span style="white-space:nowrap;padding-left:20px">￥{{getPayAmout(scope.row[item.order])}} / ￥{{getTotalAmout(scope.row[item.order])}}</span>
                                </div>
                            </div>
                        </template>
                        <template v-if="item.type=='recordingSetting'">
                            <a class="btn btn-default btn-xs" @click="handleShowDialog('lb-details',scope.row)">查看详情</a>
                            <a class="btn btn-danger btn-xs ng-isolate-scope" @click="handleDelClick(scope.row._id)">删除</a>
                        </template>
                        <template v-if="item.type=='getToFixed'">
                            {{getToFixed(scope.row[item.prop])}}
                        </template>
                        <template v-if="item.type=='lessonpriceText'">
                            <p>
                                课程单价:{{getToFixed(scope.row[item.unit_price])}}元/次
                            </p>
                            <p>
                                <label>课程售价:</label>
                                <span class="label bg-info">{{getToFixed(scope.row[item.price])}}</span>元
                            </p>
                        </template>
                        <template v-if="item.type=='contentText'">
                            <p>
                                <label>单次课时长:</label>
                                <span class="label bg-info">{{scope.row[item.unit_hours]}}</span>时
                            </p>
                            <p>
                                <label>课程包含:</label>
                                <template v-if="scope.row[item.lesson_type]=='0'&&scope.row[item.price_model]=='0'">
                                    <span class="label bg-info">{{scope.row[item.inc_times]}}</span>次
                                </template>
                                <span class="label bg-info">{{scope.row[item.inc_hours]}}</span>课时
                            </p>
                        </template>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
            </el-pagination>
        </div>
        <div class="clear"></div>
    </div>
</template>
<style>
.table-blockinfo {
    border-radius: 4px;
    transition: .2s;
    background: #fff;
}

.table-block {
    border: 1px solid #cccccc;
    border-radius: 4px;
    transition: .2s;
    margin: 15px;
    background: #fff;
}

.table-block.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5)
}

.table-block .search {
    padding: 12px;
    padding-bottom: 0px;
}

.table-block .pagination {
    padding: 5px;
    float: right;
}

.table-blockinfo .pagination {
    padding: 5px;
    float: right;
}

.table-block .clear {
    clear: both;
    height: 0px;
}

.el-select .el-input {
    width: 90;
}
</style>
<script>
import pagesmodule from '~/stores/module.js'
export default {
    name: 'systemmodule',
    props: ['module', 'info', 'searchValue'],
    data() {
        return {
            moduledata: '',
            textSearchKey: '',
            textSearchValue: '',
            moduleTableData: [],
            datevalue: '',
            radiovalue: '',
            studentname: '',
            student_id: '',
            classesId: '',
            hastableSearch: false,
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            tables: ['sclasses'],
        }
    },
    created() {
        if (typeof (this.module) == 'object') {
            this.moduledata = this.module
        } else if (typeof (this.module) == 'string' && this.module != '') {
            this.moduledata = pagesmodule[this.module]
        }

    },
    computed: {
        getSearch() {
            let nSearch = false
            if (this.moduledata && this.moduledata.pageSearch.length > 0) {
                console.log(this.moduledata.pageSearch)
                nSearch = true
            }
            return nSearch
        },
        textSearchInfo() {
            return this.getModuleSearchInfo('textSearch')
        },
        textSearch() {
            return this.getModuleSearchInfo('textSearch').length > 0
        },
        dateSearch() {
            return this.getModuleSearchInfo('dateSearch').length > 0
        },
        singleBtnSearch() {
            return this.getModuleSearchInfo('singleBtnSearch').length > 0
        },
        singleBtnSearchInfo() {
            return this.getModuleSearchInfo('singleBtnSearch')
        },
        groupBtnSearch() {
            return this.getModuleSearchInfo('groupBtnSearch').length > 0
        },
        groupBtnSearchInfo() {
            return this.getModuleSearchInfo('groupBtnSearch')
        },
        radioGroupSearch() {
            return this.getModuleSearchInfo('radioGroupSearch').length > 0
        },
        radioGroupSearchInfo() {
            return this.getModuleSearchInfo('radioGroupSearch')
        },
        selectUserSearch() {
            return this.getModuleSearchInfo('selectUserSearch').length > 0
        },
        selectUserSearchInfo() {
            return this.getModuleSearchInfo('selectUserSearch')
        },
        classesSearch() {
            return this.getModuleSearchInfo('classesSearch').length > 0
        },
        //表格
        textTableInfo() {
            if (this.moduledata && this.moduledata.pageTableField.length > 0) {
                let textTableInfo = this.moduledata.pageTableField
                return textTableInfo
            }
        },
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.student_name = this.$store.state.envs.currDialogResult.student_name
                    this.student_id = this.$store.state.envs.currDialogResult._id
                    this.handleSearch()
                } else {
                    this.student_id = ''
                    this.student_name = '学员'
                    this.handleSearch()
                }
            }
            return this.student_name
        },
        getClassesData() {
            let classes = this.$store.state.models.models.classes.data
            return classes
        },
    },
    watch: {
        module: function (val) {
            if (typeof (val) == 'object') {
                this.moduledata = val
                this.handleSearch()
            } else if (typeof (val) == 'string' && this.module != '') {
                this.moduledata = pagesmodule[val]
                this.handleSearch()
            }
        }
    },
    methods: {
        getModuleSearchSpan(Search, count) {
            let searchSpan = count
            if (this.moduledata && this.moduledata.pageSearch.length > 0) {
                let searchdata = this.moduledata.pageSearch
                if (searchdata) {
                    for (let item of this.moduledata.pageSearch) {
                        if (item.type == Search && item.span) {
                            searchSpan = item.span
                            break
                        }
                    }
                }
            }
            return searchSpan
        },
        getModuleSearchInfo(Search) {
            let searchInfo = []
            if (this.moduledata && this.moduledata.pageSearch.length > 0) {
                let searchdata = this.moduledata.pageSearch
                if (searchdata) {
                    for (let item of this.moduledata.pageSearch) {
                        if (item.type == Search) {
                            searchInfo = item.fields
                            break
                        }
                    }
                }
            }
            return searchInfo
        },
        getEmployeeName(item) {
            let name = '未设定'
            if (item.employee && item.employee.length > 0) {
                name = this.getLookUp(item.employee, 'name')
            }
            return name
        },
        handleSearch() {
            let filterObj = []
            let datetime = this.datevalue
            if (datetime && datetime.length == 2) {
                let startTime = this.getDatetime(datetime[0])
                let endTime = this.getDatetime(datetime[1])
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
            let search_value = this.textSearchValue
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.textSearchKey,
                    'value': search_value,
                    'type': 'like'
                })
            }
            if (this.searchValue) {
                filterObj.push({
                    'key': 'student_id',
                    'value': this.searchValue,
                    'type': ''
                })
            }
            let student_id = this.student_id.trim()
            if (student_id.length > 0) {
                filterObj.push({
                    'key': 'student_id',
                    'value': student_id,
                    'type': ''
                })
            }
            if (this.moduledata && this.moduledata.tableSearch && this.moduledata.tableSearch.length > 0) {
                console.log('111111111', this.moduledata.tableSearch)
                let tablesSearch = this.moduledata.tableSearch
                for (let item of tablesSearch) {
                    filterObj.push({
                        'key': 'lookup',
                        'value': item,
                        'type': 'lookup'
                    })
                }
            }
            this.radiovalue += ''
            let status = this.radiovalue.trim()
            if (status.length > 0) {
                let opentime = new Date()
                if (status == '0') {
                    filterObj.push({
                        'key': 'open_time',
                        'value': opentime.getTime(),
                        'type': 'lte'
                    })
                }
                if (status == '1') {
                    filterObj.push({
                        'key': 'open_time',
                        'value': opentime.getTime(),
                        'type': 'gt'
                    })
                }
                if (status == '2') {
                    filterObj.push({
                        'key': 'status',
                        'value': 2,
                        'type': ''
                    })
                }
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            if (this.moduledata && this.moduledata.pageTable) {
                this.handleGetFilterTableTable(this.moduledata.pageTable, filterTxt).then((obj) => {
                    this.moduleTableData = obj.data.data
                    console.log(this.moduledata.pageTable, this.moduleTableData)
                })
            }
        },
        getOpen(item, value) {
            let opentime = new Date()
            if (value == 'close') {
                return item.status == 2
            } else if (value == 'open') {
                return item.open_time < opentime.getTime()
            } else {
                return item.open_time > opentime.getTime()
            }
        },
        getPercentage(order, maxStudent) {
            let percentage = 100
            let ordercount = 0
            if (order) {
                ordercount = order.length
            }
            if (maxStudent > 0) {
                percentage = Number(ordercount) * 100 / Number(maxStudent)
            }
            return percentage
        },
        getPressageText(row) {
            let count = row.order ? row.order.length : 0
            return count + '/' + row.max_student_num
        },
        getTotalAmout(orders) {
            var totalamount = 0
            if (orders) {
                for (var item of orders) {
                    totalamount += Number(item.order_amount)
                }
            }
            return parseFloat(totalamount).toFixed(2)
        },
        getPayAmout(orders) {
            var payamount = 0
            var totalamount = 0
            if (orders) {
                for (var item of orders) {
                    totalamount += Number(item.order_amount)
                }
                for (var item of orders) {
                    payamount += Number(item.unpay_amount)
                }
            }
            return parseFloat(totalamount - payamount).toFixed(2)
        },
        getdataPurpose(value) {
            let purpose = ''
            purpose = this.getDictText('6', value)
            if (purpose == '') {
                purpose = this.getDictText('6', this.getDictDefvalue('6'))
            }
            return purpose
        },
        handleAddTrack(item) {
            let student = this.getLookUp(item)
            this.$store.state.envs.currStudent = student
            this.handleShowDialog('lb-addtrackmodal', student)
        },
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
            this.$store.commit('router', '/student/info')
            event.stopPropagation()
        },
        handleCheck(id) {
            this.$confirm('是否要核对?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.updateTeble('flow', id, {
                    'check_status': 1
                }).then(() => {
                    this.$message({
                        message: '核对成功',
                        type: 'success'
                    })
                    this.handleSearch()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已确定核对'
                })
            }
                )
        },
        handleCommand({
            action,
            data
        }) {
            if (action == 'delete') {
                if (data.sclesses) {
                    this.$message({
                        type: 'info',
                        message: '该教室已有排课，请先删除排课教室再进行此操作'
                    })
                } else {
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.tables = []
                        this.tables.push(this.moduledata.pageTable)
                        this.handleDelete(data._id).then(() => {
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                            this.handleSearch()
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        })
                    })
                }
            }
        }
    }
}
</script>
