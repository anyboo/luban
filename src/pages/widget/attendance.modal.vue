<template>
    <div>
        <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude>
                <div oc-lazy-load="['js/widget/attendance.js']" class="ng-scope"></div>
                <div ng-controller="wAttendanceCtrl" class="ng-scope">
                    <div class="modal-header">
                        <button ng-click="$dismiss()" class="close" type="button" @click="lbClosedialog($event)">
                            <span>×</span>
                            <span class="sr-only">关闭</span>
                        </button>
                        <h3 class="modal-title">
                            <i class="fa fa-calendar"></i>考勤
                        </h3>
                    </div>
                    <div class="modal-body" ng-switch="$action" v-show=" OnAttendance">
                        <div ng-switch-when="menu" class="ng-scope">
                            <ul class="list-group">
                                <li class="list-group-item ng-click-active" @click="InAttendances()" ui-per="widget.now_attendance">
                                    <i class="fa fa-chevron-right"></i>
                                    <h4 class="list-group-item-heading">
                                        <i class="fa fa-calendar"></i>现场考勤
                                    </h4>
                                    <p class="list-group-item-text text-muted">按我今天的排课进行现场考勤(老师考勤)</p>
                                </li>
                                <li class="list-group-item" @click="BatchAttendances()">
                                    <i class="fa fa-chevron-right"></i>
                                    <h4 class="list-group-item-heading">
                                        <i class="fa fa-calendar-o"></i>批量登记考勤
                                    </h4>
                                    <p class="list-group-item-text text-muted">对已经上过课的出勤情况进行登记(可按排课或自由登记)</p>
                                </li>
                                <li class="list-group-item" ng-click="att_by_student()" @click=" SingleAttendances()">
                                    <i class="fa fa-chevron-right"></i>
                                    <h4 class="list-group-item-heading">
                                        <i class="fa fa-user"></i>单个学员登记考勤
                                    </h4>
                                    <p class="list-group-item-text text-muted">对单个学员的出勤情况进行登记(可用于补课、漏补考勤)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-body" ng-switch="$action" v-show="InAttendance">
                    <div ng-switch-when="att_by_today" class="ng-scope">
                        <div class="padder-v bg-light text-center">
                            <a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()" @click="back()">
                                <i class="fa fa-chevron-left"></i>返回
                            </a>
                            <strong>按当天排课现场考勤</strong>
                        </div>
                        <div ng-if="arranges_rest.$loaded" class="ng-scope">
                            <div class="wrapper ng-scope" ng-if="arranges.list.length == 0">
                                <p class="m-t m-b text-danger text-2x">
                                    <i class="fa fa-exclamation-triangle"></i>当天没有排课记录,无法现场考勤.
                                </p>
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
                <div class="modal-body" ng-switch="$action" v-show="BatchAttendance">
                    <div ng-switch-when="att_by_reg" class="ng-scope">
                        <div class="padder-v bg-light text-center">
                            <a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()" @click="backs()">
                                <i class="fa fa-chevron-left"></i>返回
                            </a>
                            <strong>对过去的考勤记录进行登记</strong>
                        </div>
                        <ul class="nav nav-pills nav-justified m-t">
                            <li role="presentation" ng-click="select_reg_by('arrange')" ng-class="{'active':reg_by=='arrange'}" :class="{active:isactive}" @click="open()">
                                <a>
                                    <i class="fa fa-calendar"></i>按排课登记
                                </a>
                            </li>
                            <li role="presentation" ng-click="select_reg_by('opt')" ng-class="{'active':reg_by=='opt'}" :class="{active:actives}" @click="opens()">
                                <a>
                                    <i class="icon-plus"></i>自由登记
                                </a>
                            </li>
                        </ul>
                        <div class="m-t-xs ng-scope" ng-include="'tpl/app/widget/attendance/reg_by_'+reg_by+'.block.html'">
                            <div class="b-t ng-scope" ng-controller="wRegByOptCtl" v-if="frees">
                                <div class="form-horizontal ng-scope" ng-if="step == 1">
                                    <div class="form-group">
                                        <label class="control-label col-md-2 col-xs-3">考勤对象:</label>
                                        <div class="col-md-10 col-xs-9">
                                            <div class="form-control-static">
                                                <lb-buttongroup :group-data="localdata.lb_att_lesson_type" v-model="localdata.form.lb_att_lesson_type"></lb-buttongroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div ng-include="'tpl/app/widget/attendance/select_'+att.lesson_type+'.block.html'" ng-if="att.sj_id > 0 || att.lesson_type == '0' || att.lesson_type == '1'" class="ng-scope" v-if="body">
                                        <div class="wrapper bg-light lter ng-scope">
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
                                                            <div class="input-group-btn">
                                                                <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select>
                                                                    班级名
                                                                    <span class="caret"></span>
                                                                </button>
                                                            </div>
                                                            <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model="localdata.form.lb_grid_search_value">
                                                            <span class="input-group-btn">
                                                                <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="table-responsive m-t">
                                                <lb-table :data="getTableData" stripe>
                                                    <lb-table-column prop="data" label="班级">
                                                        <template scope="scope">11</template>
                                                    </lb-table-column>
                                                    <lb-table-column prop="data" label="总课次">
                                                        <template scope="scope">2</template>
                                                    </lb-table-column>
                                                    <lb-table-column prop="data" label="已排">
                                                        <template scope="scope">0</template>
                                                    </lb-table-column>
                                                    <lb-table-column prop="data" label="已考勤">
                                                        <template scope="scope">0</template>
                                                    </lb-table-column>
                                                    <lb-table-column prop="data" label="教师">
                                                        <template scope="scope">张英乙</template>
                                                    </lb-table-column>
                                                </lb-table>
                                                <div class="grid-data-result"></div>
                                            </div>
                                            <div class="panel-footer ng-scope" ng-if="grid.total > 0">
                                                <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <lb-oto v-if="otos"></lb-oto>
                                    <lb-hourspackage v-if="publics"></lb-hourspackage>
                                    <div class="panel-footer text-center">
                                        <button class="btn btn-primary" ng-click="go_step(2)">下一步</button>
                                        <button class="btn btn-warning m-l-xs" ng-click="back_menu()" @click="backf()">返回</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <lb-register v-if="order"></lb-register>
                <div class="modal-body" ng-switch="$action" v-show="SingleAttendance">
                    <div ng-switch-when="att_by_student" class="ng-scope">
                        <div class="padder-v bg-light text-center">
                            <a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()" @click="backt()">
                                <i class="fa fa-chevron-left"></i>返回
                            </a>
                            <strong>按单个学员考勤</strong>
                        </div>
                        <div class="wrapper text-center m-t">
                            <p class="text-center">请选择学员进行考勤登记!</p>
                            <p class="text-center m-t">
                                <button class="btn btn-info" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_attendance" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行考勤登记" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="fa fa-user"></i>选择学员
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import oto from './oto.vue'
import hourspackage from './hourspackage.vue'
import register from './register.vue'
export default {
    name: 'attendance',
    data() {
        let localdata = {
            'lb_att_lesson_type': [{
                'value': '0',
                'text': '课程班级'
            }, {
                'value': '1',
                'text': '1对1学员'
            }, {
                'value': '10',
                'text': '课时包科目班级'
            }, {
                'value': '11',
                'text': '课时包学员'
            }],
            'form': {
                'lb_att_lesson_type': '',
                'lb_grid_search_value': ''
            }
        }
        return {
            localdata,
            OnAttendance: true,
            InAttendance: false,
            BatchAttendance: false,
            SingleAttendance: false,
            order: false,
            frees: true,
            isactive: true,
            actives: false,
            otos: false,
            publics: false,
            body: true,
            isactivez: true,
            isactiveo: false,
            isactivet: false,
            isactivef: false,
        }
    },
    components: {
        'lb-register': register,
        'lb-hourspackage': hourspackage,
        'lb-oto': oto,
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
        },
        backf() {
            this.OnAttendance = true
            this.BatchAttendance = false
        },
        open() {
            this.frees = false
            this.order = true
            this.isactive = true
            this.actives = false
        },
        opens() {
            this.frees = true
            this.order = false
            this.isactive = false
            this.actives = true
        },
        course() {
            this.body = true
            this.isactivez = true
            this.isactiveo = false
            this.isactivet = false
            this.isactivef = false
        },
        onetwoone() {
            this.body = false
            this.otos = true
            this.isactivez = false
            this.isactiveo = true
            this.isactivet = false
            this.isactivef = false
        },
        hoursc() {
            this.body = false
            this.publics = true
            this.otos = false
            this.isactivez = false
            this.isactiveo = false
            this.isactivet = true
            this.isactivef = false
        },
        hoursp() {
            this.body = false
            this.publics = true
            this.isactivez = false
            this.isactiveo = false
            this.isactivet = false
            this.isactivef = true
        }
    }
}
</script>