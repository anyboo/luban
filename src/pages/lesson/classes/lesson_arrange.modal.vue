<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="js/modules/class_arrange.js" class="ng-scope"></div>
            <div ng-controller="ClassLessonArrangeCtrl" ng-init="init()" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <lb-buttongroup :group-data="lb_localdata.lb_arrange_type" v-model="lb_localdata.form.lb_arrange_type"></lb-buttongroup>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>为
                        <span class="label bg-info ng-binding">11</span>排课
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter">
                        <div class="col-xs-12 col-md-5">
                            <ul class="list-unstyled">
                                <li class="m-t-xs">
                                    <label>课程名:</label>
                                    <span class="ng-binding">22</span>
                                </li>
                                <li class="m-t-xs">
                                    <label>单次课时:</label>
                                    <span class="ng-binding">120分钟</span>
                                </li>
                                <li class="m-t-xs">
                                    <label>授课老师:</label>
                                    <span class="ng-binding">张英乙</span>
                                    <a ng-click="$util.open('tpl/app/lesson/classes/teacher_arranges.modal.html','md',teacher_rest)" @click="lbShowdialog($event,'lb-teacherarrangesmodal')">查看排课</a>
                                </li>
                                <li class="m-t-xs">
                                    <label>开课日期:</label>
                                    <span class="ng-binding">2017-05-13</span>
                                </li>
                                <li class="m-t-xs">
                                    <label>总课次数:</label>
                                    <span class="ng-binding">2</span>
                                </li>
                                <li class="m-t-xs">
                                    <label>排课情况:</label>
                                    <div class="inline w va-m">
                                        <div class="progress ng-isolate-scope" style="margin:0" max="class.total_times" value="class.total_arrange" type="warning">
                                            <div class="progress-bar progress-bar-warning" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="2" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                                <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 2</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="well ng-hide" ng-show="arrange_type == 1">
                                <p>
                                    <i class="fa fa-info"></i>自由排课模式下，设置好上课时间后直接点击日历上的日期就可以增加一条完整的排课记录。
                                </p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-7">
                            <div class="pos-rlt" ng-show="arrange_type == 0">
                                <ul class="list-unstyled">
                                    <li class="m-t-xs">
                                        <label class="va-m">开始日期:</label>
                                        <div class="inline w-xs va-m">
                                            <input type="text" class="form-control no-padder text-center ng-pristine ng-untouched ng-valid" datetimepicker="date" v-model="lb_localdata.form.lb_week_loop_start">
                                        </div>
                                        <div class="m-l-xs inline w-xs va-m">
                                            <div class="input-group bootstrap-touchspin">
                                                <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span>
                                                <input class="form-control ng-pristine ng-untouched ng-valid" ui-jq="TouchSpin" type="text" data-min="0" data-max="2" data-verticalbuttons="true" data-verticalupclass="fa fa-caret-up" data-verticaldownclass="fa fa-caret-down" style="display: block;" v-model="lb_localdata.form.lb_week_loop_times">
                                                <span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span>
                                                <span class="input-group-btn-vertical">
                                                    <button class="btn btn-default bootstrap-touchspin-up" type="button">
                                                        <i class="fa fa-caret-up"></i>
                                                    </button>
                                                    <button class="btn btn-default bootstrap-touchspin-down" type="button">
                                                        <i class="fa fa-caret-down"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <span class="va-m">次</span>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="va-t">上课周期:</label>
                                        <div class="inline va-t">
                                            <div class="m-b-xs ng-scope" ng-repeat="item in week_loops">
                                                <div class="inline va-m w-xs">
                                                    <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-options="w.value as w.name for w in week_days" v-model="lb_localdata.form.lb_item_week">
                                                        <option value="" class="">每周</option>
                                                        <option value="0">周六</option>
                                                        <option value="1">周日</option>
                                                        <option value="2">周一</option>
                                                        <option value="3">周二</option>
                                                        <option value="4">周三</option>
                                                        <option value="5">周四</option>
                                                        <option value="6">周五</option>
                                                    </select>
                                                </div>
                                                <div class="inline m-l-xs va-m">
                                                    <input type="text" ng-readonly="true" style="width:70px" datetimepicker="time" datetimepicker-option="{step:15}" class="form-control input-sm w-xs inline ng-pristine ng-untouched ng-valid" ng-change="item.int_end_hour=fill_etime(item.int_start_hour)" readonly="readonly" v-model="lb_localdata.form.lb_item_int_start_hour">
                                                    <span class="inline">~</span>
                                                    <input type="text" ng-readonly="true" style="width:70px" class="form-control input-sm w-xs inline ng-pristine ng-untouched ng-valid" datetimepicker="time" datetimepicker-option="{step:15}" readonly="readonly" v-model="lb_localdata.form.lb_item_int_end_hour">
                                                    <lb-dropdown>
                                                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-sm">
                                                            选择时间段
                                                            <span class="caret"></span>
                                                        </lb-dropdown-button>
                                                        <lb-dropdown-menu slot="menuslot"></lb-dropdown-menu>
                                                    </lb-dropdown>
                                                </div>
                                                <div class="inline va-m">
                                                    <a ng-if="$first" class="btn btn-sm btn-default ng-scope" ng-click="add_week_loop_item()" ng-disabled="week_loops.length > 6">
                                                        <i class="icon-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="m-t-xs">
                                        <label></label>
                                        <div class="inline">
                                            <a class="btn btn-info btn-sm" ng-disabled="class.total_arrange >= class.total_times" ng-click="pre_arrange()">开始排课</a>
                                            <a class="btn btn-danger btn-sm" ng-click="clear_pre_arrange()">清除</a>
                                            <a class="link" ng-click="show_week_loop_avoid=true">设置避开日期</a>
                                        </div>
                                    </li>
                                </ul>
                                <div ng-show="show_week_loop_avoid" class="pos-abt b-a bg-white box-shadow fade-in-up ng-hide" style="width:100%;z-index:2;left:0;top:0;height:190px">
                                    <div class="wrapper-xs">
                                        <div>
                                            <strong class="m-l-xs">设置排课避开日期</strong>
                                            <div class="inline">
                                                <lb-dropdown>
                                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-sm btn-default">
                                                        <i class="fa fa-plus"></i>节假日
                                                        <span class="caret"></span>
                                                    </lb-dropdown-button>
                                                    <lb-dropdown-menu slot="menuslot">
                                                        <li ng-repeat="item in holidays" class="ng-scope">
                                                            <a ng-click="add_holiday_avoid_day(item)" class="ng-binding">劳动节</a>
                                                        </li>
                                                        <li ng-repeat="item in holidays" class="ng-scope">
                                                            <a ng-click="add_holiday_avoid_day(item)" class="ng-binding">儿童节</a>
                                                        </li>
                                                        <li ng-repeat="item in holidays" class="ng-scope">
                                                            <a ng-click="add_holiday_avoid_day(item)" class="ng-binding">教师节</a>
                                                        </li>
                                                        <li ng-repeat="item in holidays" class="ng-scope">
                                                            <a ng-click="add_holiday_avoid_day(item)" class="ng-binding">国庆节</a>
                                                        </li>
                                                        <li ng-repeat="item in holidays" class="ng-scope">
                                                            <a ng-click="add_holiday_avoid_day(item)" class="ng-binding">元旦节</a>
                                                        </li>
                                                    </lb-dropdown-menu>
                                                </lb-dropdown>
                                            </div>
                                            <i class="pull-right fa fa-times" ng-click="show_week_loop_avoid=false"></i>
                                        </div>
                                        <div class="pos-rlt wrapper-xs ps-container ps-theme-default" style="height:120px" ui-jq="perfectScrollbar" data-ps-id="cfa237cb-16ca-2a85-f5cf-56a4410da2d8">
                                            <ul class="list-inline">
                                                <li ng-if="week_loop_avoid_days.length == 0" class="ng-scope">
                                                    <a class="btn btn-sm btn-default" ng-click="add_week_loop_avoid_day()">
                                                        <i class="icon-plus"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                                                <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                            </div>
                                            <div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                                                <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ng-show="arrange_type == 1" class="ng-hide">
                                <ul class="list-unstyled">
                                    <li class="m-t-xs">
                                        <label>上课时间：</label>
                                        <div class="inline">
                                            <input type="text" ng-readonly="true" style="width:70px" datetimepicker="time" datetimepicker-option="{step:15}" class="form-control input-sm w-xs inline ng-pristine ng-untouched ng-valid" ng-change="default_int_end_hour=fill_etime(default_int_start_hour)" readonly="readonly" v-model="lb_localdata.form.lb_default_int_start_hour">
                                            <span class="inline">~</span>
                                            <input type="text" ng-readonly="true" style="width:70px" datetimepicker="time" datetimepicker-option="{step:15}" class="form-control input-sm w-xs inline ng-pristine ng-untouched ng-valid" readonly="readonly" v-model="lb_localdata.form.lb_default_int_end_hour">
                                            <lb-dropdown>
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-sm">
                                                    选择时间段
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <lb-dropdown-menu slot="menuslot"></lb-dropdown-menu>
                                            </lb-dropdown>
                                        </div>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="va-t">选择日期：</label>
                                        <div class="inline">
                                            <div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)" min-date="open_time_date" ng-model="sel_date" on-day-selected="daySelected" on-day-canceled="dayCanceled" multi-select="sel_dates" class="ng-isolate-scope ng-valid ng-valid-date-disabled">
                                                <table role="grid" aria-labelledby="datepicker-3454-4375-title" aria-activedescendant="datepicker-3454-4375-13" ng-switch-when="day" tabindex="0">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1">
                                                                    <i class="glyphicon glyphicon-chevron-left"></i>
                                                                </button>
                                                            </th>
                                                            <th colspan="5">
                                                                <button id="datepicker-3454-4375-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;">
                                                                    <strong class="ng-binding">2017年05月</strong>
                                                                </button>
                                                            </th>
                                                            <th>
                                                                <button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1">
                                                                    <i class="glyphicon glyphicon-chevron-right"></i>
                                                                </button>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th ng-show="showWeeks" class="text-center ng-hide"></th>
                                                            <th ng-repeat="label in labels track by $index" class="text-center ng-scope">
                                                                <small aria-label="星期天" class="ng-binding">周日</small>
                                                            </th>
                                                            <th ng-repeat="label in labels track by $index" class="text-center ng-scope">
                                                                <small aria-label="星期一" class="ng-binding">周一</small>
                                                            </th>
                                                            <th ng-repeat="label in labels track by $index" class="text-center ng-scope">
                                                                <small aria-label="星期二" class="ng-binding">周二</small>
                                                            </th>
                                                            <th ng-repeat="label in labels track by $index" class="text-center ng-scope">
                                                                <small aria-label="星期三" class="ng-binding">周三</small>
                                                            </th>
                                                            <th ng-repeat="label in labels track by $index" class="text-center ng-scope">
                                                                <small aria-label="星期四" class="ng-binding">周四</small>
                                                            </th>
                                                            <th ng-repeat="label in labels track by $index" class="text-center ng-scope">
                                                                <small aria-label="星期五" class="ng-binding">周五</small>
                                                            </th>
                                                            <th ng-repeat="label in labels track by $index" class="text-center ng-scope">
                                                                <small aria-label="星期六" class="ng-binding">周六</small>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr ng-repeat="row in rows track by $index" class="ng-scope">
                                                            <td ng-show="showWeeks" class="text-center h6 ng-hide">
                                                                <em class="ng-binding"></em>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-0" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">30</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-1" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">01</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-2" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">02</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-3" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">03</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-4" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">04</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-5" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">05</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-6" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">06</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr ng-repeat="row in rows track by $index" class="ng-scope">
                                                            <td ng-show="showWeeks" class="text-center h6 ng-hide">
                                                                <em class="ng-binding"></em>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-7" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">07</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-8" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">08</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-9" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">09</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-10" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">10</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-11" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">11</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-12" aria-disabled="true">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1" disabled="disabled">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">12</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-13" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm active" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-info">13</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr ng-repeat="row in rows track by $index" class="ng-scope">
                                                            <td ng-show="showWeeks" class="text-center h6 ng-hide">
                                                                <em class="ng-binding"></em>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-14" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">14</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-15" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">15</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-16" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">16</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-17" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">17</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-18" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">18</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-19" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">19</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-20" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">20</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr ng-repeat="row in rows track by $index" class="ng-scope">
                                                            <td ng-show="showWeeks" class="text-center h6 ng-hide">
                                                                <em class="ng-binding"></em>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-21" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">21</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-22" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">22</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-23" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">23</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-24" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">24</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-25" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">25</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-26" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">26</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-27" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">27</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr ng-repeat="row in rows track by $index" class="ng-scope">
                                                            <td ng-show="showWeeks" class="text-center h6 ng-hide">
                                                                <em class="ng-binding"></em>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-28" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">28</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-29" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">29</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-30" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">30</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-31" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding">31</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-32" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">01</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-33" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">02</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-34" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">03</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr ng-repeat="row in rows track by $index" class="ng-scope">
                                                            <td ng-show="showWeeks" class="text-center h6 ng-hide">
                                                                <em class="ng-binding"></em>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-35" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">04</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-36" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">05</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-37" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">06</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-38" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">07</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-39" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">08</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-40" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">09</span>
                                                                </button>
                                                            </td>
                                                            <td ng-repeat="dt in row track by dt.date" class="text-center ng-scope" role="gridcell" id="datepicker-3454-4375-41" aria-disabled="false">
                                                                <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{'btn-info': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1">
                                                                    <span ng-class="{'text-muted': dt.secondary, 'text-info': dt.current}" class="ng-binding text-muted">10</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light lter m-t">
                        <form name="form2" class="form-validation ng-pristine ng-valid" novalidate="">
                            <table class="table m-b-n">
                                <thead>
                                    <tr>
                                        <td width="100">
                                            <span class="m-l">NO.</span>
                                        </td>
                                        <td width="140">
                                            <span class="m-l">日期</span>
                                        </td>
                                        <td width="200">
                                            <span class="m-l">时间段</span>
                                        </td>
                                        <td width="120">
                                            <span class="m-l">操作</span>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                            <div class="m-t ps-container ps-theme-default" style="height:360px;position: relative" ui-jq="perfectScrollbar" data-ps-id="83ab1942-cb79-a1f7-fcd5-3228b5e2df5c">
                                <table class="table">
                                    <tbody>
                                        <tr ng-if="new_arranges.length == 0" class="ng-scope">
                                            <td colspan="3">
                                                <p class="text-muted">
                                                    新增排课记录，请根据实际情况选择
                                                    <code>规律排课</code>或
                                                    <code>自由排课</code>任意1种方式来进行排课
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                </div>
                                <div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                                    <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-show="!is_arrange_valid" ng-disabled="validing || new_arranges.length == 0" ng-click="valid_arrange()" disabled="disabled">验证排课</button>
                    <button class="btn btn-primary ng-hide" ng-show="is_arrange_valid" ng-disabled="saving" ng-click="save_arrange()">创建排课</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lesson_arrange.modal',
    data() {
        let lb_localdata = {
            'lb_arrange_type': [{
                'value': '0',
                'text': '按规律排课'
            }, {
                'value': '1',
                'text': '自由排课'
            }],
            'form': {
                'lb_arrange_type': '',
                'lb_week_loop_start': '',
                'lb_week_loop_times': '',
                'lb_item_week': '',
                'lb_item_int_start_hour': '',
                'lb_item_int_end_hour': '',
                'lb_default_int_start_hour': '',
                'lb_default_int_end_hour': ''
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