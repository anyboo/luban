<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="wrapper-xs ng-scope" xo-rest="classes" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="classes" loading-container=".list-class" loading-text="正在加载班级..." empty-text="没有符合条件的班级!">
                <div class="panel panel-default">
                    <div class="row wrapper no-gutter">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="padder">
                                <div class="input-group w-full">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <lb-dropdowns menu-align="start" @command="handleMenuCommand">
                                                <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                    {{localdata.search.search_value}}
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                    <template v-for="item in localdata.search.fields">
                                                        <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                                    </template>
                                                </lb-dropdown-menu>
                                            </lb-dropdowns>
                                        </div>
                                        <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.lb_search_value" @change="handleSearch">
                                        <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
              
                            <lb-buttongroup :group-data="localdata.lb_params_status" v-model="localdata.form.lb_params_status"></lb-buttongroup>
                       
                            <lb-buttongroup :group-data="localdata.lb_view_mode" v-model="localdata.form.lb_view_mode"></lb-buttongroup>
                            <a @click="lbShowdialog($event,'lb-openclassmodal')" class="btn btn-success">
                                <i class="fa fa-plus "></i>开班
                            </a>
                        </div>
                    </div>
                    <!-- hhhhh -->
                    <div class="row ng-scope " v-if="localdata.form.lb_view_mode == 'image'">
                        <template v-for="item in getTablesData()">
                            <div class="col-xs-12 col-sm-6 col-md-4 ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="ng-binding">阿诗丹顿 <!-- ngIf: item.status == '1' --><small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small><!-- end ngIf: item.status == '1' --> <!-- ngIf: item.status == '0' --> <!-- ngIf: item.status == '2' --></h4></div>
                                    <div class="panel-body">
                                        <ul class="list-unstyled">
                                            <li>
                                                <label class="inline w-xs text-right">老师:</label><span class="ng-binding">张英乙</span></li>
                                            <li class="m-t-xs">
                                                <label class="inline w-xs text-right">课程名称:</label><span class="ng-binding">1</span></li>
                                            <li class="m-t-xs">
                                                <label class="inline w-xs text-right">开课日期:</label><span class="ng-binding">2017-05-27</span></li>
                                            <li class="m-t-xs">
                                                <label class="inline w-xs text-right">招生情况:</label>
                                                <div class="inline w va-m">
                                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                                        <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 6</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="m-t-xs">
                                                <label class="inline w-xs text-right">排课情况:</label>
                                                <div class="inline w va-m">
                                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                                        <div class="progress-bar progress-bar-warning" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="5" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 5</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="m-t-xs">
                                                <label class="inline w-xs text-right">考勤情况:</label>
                                                <div class="inline w va-m">
                                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                                        <div class="progress-bar progress-bar-success" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="5" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 5</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="m-t-xs">
                                                <label class="inline w-xs text-right">缴费情况:</label>
                                                <div class="inline w va-m">
                                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                                        <div class="progress-bar progress-bar-danger" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude=""><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="m-t-xs">
                                                <label class="inline w-xs text-right">所在校区:</label><span class="label bg-info ng-binding">呵呵</span></li>
                                        </ul>
                                    </div>
                                    <div class="panel-footer text-center b-t"><a class="btn btn-xs pull-left btn-default" ng-class="{'btn-warning':item.$$selected,'btn-default':!item.$$selected}" ng-click="item.$$selected = !item.$$selected"><i class="fa fa-rmb"></i></a> <a class="btn btn-sm btn-default" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13311">班级详情</a>
                                        <div class="pull-right btn-group dropdown  btn-group dropdown " dropdown="" btn-class="btn-info btn-sm" btn-tooltip="操作" item="item">
                                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="item" class="pull-right">
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                                    <i class="fa fa-cog ng-scope"> 操作</i>
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                            </lb-dropdown>
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
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                    <!-- hhhhh -->
                    <div class="table-responsive ng-scope" style="min-height:450px" v-if="localdata.form.lb_view_mode == 'list'">
                        <lb-table :data="getTablesData()" stripe>
                            <lb-table-column prop="data" label="操作">
                                <template scope="scope">
                                    <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row">
                                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                            <i class="fa fa-cog ng-scope"></i>
                                            <span class="ng-scope">操作</span>
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                    </lb-dropdown>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="班级名">
                                <template scope="scope">
                                    <a class="link ng-binding" ui-per="lesson.class" ui-sref="lesson.class({oc_id:item.oc_id})" href="#/lesson/class/13148">{{scope.row.class_name}}</a>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="老师">
                                <template scope="scope">
                                    <span class="ng-binding">陈佳木</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="课程名">
                                <template scope="scope">吉他高级班</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="开课日期">
                                <template scope="scope">
                                    <span class="ng-binding">2017-05-05</span>
                                    <small class="label bg-success m-l ng-scope" ng-if="item.status == '1'">已开课</small>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="最后考勤">
                                <template scope="scope">-</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="所在校区">
                                <template scope="scope">
                                    <span class="label bg-info ng-binding">福州布尔培训</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="招生情况">
                                <template scope="scope">
                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                        <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="50%" ng-transclude style="width: 50%;">
                                            <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">3 / 6</span>
                                        </div>
                                    </div>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="排课情况">
                                <template scope="scope">
                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.is_arrange" type="warning">
                                        <div class="progress-bar progress-bar-warning" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="60" ng-style="{width: percent + '%'}" aria-valuetext="3%" ng-transclude style="width: 3.33%;">
                                            <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">2 / 60</span>
                                        </div>
                                    </div>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="考勤情况">
                                <template scope="scope">
                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.total_times" value="item.teach_times" type="success">
                                        <div class="progress-bar progress-bar-success" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="60" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude style="width: 0%;">
                                            <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 60</span>
                                        </div>
                                    </div>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="缴费情况">
                                <template scope="scope">
                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                        <div class="progress-bar progress-bar-danger" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude>
                                            <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥0.00 / ￥0.00</span>
                                        </div>
                                    </div>
                                </template>
                            </lb-table-column>
                        </lb-table>
                    </div>
                      <div class="panel-footer ">
                        <div class="row ">
                            <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </lb-pagination>
                        </div>
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
        let localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_status': '',
                'lb_params_master_oe_id': '',
                'lb_view_mode': 'list',
                'lb_search_value': ''

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
            }],
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '班级名'
                }, {
                    'name': 'master',
                    'value': '老师姓名'
                }],
                'search_key': 'class_name',
                'search_value': '班级名'
            }
        }
        return {
            localdata,
            lb_tables: ['classes']
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleMenuCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.localdata.form.lb_search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
    }
}
</script>
