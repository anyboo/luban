<template>
    <div>
        <div ng-controller="wRegByArrangeCtl" class="ng-scope">
            <div class="arrange-wrap bg-white">
                <div class="top padder-v">
                    <p class="text-right padder ng-binding">
                        <a ng-click="$util.open('tpl/app/widget/attendance/no_arrange_explain.modal.html','md',{})" @click="lbShowdialog($event,'lb-noarrangeexplainmodal')">
                            <i class="fa fa-question-circle"></i>有排课没有显示
                        </a>2017年
                        <span ng-if="vm.options.view_type=='week'" class="ng-binding ng-scope">第20周</span>
                        <span class="cell-wrap sample arranged"></span>待考勤
                        <span class="cell-wrap sample attendanced"></span>已考勤
                        <span class="cell-wrap sample canceled"></span>已取消
                    </p>
                </div>
                <div class="table-responsive ps-container ps-theme-default" ui-jq="perfectScrollbar" data-ps-id="49ec1e12-f4b3-d191-f9d0-90171c4441ee">
                    <table class="table-arrange">
                        <thead>
                            <tr>
                                <th class="col-head-split">时间段</th>
                                <th class="col-head-arrow col-head-prev">
                                    <button class="btn btn-default btn-xs" ng-click="prev()">
                                        <i class="fa fa-chevron-left"></i>
                                    </button>
                                </th>
                                <th class="col-head-day ng-scope" ng-class="{'bg-black':item.cur_day}" ng-repeat="item in vm.header_days">
                                    <span class="day ng-binding">05/15</span>
                                    <br>
                                    <span class="week ng-binding">周一</span>
                                </th>
                                <th class="col-head-day ng-scope" ng-class="{'bg-black':item.cur_day}" ng-repeat="item in vm.header_days">
                                    <span class="day ng-binding">05/16</span>
                                    <br>
                                    <span class="week ng-binding">周二</span>
                                </th>
                                <th class="col-head-day ng-scope bg-black" ng-class="{'bg-black':item.cur_day}" ng-repeat="item in vm.header_days">
                                    <span class="day ng-binding">05/17</span>
                                    <br>
                                    <span class="week ng-binding">周三</span>
                                </th>
                                <th class="col-head-day ng-scope" ng-class="{'bg-black':item.cur_day}" ng-repeat="item in vm.header_days">
                                    <span class="day ng-binding">05/18</span>
                                    <br>
                                    <span class="week ng-binding">周四</span>
                                </th>
                                <th class="col-head-day ng-scope" ng-class="{'bg-black':item.cur_day}" ng-repeat="item in vm.header_days">
                                    <span class="day ng-binding">05/19</span>
                                    <br>
                                    <span class="week ng-binding">周五</span>
                                </th>
                                <th class="col-head-day ng-scope" ng-class="{'bg-black':item.cur_day}" ng-repeat="item in vm.header_days">
                                    <span class="day ng-binding">05/20</span>
                                    <br>
                                    <span class="week ng-binding">周六</span>
                                </th>
                                <th class="col-head-day ng-scope" ng-class="{'bg-black':item.cur_day}" ng-repeat="item in vm.header_days">
                                    <span class="day ng-binding">05/21</span>
                                    <br>
                                    <span class="week ng-binding">周日</span>
                                </th>
                                <th class="col-head-arrow col-head-next">
                                    <button class="btn btn-default btn-xs" ng-click="next()">
                                        <i class="fa fa-chevron-right"></i>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="section in vm.time_sections" class="ng-scope">
                                <td class="ng-binding">
                                    士大夫
                                    <br> 18:00~22:00
                                </td>
                                <td></td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr ng-repeat="section in vm.time_sections" class="ng-scope">
                                <td class="ng-binding">
                                    12额
                                    <br> 20:00~23:00
                                </td>
                                <td></td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell-body-day ng-scope" ng-repeat="day in vm.header_days">
                                    <div class="day-arranges ng-isolate-scope" options="vm.options" section="section" day="day" arranges="vm.arranges">
                                        <div ng-if="cell_arranges.length == 0" class="ng-scope">
                                            <p class="text-center text-muted">无排课</p>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'register',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>