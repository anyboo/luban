<template>
    <div ui-view class="wrapper">
        <div class="wrapper-xs">
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <div class="inline w-md m-l-xs" ng-if="teacher_rest">
                        </div>
                        <template v-if="getActionOption('lessonsclasses')">
                            <a @click="lbShowdialog($event,'lb-addmodule')" class="btn btn-primary pull-right">
                                <i class="fa fa-plus"></i>添加功能模块
                            </a>
                        </template>
                    </div>
                </div>
                <div class="table-responsive m-t m-t-t" style="min-height:400px" :class='{result:changeTeacher}'>
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column width="80" prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="scope.row" @command="handleCommand">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="getMenuOption" class="btn btn-info btn-xs">
                                        <i class="fa fa-cog"></i>操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="名称">
                            <template scope="scope">{{scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="功能选择">
                            <template scope="scope">{{scope.row.chargemodule}}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="收费方式">
                            <template scope="scope">{{scope.row.chargr_type}}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="描述">
                            <template scope="scope">{{scope.row.description }}</template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="panel-footer">
                    <div class="row">
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
    name: 'charge_module',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': '',
                'student_id':'',
            },
            'sclesseslookup': {
                'localField': '_id',
                'from': 'arrange',
                'foreignField': 'sclasses_id',
                'as': 'sclesses'
            }
        }
        return {
            localdata,
            tables: ['charge'],
        }
    },
    computed: {
        changeTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-addmodule') {
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

            let student_id = this.localdata.form.student_id.trim()
            if (student_id.length > 0) {
                filterObj.push({
                    'key': 'student_id',
                    'value': student_id,
                    'type': ''
                })
            }
            if (this.localdata.form.daterange && this.localdata.form.daterange.length == 2) {
                let startTime = this.getDatetime(this.localdata.form.daterange[0])
                let endTime = this.getDatetime(this.localdata.form.daterange[1])
            }

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
        handleCommand({
            action,
            data
        }) {
            if (action == 'delete') {
                {
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
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
