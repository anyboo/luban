<template>
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
                                        <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select>
                                            姓名
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
                            <lb-buttongroup :group-data="lb_localdata.lb_params_is_part_time" v-model="lb_localdata.form.lb_params_is_part_time"></lb-buttongroup>
                        </div>
                    </div>
                    <div class="row list-student m-t">
                        <div class="col-sm-3 col-xs-4 m-b ng-scope" ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading">
                            <div class="list-student-item box-shadow" ng-class="{'bg-info':vm.is_selected(item)}">
                                <div class="face">
                                    <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px; ">
                                        <img src=>
                                    </div>
                                </div>
                                <div class="name m-t ng-binding">
                                    <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                        <i class="fa fa-question-circle"></i>
                                    </span>陈佳木sss
                                </div>
                            </div>
                        </div>
                        <div class="grid-data-result"></div>
                    </div>
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" items-per-page="grid.params.pagesize" max-size="grid.maxsize" boundary-links="true" rotate="false"></ul>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" ng-disabled="vm.selected.length == 0" ng-click="vm.confirm();" disabled="disabled">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectTeacherTpl',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_is_part_time': ''
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
                'search_value': ''
            }
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>