<template>
    <div class="wrapper-xs ng-scope" xo-rest="classes" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="classes" loading-container=".list-class" loading-text="正在加载班级..." empty-text="没有符合条件的班级!">
        <div class="panel panel-default">
            <div class="row wrapper no-gutter">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn" ng-init="
                  filter.fields = [
                    {name:'class_name',value:'班级名'},
                    {name:'master',value:'老师姓名'}
                  ];
                  grid.search_key = 'class_name';
                  grid.search_value = '';
                  ">
                                    <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">班级名&nbsp;<span class="caret"></span></button>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" ng-model="grid.search_value" placeholder="关键字"> <span class="input-group-btn"><button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button></span></div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>
                    <div class="btn-group m-l">
                        <label btn-radio="'1'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已开课</label>
                        <label btn-radio="'0'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">未开课</label>
                        <label btn-radio="'2'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已结课</label>
                        <label btn-radio="" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                    </div>
                    <!-- ngIf: teacher_rest -->
                    <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                        <select ng-model="params.master_oe_id" class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;">
                            <option value="" class="">选择老师</option>
                            <option value="0">陈佳木</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 240px;" title=""><a class="chosen-single" tabindex="-1"><span>选择老师</span><div><b></b></div></a>
                            <div class="chosen-drop">
                                <div class="chosen-search">
                                    <input type="text" autocomplete="off">
                                </div>
                                <ul class="chosen-results"></ul>
                            </div>
                        </div>
                    </div>
                    <!-- end ngIf: teacher_rest -->
                    <div class="btn-group m-l-xs" ng-hide="app.isWeiXin">
                        <label btn-radio="'image'" ng-model="view_mode" class="btn btn-default ng-pristine ng-untouched ng-valid"><i class="fa fa-image"></i> 区块</label>
                        <label btn-radio="'list'" ng-model="view_mode" class="btn btn-default ng-pristine ng-untouched ng-valid active"><i class="fa fa-list"></i> 列表</label>
                    </div>
                    <!-- ngIf: selected_count()>0 --><a class="btn btn-success m-l-xs ng-hide" ng-click="bat_class_dispatch()" ng-hide="no_class_selected()">批量调课</a> <a ui-per="class.add" class="btn btn-primary pull-right" ng-click="$util.open('tpl/app/lesson/classes/open_class.modal.html','md')"><i class="fa fa-plus"></i>开班</a></div>
            </div>
            <!--row-->
            <!-- ngIf: view_mode == 'image' -->
            <!--row end-->
            <!-- ngIf: view_mode == 'list' -->
            <div class="table-responsive ng-scope" style="min-height:450px" ng-if="view_mode == 'list'">
                <table class="table table-striped table-hover vline">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>班级名 <span class="table-header-sort ng-isolate-scope" header-sort="class_name" params="params"><span class="icon"><i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i></span><span class="icon"><i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i></span></span>
                            </th>
                            <th>老师</th>
                            <th>课程名</th>
                            <th>开课日期</th>
                            <th>最后考勤</th>
                            <th>所在校区</th>
                            <th>招生情况</th>
                            <th>排课情况</th>
                            <th>考勤情况</th>
                            <th>缴费情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td width="140">
                                <div class="btn-group dropdown" dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope">操作</span></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ng-click="$util.open('tpl/app/lesson/classes/edit_class.modal.html','md',item)" ui-per="class.edit"><i class="icon-note"></i> 编辑班级</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/input_student.modal.html','md',item)" ui-per="class.input_student"><i class="fa fa-users"></i> 批量报名</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/reg_performance.modal.html','md',item)" ui-per="class.regperformance"><i class="fa fa-edit"></i> 登记成绩</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/lesson_arrange.modal.html','lg',item)" ui-per="class.arranges"><i class="fa fa-calendar text-info"></i> 排课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/lesson_dispatch.modal.html','md',item)" ui-per="class.dispatch"><i class="fa fa-calendar text-warning"></i> 调课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/end_class.modal.html','lg',item)" ui-per="class.end"><i class="fa fa-calendar text-danger"></i> 结课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/hours/reg_class_attendance.modal.html','lg',item)" ui-per="hours.attendance"><i class="fa fa-calendar"></i> 按排课考勤</a></li>
                                        <li><a ng-click="$util.open('tpl/app/hours/remove_class_attendance.modal.html','lg',item)" ui-per="hours.attendance"><i class="icon-ban"></i> 撤销考勤</a></li>
                                        <li><a ng-click="$util.open('tpl/app/lesson/classes/upgrade_class.modal.html','lg',item)" ui-per="class.upgrade"><i class="fa fa-wrench"></i> 升级</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td><a class="link ng-binding" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13148">3期班</a></td>
                            <td><span class="ng-binding">陈佳木</span></td>
                            <td class="ng-binding">吉他高级班</td>
                            <td><span class="ng-binding">2017-05-05</span>
                                <!-- ngIf: item.status == '1' --><small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small>
                                <!-- end ngIf: item.status == '1' -->
                                <!-- ngIf: item.status == '0' -->
                                <!-- ngIf: item.status == '2' -->
                            </td>
                            <td class="ng-binding">-</td>
                            <td><span class="label bg-info ng-binding">福州布尔培训</span></td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                    <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="50%" ng-transclude="" style="width: 50%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">3 / 6</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                    <div class="progress-bar progress-bar-warning" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="60" ng-style="{width: percent + '%'}" aria-valuetext="3%" ng-transclude="" style="width: 3.33%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">2 / 60</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                    <div class="progress-bar progress-bar-success" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="60" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 60</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                    <div class="progress-bar progress-bar-danger" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude=""><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span></div>
                                </div>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td width="140">
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope">操作</span></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ng-click="$util.open('tpl/app/lesson/classes/edit_class.modal.html','md',item)" ui-per="class.edit"><i class="icon-note"></i> 编辑班级</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/input_student.modal.html','md',item)" ui-per="class.input_student"><i class="fa fa-users"></i> 批量报名</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/reg_performance.modal.html','md',item)" ui-per="class.regperformance"><i class="fa fa-edit"></i> 登记成绩</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/lesson_arrange.modal.html','lg',item)" ui-per="class.arranges"><i class="fa fa-calendar text-info"></i> 排课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/lesson_dispatch.modal.html','md',item)" ui-per="class.dispatch"><i class="fa fa-calendar text-warning"></i> 调课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/end_class.modal.html','lg',item)" ui-per="class.end"><i class="fa fa-calendar text-danger"></i> 结课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/hours/reg_class_attendance.modal.html','lg',item)" ui-per="hours.attendance"><i class="fa fa-calendar"></i> 按排课考勤</a></li>
                                        <li><a ng-click="$util.open('tpl/app/hours/remove_class_attendance.modal.html','lg',item)" ui-per="hours.attendance"><i class="icon-ban"></i> 撤销考勤</a></li>
                                        <li><a ng-click="$util.open('tpl/app/lesson/classes/upgrade_class.modal.html','lg',item)" ui-per="class.upgrade"><i class="fa fa-wrench"></i> 升级</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td><a class="link ng-binding" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13039">1班</a></td>
                            <td><span class="ng-binding">陈佳木</span></td>
                            <td class="ng-binding">印度舞初级</td>
                            <td><span class="ng-binding">2017-04-17</span>
                                <!-- ngIf: item.status == '1' --><small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small>
                                <!-- end ngIf: item.status == '1' -->
                                <!-- ngIf: item.status == '0' -->
                                <!-- ngIf: item.status == '2' -->
                            </td>
                            <td class="ng-binding">-</td>
                            <td><span class="label bg-info ng-binding">福州布尔培训</span></td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                    <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="33%" ng-transclude="" style="width: 33.33%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">2 / 6</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                    <div class="progress-bar progress-bar-warning" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                    <div class="progress-bar progress-bar-success" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                    <div class="progress-bar progress-bar-danger" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude=""><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span></div>
                                </div>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td width="140">
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope">操作</span></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ng-click="$util.open('tpl/app/lesson/classes/edit_class.modal.html','md',item)" ui-per="class.edit"><i class="icon-note"></i> 编辑班级</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/input_student.modal.html','md',item)" ui-per="class.input_student"><i class="fa fa-users"></i> 批量报名</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/reg_performance.modal.html','md',item)" ui-per="class.regperformance"><i class="fa fa-edit"></i> 登记成绩</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/lesson_arrange.modal.html','lg',item)" ui-per="class.arranges"><i class="fa fa-calendar text-info"></i> 排课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/lesson_dispatch.modal.html','md',item)" ui-per="class.dispatch"><i class="fa fa-calendar text-warning"></i> 调课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/lesson/classes/end_class.modal.html','lg',item)" ui-per="class.end"><i class="fa fa-calendar text-danger"></i> 结课</a></li>
                                        <li ng-hide="item.is_end == '1'"><a ng-click="$util.open('tpl/app/hours/reg_class_attendance.modal.html','lg',item)" ui-per="hours.attendance"><i class="fa fa-calendar"></i> 按排课考勤</a></li>
                                        <li><a ng-click="$util.open('tpl/app/hours/remove_class_attendance.modal.html','lg',item)" ui-per="hours.attendance"><i class="icon-ban"></i> 撤销考勤</a></li>
                                        <li><a ng-click="$util.open('tpl/app/lesson/classes/upgrade_class.modal.html','lg',item)" ui-per="class.upgrade"><i class="fa fa-wrench"></i> 升级</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td><a class="link ng-binding" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13031">13414</a></td>
                            <td><span class="ng-binding">陈佳木</span></td>
                            <td class="ng-binding">默认课程</td>
                            <td><span class="ng-binding">2017-04-14</span>
                                <!-- ngIf: item.status == '1' --><small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small>
                                <!-- end ngIf: item.status == '1' -->
                                <!-- ngIf: item.status == '0' -->
                                <!-- ngIf: item.status == '2' -->
                            </td>
                            <td class="ng-binding">-</td>
                            <td><span class="label bg-info ng-binding">福州布尔培训</span></td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                    <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 6</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                    <div class="progress-bar progress-bar-warning" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="10" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 10</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                    <div class="progress-bar progress-bar-success" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="10" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 10</span></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                    <div class="progress-bar progress-bar-danger" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude=""><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span></div>
                                </div>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                    </tbody>
                </table>
            </div>
            <!-- end ngIf: view_mode == 'list' -->
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 3 个班级">共 3 个班级</small></div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                            <!-- ngIf: boundaryLinks && totalPages > 1 -->
                            <!-- ngIf: directionLinks && totalPages > 1 -->
                            <!-- ngRepeat: page in pages track by $index -->
                            <!-- ngIf: totalPages > 1 -->
                            <!-- end ngRepeat: page in pages track by $index -->
                            <!-- ngIf: directionLinks && totalPages > 1 -->
                            <!-- ngIf: boundaryLinks && totalPages > 1 -->
                        </ul>
                    </div>
                </div>
            </div>
            <!--panel footer-->
        </div>
        <!--panel-->
    </div>
</template>
<script>
export default {
    name: 'classes',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
