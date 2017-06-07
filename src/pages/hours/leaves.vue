<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="leaves" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="leaves">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-6 m-t">
                            <a class="link ng-scope" ng-if="!show_time_filter" ng-click="show_filter()">
                                <i class="glyphicon glyphicon-calendar"></i>按时间过滤
                            </a>
                        </div>
                        <div class="col-xs-12 col-md-6 m-t">
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.student_name">
                                    <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                                </div>
                            </div>
                            <button class="btn btn-default ng-isolate-scope" export="leaves" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出
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
                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-success">
                                    <i class="icon-plus"></i>请假登记
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <lb-table :data="getTableData" stripe>
                            <lb-table-column prop="data" label="请假学员">
                                <template scope="scope">
                                    <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                <i class="fa fa-male"></i>
                            </span>李哥
                                    <p>
                                        <a class="btn btn-danger btn-xs ng-isolate-scope" confirm-text="确认要删除该请假信息吗?" confirm-action="remove_leave(item)">
                                            <i class="icon-ban" ng-disabled="saving"></i>删除
                                        </a>
                                    </p>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="请假信息">
                                <template scope="scope">
                                    <ul class="list-unstyled w4">
                                        <li class="ng-binding">
                                            <label>上课日期:</label>2017-05-19
                                        </li>
                                        <li>
                                            <label>上课时间:</label>
                                            <span class="ng-binding">11:00</span>-
                                            <span class="ng-binding">12:00</span>
                                        </li>
                                        <li class="ng-binding">
                                            <label>请假原因:</label>病假
                                        </li>
                                    </ul>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="关联排课">
                                <template scope="scope">
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
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="登记时间">
                                <template scope="scope">
                                    2017-05-12 15:59
                                    <br>
                                    <span class="label bg-warning ng-scope" ng-if="item.create_from == 0">机构登记</span>
                                </template>
                            </lb-table-column>
                        </lb-table>
                        <div class="grid-data-result"></div>
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
    name: 'leaves',
    data() {
        let localdata = {
            'form': {
                'student_name': ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
