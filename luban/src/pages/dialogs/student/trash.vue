<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="icon-lock"></i>已封存学员档案列表
                </h3>
            </div>
            <div class="wrapper bg-white" xo-rest="students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,isdelete:1}}" xo-rest-ctrl="trash">
                <div ng-if="$action == 'list'" >
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
                    <div class="table-responsive m-t">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="学生姓名">
                                <template scope="scope">
                                    <span >
                                    <i class="fa" :class="{'fa-female':scope.row.sex=='0','fa-male':scope.row.sex!='0'}"></i>
                                </span>{{ scope.row.student_name }}
                                    <span v-if="scope.row.nickname != ''" >{{ scope.row.nickname }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="联系电话">
                                <template scope="scope">{{ scope.row.first_tel }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="建档日期">
                                <template scope="scope">2017-05-13</template>
                            </el-table-column>
                            <el-table-column prop="data" label="操作">
                                <template scope="scope">
                                    <a class="link" @click="do_recover(scope.row._id)">
                                        <i class="icon-lock-open"></i>恢复
                                    </a>
                                    <a class="link" @click="confirm_delete(scope.row._id)">
                                        <i class="fa fa-times"></i>删除
                                    </a>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer ">
                        <div class="row ">
                            <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import base64 from '~/api/base64.js'
export default {
    name: 'trash',
    data() {
        let localdata = {
            'form': {
                'search_value': ''
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
                }],
                'search_key': 'student_name',
                'search_value': '姓名'
            }
        }
        return {
            localdata,
            tables: ['student'],
            alias: 'trash'
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = _.find(this.localdata.search.fields, {
                'name': value
            }).value
        },
        do_recover(id) {
            let vm = this
            vm.updateTeble('student', id, {
                'isdel': false
            }).then(() => {
                vm.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.$store.state.envs.currDialog = 'lb-trash'
                vm.handleSearch()
            })
        },
        confirm_delete(id) {
            let vm = this
            vm.$confirm('是否确定删除学员的档案?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vm.handleDelete(id).then(() => {
                    vm.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.$store.state.envs.currDialog = 'lb-trash'
                    vm.handleSearch()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
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
                'key': 'isdel',
                'value': true,
                'type': ''
            })
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
