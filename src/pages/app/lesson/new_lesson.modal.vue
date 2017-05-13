<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="new_lesson" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-flag"></i>创建课程</h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-valid-minlength ng-valid-pattern ng-dirty">
                        <div class="panel panel-default">
                            <div class="panel-heading">基本信息</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程类型:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="btn-group">
                                            <label btn-radio="'0'" ng-model="lesson.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid active">班课</label>
                                            <label btn-radio="'1'" ng-model="lesson.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">1对1</label>
                                            <label btn-radio="'10'" ng-model="lesson.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">课时包</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程分类:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <combo-select-tree input-data-store="lesson_cates" input-data-struct="plain" multi-select="false" output-model="lesson.olcg_id" output-key="olcg_id" name-key="cate_name" id-key="olcg_id" pid-key="parent_id" data-default-label="请选择..." class="ng-isolate-scope">
                                            <div class="tree-control">
                                                <div class="tree-input" ng-click="onControlClicked($event)">
                                                    <!-- ngIf: selectedItems.length == 0 --><span ng-if="selectedItems.length == 0" class="selected-items ng-scope">
      <span ng-bind="defaultLabel" class="ng-binding">请选择...</span>
                                                    </span>
                                                    <!-- end ngIf: selectedItems.length == 0 -->
                                                    <!-- ngIf: selectedItems.length > 0 -->
                                                    <!-- <input type="text" class="blend-in" /> -->
                                                </div>
                                                <div class="tree-view ng-hide" ng-show="showTree">
                                                    <div class="helper-container">
                                                        <!-- ngIf: switchView -->
                                                        <div class="line-head">
                                                            <input placeholder="搜索..." type="text" ng-model="filterKeyword" ng-click="onFilterClicked($event)" class="input-filter ng-pristine ng-untouched ng-valid">
                                                            <span class="clear-button" ng-click="clearFilter($event)"><span class="item-close"></span></span>
                                                        </div>
                                                    </div>
                                                    <ul class="tree-container">
                                                        <!-- ngRepeat: item in inputModel -->
                                                        <tree-item class="top-level ng-scope ng-isolate-scope" ng-repeat="item in inputModel" item="item" ng-show="!item.isFiltered" use-callback="useCallback" can-select-item="canSelectItem" multi-select="multiSelect" item-selected="itemSelected(item)" on-active-item="onActiveItem(item)" select-only-leafs="selectOnlyLeafs">
                                                            <li class="ng-scope">
                                                                <div class="item-container" ng-class="{active: item.isActive, selected: item.selected}" ng-click="clickSelectItem(item, $event)" ng-mouseover="onMouseOver(item, $event)">
                                                                    <!-- ngIf: showExpand(item) -->
                                                                    <div class="item-details ng-binding">
                                                                        <!-- ngIf: showCheckbox() -->默认分类
                                                                    </div>
                                                                </div>
                                                                <!-- ngRepeat: child in item.children -->
                                                            </li>
                                                        </tree-item>
                                                        <!-- end ngRepeat: item in inputModel -->
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
                                            <div><span class="ui-select-match" placeholder="选择校区..."><!-- ngRepeat: $item in $select.selected --><span ng-repeat="$item in $select.selected" class="ng-scope"><span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{'btn-primary':$select.activeMatchIndex === $index}"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">&nbsp;×</span> <span uis-transclude-append=""><span class="ng-binding ng-scope">呵呵 &lt;呵呵&gt;</span></span>
                                                </span>
                                                </span>
                                                <!-- end ngRepeat: $item in $select.selected -->
                                                </span>
                                                <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs ng-pristine ng-untouched ng-valid" placeholder="" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" style="width: 296px;">
                                            </div>
                                            <ul class="ui-select-choices ui-select-choices-content dropdown-menu ng-scope ng-hide" role="menu" aria-labelledby="dLabel" ng-show="$select.items.length > 0" repeat="item.ob_id as item in user.gv.branchs | propsFilter: {short_name: $select.search, branch_name: $select.search}">
                                                <li class="ui-select-choices-group">
                                                    <div class="divider ng-hide" ng-show="$select.isGrouped &amp;&amp; $index > 0"></div>
                                                    <div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header ng-binding ng-hide" ng-bind-html="$group.name"></div>
                                                    <!-- ngRepeat: item in $select.items -->
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程名:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <input type="text" name="lesson_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" ng-model="lesson.lesson_name" ng-minlength="1" required="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程编号:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <input type="text" name="lesson_no" class="form-control ng-pristine ng-untouched ng-valid" ng-model="lesson.lesson_no">
                                    </div>
                                </div>
                                <!-- ngIf: lesson.lesson_type == '10' -->
                                <!-- ngIf: lesson.lesson_type == '0' -->
                                <div class="form-group ng-scope" ng-if="lesson.lesson_type == '0'">
                                    <label class="control-label col-md-3 col-xs-12">课程时间跨度:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="input-group">
                                            <div dropdown="" class="input-group-btn dropdown">
                                                <button dropdown-toggle="" class="btn btn-default" type="button" aria-haspopup="true" aria-expanded="false">选择<span class="caret"></span></button>
                                                <ul class="dropdown-menu pull-right">
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.lesson_days=30">1个月</a></li>
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.lesson_days=90">1个季度</a></li>
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.lesson_days=180">半年</a></li>
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.lesson_days=365">1年</a></li>
                                                </ul>
                                            </div>
                                            <!-- /btn-group -->
                                            <input type="text" name="lesson_days" class="form-control ng-pristine ng-untouched ng-valid" ng-model="lesson.lesson_days"> <span class="input-group-addon">天</span></div>
                                    </div>
                                </div>
                                <!-- end ngIf: lesson.lesson_type == '0' -->
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">定价</div>
                            <div class="panel-body">
                                <!-- ngIf: lesson.lesson_type == '0' -->
                                <div class="form-group ng-scope" ng-if="lesson.lesson_type == '0'">
                                    <label class="control-label col-md-3 col-xs-12">收费模式:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="btn-group">
                                            <label btn-radio="'0'" ng-model="lesson.price_model" class="btn btn-default ng-pristine ng-untouched ng-valid">按期收费</label>
                                            <label btn-radio="'1'" ng-model="lesson.price_model" class="btn btn-default ng-pristine ng-untouched ng-valid active">按次收费</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- end ngIf: lesson.lesson_type == '0' -->
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group"><span class="input-group-addon">￥</span>
                                            <input type="text" name="unit_price" ng-model="lesson.unit_price" class="form-control ng-pristine ng-untouched ng-valid" ng-change="cacu_price()">
                                            <!-- ngIf: lesson.price_model=='0' -->
                                            <!-- ngIf: lesson.price_model=='1' --><span ng-if="lesson.price_model=='1'" class="input-group-addon ng-scope">元/次</span>
                                            <!-- end ngIf: lesson.price_model=='1' -->
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">总共:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <!-- ngIf: lesson.price_model=='0' -->
                                        <!-- ngIf: lesson.price_model=='1' -->
                                        <div class="input-group ng-scope" ng-if="lesson.price_model=='1'">
                                            <input type="text" name="inc_times" ng-pattern="/^[0-9]+$/" ng-model="lesson.inc_times" ng-change="cacu_price()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern"> <span class="input-group-addon">次</span></div>
                                        <!-- end ngIf: lesson.price_model=='1' -->
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">售价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="text" name="price" ng-model="lesson.price" class="form-control ng-pristine ng-untouched ng-valid"> <span class="input-group-addon">元</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">内容</div>
                            <div class="panel-body">
                                <!-- ngIf: lesson.price_model == '0' -->
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单次课时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group m-b">
                                            <div dropdown="" class="input-group-btn dropdown">
                                                <button dropdown-toggle="" class="btn btn-default" type="button" aria-haspopup="true" aria-expanded="false">选择<span class="caret"></span></button>
                                                <ul class="dropdown-menu pull-right">
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.unit_hours=0.75;cacu_hours()">45分钟</a></li>
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.unit_hours=1.00;cacu_hours()">1个小时</a></li>
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.unit_hours=1.50;cacu_hours()">1个半小时</a></li>
                                                    <li class="text-right"><a href="javascript:;" ng-click="lesson.unit_hours=2.00;cacu_hours()">2小时</a></li>
                                                </ul>
                                            </div>
                                            <!-- /btn-group -->
                                            <input type="text" name="unit_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" ng-model="lesson.unit_hours" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-change="cacu_hours()"> <span class="input-group-addon">小时</span></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程总时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="text" name="inc_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" ng-model="lesson.inc_hours" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern"> <span class="input-group-addon">小时</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok()" disabled="disabled">
                        <!-- ngIf: saving -->确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()">取消</button>
                </div>
            </div>
          
        </div>
    </div>
</template>
<script>
export default {
    name: 'new_lesson.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
