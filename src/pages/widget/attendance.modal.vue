<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/widget/attendance.js']" class="ng-scope"></div>
            <div ng-controller="wAttendanceCtrl" class="ng-scope">
                <div class="modal-header">
                    <button ng-click="$dismiss()" class="close" type="button"><span>×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-calendar"></i>考勤</h3></div>
                <!-- 主题部分 -->
                <div class="modal-body" ng-switch="$action" v-show=" OnAttendance">
                    <!-- ngSwitchWhen: menu -->
                    <div ng-switch-when="menu" class="ng-scope">
                        <ul class="list-group">
                            <li class="list-group-item ng-click-active" ng-click="att_by_today()" ui-per="widget.now_attendance"><i class="fa fa-chevron-right" @click="InAttendances()"></i>
                                <h4 class="list-group-item-heading"><i class="fa fa-calendar"></i> 现场考勤</h4>
                                <p class="list-group-item-text text-muted">按我今天的排课进行现场考勤(老师考勤)</p>
                            </li>
                            <li class="list-group-item" ng-click="att_by_reg()"><i class="fa fa-chevron-right" @click="BatchAttendances()"></i>
                                <h4 class="list-group-item-heading"><i class="fa fa-calendar-o"></i> 批量登记考勤</h4>
                                <p class="list-group-item-text text-muted">对已经上过课的出勤情况进行登记(可按排课或自由登记)</p>
                            </li>
                            <li class="list-group-item" ng-click="att_by_student()" @click=" SingleAttendances()"><i class="fa fa-chevron-right"></i>
                                <h4 class="list-group-item-heading"><i class="fa fa-user"></i> 单个学员登记考勤</h4>
                                <p class="list-group-item-text text-muted">对单个学员的出勤情况进行登记(可用于补课、漏补考勤)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 主体结束 -->
            <!-- 现场考勤 -->
            <div class="modal-body" ng-switch="$action" v-show="InAttendance">
                <div ng-switch-when="att_by_today" class="ng-scope">
                    <div class="padder-v bg-light text-center"><a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()" @click="back()"><i class="fa fa-chevron-left"></i> 返回</a> <strong>按当天排课现场考勤</strong></div>
                    <div ng-if="arranges_rest.$loaded" class="ng-scope">
                        <div class="wrapper ng-scope" ng-if="arranges.list.length == 0">
                            <p class="m-t m-b text-danger text-2x"><i class="fa fa-exclamation-triangle"></i> 当天没有排课记录,无法现场考勤.</p>
                            <div class="well">
                                <ol>
                                    <li>现场考勤需要在开始上课时间到了才能开始考勤。</li>
                                    <li>现场考勤需要先进行排课。</li>
                                    <li>只能对当天的排课记录进行考勤。</li>
                                    <li>如果过了考勤时间，请使用登记考勤。</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 现场考勤 -->
            <!-- 批量登记考勤 -->
            <div class="modal-body" ng-switch="$action" v-show="BatchAttendance">
                <div ng-switch-when="att_by_reg" class="ng-scope">
                    <div class="padder-v bg-light text-center"><a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()" @click="backs()"><i class="fa fa-chevron-left"></i> 返回</a> <strong>对过去的考勤记录进行登记</strong></div>
                    <ul class="nav nav-pills nav-justified m-t">
                        <li role="presentation" ng-click="select_reg_by('arrange')" ng-class="{'active':reg_by=='arrange'}"><a><i class="fa fa-calendar"></i> 按排课登记</a></li>
                        <li role="presentation" ng-click="select_reg_by('opt')" ng-class="{'active':reg_by=='opt'}" class="active"><a><i class="icon-plus"></i> 自由登记</a></li>
                    </ul>
                    <!-- ngInclude: 'tpl/app/widget/attendance/reg_by_'+reg_by+'.block.html' -->
                    <div class="m-t-xs ng-scope" ng-include="'tpl/app/widget/attendance/reg_by_'+reg_by+'.block.html'">
                        <div class="b-t ng-scope" ng-controller="wRegByOptCtl">
                            <!-- ngIf: step == 1 -->
                            <div class="form-horizontal ng-scope" ng-if="step == 1">
                                <div class="form-group">
                                    <label class="control-label col-md-2 col-xs-3">考勤对象:</label>
                                    <div class="col-md-10 col-xs-9">
                                        <div class="form-control-static">
                                            <div class="btn-group">
                                                <label btn-radio="'0'" ng-model="att.lesson_type" class="btn btn-default btn-xs ng-pristine ng-untouched ng-valid active">课程班级</label>
                                                <label btn-radio="'1'" ng-model="att.lesson_type" class="btn btn-default btn-xs ng-pristine ng-untouched ng-valid">1对1学员</label>
                                                <label btn-radio="'10'" ng-model="att.lesson_type" class="btn btn-default btn-xs ng-pristine ng-untouched ng-valid">课时包科目班级</label>
                                                <label btn-radio="'11'" ng-model="att.lesson_type" class="btn btn-default btn-xs ng-pristine ng-untouched ng-valid">课时包学员</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ng-include="'tpl/app/widget/attendance/select_'+att.lesson_type+'.block.html'" ng-if="att.sj_id > 0 || att.lesson_type == '0' || att.lesson_type == '1'" class="ng-scope">
                                    <div class="wrapper bg-light lter ng-scope">
                                        <!-- ngIf: !att.class -->
                                        <p class="text-center text-muted ng-scope" ng-if="!att.class">请在下面选择班级</p>
                                    </div>
                                    <div class="wrapper-xs ng-scope" xo-rest="classes" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id,is_end:0}}" loading-text="正在加载班级..." empty-text="没有符合条件的班级!" xo-rest-ctrl="att_c">
                                        <div class="row wrapper no-gutter bg-light">
                                            <div class="col-xs-2">
                                                <p>筛选</p>
                                            </div>
                                            <div class="col-xs-10">
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
                                        <!--row-->
                                        <div class="table-responsive m-t">
                                            <table class="table table-striped table-hover b-t b-light">
                                                <thead>
                                                    <tr>
                                                        <th>班级</th>
                                                        <th>总课次</th>
                                                        <th>已排</th>
                                                        <th>已考勤</th>
                                                        <th>教师</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <!-- ngRepeat: item in grid.data -->
                                                    <!-- ngIf: !loading -->
                                                    <tr ng-click="select_class(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                                        <td class="ng-binding">11</td>
                                                        <td class="ng-binding">2</td>
                                                        <td class="ng-binding">0</td>
                                                        <td class="ng-binding">0</td>
                                                        <td class="ng-binding">张英乙</td>
                                                    </tr>
                                                    <!-- end ngIf: !loading -->
                                                    <!-- end ngRepeat: item in grid.data -->
                                                </tbody>
                                            </table>
                                            <div class="grid-data-result">
                                                <!-- ngIf: loading -->
                                                <!-- ngIf: !loading && grid.data.length==0 -->
                                            </div>
                                        </div>
                                        <!--table-responsive-->
                                        <!-- ngIf: grid.total > 0 -->
                                        <div class="panel-footer ng-scope" ng-if="grid.total > 0">
                                            <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                                            </ul>
                                        </div>
                                    </div>
                                    <script type="text/ng-template" id="att_c.ctrl.js" class="ng-scope"></script>
                                </div>
                                <div class="panel-footer text-center">
                                    <button class="btn btn-primary" ng-click="go_step(2)">下一步</button>
                                    <button class="btn btn-warning m-l-xs" ng-click="back_menu()">返回</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 批量登记考勤 -->
            <!-- 单个登记考勤 -->
            <div class="modal-body" ng-switch="$action" v-show="SingleAttendance">
                <div ng-switch-when="att_by_student" class="ng-scope">
                    <div class="padder-v bg-light text-center"><a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()" @click="backt()"><i class="fa fa-chevron-left" ></i> 返回</a> <strong>按单个学员考勤</strong></div>
                    <div class="wrapper text-center m-t">
                        <p class="text-center">请选择学员进行考勤登记!</p>
                        <p class="text-center m-t">
                            <button class="btn btn-info" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_attendance" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行考勤登记"><i class="fa fa-user"></i> 选择学员</button>
                        </p>
                    </div>
                </div>
                <!-- end ngSwitchWhen: -->
                <!--按学员考勤-->
            </div>
            <!-- 单个登记考勤 -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'attendance.modal',
    data() {
        return {
            OnAttendance: true,
            InAttendance: false,
            BatchAttendance: false,
            SingleAttendance: false

        }
    },
    computed: {},
    watch: {},
    methods: {
        InAttendances() {
            this.OnAttendance = false
            this.InAttendance = true



        },
        back() {
            this.OnAttendance = true
            this.InAttendance = false

        },
        BatchAttendances() {
            this.BatchAttendance = true
            this.OnAttendance = false

        },
        backs() {
            this.BatchAttendance = false
            this.OnAttendance = true

        },
        SingleAttendances() {
            this.OnAttendance = false
            this.SingleAttendance = true
        },
        backt() {
            this.OnAttendance = true
            this.SingleAttendance = false

        }
    }
}
</script>
