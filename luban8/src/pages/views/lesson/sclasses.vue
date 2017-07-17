
<template>
    <div class="wrapper">
        <div class="row wrapper">
            <div class="col-xs-12 col-md-8 m-t">
                <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                    <i class="fa fa-plus"></i>新建教室
                </a>
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
                'search_key': 'student_name',
                'search_value': '姓名'
            }
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
