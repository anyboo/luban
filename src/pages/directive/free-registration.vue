<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
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
                <div class="modal-body" ng-switch="$action">
                    <div ng-switch-when="att_by_reg" class="ng-scope">
                        <div class="padder-v bg-light text-center">
                            <a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()">
                                <i class="fa fa-chevron-left"></i>返回
                            </a>
                            <strong>对过去的考勤记录进行登记</strong>
                        </div>
                        <ul class="nav nav-pills nav-justified m-t">
                            <li role="presentation" ng-click="select_reg_by('arrange')" ng-class="{'active':reg_by=='arrange'}" class="">
                                <a>
                                    <i class="fa fa-calendar"></i>按排课登记
                                </a>
                            </li>
                            <li role="presentation" ng-click="select_reg_by('opt')" ng-class="{'active':reg_by=='opt'}" class="active">
                                <a>
                                    <i class="icon-plus"></i>自由登记
                                </a>
                            </li>
                        </ul>
                        <div class="m-t-xs ng-scope" ng-include="'tpl/app/widget/attendance/reg_by_'+reg_by+'.block.html'">
                            <div class="b-t ng-scope" ng-controller="wRegByOptCtl">
                                <div class="form-horizontal ng-scope" ng-if="step == 1">
                                    <div class="form-group">
                                        <label class="control-label col-md-2 col-xs-3">考勤对象:</label>
                                        <div class="col-md-10 col-xs-9">
                                            <div class="form-control-static">
                                                <lb-buttongroup :group-data="lb_localdata.lb_att_lesson_type" v-model="lb_localdata.form.lb_att_lesson_type"></lb-buttongroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div ng-include="'tpl/app/widget/attendance/select_'+att.lesson_type+'.block.html'" ng-if="att.sj_id > 0 || att.lesson_type == '0' || att.lesson_type == '1'" class="ng-scope">
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
                                                            <div class="input-group-btn" ng-init=" filter.fields = [ {name:'class_name',value:'班级名'}, {name:'master',value:'老师姓名'} ]; grid.search_key = 'class_name'; grid.search_value = ''; ">
                                                                <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">
                                                                    班级名
                                                                    <span class="caret"></span>
                                                                </button>
                                                            </div>
                                                            <input type="text" class="input-sm form-control ng-pristine ng-valid ng-touched" placeholder="关键字" v-model="lb_localdata.form.lb_grid_search_value">
                                                            <span class="input-group-btn">
                                                                <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                        <tr ng-click="select_class(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                                            <td class="ng-binding">11</td>
                                                            <td class="ng-binding">2</td>
                                                            <td class="ng-binding">0</td>
                                                            <td class="ng-binding">0</td>
                                                            <td class="ng-binding">张英乙</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="grid-data-result"></div>
                                            </div>
                                            <div class="panel-footer ng-scope" ng-if="grid.total > 0">
                                                <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                                            </div>
                                        </div>
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
            </div>
        </div>
    </div>
</template>
<script>
//自由登入
export default {
    name: 'Free-registration',
    data() {
        let lb_localdata = {
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
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>