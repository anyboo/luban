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
                    <lb-selecteusersearch v-on:search="handleSearch"></lb-selecteusersearch>
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
                        <template v-if="item.type=='constant'">
                            {{item.prop}}
                        </template>
                        <template v-if="item.type=='payment'">
                            {{getDictText('2',scope.row[item.prop])}}
                        </template>
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
                            <lb-lessontype :lessonData="scope.row" :typeData="item"></lb-lessontype>
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
                        <template v-if="item.type=='fromNow'">
                            {{ fromNow(scope.row.birth) }}
                        </template>
                        <template v-if="item.type=='studentRouter'">
                            <lb-studentrouter :lessonData="scope.row"></lb-studentrouter>
                        </template>
                        <template v-if="item.type=='studentlink'">
                            <a @click="handleRouter($event,scope.row[item.prop])">
                                <span></span>{{ getLookUp(scope.row[item.prop],'student_name') }}
                            </a>
                        </template>
                        <template v-if="item.type=='tabletext'">
                            {{ getLookUp(scope.row[item.table],item.prop) }}
                        </template>
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
                        <template v-if="item.type=='payconditions'">
                            ￥{{getPayAmout(scope.row[item.order])}}/￥{{getTotalAmout(scope.row[item.order])}}
                        </template>
                        <template v-if="item.type=='progress'">
                            <lb-progress :text-inside="true" :stroke-width="18" :percentage="getPercentage(scope.row[item.order],scope.row[item.max_student_num])" :text="getPressageText(scope.row)"></lb-progress>
                        </template>
                        <template v-if="item.type=='priceText'">
                            <lb-payconditions :lessonData="scope.row" :typeData="item"></lb-payconditions>
                        </template>
                        <template v-if="item.type=='getToFixed'">
                            {{getToFixed(scope.row[item.prop])}}
                        </template>
                        <template v-if="item.type=='lessonpriceText'">
                            <lb-lessonprice :lessonData="scope.row" :typeData="item"></lb-lessonprice>
                        </template>
                        <template v-if="item.type=='contentText'">
                            <lb-lessonhours :lessonData="scope.row"></lb-lessonhours>
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
                this.datevalue=''
                this.radiovalue=''
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
        getSearchFun(Search) {
            let searchfun = function () { }
            if (this.moduledata && this.moduledata.pageSearch.length > 0) {
                let searchdata = this.moduledata.pageSearch
                if (searchdata) {
                    for (let item of this.moduledata.pageSearch) {
                        searchfun = item.searchfunction
                        break
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
