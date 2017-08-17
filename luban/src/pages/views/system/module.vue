<template>
    <div class="table-box" :class="{'table-blockinfo':info,'table-block':!info}">
        <div class="search" v-if="getSearch">
            <el-row :gutter="12">
                <el-col :xs="8" :sm="8" :md="8" :lg="6" v-if="textSearch">
                    <el-input placeholder="请输入内容" v-model="textSearchValue" @change="handleSearch">
                        <el-select v-model="textSearchKey" slot="prepend" placeholder="请选择" @change="handleSearch">
                            <el-option v-for="item in textSearchInfo" :key="item.value" :value="item.value" :label="item.label"></el-option>
                        </el-select>
                        <el-button slot="append" icon="search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="2" v-if="handleback">
                    <div class="btn-group dropdown" dropdown="">
                        <a class="btn btn-default" @click="lessonrouter($event,'/hours/lessons')">返回</a>
                    </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="6" :lg="6" v-if="dateSearch">
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
                <el-col :span="5" v-if="selectLessonSearch">
                    <lb-selectelessonsearch @input="handleSearch" v-model="course_id"></lb-selectelessonsearch>
                </el-col>
                <el-col :span="5" v-if="selectUserSearch">
                    <lb-selecteusersearch @input="handleSearch" v-model="student_id" :selected="selStudentAddInquiry"></lb-selecteusersearch>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" v-if="radioGroupSearch">
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
                <el-col :xs="6" :sm="6" :md="6" :lg="5" v-if="singleBtnSearch" class="pull-right">
                    <template v-for="item in singleBtnSearchInfo">
                        <template v-if="getActionOption(item.actionoption)">
                            <el-button :type="item.type" @click="handOpenDialog(item.showdialog)" :icon="item.icon">{{item.label}}</el-button>
                        </template>
                    </template>
                </el-col>
            </el-row>
        </div>
        <el-table :data="moduleTableData" stripe border :class="getUpdata">
            <template v-for="item in textTableInfo">
                <el-table-column :label="item.label">
                    <template scope="scope">
                        <template v-if="item.type=='constant'">
                            {{item.prop}}
                        </template>
                        <template v-if="item.type=='lessonrouter'">
                            <a class="link" @click="lessonrouter($event,item.prop,scope.row)">排课详情</a>
                        </template>
                        <template v-if="item.type=='payment'">
                            {{getDictText('2',scope.row[item.prop])}}
                        </template>
                        <template v-if="item.type=='lessoncount'">
                            {{ scope.row[item.prop]?scope.row[item.prop].length:0 }}
                        </template>
                        <template v-if="item.type=='content'">
                            <el-tooltip :content="scope.row[item.prop]" placement="top">
                                <el-button>{{ scope.row[item.prop]}}</el-button>
                            </el-tooltip>
                            <!-- <pre class="ng-binding widths">{{ scope.row[item.prop]}}</pre> -->
                        </template>
                        <template v-if="item.type=='datetime'">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ getDateFormat(scope.row[item.prop]) }}</span>
                        </template>
                        <template v-if="item.type=='lesson'">
                            <lb-lessontype :lessonData="scope.row" :typeData="item"></lb-lessontype>
                        </template>
                        <template v-if="item.type=='getButtongroupText'">
                            <el-tag :type="item.color">{{getButtongroupText(item.othertype,scope.row[item.prop])}}</el-tag>
                        </template>
                        <template v-if="item.type=='getdataPurpose'">
                            <el-tag :type="getDictText('6',scope.row[item.prop])==getdataPurpose(scope.row[item.prop])?'primary':'gray'">{{ getdataPurpose(scope.row[item.prop])}}</el-tag>
                        </template>
                        <template v-if="item.type=='getEmployeeName'">
                            <el-tag :type="getEmployeeName(scope.row)=='未设定'?'gray':'primary'">{{ getEmployeeName(scope.row) }}</el-tag>
                        </template>
                        <template v-if="item.type=='studenttracksadd'">
                            <lb-studenttracksadd :lessonData="scope.row" :typeData="item"></lb-studenttracksadd>
                        </template>
                        <template v-if="item.type=='lastTrack'">
                            <lb-lasttrack :lessonData="scope.row" :typeData="item"></lb-lasttrack>
                        </template>
                        <template v-if="item.type=='checkstatus'">
                            <lb-checkstatus :lessonData="scope.row" :typeData="item" v-on:search="handleSearch"></lb-checkstatus>
                        </template>
                        <template v-if="item.type=='text'">
                            {{ scope.row[item.prop] }}
                        </template>
                        <template v-if="item.type=='textphone'">
                            {{ scope.row.student[0].first_tel }}
                        </template>
                        <template v-if="item.type=='fromNow'">
                            {{ fromNow(scope.row.birth) }}
                        </template>
                        <template v-if="item.type=='studentRouter'">
                            <lb-studentrouter :lessonData="scope.row"></lb-studentrouter>
                        </template>
                        <template v-if="item.type=='studentRouter1'">
                            <lb-studentrouter :lessonData="getLookUp(scope.row.student)"></lb-studentrouter>
                        </template>
                        <template v-if="item.type=='studentlink'">
                            <a class="link" @click="handleRouter($event,scope.row[item.prop])">
                                <span></span>{{ getLookUp(scope.row[item.prop],'student_name') }}
                            </a>
                        </template>
                        <template v-if="item.type=='tabletext'">
                            {{ getLookUp(scope.row[item.table],item.prop) }}
                        </template>
                        <template v-if="item.type=='operation'">
                            <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="scope.row" @command="handleCommand">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" class="btn btn-info btn-xs">
                                    <i class="fa fa-cog"></i>操作
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                        <template v-if="item.type=='textScale'">
                            <el-tag type="warning">{{scope.row[item.prop1]?scope.row[item.prop1].length:0}}/{{scope.row[item.prop2]}}</el-tag>
                        </template>
                        <template v-if="item.type=='textTag'">
                            <el-tag :type="item.color">{{ getToFixed(scope.row[item.prop])}}</el-tag>
                        </template>
                        <template v-if="item.type=='negativeTag'">
                            <el-tag :type="item.color">-{{ getToFixed(scope.row[item.prop])}}</el-tag>
                        </template>
                        <template v-if="item.type=='payconditions'">
                            <el-tooltip :content='"￥"+getPayAmout(scope.row[item.order])+"/￥"+getTotalAmout(scope.row[item.order])' placement="top">
                                <el-button>￥{{getPayAmout(scope.row[item.order])}}/￥{{getTotalAmout(scope.row[item.order])}}</el-button>
                            </el-tooltip>
                        </template>
                        <template v-if="item.type=='progress'">
                            <el-tag type="warning">{{getPressageText(scope.row)}}</el-tag>
                        </template>
                        <template v-if="item.type=='priceText'">
                            <lb-payconditions :lessonData="scope.row" :typeData="item"></lb-payconditions>
                        </template>
                        <template v-if="item.type=='getToFixed'">
                            <el-tag type="gray">{{getToFixed(scope.row[item.prop])}}</el-tag>
                        </template>
                        <template v-if="item.type=='lessonpriceText'">
                            <lb-lessonprice :lessonData="scope.row" :typeData="item"></lb-lessonprice>
                        </template>
                        <template v-if="item.type=='contentText'">
                            <lb-lessonhours :lessonData="scope.row" :typeData="item"></lb-lessonhours>
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

