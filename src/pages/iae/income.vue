<template>
    <div ui-view class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="bills" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="bills">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline">
                        <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="lb_localdata.form.lb_params_date_start">
                        <lb-date-picker v-model="lb_localdata.form.lb_daterange" type="daterange"></lb-date-picker>
                        <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="lb_localdata.form.lb_params_date_end">
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <lb-buttongroup :group-data="lb_localdata.lb_duration" v-model="lb_localdata.form.lb_duration"></lb-buttongroup>
                    <lb-buttongroup :group-data="lb_localdata.lb_params_check_status" v-model="lb_localdata.form.lb_params_check_status"></lb-buttongroup>
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
                    <button class="btn btn-default ng-isolate-scope" export="bills" export-params="params">
                        <i class="glyphicon glyphicon-export"></i>导出
                    </button>
                    <div id="fct-bills" style="display:none;">
                        <form name="export_form_bills" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                            <input type="hidden" name="X-XSRF-TOKEN" value="3fcd68790fbf79751a57ca8fbda8b037">
                            <input type="hidden" name="resource" value="bills">
                            <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="date_start" value="2017-04-01" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                        </form>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <lb-table :data="getTableData" stripe>
                    <lb-table-column prop="data" label="学员">
                        <template scope="scope">李岩</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="付款日期">
                        <template scope="scope">2017-05-11 20:07</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="金额">
                        <template scope="scope">
                            <span class="badge bg-success ng-binding">1000.00</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="付款方式">
                        <template scope="scope">现金</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="备注">
                        <template scope="scope">-</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="经办人">
                        <template scope="scope">陈佳木</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="对账状态">
                        <template scope="scope">
                            <span ng-if="item.check_status == '0'" class="badge bg-warning ng-scope">未对账</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="操作">
                        <template scope="scope">
                            <a class="btn btn-xs btn-default" ng-class="{'btn-primary':item.$checked||item.check_status=='1'}" ng-click="toggle_check(item)" ng-disabled="item.check_status=='1'">核对</a>
                        </template>
                    </lb-table-column>
                </lb-table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 5 条记录">共 5 条记录</small>
                        <small ng-if="grid.$data.total_amount" class="ng-binding ng-scope">总金额:5100.00元</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                    </div>
                </div>
            </div>
            <div class="float-btn-box" ng-class="{'float-btn-box-show':have_selected()}">
                <button class="btn btn-info btn-rounded ng-binding" ng-disabled="saving" ng-click="bat_check_pay()">确定(0)</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'income',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_daterange': '',
                'lb_params_date_end': '',
                'lb_duration': '',
                'lb_params_check_status': '',
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
            }],
            'lb_params_check_status': [{
                'value': '0',
                'text': '未对账'
            }, {
                'value': '1',
                'text': '已对账'
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