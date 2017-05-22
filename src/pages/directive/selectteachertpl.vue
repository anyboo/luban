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
                                    <div class="input-group-btn" ng-init=" filter.fields = [ {name:'name',value:'姓名'}, {name:'mobile',value:'手机号'} ]; grid.search_key = 'name'; grid.search_value = ''; ">
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
                                        <img src="data:image/png;base64,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" class="avatar-picture" style="vertical-align:top;" width="100%" height>
                                    </div>
                                </div>
                                <div class="name m-t ng-binding">
                                    <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                        <i class="fa fa-question-circle"></i>
                                    </span>陈佳木
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
            }]
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