<template>
    <div class="wrapper-xs ng-scope" xo-rest="classes" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="classes" loading-container=".list-class" loading-text="正在加载班级..." empty-text="没有符合条件的班级!">
        <div class="panel panel-default">
            <div class="row wrapper no-gutter">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn" ng-init=" filter.fields = [ {name:'class_name',value:'班级名'}, {name:'master',value:'老师姓名'} ]; grid.search_key = 'class_name'; grid.search_value = ''; ">
                                    <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">
                                        班级名
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
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});">
                        <i class="fa fa-filter"></i>过滤
                    </button>
                    <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status"></lb-buttongroup>
                    <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                        <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;" v-model="lb_localdata.form.lb_params_master_oe_id">
                            <option value="" class="">选择老师</option>
                            <option value="0">陈佳木</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 240px;" title="">
                            <a class="chosen-single" tabindex="-1">
                                <span>选择老师</span>
                                <div>
                                    <b></b>
                                </div>
                            </a>
                            <div class="chosen-drop">
                                <div class="chosen-search">
                                    <input type="text" autocomplete="off">
                                </div>
                                <ul class="chosen-results"></ul>
                            </div>
                        </div>
                    </div>
                    <lb-buttongroup :group-data="lb_localdata.lb_view_mode" v-model="lb_localdata.form.lb_view_mode"></lb-buttongroup>
                    <a class="btn btn-success m-l-xs ng-hide" ng-click="bat_class_dispatch()" ng-hide="no_class_selected()">批量调课</a>
                    <a ng-click="$util.open('tpl/app/lesson/classes/open_class.modal.html','md')" @click="lbShowdialog($event,'lb-openclassmodal')">
                        <i class="fa fa-plus"></i>开班
                    </a>
                </div>
            </div>
            <div class="table-responsive ng-scope" style="min-height:450px" ng-if="view_mode == 'list'">
                <table class="table table-striped table-hover vline">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>
                                班级名
                                <span class="table-header-sort ng-isolate-scope" header-sort="class_name" params="params">
                                    <span class="icon">
                                        <i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i>
                                    </span>
                                <span class="icon">
                                        <i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i>
                                    </span>
                                </span>
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
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td width="140">
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="ng-scope">操作</span>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu :drop-menu-data="lb_localdata.dropDownMenu" :key="0"></lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td>
                                <a class="link ng-binding" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13148">3期班</a>
                            </td>
                            <td>
                                <span class="ng-binding">陈佳木</span>
                            </td>
                            <td class="ng-binding">吉他高级班</td>
                            <td>
                                <span class="ng-binding">2017-05-05</span>
                                <small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small>
                            </td>
                            <td class="ng-binding">-</td>
                            <td>
                                <span class="label bg-info ng-binding">福州布尔培训</span>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                    <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="50%" ng-transclude="" style="width: 50%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">3 / 6</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                    <div class="progress-bar progress-bar-warning" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="60" ng-style="{width: percent + '%'}" aria-valuetext="3%" ng-transclude="" style="width: 3.33%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">2 / 60</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                    <div class="progress-bar progress-bar-success" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="60" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 60</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                    <div class="progress-bar progress-bar-danger" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude="">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td width="140">
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="ng-scope">操作</span>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu :drop-menu-data="lb_localdata.dropDownMenu" :key="0"></lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td>
                                <a class="link ng-binding" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13039">1班</a>
                            </td>
                            <td>
                                <span class="ng-binding">陈佳木</span>
                            </td>
                            <td class="ng-binding">印度舞初级</td>
                            <td>
                                <span class="ng-binding">2017-04-17</span>
                                <small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small>
                            </td>
                            <td class="ng-binding">-</td>
                            <td>
                                <span class="label bg-info ng-binding">福州布尔培训</span>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                    <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="33%" ng-transclude="" style="width: 33.33%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">2 / 6</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                    <div class="progress-bar progress-bar-warning" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                    <div class="progress-bar progress-bar-success" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                    <div class="progress-bar progress-bar-danger" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude="">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td width="140">
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="ng-scope">操作</span>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu :drop-menu-data="lb_localdata.dropDownMenu" :key="0"></lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td>
                                <a class="link ng-binding" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13031">13414</a>
                            </td>
                            <td>
                                <span class="ng-binding">陈佳木</span>
                            </td>
                            <td class="ng-binding">默认课程</td>
                            <td>
                                <span class="ng-binding">2017-04-14</span>
                                <small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small>
                            </td>
                            <td class="ng-binding">-</td>
                            <td>
                                <span class="label bg-info ng-binding">福州布尔培训</span>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                    <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 6</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                    <div class="progress-bar progress-bar-warning" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="10" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 10</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                    <div class="progress-bar progress-bar-success" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="10" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 10</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                    <div class="progress-bar progress-bar-danger" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude="">
                                        <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 3 个班级">共 3 个班级</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'classes',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_status': '',
                'lb_params_master_oe_id': '',
                'lb_view_mode': ''
            },
            'lb_params_status': [{
                'value': '1',
                'text': '已开课'
            }, {
                'value': '0',
                'text': '未开课'
            }, {
                'value': '2',
                'text': '已结课'
            }],
            'lb_view_mode': [{
                'value': 'image',
                'iclass': 'fa fa-image',
                'text': '区块'
            }, {
                'value': 'list',
                'iclass': 'fa fa-list',
                'text': '列表'
            }],
            'dropDownMenu': [{
                'url': 'lb-editclassmodal',
                'icon': 'icon-note',
                'text': '编辑班级'
            }, {
                'url': 'lb-inputstudentmodal',
                'icon': 'fa fa-users',
                'text': '批量报名'
            }, {
                'url': 'lb-regperformancemodal',
                'icon': 'fa fa-edit',
                'text': '登记成绩'
            }, {
                'url': 'lb-lessonarrangemodal',
                'icon': 'fa fa-calendar text-info',
                'text': '排课'
            }, {
                'url': 'lb-lessondispatchmodal',
                'icon': 'fa fa-calendar text-warning',
                'text': '调课'
            }, {
                'url': 'lb-endclassmodal',
                'icon': 'fa fa-calendar text-danger',
                'text': '结课'
            }, {
                'url': 'lb-regclassattendancemodal',
                'icon': 'fa fa-calendar',
                'text': '按排课考勤'
            }, {
                'url': 'lb-removeclassattendancemodal',
                'icon': 'icon-ban',
                'text': '撤销考勤'
            }, {
                'url': 'lb-upgradeclassmodal',
                'icon': 'fa fa-wrench',
                'text': '升级'
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