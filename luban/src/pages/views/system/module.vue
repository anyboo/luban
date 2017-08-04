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
                <el-col :span="9" v-if="dateSearch">
                    <el-date-picker v-model="value7" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2">
                    </el-date-picker>
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
                <el-table-column :label="item.label" width="280">
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
                                <template v-for="item in item.fields">
                                    <el-dropdown-menu slot="dropdown" >
                                        <el-dropdown-item>{{item}}</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </template>
                        <template v-if="item.type=='textTag'">
                            <el-tag :type="item.color">{{ scope.row[item.prop]}}</el-tag>
                        </template>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <!-- <el-table :data="tableData" stripe border>
                                        <el-table-column label="日期" width="180">
                                            <template scope="scope">
                                                <el-icon name="time"></el-icon>
                                                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="name" label="姓名" width="180">
                                        </el-table-column>
                                        <el-table-column prop="address" label="地址">
                                        </el-table-column>
                                        <el-table-column label="操作" width="150">
                                            <template scope="scope">
                                                <el-dropdown>
                                                    <el-button size="mini">
                                                        操作
                                                        <i class="el-icon-caret-bottom el-icon--right"></i>
                                                    </el-button>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </template>
                                        </el-table-column>
                                    </el-table> -->
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
        let localdata = {
            'form': {
                'search_value': '',
                'status': ''
            },
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '教室名'
                }],
                'search_key': 'class_name',
                'search_value': '教室名'
            },
            'sclesseslookup': {
                'localField': '_id',
                'from': 'arrange',
                'foreignField': 'sclasses_id',
                'as': 'sclesses'
            }
        }
        return {
            module: module.pages.lessonsclasses,
            localdata,
            tables: ['sclasses'],
            input5: '',
            select: '',
            value7: '',
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
                tagtext:'陈狗陈'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                tagtext:'陈狗陈'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                tagtext:'陈狗陈'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                tagtext:'陈狗陈'
            }]
        }
    },
    mounted() {
        console.log(this.module)
    },
    computed: {
        changeTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-newsclass') {
                this.handleSearch()
            }
            return result
        },
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
        //表格
        textTableInfo() {
            let textTableInfo = this.module.pageTableField
            return textTableInfo
        }
    },
    watch: {},
    methods: {
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.localdata.form.search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.sclesseslookup,
                'type': 'lookup'
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then((obj) => {
                console.log(obj)
            })
        },
        handleCommand({
            action,
            data
        }) {
            if (action == 'delete') {
                if (data.sclesses.length > 0) {
                    this.$message({
                        type: 'info',
                        message: '该教室已有排课，请先删除排课教室再进行此操作'
                    })
                } else {
                    this.$confirm('此操作将永久删除该教室, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.handleDelete(data._id).then(() => {
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                            this.handleGetTable()
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
