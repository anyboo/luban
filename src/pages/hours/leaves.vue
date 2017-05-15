<template>
    <div ui-view="" class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="leaves" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="leaves">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-6 m-t">
                    <a class="link ng-scope" ng-if="!show_time_filter" ng-click="show_filter()">
                        <i class="glyphicon glyphicon-calendar"></i>  按时间过滤 
                    </a>
                </div>
                <div class="col-xs-12 col-md-6 m-t">
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowDailog('lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <button class="btn btn-default ng-isolate-scope" export="leaves" export-params="params">
                        <i class="glyphicon glyphicon-export"></i>  导出 
                    </button>
                    <div id="fct-leaves" style="display:none;">
                        <form name="export_form_leaves" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                            <input type="hidden" name="X-XSRF-TOKEN" value="cee96e8dd9bbce533937bb8352bc7dde">
                            <input type="hidden" name="resource" value="leaves">
                            <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="tffield" value="int_day" ng-repeat="(key,value) in params" class="ng-scope">
                        </form>
                    </div>
                    <div class="btn-group dropdown pull-right" dropdown="">
                        <button class="btn btn-success" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                            <i class="icon-plus"></i>  请假登记 
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_leave" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行请假登记" @click="lbShowDailog('lb-selectstudenttpl')">
                                    <i class="fa fa-plus"></i>  按上课时间单次登记 
                                </a>
                            </li>
                            <li>
                                <a select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_arrange_leave" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员按排课登记考勤" @click="lbShowDailog('lb-selectstudenttpl')">
                                    <i class="fa fa-calendar"></i>  按排课记录批量登记 
                                </a>
                            </li>
                            <li>
                                <a select-tpl="tpl/directive/selectSClassTpl.html" select-id-field="osc_id" max-num="1" on-selected="sclass_arrange_leave" select-params="{ob_id:user.gv.ob_id}" select-title="请选择科目班级登记考勤" @click="lbShowDailog('lb-selectsclasstpl')">
                                    <i class="fa fa-users"></i>  按科目班级批量登记 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover b-t b-light">
                    <thead>
                        <tr>
                            <th>请假学员</th>
                            <th>请假信息</th>
                            <th>关联排课</th>
                            <th>
  登记时间 
                                <span class="table-header-sort ng-isolate-scope" header-sort="create_time" params="params">
                                    <span class="icon">
                                        <i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i>
                                    </span>
                                    <span class="icon">
                                        <i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i>
                                    </span>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">
                                <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-male"></i>
                                </span>
  李哥 
                                <p>
                                    <a class="btn btn-danger btn-xs ng-isolate-scope" confirm-text="确认要删除该请假信息吗?" confirm-action="remove_leave(item)">
                                        <i class="icon-ban" ng-disabled="saving"></i>  删除 
                                    </a>
                                </p>
                            </td>
                            <td>
                                <ul class="list-unstyled w4">
                                    <li class="ng-binding">
                                        <label>上课日期:</label>  2017-05-19 
                                    </li>
                                    <li>
                                        <label>上课时间:</label>
                                        <span class="ng-binding">11:00</span>  - 
                                        <span class="ng-binding">12:00</span>
                                    </li>
                                    <li class="ng-binding">
                                        <label>请假原因:</label>  病假 
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-unstyled w6 ng-scope" ng-if="item.ota_id > 0">
                                    <li>
                                        <label>课程/班级:</label>
                                        <span class="ng-binding">3期班</span>
                                    </li>
                                    <li>
                                        <label>授课老师:</label>
                                        <span class="ng-binding">陈佳木</span>
                                    </li>
                                </ul>
                            </td>
                            <td class="ng-binding">
  2017-05-12 15:59 
                                <br>
                                <span class="label bg-warning ng-scope" ng-if="item.create_from == 0">机构登记</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
    name: 'leaves',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>