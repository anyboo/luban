t<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">请选择老师</h3>
            </div>
            <div class="modal-body ng-scope">
                <div xo-rest="employees" xo-rest-grid="{maxsize:5,params:vm.params}" loading-container=".list-student" loading-text="正在加载老师..." empty-text="没有符合条件的老师!" class="ng-scope">
                    <div class="row">
                        <div class="col-xs-12 col-md-7">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <lb-dropdowns menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                {{lb_localdata.search.search_value}}
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                <template v-for="item in lb_localdata.search.fields">
                                                    <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                                </template>
                                            </lb-dropdown-menu>
                                        </lb-dropdowns>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model="localdata.form.lb_grid_search_value">
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="lb_localdata.form.lb_search_value" @change="handleSearch">
                                    <span class="input-group-btn">
                                <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                            </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <lb-buttongroup :group-data="localdata.lb_params_is_part_time" v-model="localdata.form.lb_params_is_part_time"></lb-buttongroup>
                        </div>
                    </div>
                    <div class="row list-student m-t">
                        <template v-for="item in getTablesData()">
                            <div class="col-sm-3 col-xs-4 m-b ng-scope" ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading">
                                <div class="list-student-item box-shadow" ng-class="{'bg-info':vm.is_selected(item)}">
                                    <div class="face">
                                        <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px; ">
                                            <img :src="makeImage(item.name,80)" style="vertical-align:top;" width="100%" height="">
                                        </div>
                                    </div>
                                    <div class="name m-t ng-binding">
                                        <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                        <i class="fa fa-question-circle"></i>
                                    </span>{{item.name}}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer ">
                        <div class="row ">
                            <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </lb-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding"  ng-click="vm.confirm();" >确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectTeacherTpl',
    data() {
        let localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_is_part_time': '',
                'lb_search_value':'',
                'lb_params_status':''

            },
            'lb_params_is_part_time': [{
                'value': '0',
                'text': '全职'
            }, {
                'value': '1',
                'text': '兼职'
            }],
            'search': {
                'fields': [{
                    'name': 'name',
                    'value': '姓名'
                }, {
                    'name': 'mobile',
                    'value': '手机号'
                }],
                'search_key': 'name',
                'search_value': '姓名'
            }
        }
        return {
            localdata,
            lb_tables: ['employee'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.lb_localdata.search.search_key = value
            this.lb_localdata.search.search_value = this.lodash.find(this.lb_localdata.search.fields, {
                'name': value
            }).value
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.lb_localdata.form.lb_search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.lb_localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            console.log(this.lb_localdata.form.lb_params_status)
            let status = this.lb_localdata.form.lb_params_status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'is_part_time',
                    'value': status,
                    'type': ''
                })
            }

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