.search .el-select .el-input {
    width: 100;
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
            course_id: '',
            classesId: '',
            lesson_name: '请选择课程',
            lbTagArr: ['lb-trash', 'lb-editstudentinfo', 'lb-inquiry', 'lb-recording', 'lb-newsclass', 'lb-lesson', 'lb-openclass', 'lb-leaveshours', 'lb-suspendshours', 'lb-flow', 'lb-unpay_clear', 'lb-attendance'],
            openDialogArr: ['lb-leaveshours', 'lb-suspendshours', 'lb-regstudentmatchmodal', 'lb-addtrackmodal'],
            hastableSearch: false,
            selStudentAddInquiry: '',
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
        getUpdata() {
            if (this.lbTagArr.indexOf(this.$store.state.envs.currDialog) != '-1') {
                this.handleSearch()
            } else if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.selStudentAddInquiry.length > 0) {
                    let student = this.$store.state.envs.currDialogResult
                    this.$store.state.envs.currStudent = student
                    this.$store.state.envs.currDialog = ''
                    this.handleShowDialog(this.selStudentAddInquiry, student)
                    this.selStudentAddInquiry = ''
                }
            }
        },
        getSearch() {
            let nSearch = false
            if (this.moduledata && this.moduledata.pageSearch.length > 0) {
                nSearch = true
            }
            return nSearch
        },
        handlebackFun() {
            return this.getSearchFun('handleback')
        },
        handleback() {
            return this.getModuleSearchInfo('handleback').length > 0
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
        dateSearchInfo() {
            return this.getSearchFun('dateSearch')
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
        radioGroupSearchFun() {
            return this.getSearchFun('radioGroupSearch')
        },
        selectUserSearch() {
            return this.getModuleSearchInfo('selectUserSearch').length > 0
        },
        selectUserSearchInfo() {
            return this.getModuleSearchInfo('selectUserSearch')
        },
        selectLessonSearch() {
            return this.getModuleSearchInfo('selectLessonSearch').length > 0
        },
        selectLessonSearchInfo() {
            return this.getModuleSearchInfo('selectLessonSearch')
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
                this.datevalue = ''
                this.radiovalue = ''
                this.student_id = ''
                this.course_id = ''
                this.handleSearch()
            }
        }
    },
    methods: {
        lessonrouter(event, url, info) {
            if(info){
                this.$store.commit('class', info._id)
            }
            this.$store.commit('router', url)
            event.stopPropagation()
        },
        handOpenDialog(dialog) {
            if (this.openDialogArr.indexOf(dialog) != '-1') {
                this.selStudentAddInquiry = dialog
                this.$store.state.envs.currDialog = ''
                this.$store.state.envs.currDialogResult = null
                this.handleShowDialog('lb-selectstudenttpl')
            } else {
                this.handleShowDialog(dialog)
            }

        },
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
                    for (let item of searchdata) {
                        if (item.type == Search) {
                            searchInfo = item.fields
                            break
                        }
                    }
                }
            }
            return searchInfo
        },
        getSearchFun(Search) {
            let searchfun
            if (this.moduledata && this.moduledata.pageSearch.length > 0) {
                let searchdata = this.moduledata.pageSearch
                if (searchdata) {
                    for (let item of searchdata) {
                        if (item.type == Search) {
                            if (item.searchfunction) {
                                searchfun = item.searchfunction
                                break
                            }
                        }
                    }
                }
            }
            return searchfun
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
            if (this.dateSearchInfo) {
                let filterObjItem = this.dateSearchInfo(datetime, this)
                for (let item of filterObjItem) {
                    filterObj.push(item)
                }
            }
            let classId = this.$store.state.system.currStudentID
            if (classId.length > 0) {
                if (this.handlebackFun) {
                    let filterObjItem = this.handlebackFun(classId)
                    for (let item of filterObjItem) {
                        filterObj.push(item)
                    }
                }
            }
            let radiosearch_value = this.radiovalue
            if (this.radioGroupSearchFun) {
                let filterObjItem = this.radioGroupSearchFun(radiosearch_value)
                for (let item of filterObjItem) {
                    filterObj.push(item)
                }
            }
            let textsearch_value = this.textSearchValue
            if (textsearch_value.length > 0) {
                filterObj.push({
                    'key': this.textSearchKey,
                    'value': textsearch_value,
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
            let courseId = this.course_id.trim()
            if (courseId.length > 0) {
                filterObj.push({
                    'key': 'course_id',
                    'value': courseId,
                    'type': ''
                })
            }
            let studentId = this.student_id.trim()
            if (studentId.length > 0) {
                filterObj.push({
                    'key': 'student_id',
                    'value': studentId,
                    'type': ''
                })
            }
            if (this.moduledata && this.moduledata.tableSearch && this.moduledata.tableSearch.length > 0) {
                let tablesSearch = this.moduledata.tableSearch
                for (let item of tablesSearch) {
                    filterObj.push({
                        'key': 'lookup',
                        'value': item,
                        'type': 'lookup'
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
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.handleGetTable()
            })
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
