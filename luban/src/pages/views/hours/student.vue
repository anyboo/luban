<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="student_hours" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="student_hours">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange"></el-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration"></lb-buttongroup>
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
                            <div class="inline w-md m-l-xs">
                                <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;" v-model="localdata.form.oe_id">
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
                            <button class="btn btn-default ng-isolate-scope" export="student_hours" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出
                            </button>
                            <div id="fct-student_hours" style="display:none;">
                                <form name="export_form_student_hours" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="cee96e8dd9bbce533937bb8352bc7dde">
                                    <input type="hidden" name="resource" value="student_hours">
                                    <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="date_start" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTableData" stripe>
                            <el-table-column prop="data" label="学员">
                                <template scope="scope">
                                    <a class="link ng-binding" ng-click="params.os_id=item.os_id">李达康</a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="上课时间">
                                <template scope="scope">2017-05-12 11:00</template>
                            </el-table-column>
                            <el-table-column prop="data" label="时长">
                                <template scope="scope">
                                    <span class="badge bg-success ng-binding">1.00小时</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="类型">
                                <template scope="scope">1对1</template>
                            </el-table-column>
                            <el-table-column prop="data" label="班级/课程">
                                <template scope="scope">
                                    <span class="label bg-info ng-binding">古典吉他初级</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="课程金额">
                                <template scope="scope">
                                    <span class="label bg-danger ng-binding ng-scope" ng-if="item.pay_status == 0" tooltip="未缴费">￥100.00</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="授课老师">
                                <template scope="scope">陈佳木</template>
                            </el-table-column>
                            <el-table-column prop="data" label="登记时间">
                                <template scope="scope">2017-05-12 09:06</template>
                            </el-table-column>
                            <el-table-column prop="data" label="登记人">
                                <template scope="scope">陈佳木</template>
                            </el-table-column>
                        </el-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer ">
                        <div class="row ">
                            <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'student',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': '',
                'student_name': '',
                'oe_id': ''
            },
            'duration': [{
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
