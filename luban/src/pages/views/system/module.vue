<template>
    <div class="table-block table-box">
        <div class="search">
            <el-row :gutter="12">
                <el-col :span="6" v-if="textSearch">
                    <el-input placeholder="请输入内容" v-model="input5">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
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
                <el-col :span="2" v-if="singleBtnSearch">
                    <template v-for="item in singleBtnSearchInfo">
                        <el-button :type="item.type" :icon="item.icon" @click="lbShowdialog($event,'lb-newsystemmodule')">{{item.label}}</el-button>
                    </template>
                </el-col>
            </el-row>
        </div>
        <el-table :data="tableData" stripe border>
            <template v-for="item in textTableInfo">
                <el-table-column :label="item.label">
                    <template scope="scope">
                        <template v-if="item.type=='datetime'">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
                        </template>
                        <template v-if="item.type=='text'">{{ scope.row[item.prop] }} </template>
                        <template v-if="item.type=='operation'">
                            <el-dropdown>
                                <el-button size="mini">
                                    {{item.label}}
                                    <i class="el-icon-caret-bottom el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <template v-for="value in item.fields">
                                        <el-dropdown-item>{{value}}</el-dropdown-item>
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
import module from '~/stores/module.js'
export default {
    name: 'sclasses',
    data() {
        let localdata = {}
        return {
            module: module.pages.lessonsclasses,
            localdata,
            tables: ['sclasses'],
            input5: '',
            select: '',
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
            },
            tableData: [{
                name: '王小虎',
                date: '2016-05-02',
                tagtext: '陈狗陈'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                tagtext: '陈狗陈'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                tagtext: '陈狗陈'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                tagtext: '陈狗陈'
            }]
        }
    },
    mounted() {
        console.log(this.module)
    },
    computed: {
        //搜索
        textSearchInfo() {
            let textSearchInfo = []
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'textSearch') {
                        textSearchInfo = item.fields
                        break
                    }
                }
            }
            return textSearchInfo
        },
        textSearch() {
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'textSearch') {
                        return true
                    }
                }
            }
            return false
        },
        dateSearch() {
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'dateSearch') {
                        return true
                    }
                }
            }
            return false
        },
        singleBtnSearch() {
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'singleBtnSearch') {
                        return true
                    }
                }
            }
            return false
        },
        singleBtnSearchInfo() {
            let singleBtnSearchInfo = []
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'singleBtnSearch') {
                        singleBtnSearchInfo = item.fields
                        break
                    }
                }
            }
            return singleBtnSearchInfo
        },
        groupBtnSearch() {
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'groupBtnSearch') {
                        return true
                    }
                }
            }
            return false
        },
        groupBtnSearchInfo() {
            let groupBtnSearchInfo = []
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'groupBtnSearch') {
                        groupBtnSearchInfo = item.fields
                        break
                    }
                }
            }
            return groupBtnSearchInfo
        },
        radioGroupSearch() {
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'radioGroupSearch') {
                        return true
                    }
                }
            }
            return false
        },
        radioGroupSearchInfo() {
            let radioGroupSearchInfo = []
            let searchdata = this.module.pageSearch
            if (searchdata) {
                for (let item of this.module.pageSearch) {
                    if (item.type == 'radioGroupSearch') {
                        radioGroupSearchInfo = item.fields
                        break
                    }
                }
            }
            return radioGroupSearchInfo
        },
        //表格
        textTableInfo() {
            let textTableInfo = this.module.pageTableField
            return textTableInfo
        }
    },
    watch: {},
    methods: {}
}
</script>
