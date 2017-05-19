<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-user"></i>请选择学员
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div xo-rest="students" xo-rest-ctrl="modal_select_student" xo-rest-grid="{maxsize:5,params:vm.params}" loading-container=".list-student" loading-text="正在加载学员..." empty-text="没有符合条件的学员!" class="ng-scope">
                    <div class="row wrapper no-gutter bg-light">
                        <div class="col-xs-2">
                            <p>筛选</p>
                            <button class="btn btn-default btn-xs" ng-class="{'btn-info':show_en_name,'active':show_en_name}" ng-click="toggle_en_name()" ui-toggle-class="btn-info">英文名</button>
                        </div>
                        <div class="col-xs-10">
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
                            <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status"></lb-buttongroup>
                            <lb-buttongroup :group-data="lb_localdata.lb_view_mode" v-model="lb_localdata.form.lb_view_mode"></lb-buttongroup>
                        </div>
                    </div>
                    <div class="table-responsive ng-scope" ng-if="view_mode == 'list'">
                        <lb-table :data="getTableData" stripe>
                            <lb-table-column width="30" prop="data" label>
                                <template scope="scope">
                                    <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="学员">
                                <template scope="scope">
                                    <span class="ng-binding">录好</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="性别">
                                <template scope="scope">
                                    <span ng-bind-html="item.sex|sex:1" class="ng-binding">男</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="英文名">
                                <template scope="scope"></template>
                            </lb-table-column>
                        </lb-table>
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
    name: 'selectStudentTpl',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_status': '',
                'lb_view_mode': ''
            },
            'lb_params_status': [{
                'value': '0',
                'text': '未报读'
            }, {
                'value': '1',
                'text': '已报读'
            }],
            'lb_view_mode': [{
                'value': 'image',
                'iclass': 'fa fa-image',
                'text': '头像'
            }, {
                'value': 'list',
                'iclass': 'fa fa-list',
                'text': '列表'
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