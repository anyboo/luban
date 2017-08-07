<template>
    <div class="table-block table-box">
        <div class="search">
            <el-row :gutter="12">
                <el-col :span="6" v-if="textSearch">
                    <el-input placeholder="请输入内容" v-model="textSearchValue" @change="handleSearch">
                        <el-select v-model="textSearchKey" slot="prepend" placeholder="请选择" @change="handleSearch">
                            <el-option v-for="item in textSearchInfo" :key="item.value" :value="item.value" :label="item.label"></el-option>
                        </el-select>
                        <el-button slot="append" icon="search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4" v-if="dateSearch">
                    <div class="block">
                        <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="5" v-if="radioGroupSearch">
                    <el-radio-group v-model="radio">
                        <template v-for="item in radioGroupSearchInfo">
                            <el-radio-button :label="item.label"></el-radio-button>
                        </template>
                    </el-radio-group>
                </el-col>
                <el-col :span="5" v-if="groupBtnSearch">
                    <el-button-group>
                        <template v-for="item in groupBtnSearchInfo">
                            <el-button :type="item.type">{{item.label}}</el-button>
                        </template>
                    </el-button-group>
                </el-col>
                <el-col :span="2" v-if="singleBtnSearch" class="pull-right">
                    <template v-for="item in singleBtnSearchInfo">
                        <el-button :type="item.type"  @click="lbShowdialog($event,'lb-newsclassmodal')">{{item.label}}</el-button>
                    </template>
                </el-col>
            </el-row>
        </div>
        <el-table :data="moduleTableData" stripe border>
            <template v-for="item in textTableInfo">
                <el-table-column :label="item.label">
                    <template scope="scope">
                        <template v-if="item.type=='datetime'">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
                        </template>
                        <template v-if="item.type=='text'">{{ scope.row[item.prop] }}</template>
                        <template v-if="item.type=='operation'">
                            <el-dropdown @command="handleCommand">
                                <el-button size="mini">
                                    {{item.label}}
                                    <i class="el-icon-caret-bottom el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown" >
                                    <template v-for="value in item.fields">
                                        <el-dropdown-item :command="value.action">{{value.msg}}</el-dropdown-item>
                                    </template>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>
                        <template v-if="item.type=='textTag'">
                            <el-tag :type="item.color">{{ scope.row[item.prop]}}</el-tag>
                        </template>
                        <template v-if="item.type=='progress'">
                            <lb-progress :text-inside="true" :stroke-width="18" :percentage="Number(item.percentage)" :text="item.text"></lb-progress>
                        </template>
                        <template v-if="item.type=='priceText'">
                            <p>
                                课程单价:50元/次
                            </p>
                            <p>
                                <label>课程售价:</label>
                                <span class="label bg-info">5000</span>元
                            </p>
                        </template>
                        <template v-if="item.type=='contentText'">
                            <p>
                                <label>单次课时长:</label>
                                <span class="label bg-info">10</span>时
                            </p>
                            <p>
                                <label>课程包含:</label>
                                <template>
                                    <span class="label bg-info">50</span>次
                                </template>
                                <span class="label bg-info">2</span>课时
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
    props: ['module'],
    data() {
        return {
            moduledata: pagesmodule[this.module],
            textSearchKey: '',
            textSearchValue: '',
            moduleTableData: [],
            value7: '',
            radio: '',
            pickerOptions2: {
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
            }
        }
    },
    mounted() {
    },
    computed: {
        //搜索
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
        //表格
        textTableInfo() {
            let textTableInfo = this.moduledata.pageTableField
            return textTableInfo
        }
    },
    watch: {
        module: function (val) {
            this.moduledata = pagesmodule[val]
        }
    },
    methods: {
        getModuleSearchInfo(Search) {
            let searchInfo = []
            let searchdata = this.moduledata.pageSearch
            if (searchdata) {
                for (let item of this.moduledata.pageSearch) {
                    if (item.type == Search) {
                        searchInfo = item.fields
                        break
                    }
                }
            }
            return searchInfo
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.textSearchValue
            console.log(search_value)
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.textSearchKey,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            console.log(this.moduledata.pageTable, filterTxt, filterObj)
            this.handleGetFilterTableTable(this.moduledata.pageTable, filterTxt).then((obj) => {
                this.moduleTableData = obj.data.data
                console.log(this.moduleTableData)
            })
        },
        handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
}
</script>
