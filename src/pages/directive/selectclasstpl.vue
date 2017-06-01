<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-flag"></i>请选择班级
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div xo-rest="classes" xo-rest-ctrl="select_class_tpl" xo-rest-grid="{maxsize:5,params:vm.params}" loading-container=".list-group" loading-text="正在加载班级..." empty-text="没有符合条件的班级!" class="ng-scope">
                    <div class="row">
                        <div class="col-xs-12 col-md-7">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select>
                                            班级名称
                                            <span class="caret"></span>
                                        </button>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model="lb_localdata.form.lb_grid_search_value">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <a ng-click="$util.open('tpl/app/lesson/classes/open_class.modal.html','md')" @click="lbShowdialog($event,'lb-openclassmodal')" class="btn btn-primary btn-sm ng-click-active">
                                <i class="fa fa-plus"></i>新班级
                            </a>
                        </div>
                    </div>
                    <ul class="list-group m-t">
                        <template v-for="item in getTablesData()">
                            <li class="list-group-item ng-scope" ng-class="{'active':vm.is_selected(item)}" ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading">
                                <h4 class="list-group-item-heading ng-binding">{{item.class_name}}</h4>
                                <p class="list-group-item-text text-muted ng-binding">老师:陈佳木,已报人数:3/6,上课次数:0/60</p>
                            </li>
                        </template>
                        <div class="grid-data-result"></div>
                    </ul>
                  <div class="panel-footer ">
                        <div class="row ">
                            <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </lb-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" ng-disabled="vm.selected.length == 0" ng-click="vm.confirm();">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectClassTpl',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': ''
            },
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '班级名称'
                }, {
                    'name': 'master',
                    'value': '老师姓名'
                }],
                'search_key': 'class_name',
                'search_value': ''
            }
        }
        return {
            lb_localdata,
            lb_tables: ['team'],
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
