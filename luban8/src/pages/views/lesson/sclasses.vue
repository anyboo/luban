
<template>
<<<<<<< HEAD
    <div ui-view class="ng-scope wrapper ">
        <div class="wrapper-xs ng-scope">
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="padder">
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
                    <div class="col-xs-12 col-md-8 m-t">
                        <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                        </div>
                        <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                            <i class="fa fa-plus"></i>新建教室
                        </a>
                    </div>
                </div>
                <div class="table-responsive m-t m-t-t" style="min-height:400px" :class='{result:changeTeacher}'>
                    <el-table :data="getTablesData()" stripe>
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
                        <el-table-column prop="data" label="教室名称" class="modalClass-header">
                            <template scope="scope">{{ scope.row.class_name }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="最大人数">
                            <template scope="scope">{{ scope.row.max_student_num }}</template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="panel-footer ">
                    <div class="row ">
                        <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </el-pagination>
                    </div>
                </div>
=======
    <div class="wrapper">
        <div class="row wrapper">
            <div class="col-xs-12 col-md-8 m-t">
                <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                    <i class="fa fa-plus"></i>新建教室
                </a>
>>>>>>> 3ba0ff0224a5902735938e465ea031afc2d03cc8
            </div>
        </div>
        <div class="row " v-if="localdata.form.view_mode == 'list'">
            <el-table :data="getTablesData()" style="width: 100%">
                <el-table-column prop="table" label="表单" width="180">
                </el-table-column>
                <el-table-column prop="name" label="名称" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="row  footer-panels">
            <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
            </el-pagination>
        </div>
    </div>
</template>
<<<<<<< HEAD
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

.modal-body {
    padding: 5px;
    height: 97px;
}

.modal-body .form-group {
    margin-bottom: 5px;
}

.control-label {
    font-weight: normal;
    text-align: left;
=======
<style >
.footer-panels {
    padding: 10px 15px;
}

.bg-gray {
    background-color: #cfcfcf;
    color: #ffffff;
}

.cell {
    font-size: 14px;
}

div.row.wrapper {
    padding: 0 15px 15px 15px;
}

.col-md-4 {
    width: 33.33333333%;
}

.col-md-12 {
    width: 33.33333333%;
>>>>>>> 3ba0ff0224a5902735938e465ea031afc2d03cc8
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
            'dropDownMenu': [{
                'url': 'lb-editinfomodal',
                'icon': 'fa fa-pencil',
                'text': '修改资料'
            }/*, {
                'url': 'lb-editphotomodal',
                'icon': 'fa fa-image',
                'text': '更换头像'
            }*/, {
                'url': 'lb-ordermodal',
                'icon': 'fa fa-shopping-cart',
                'text': '报名'
            }, {
                'url': 'lb-refundmodal',
                'icon': 'fa fa-money',
                'text': '缴费'
            }/*, {
                'url': 'lb-changeclassmodal',
                'icon': 'fa fa-exchange',
                'text': '转班'
            }*/, {
                'url': 'lb-addtrackmodal',
                'icon': 'fa fa-phone-square',
                'text': '跟踪回访'
            }, {
                'url': 'lb-regstudentmatchmodal',
                'icon': 'fa fa-flag-o',
                'text': '登记赛事记录'
            }, {
                'url': 'lb-refundmodal',
                'icon': 'fa fa-reply',
                'text': '退费'
            },/* {
                'url': 'lb-endlessonmodal',
                'icon': 'fa fa-stop',
                'text': '结课'
            }, {
                'url': 'lb-changebranchmodal',
                'icon': 'icon-shuffle',
                'text': '转校区'
            }*/],
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
<<<<<<< HEAD
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
=======
                'search_key': 'student_name',
                'search_value': '姓名'
            }
>>>>>>> 3ba0ff0224a5902735938e465ea031afc2d03cc8
        }
        return {
            localdata,
            tables: ['student'],
        }
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
