<template>
    <div>
        <div class="wrapper bg-white ng-scope" ui-view="">
            <div class="row ng-scope" ng-controller="SystemOrgCtrl" ng-init="init_data()">
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
                                    <input type="tel" name="org_tel" placeholder="XXXX-XXXXXXXX 或者 13XXXXXXXXXX" ng-pattern="/^[0-9]{1,4}-?[0-9]{5,8}$/" class="form-control w ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-model="org.org_tel">
                                </div>
                                <div class="form-group ng-scope" ng-if="org.area_id != 0">
                                    <label class="control-label">所在地区:</label>
                                    <div class="city-select ng-scope ng-valid ng-dirty ng-valid-parse" ng-class="{'open': $select.open}" ng-model="org.$$city" on-city-selected="org_city_changed">
                                        <div class="form-control ng-binding ng-dirty ng-valid" ng-class="{'ng-dirty ng-valid':$select.selected.cn.length > 0}" ng-click="$select.activate()">安徽/铜陵市/铜陵县 <span class="caret"></span></div>
                                        <div class="city-select-drop">
                                            <div class="city-select-tab">
                                                <a href="javascript:;" ng-repeat="i in $select.panel" class="col-xs-4 ng-binding ng-scope" ng-class="{'active': $select.active == $index}" ng-click="$select.changeTab($index)">省份</a>
                                                <a href="javascript:;" ng-repeat="i in $select.panel" class="col-xs-4 ng-binding ng-scope" ng-class="{'active': $select.active == $index}" ng-click="$select.changeTab($index)">城市</a>
                                                <a href="javascript:;" ng-repeat="i in $select.panel" class="col-xs-4 ng-binding ng-scope active" ng-class="{'active': $select.active == $index}" ng-click="$select.changeTab($index)">县区</a>
                                            </div>
                                            <div class="city-select-panel ng-hide" ng-show="$select.active == 0">
                                                <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                                    <dt class="col-xs-2 ng-binding">A-G</dt>
                                                    <dd class="col-xs-10">
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">安徽</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">北京</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">重庆</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">福建</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">甘肃</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">广东</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">广西</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">贵州</a>
                                                    </dd>
                                                </dl>
                                                <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                                    <dt class="col-xs-2 ng-binding">H-K</dt>
                                                    <dd class="col-xs-10">
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">海南</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">河北</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">黑龙江</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">河南</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">湖北</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">湖南</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">江苏</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">江西</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">吉林</a>
                                                    </dd>
                                                </dl>
                                                <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                                    <dt class="col-xs-2 ng-binding">L-S</dt>
                                                    <dd class="col-xs-10">
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">辽宁</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">内蒙古</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">宁夏</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">青海</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">山东</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">上海</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">山西</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">陕西</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">四川</a>
                                                    </dd>
                                                </dl>
                                                <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                                    <dt class="col-xs-2 ng-binding">T-Z</dt>
                                                    <dd class="col-xs-10">
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">天津</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">新疆</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">西藏</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">云南</a>
                                                        <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">浙江</a>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div class="city-select-panel ng-scope ng-hide" ng-repeat="i in $select.panel" ng-show="$select.active == $index" ng-if="!$first">
                                                <dl class="clearfix">
                                                    <dd>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">铜官山区</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">狮子山区</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">郊区</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope active">铜陵县</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">其它区</a>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div class="city-select-panel ng-scope" ng-repeat="i in $select.panel" ng-show="$select.active == $index" ng-if="!$first">
                                                <dl class="clearfix">
                                                    <dd>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">铜官山区</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">狮子山区</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">郊区</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope active">铜陵县</a>
                                                        <a href="javascript:;" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to($select.active + 1, ai[0])" ng-repeat="ai in $select.panelData[$select.active]" class="ng-binding ng-scope">其它区</a>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>详细地址:</label>
                                    <input type="text" name="org_address" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" ng-model="org.org_address" required="">
                                </div>
                            </form>
                        </div>
                        <div class="panel-footer">
                            <button type="submit" ng-disabled="form1.$invalid || saving" class="btn btn-primary" ng-click="rest_save('org')"><i class="fa fa-spinner fa-spin ng-hide" ng-show="saving"></i> 保存</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default ng-scope" xo-rest="branchs" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="branchs">
                <div class="panel-heading ">
                    <a class="btn btn-sm btn-primary pull-right heights" ng-click="$util.open('tpl/system/branch/add.modal.html','md',{})" @click="handleShowDialog('lb-addmodal')">
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
</template>
<script>
export default {
    name: 'groups',
    data() {
        let localdata = {
            'form': {
                'lb_node_group_name': ''
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
            lb_tables: ['campus'],
           
        }
    },
<<<<<<< HEAD
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
        this.getTabledata('cate')
    },
=======
  
>>>>>>> b6ed6e42d9ad79b27da22ffc35b2f021fc899a1f
    computed: {
       
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
