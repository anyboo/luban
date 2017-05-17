<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="employee_edit" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>编辑
                        <span class="label bg-info ng-binding">陈佳木</span>的资料
                    </h3>
                </div>
                <div class="modal-body">
                    <p class="alert alert-danger ng-binding ng-hide" ng-show="rest_error"></p>
                    <form name="form1" class="form-validation form-horizontal ng-valid ng-valid-required ng-valid-minlength ng-valid-parse ng-dirty">
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">姓名:</label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="name" class="form-control w-sm ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-minlength ng-valid-parse" ng-minlength="2" ng-change="employee.account=$util.py_account(employee.name)" required="" v-model="lb_localdata.form.lb_employee_name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">性别:</label>
                            <div class="col-md-10 col-xs-12">
                                <lb-buttongroup :group-data="lb_localdata.lb_employee_sex" v-model="lb_localdata.form.lb_employee_sex"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">角色:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="ui-select-multiple ui-select-bootstrap dropdown form-control ng-valid ng-dirty" ng-class="{open: $select.open}" multiple="multiple" ng-model="employee.or_ids" theme="bootstrap">
                                    <div>
                                        <span class="ui-select-match" placeholder="选择角色...">
                                            <span ng-repeat="$item in $select.selected" class="ng-scope">
                                                <span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{'btn-primary':$select.activeMatchIndex === $index}">
                                                    <span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">×</span>
                                        <span uis-transclude-append="">
                                                        <span class="ng-binding ng-scope">校长</span>
                                        </span>
                                        </span>
                                        </span>
                                        <span ng-repeat="$item in $select.selected" class="ng-scope">
                                                <span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{'btn-primary':$select.activeMatchIndex === $index}">
                                                    <span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">×</span>
                                        <span uis-transclude-append="">
                                                        <span class="ng-binding ng-scope">教师</span>
                                        </span>
                                        </span>
                                        </span>
                                        <span ng-repeat="$item in $select.selected" class="ng-scope">
                                                <span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{'btn-primary':$select.activeMatchIndex === $index}">
                                                    <span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">×</span>
                                        <span uis-transclude-append="">
                                                        <span class="ng-binding ng-scope">前台</span>
                                        </span>
                                        </span>
                                        </span>
                                        <span ng-repeat="$item in $select.selected" class="ng-scope">
                                                <span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{'btn-primary':$select.activeMatchIndex === $index}">
                                                    <span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">×</span>
                                        <span uis-transclude-append="">
                                                        <span class="ng-binding ng-scope">管理员</span>
                                        </span>
                                        </span>
                                        </span>
                                        </span>
                                        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs ng-pristine ng-untouched ng-valid" placeholder="" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" style="width: 233px;" v-model="lb_localdata.form.lb_$select_search">
                                    </div>
                                    <ul class="ui-select-choices ui-select-choices-content dropdown-menu ng-scope ng-hide" role="menu" aria-labelledby="dLabel" ng-show="$select.items.length > 0" repeat="item.or_id as item in user.gv.roles | propsFilter:{role_name:$select.search}">
                                        <li class="ui-select-choices-group">
                                            <div class="divider ng-hide" ng-show="$select.isGrouped && $index > 0"></div>
                                            <div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header ng-binding ng-hide" ng-bind-html="$group.name"></div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="checkbox inline m-l-xs">
                                    <label class="i-checks">
                                        <input ng-true-value="'1'" ng-false-value="'0'" type="checkbox" value="1" class="ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_employee_is_sa">
                                        <i></i>助教
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">类型:</label>
                            <div class="col-md-10 col-xs-12">
                                <lb-buttongroup :group-data="lb_localdata.lb_employee_is_part_time" v-model="lb_localdata.form.lb_employee_is_part_time"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">校区:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="ui-select-multiple ui-select-bootstrap dropdown form-control ng-valid ng-dirty" ng-class="{open: $select.open}" multiple="multiple" ng-model="employee.ob_ids" theme="bootstrap">
                                    <div>
                                        <span class="ui-select-match" placeholder="选择校区...">
                                            <span ng-repeat="$item in $select.selected" class="ng-scope">
                                                <span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{'btn-primary':$select.activeMatchIndex === $index}">
                                                    <span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">×</span>
                                        <span uis-transclude-append="">
                                                        <span class="ng-binding ng-scope">
                                                            福州布尔培训
                                                            <福州布尔培训></福州布尔培训>
                                                        </span>
                                        </span>
                                        </span>
                                        </span>
                                        </span>
                                        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs ng-pristine ng-untouched ng-valid" placeholder="" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" style="width: 275px;" v-model="lb_localdata.form.lb_$select_search">
                                    </div>
                                    <ul class="ui-select-choices ui-select-choices-content dropdown-menu ng-scope ng-hide" role="menu" aria-labelledby="dLabel" ng-show="$select.items.length > 0" repeat="item.ob_id as item in user.gv.branchs | propsFilter: {short_name: $select.search, branch_name: $select.search}">
                                        <li class="ui-select-choices-group">
                                            <div class="divider ng-hide" ng-show="$select.isGrouped && $index > 0"></div>
                                            <div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header ng-binding ng-hide" ng-bind-html="$group.name"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">分组:</label>
                            <div class="col-md-10 col-xs-12">
                                <combo-select-tree input-data-store="user.gv.groups" input-data-struct="plain" multi-select="false" output-model="employee.ogp_id" output-key="ogp_id" name-key="group_name" id-key="ogp_id" pid-key="parent_id" data-default-label="请选择..." class="ng-isolate-scope">
                                    <div class="tree-control">
                                        <div class="tree-input" ng-click="onControlClicked($event)">
                                            <span ng-if="selectedItems.length > 0" class="selected-items ng-scope">
                                                <span ng-repeat="selectedItem in selectedItems" class="selected-item btn btn-xs btn-default ng-binding ng-scope">
                                                    默认分组
                                                    <span class="selected-item-close" ng-click="deselectItem(selectedItem, $event)"></span>
                                            </span>
                                            <span class="caret"></span>
                                            </span>
                                        </div>
                                        <div class="tree-view ng-hide" ng-show="showTree">
                                            <div class="helper-container">
                                                <div class="line-head">
                                                    <input placeholder="搜索..." type="text" ng-click="onFilterClicked($event)" class="input-filter ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_filterkeyword">
                                                    <span class="clear-button" ng-click="clearFilter($event)">
                                                        <span class="item-close"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <ul class="tree-container">
                                                <tree-item class="top-level ng-scope ng-isolate-scope" ng-repeat="item in inputModel" item="item" ng-show="!item.isFiltered" use-callback="useCallback" can-select-item="canSelectItem" multi-select="multiSelect" item-selected="itemSelected(item)" on-active-item="onActiveItem(item)" select-only-leafs="selectOnlyLeafs">
                                                    <li class="ng-scope">
                                                        <div class="item-container selected" ng-class="{active: item.isActive, selected: item.selected}" ng-click="clickSelectItem(item, $event)" ng-mouseover="onMouseOver(item, $event)">
                                                            <div class="item-details ng-binding">默认分组</div>
                                                        </div>
                                                    </li>
                                                </tree-item>
                                            </ul>
                                        </div>
                                    </div>
                                </combo-select-tree>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">
                                <i class="fa fa-phone"></i>电话:
                            </label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="tel" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_employee_tel">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">
                                <i class="glyphicon glyphicon-envelope"></i>Email:
                            </label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="email" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_employee_email">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok()">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'employee_edit.modal',
    data() {
        let lb_localdata = {
            'form': {
                'lb_employee_name': '',
                'lb_employee_sex': '',
                'lb_$select_search': '',
                'lb_employee_is_sa': '',
                'lb_employee_is_part_time': '',
                'lb_filterkeyword': '',
                'lb_employee_tel': '',
                'lb_employee_email': ''
            },
            'lb_employee_sex': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }],
            'lb_employee_is_part_time': [{
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