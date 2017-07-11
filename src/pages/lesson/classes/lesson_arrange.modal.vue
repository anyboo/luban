<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div oc-lazy-load="js/modules/class_arrange.js" class="ng-scope"></div>
            <div ng-controller="ClassLessonArrangeCtrl" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <lb-buttongroup :group-data="localdata.arrange_type" v-model="localdata.form.arrange_type"></lb-buttongroup>
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
                                            <div class="progress-bar progress-bar-warning" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="2" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude style="width: 0%;">
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
                                            <lb-date-picker type="date" v-model="localdata.form.week_loop_start"></lb-date-picker>
                                        </div>
                                        <div class="m-l-xs inline w-xs va-m">
                                            <div class="input-group bootstrap-touchspin">
                                                <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span>
                                                <input class="form-control ng-pristine ng-untouched ng-valid" ui-jq="TouchSpin" type="text" data-min="0" data-max="2" data-verticalbuttons="true" data-verticalupclass="fa fa-caret-up" data-verticaldownclass="fa fa-caret-down" style="display: block;" v-model="localdata.form.week_loop_times">
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
                                                    <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-options="w.value as w.name for w in week_days" v-model="localdata.form.item_week">
                                                        <option value class>每周</option>
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
                                                    <lb-date-picker type="time" ng-readonly="true" style="width:70px" datetimepicker-option="{step:15}" ng-change="item.int_end_hour=fill_etime(item.int_start_hour)" readonly="readonly" v-model="localdata.form.item_int_start_hour"></lb-date-picker>
                                                    <span class="inline">~</span>
                                                    <lb-date-picker type="time" ng-readonly="true" style="width:70px" datetimepicker-option="{step:15}" readonly="readonly" v-model="localdata.form.item_int_end_hour"></lb-date-picker>
                                                    <lb-dropdown :drop-menu-data="localdata.dropDownMenu">
                                                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-sm">
                                                            选择时间段
                                                            <span class="caret"></span>
                                                        </lb-dropdown-button>
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
                                                <lb-dropdown :drop-menu-data="localdata.dropDownMenu">
                                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-sm btn-default">
                                                        <i class="fa fa-plus"></i>节假日
                                                        <span class="caret"></span>
                                                    </lb-dropdown-button>
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
                                            <lb-date-picker type="time" ng-readonly="true" style="width:70px" datetimepicker-option="{step:15}" ng-change="default_int_end_hour=fill_etime(default_int_start_hour)" readonly="readonly" v-model="localdata.form.default_int_start_hour"></lb-date-picker>
                                            <span class="inline">~</span>
                                            <lb-date-picker type="time" ng-readonly="true" style="width:70px" datetimepicker-option="{step:15}" readonly="readonly" v-model="localdata.form.default_int_end_hour"></lb-date-picker>
                                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu">
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-sm">
                                                    选择时间段
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                            </lb-dropdown>
                                        </div>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="va-t">选择日期：</label>
                                        <div class="inline">
                                            <lb-date-picker type="date" placeholder="选择日期" ng-model="sel_date"></lb-date-picker>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light lter m-t">
                        <form name="form2" class="form-validation ng-pristine ng-valid" novalidate>
                            <lb-table :data="getTableData" stripe>
                                <lb-table-column width="100" prop="data" label>
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column width="140" prop="data" label>
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column width="200" prop="data" label>
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column width="120" prop="data" label>
                                    <template scope="scope"></template>
                                </lb-table-column>
                            </lb-table>
                            <div class="m-t ps-container ps-theme-default" style="height:360px;position: relative" ui-jq="perfectScrollbar" data-ps-id="83ab1942-cb79-a1f7-fcd5-3228b5e2df5c">
                                <lb-table :data="getTableData" stripe></lb-table>
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
    name: 'lesson_arrange',
    data() {
        let localdata = {
            'arrange_type': [{
                'value': '0',
                'text': '按规律排课'
            }, {
                'value': '1',
                'text': '自由排课'
            }],
            'form': {
                'arrange_type': '',
                'week_loop_start': '',
                'week_loop_times': '',
                'item_week': '',
                'item_int_start_hour': '',
                'item_int_end_hour': '',
                'default_int_start_hour': '',
                'default_int_end_hour': ''
            },
            'dropDownMenu': [{
                'text': '劳动节'
            }, {
                'text': '儿童节'
            }, {
                'text': '教师节'
            }, {
                'text': '国庆节'
            }, {
                'text': '元旦节'
            }]
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>