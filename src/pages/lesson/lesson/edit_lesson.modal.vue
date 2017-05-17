<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="edit_lesson" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="icon-briefcase"></i>编辑课程
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-valid ng-valid-required ng-valid-minlength ng-valid-parse ng-valid-pattern ng-dirty">
                        <div class="panel panel-default">
                            <div class="panel-heading">基本信息</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程类型:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <p class="form-control-static">
                                            <span class="label bg-danger ng-binding ng-scope" ng-if="lesson.lesson_type=='0'">班课</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程分类:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <combo-select-tree input-data-store="lesson_cates" input-data-struct="plain" multi-select="false" output-model="lesson.olcg_id" output-key="olcg_id" name-key="cate_name" id-key="olcg_id" pid-key="parent_id" data-default-label="请选择..." class="ng-isolate-scope">
                                            <div class="tree-control">
                                                <div class="tree-input" ng-click="onControlClicked($event)">
                                                    <span ng-if="selectedItems.length == 0" class="selected-items ng-scope">
                                                        <span ng-bind="defaultLabel" class="ng-binding">请选择...</span>
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
                                                                <div class="item-container" ng-class="{active: item.isActive, selected: item.selected}" ng-click="clickSelectItem(item, $event)" ng-mouseover="onMouseOver(item, $event)">
                                                                    <div class="item-details ng-binding">默认分类</div>
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
                                    <label class="control-label col-md-3 col-xs-12">适用校区:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="ui-select-multiple ui-select-bootstrap dropdown form-control ng-valid ng-dirty" ng-class="{open: $select.open}" multiple="multiple" ng-model="lesson.ob_ids" theme="bootstrap">
                                            <div>
                                                <span class="ui-select-match" placeholder="选择校区...">
                                                    <span ng-repeat="$item in $select.selected" class="ng-scope">
                                                        <span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{'btn-primary':$select.activeMatchIndex === $index}">
                                                            <span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">×</span>
                                                <span uis-transclude-append="">
                                                                <span class="ng-binding ng-scope">
                                                                    呵呵
                                                                    <呵呵></呵呵>
                                                                </span>
                                                </span>
                                                </span>
                                                </span>
                                                </span>
                                                <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs ng-pristine ng-untouched ng-valid" placeholder="" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" style="width: 296px;" v-model="lb_localdata.form.lb_$select_search">
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
                                    <label class="control-label col-md-3 col-xs-12">课程名:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <input type="text" name="lesson_name" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-minlength ng-valid-parse" ng-minlength="1" required="" v-model="lb_localdata.form.lb_lesson_lesson_name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程编号:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <input type="text" name="lesson_no" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_lesson_lesson_no">
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="lesson.lesson_type == '0'">
                                    <label class="control-label col-md-3 col-xs-12">课程时间跨度:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="input-group">
                                            <lb-dropdown>
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default">
                                                    选择
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <ul class="dropdown-menu pull-right">
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=30">1个月</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=90">1个季度</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=180">半年</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=365">1年</a>
                                                    </li>
                                                </ul>
                                            </lb-dropdown>
                                            <input type="text" name="lesson_days" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_lesson_lesson_days">
                                            <span class="input-group-addon">天</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">定价</div>
                            <div class="panel-body">
                                <div class="form-group ng-scope" ng-if="lesson.lesson_type == '0'">
                                    <label class="control-label col-md-3 col-xs-12">收费模式:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <lb-buttongroup :group-data="lb_localdata.lb_lesson_price_model" v-model="lb_localdata.form.lb_lesson_price_model"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <span class="input-group-addon">￥</span>
                                            <input type="text" name="unit_price" class="form-control ng-pristine ng-untouched ng-valid" ng-change="cacu_price()" v-model="lb_localdata.form.lb_lesson_unit_price">
                                            <span ng-if="lesson.price_model=='1'" class="input-group-addon ng-scope">元/次</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">总共:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group ng-scope" ng-if="lesson.price_model=='1'">
                                            <input type="text" name="inc_times" ng-pattern="/^[0-9]+$/" ng-change="cacu_price()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern ng-valid-parse" v-model="lb_localdata.form.lb_lesson_inc_times">
                                            <span class="input-group-addon">次</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">售价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="text" name="price" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_lesson_price">
                                            <span class="input-group-addon">元</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">内容</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单次课时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group m-b">
                                            <lb-dropdown>
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default">
                                                    选择
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <ul class="dropdown-menu pull-right">
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=0.75;cacu_hours()">45分钟</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=1.00;cacu_hours()">1个小时</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=1.50;cacu_hours()">1个半小时</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=2.00;cacu_hours()">2小时</a>
                                                    </li>
                                                </ul>
                                            </lb-dropdown>
                                            <input type="text" name="unit_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-change="cacu_hours()" v-model="lb_localdata.form.lb_lesson_unit_hours">
                                            <span class="input-group-addon">小时</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程总时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="text" name="inc_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="lb_localdata.form.lb_lesson_inc_hours">
                                            <span class="input-group-addon">小时</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok();">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'edit_lesson.modal',
    data() {
        let lb_localdata = {
            'form': {
                'lb_filterkeyword': '',
                'lb_$select_search': '',
                'lb_lesson_lesson_name': '',
                'lb_lesson_lesson_no': '',
                'lb_lesson_lesson_days': '',
                'lb_lesson_price_model': '',
                'lb_lesson_unit_price': '',
                'lb_lesson_inc_times': '',
                'lb_lesson_price': '',
                'lb_lesson_unit_hours': '',
                'lb_lesson_inc_hours': ''
            },
            'lb_lesson_price_model': [{
                'value': '0',
                'text': '按期收费'
            }, {
                'value': '1',
                'text': '按次收费'
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