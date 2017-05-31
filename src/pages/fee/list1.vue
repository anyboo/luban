<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="pay_history" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id,is_pay:1}}" xo-rest-ctrl="pay_history">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" options="dateRangeOptions" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="lb_localdata.form.lb_params_date_start">
                                <lb-date-picker v-model="lb_localdata.form.lb_daterange" type="daterange"></lb-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="lb_localdata.form.lb_params_date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="lb_localdata.lb_duration" v-model="lb_localdata.form.lb_duration"></lb-buttongroup>
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
                        </div>
                    </div>
                    <div class="table-responsive">
                        <lb-table :data="getTableData" stripe>
                            <lb-table-column prop="data" label="日期">
                                <template scope="scope">2017-05-05 14:45</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="金额">
                                <template scope="scope">
                                    <span class="badge bg-success ng-binding">1000.00</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="学员">
                                <template scope="scope">李哥</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="付款方式">
                                <template scope="scope">现金</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="收据">
                                <template scope="scope">
                                    <div class="inline ng-scope" ng-if="item.orb_id == '0'">
                                        <span class="m-l-xs ng-scope" ng-if="item.bill_no == ''">收据未开</span>
                                    </div>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="课程/班级">
                                <template scope="scope">
                                    <span ng-if="item.lesson_type == '0'" class="ng-scope">
                                <a class="link ng-binding" ng-click="params.oc_id=item.oc_id">[班课]3期班</a>
                            </span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="校区">
                                <template scope="scope">
                                    <label class="badge bg-info badge-xm">福州布尔培训</label>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="备注">
                                <template scope="scope"></template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="经办人">
                                <template scope="scope">陈佳木</template>
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
    name: 'list1',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_daterange': '',
                'lb_params_date_end': '',
                'lb_duration': '',
                'lb_param_student_name': ''
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
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
