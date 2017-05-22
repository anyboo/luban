<template>
    <div class="wrapper bg-white ng-scope" page-controller="list2index">
        <div class="row no-gutter">
            <div class="col-xs-12 col-md-3">
                <lb-buttongroup :group-data="lb_localdata.lb_lesson_type" v-model="lb_localdata.form.lb_lesson_type"></lb-buttongroup>
            </div>
        </div>
        <div class="m-t ng-scope" xo-rest="class_end_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" ng-if="lesson_type == 0" xo-rest-ctrl="list21">
            <div class="row no-gutter">
                <div class="col-xs-12">
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="lb_localdata.form.lb_param_student_name">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <lb-buttongroup :group-data="lb_localdata.lb_params_pay_status" v-model="lb_localdata.form.lb_params_pay_status"></lb-buttongroup>
                    <div class="inline w-md m-l-xs ng-scope" ng-if="class_rest.$loaded">
                        <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oc_id as item.class_name for item in class_rest.$list" style="display: none;" v-model="lb_localdata.form.lb_params_oc_id">
                            <option value class>选择班级</option>
                            <option value="0">11</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 240px;" title>
                            <a class="chosen-single" tabindex="-1">
                                <span>选择班级</span>
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
                    <button class="btn btn-default m-l-xs ng-isolate-scope" export="class_end_students" export-params="params">
                        <i class="glyphicon glyphicon-export"></i>导出
                    </button>
                    <div id="fct-class_end_students" style="display:none;">
                        <form name="export_form_class_end_students" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                            <input type="hidden" name="X-XSRF-TOKEN" value="30bed37d3e9766e5dc6b3b2b3ee823e0">
                            <input type="hidden" name="resource" value="class_end_students">
                            <input type="hidden" name="ob_id" value="11158" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                        </form>
                    </div>
                </div>
            </div>
            <div class="table-responsive m-t">
                <lb-table :data="getTableData" stripe>
                    <lb-table-column prop="data" label="学生姓名">
                        <template scope="scope">
                            <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                <i class="fa fa-female"></i>
                            </span>zzzsz
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="联系电话">
                        <template scope="scope">12345678765</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="所在班级">
                        <template scope="scope">
                            <a class="link ng-binding" ng-click="params.oc_id=item.oc_id" tooltip="点击班级名查看该班级所有学员">11</a>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="授课老师">
                        <template scope="scope">张英乙</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="报班日期">
                        <template scope="scope">2017-05-13</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="结课日期">
                        <template scope="scope">2017-05-15</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="报读课次">
                        <template scope="scope">4</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="实际消耗">
                        <template scope="scope">
                            1
                            <a ng-click="$util.open('tpl/app/student/view_course.modal.html','lg',{ocs_id:item.ocs_id,lesson_type:'0'})" @click="lbShowdialog($event,'lb-viewcoursemodal')">
                                <i class="icon-eye"></i>
                            </a>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="缴费状态">
                        <template scope="scope">
                            <span class="label bg-success ng-scope" ng-if="item.pay_status == '2'">已缴清</span>
                        </template>
                    </lb-table-column>
                </lb-table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 条记录">共 1 条记录</small>
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
    name: 'list2',
    data() {
        let lb_localdata = {
            'lb_lesson_type': [{
                'value': '0',
                'text': '班课学员'
            }, {
                'value': '1',
                'text': '1对1学员'
            }, {
                'value': '10',
                'text': '课时包学员'
            }],
            'form': {
                'lb_lesson_type': '',
                'lb_param_student_name': '',
                'lb_params_pay_status': '',
                'lb_params_oc_id': ''
            },
            'lb_params_pay_status': [{
                'value': '2',
                'text': '已缴清'
            }, {
                'value': '1',
                'text': '部分缴费'
            }, {
                'value': '0',
                'text': '未缴费'
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