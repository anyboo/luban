<template>
    <div class="wrapper bg-white ng-scope" page-controller="list2index">
        <div class="row no-gutter">
            <div class="col-xs-12 col-md-3">
                <div class="btn-group">
                    <label btn-radio="0" ng-model="lesson_type" class="btn btn-default ng-untouched ng-valid active ng-dirty ng-valid-parse">班课学员</label>
                    <label btn-radio="1" ng-model="lesson_type" class="btn btn-default ng-untouched ng-valid ng-dirty">1对1学员</label>
                    <label btn-radio="10" ng-model="lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">课时包学员</label>
                </div>
            </div>
        </div>
        <!-- ngIf: lesson_type == 0 -->
        <div class="m-t ng-scope" xo-rest="class_end_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" ng-if="lesson_type == 0" xo-rest-ctrl="list21">
            <div class="row no-gutter">
                <div class="col-xs-12">
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员"><i class="icon-user"></i></button></span></div>
                    </div>
                    <div class="btn-group m-l-xs">
                        <label btn-radio="'2'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">已缴清</label>
                        <label btn-radio="'1'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">部分缴费</label>
                        <label btn-radio="'0'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">未缴费</label>
                        <label btn-radio="" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                    </div>
                    <!-- ngIf: class_rest.$loaded -->
                    <div class="inline w-md m-l-xs ng-scope" ng-if="class_rest.$loaded">
                        <select ng-model="params.oc_id" class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oc_id as item.class_name for item in class_rest.$list" style="display: none;">
                            <option value="" class="">选择班级</option>
                            <option value="0">11</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 240px;" title=""><a class="chosen-single" tabindex="-1"><span>选择班级</span><div><b></b></div></a>
                            <div class="chosen-drop">
                                <div class="chosen-search">
                                    <input type="text" autocomplete="off">
                                </div>
                                <ul class="chosen-results"></ul>
                            </div>
                        </div>
                    </div>
                    <!-- end ngIf: class_rest.$loaded -->
                    <button class="btn btn-default m-l-xs ng-isolate-scope" export="class_end_students" export-params="params"><i class="glyphicon glyphicon-export"></i>导出</button>
                    <div id="fct-class_end_students" style="display:none;">
                        <form name="export_form_class_end_students" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                            <input type="hidden" name="X-XSRF-TOKEN" value="30bed37d3e9766e5dc6b3b2b3ee823e0">
                            <input type="hidden" name="resource" value="class_end_students">
                            <!-- ngRepeat: (key,value) in params -->
                            <input type="hidden" name="ob_id" value="11158" ng-repeat="(key,value) in params" class="ng-scope">
                            <!-- end ngRepeat: (key,value) in params -->
                            <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                            <!-- end ngRepeat: (key,value) in params -->
                            <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                            <!-- end ngRepeat: (key,value) in params -->
                        </form>
                    </div>
                </div>
            </div>
            <!--row-->
            <div class="table-responsive m-t">
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>学生姓名</th>
                            <th>联系电话</th>
                            <th>所在班级</th>
                            <th>授课老师</th>
                            <th>报班日期</th>
                            <th>结课日期</th>
                            <th>报读课次</th>
                            <th>实际消耗</th>
                            <th>缴费状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding"><span ng-bind-html="item.student.sex|sex:0" class="ng-binding"><i class="fa fa-female"></i></span>zzzsz</td>
                            <td class="ng-binding">12345678765</td>
                            <td><a class="link ng-binding" ng-click="params.oc_id=item.oc_id" tooltip="点击班级名查看该班级所有学员">11</a></td>
                            <td class="ng-binding">张英乙</td>
                            <td class="ng-binding">2017-05-13</td>
                            <td class="ng-binding">2017-05-15</td>
                            <td class="ng-binding">4</td>
                            <td class="ng-binding">1 <a class="btn btn-default btn-xs" ng-click="$util.open('tpl/app/student/view_course.modal.html','lg',{ocs_id:item.ocs_id,lesson_type:'0'})"><i class="icon-eye"></i></a></td>
                            <td>
                                <!-- ngIf: item.pay_status == '2' --><span class="label bg-success ng-scope" ng-if="item.pay_status == '2'">已缴清</span>
                                <!-- end ngIf: item.pay_status == '2' -->
                                <!-- ngIf: item.pay_status == '1' -->
                                <!-- ngIf: item.pay_status == '0' -->
                                <!-- ngIf: item.unpay_amount > 0 -->
                            </td>
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
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 条记录">共 1 条记录</small></div>
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
        </div>
        <!-- end ngIf: lesson_type == 0 -->
        <!--班课学员-->
        <!-- ngIf: lesson_type == 1 -->
        <!--1对1学员-->
        <!-- ngIf: lesson_type == 10 -->
        <!--课时包学员-->
    </div>
</template>
<script>
export default {
    name: 'list2',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
