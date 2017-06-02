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
                                        <lb-dropdowns menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                {{localdata.search.search_value}}
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                <template v-for="item in localdata.search.fields">
                                                    <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                                </template>
                                            </lb-dropdown-menu>
                                        </lb-dropdowns>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                    <span class="input-group-btn">
                                            <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
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
import base64 from '~/api/base64.js'
export default {
    name: 'selectClassTpl',
    data() {
        let localdata = {
            'form': {
                'lb_grid_search_value': '',
                'search_value': '',
                'status': '',
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
                'search_value': '班级名称'
            }
        }
        return {
            localdata,
            lb_tables: ['team'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
            this.handleSearch()
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
            let status = this.localdata.form.status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'track_type',
                    'value': status,
                    'type': ''
                })
            }
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
