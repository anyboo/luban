<template>
    <div>
        <div class="ng-scope">
            <div class="wrapper-xs ng-scope">
                <div class="wrapper panel panel-default bg-white ng-scope">
                    <div class="row ng-scope">
                        <div class="col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4>机构基本信息</h4></div>
                                <div class="panel-body">
                                    <form name="form1" class="form-validation ng-invalid ng-invalid-required ng-valid-pattern ng-dirty ng-valid-parse">
                                        <div class="form-group">
                                            <label class="control-label">机构全称:</label>
                                            <input type="text" name="org_name" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" ng-model="org.org_name" required="">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">机构简称:</label>
                                            <input type="text" name="org_short_name" class="form-control ng-pristine ng-invalid ng-invalid-required ng-touched" ng-model="org.org_short_name" required="">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">机构联系电话:</label>
                                            <input type="text" placeholder="" class="form-control  ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-model="org.org_tel">
                                        </div>
                                        <div class="form-group ng-scope" ng-if="org.area_id != 0">
                                            <label class="control-label">所在地区:</label>
                                            <input type="text" name="org_address" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" ng-model="org.org_address" required="">
                                        </div>
                                        <div class="form-group">
                                            <label>详细地址:</label>
                                            <input type="text" name="org_address" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" ng-model="org.org_address" required="">
                                        </div>
                                    </form>
                                </div>
                                <div class="panel-footer">
                                    <button type="button" class="btn btn-primary" ng-click="rest_save('org')">保存</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default ng-scope">
                        <div class="panel-heading ">
                            <a class="btn btn-sm btn-primary pull-right heights" @click="handleShowDialog('lb-addmodal')">
                                <i class="fa fa-plus"></i> 添加新校区</a>
                            <h4 class="manages">校区管理</h4></div>
                        <div class="panel-body no-padder">
                            <div class="table-responsive">
                                <lb-table :data="getTablesData()" stripe>
                                    <lb-table-column width="100" prop="data" label="操作">
                                        <template scope="scope">
                                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row" @command="handleCommand">
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="localdata.dropDownMenu">
                                                    <i class="fa fa-cog"></i>操作
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                            </lb-dropdown>
                                        </template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="校区简称">
                                        <template scope="scope">{{ scope.row.short_name }}</template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="校区全称">
                                        <template scope="scope">{{ scope.row.branch_name }}</template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="所在地区">
                                        <template scope="scope">{{ scope.row.short_name }}</template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="地址">
                                        <template scope="scope">{{scope.row.branch_address}}</template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="联系电话">
                                        <template scope="scope">{{ scope.row.branch_tel }}</template>
                                    </lb-table-column>
                                </lb-table>
                            </div>
                        </div>
                        <div class="panel-footer ">
                            <div class="row ">
                                <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                                </lb-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'groups',
    data() {
        let localdata = {
            'form': {
                'node_group_name': ''
            },
            'dropDownMenu': [{
                'url': 'lb-addmodal',
                'icon': 'fa fa-pencil',
                'text': '编辑'
            }, {
                'action': 'delete',
                'icon': 'fa fa-times',
                'text': '删除'
            }],
        }
        return {
            localdata,
            tables: ['campus'],

        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
    },
    watch: {},
    methods: {
        handleCommand({
            action,
            data
        }) {
            if (action == 'delete') {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
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
