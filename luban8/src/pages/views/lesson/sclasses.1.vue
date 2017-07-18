
<template>
    <div class="wrapper">
        <div class="row wrapper">
            <div class="col-xs-12 col-md-8 m-t">
                <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                </div>
                <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                    <i class="fa fa-plus"></i>新建表单
                </a>
                <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                    <i class="fa fa-plus"></i>新建视图
                </a>
            </div>
            <div class="row " v-if="localdata.form.view_mode == 'list'">
                <el-table :data="getTablesData()" style="width: 100%">
                    <el-table-column width="80" prop="data" label="操作">
                        <template scope="scope">
                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row" @command="handleCommand">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="localdata.dropDownMenu" class="btn btn-info btn-xs">
                                    <i class="fa fa-cog"></i>操作
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                    </el-table-column>
                    
                    <el-table-column prop="data" label="表单名称" width="180">
                        <template scope="scope">
                            {{ scope.row.tabelname }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="字段名称" width="180">
                        <template scope="scope">
                            {{ scope.row.name }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="字段名">
                        <template scope="scope">
                            {{ scope.row.field }}
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="row  footer-panels">
                <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style>
.modal-header {
    background: #1892d1;
    border-radius: 5px 5px 0 0;
    padding: 9px 15px;
}

.modal-header>.modal-title {
    font-size: 1.17em;

    color: #ffffff;
}

.modal-body .form-group {
    margin-bottom: 5px;
}

.control-label {
    font-weight: normal;
    text-align: left;
}
</style>
<script>
export default {
    name: 'list',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': '',
                'view_mode': 'list'
            },
            'status': [{
                'value': '',
                'text': '所有学员'
            }, {
                'value': '0',
                'text': '未报读学员'
            }, {
                'value': '1',
                'text': '已报读学员'
            }],
            'view_mode': [{
                'value': 'image',
                'iclass': 'fa fa-image',
                'text': '头像'
            }, {
                'value': 'list',
                'iclass': 'fa fa-list',
                'text': '列表'
            }],
            'lookup': {
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
            'search': {
                'fields': [{
                    'name': 'student_name',
                    'value': '姓名'
                }, {
                    'name': 'first_tel',
                    'value': '手机号'
                }, {
                    'name': 'home_address',
                    'value': '住址'
                }, {
                    'name': 'nickname',
                    'value': '英文名'
                }, {
                    'name': 'card_no',
                    'value': '学员卡号'
                }],
                'search_key': 'class_name',
                'search_value': '教室名'
            },
            'dropDownMenu': [{
                'url': 'lb-newsclassmodal',
                'icon': 'fa fa-pencil',
                'text': '编辑'
            }, {
                'action': 'delete',
                'icon': 'fa fa-times',
                'text': '删除'
            }]
        }
        return {
            localdata,
            tables: ['lbtable'],
            lbtable,
            view: 'student',
            tableheader: []
        }
    },
    mounted() {
        this.getTableApidata('lbtable').then((obj) => {
            this.lbtable = obj.data.data
        })
        this.getTableApidata('lbstudentTHeader').then((obj) => {
            this.tableheader = obj.data.data
        })
    },
    computed: {
        changeTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-newsclass') {
                this.handleSearch()
            }
            return result
        },
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

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
        handleCommand({
            action,
            data
        }) {
            if (action == 'delete') {
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
</script>
