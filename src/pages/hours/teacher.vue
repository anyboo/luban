<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="teacher_hours" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="teacher_hours">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.lb_params_date_start">
                                <lb-date-picker v-model="localdata.form.lb_daterange" type="daterange"></lb-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.lb_params_date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.lb_duration" v-model="localdata.form.lb_duration"></lb-buttongroup>
                            <div class="inline w-md m-l-xs">
                                <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;" v-model="localdata.form.lb_params_oe_id">
                                    <option value class>选择老师</option>
                                    <option value="0">陈佳木</option>
                                </select>
                                <div class="chosen-container chosen-container-single" style="width: 240px;" title>
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
                            <button class="btn btn-default ng-isolate-scope" export="teacher_amount" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>按老师汇总导出
                            </button>
                            <div id="fct-teacher_amount" style="display:none;">
                                <form name="export_form_teacher_amount" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="cee96e8dd9bbce533937bb8352bc7dde">
                                    <input type="hidden" name="resource" value="teacher_amount">
                                    <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="date_start" value="2017-05-01" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                            <button class="btn btn-default ng-isolate-scope" export="teacher_hours" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>按课次导出
                            </button>
                            <div id="fct-teacher_hours" style="display:none;">
                                <form name="export_form_teacher_hours" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="cee96e8dd9bbce533937bb8352bc7dde">
                                    <input type="hidden" name="resource" value="teacher_hours">
                                    <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="date_start" value="2017-05-01" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <lb-table :data="getTableData" stripe>
                            <lb-table-column prop="data" label="教师">
                                <template scope="scope">
                                    <a class="link ng-binding" ng-click="params.oe_id=item.oe_id;params_teacher_name=item.teacher_name">陈佳木</a>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="授课时间">
                                <template scope="scope">2017-05-12 11:00</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="时长">
                                <template scope="scope">
                                    <span class="badge bg-success ng-binding">1.00小时</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="学生数">
                                <template scope="scope">1</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="类型">
                                <template scope="scope">1对1</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="对象">
                                <template scope="scope">李达康</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="课程金额">
                                <template scope="scope">
                                    <a ng-click="$util.open('tpl/app/hours/view_lesson_amount.modal.html','md',item)" @click="lbShowdialog($event,'lb-viewlessonamountmodal')">
                                        <span class="label bg-info ng-binding">￥100.00</span>
                                    </a>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="点评">
                                <template scope="scope">
                                    <span ng-if="item.is_comment == '0'" class="badge bg-warning ng-scope">未点评</span>
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
    name: 'teacher',
    data() {
        let localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_daterange': '',
                'lb_params_date_end': '',
                'lb_duration': '',
                'lb_params_oe_id': ''
            },
            'lb_duration': [{
                'value': 'today',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }]
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
