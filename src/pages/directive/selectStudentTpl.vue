<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-user"></i>  请选择学员                 </h3>
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
                                        <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">
姓名 
                                            <span class="caret"></span>
                                        </button>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" ng-model="grid.search_value" placeholder="关键字">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                    </span>
                                </div>
                            </div>
                            <div class="btn-group m-t">
                                <label btn-radio="" ng-model="params.status" class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                                <label btn-radio="'0'" ng-model="params.status" class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid">未报读</label>
                                <label btn-radio="'1'" ng-model="params.status" class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid">已报读</label>
                            </div>
                            <div class="btn-group m-t">
                                <label btn-radio="'image'" ng-model="view_mode" class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid">
                                    <i class="fa fa-image"></i>  头像
                                </label>
                                <label btn-radio="'list'" ng-model="view_mode" class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid active">
                                    <i class="fa fa-list"></i>  列表
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive ng-scope" ng-if="view_mode == 'list'">
                        <table class="table table-striped table-hover b-t b-light">
                            <thead>
                                <tr>
                                    <th width="30"></th>
                                    <th>学员</th>
                                    <th>性别</th>
                                    <th>英文名</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">录好</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">男</span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">III</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">男</span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">LLL</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">男</span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">小兵</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">女</span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">李岩</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">男</span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">李达康</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">男</span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">李哥</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">男</span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr ng-click="vm.select(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td>
                                        <i class="fa fa-circle-o" ng-class="{'fa-circle-o':!vm.is_selected(item),'fa-check-circle':vm.is_selected(item)}"></i>
                                    </td>
                                    <td>
                                        <span class="ng-binding">陈一</span>
                                    </td>
                                    <td>
                                        <span ng-bind-html="item.sex|sex:1" class="ng-binding">女</span>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" items-per-page="grid.params.pagesize" max-size="grid.maxsize" boundary-links="true" rotate="false">
                    </ul>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" ng-disabled="vm.selected.length == 0" ng-click="vm.confirm();" disabled="disabled">确定</button>             </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectStudentTpl',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>