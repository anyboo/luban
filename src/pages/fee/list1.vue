<template>
    <div ui-view="" class="ng-scope">
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
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>金额</th>
                            <th>学员</th>
                            <th>付款方式</th>
                            <th>收据</th>
                            <th>课程/班级</th>
                            <th>校区</th>
                            <th>备注</th>
                            <th>经办人</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">2017-05-05 14:45</td>
                            <td>
                                <span class="badge bg-success ng-binding">1000.00</span>
                            </td>
                            <td class="ng-binding">李哥</td>
                            <td class="ng-binding">现金</td>
                            <td>
                                <div class="inline ng-scope" ng-if="item.orb_id == '0'">
                                    <span class="m-l-xs ng-scope" ng-if="item.bill_no == ''">收据未开</span>
                                </div>
                            </td>
                            <td>
                                <span ng-if="item.lesson_type == '0'" class="ng-scope">
                                    <a class="link ng-binding" ng-click="params.oc_id=item.oc_id">[班课]3期班</a>
                                </span>
                            </td>
                            <td ng-bind-html="item.ob_id|branch_name" class="ng-binding">
                                <label class="badge bg-info badge-xm">福州布尔培训</label>
                            </td>
                            <td ng-bind-html="item.pay_note" class="ng-binding"></td>
                            <td class="ng-binding">陈佳木</td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">2017-05-05 14:44</td>
                            <td>
                                <span class="badge bg-success ng-binding">1000.00</span>
                            </td>
                            <td class="ng-binding">李哥</td>
                            <td class="ng-binding">微信支付</td>
                            <td>
                                <div class="inline ng-scope" ng-if="item.orb_id == '0'">
                                    <span class="m-l-xs ng-scope" ng-if="item.bill_no == ''">收据未开</span>
                                </div>
                            </td>
                            <td>
                                <span ng-if="item.lesson_type == '0'" class="ng-scope">
                                    <a class="link ng-binding" ng-click="params.oc_id=item.oc_id">[班课]3期班</a>
                                </span>
                            </td>
                            <td ng-bind-html="item.ob_id|branch_name" class="ng-binding">
                                <label class="badge bg-info badge-xm">福州布尔培训</label>
                            </td>
                            <td ng-bind-html="item.pay_note" class="ng-binding"></td>
                            <td class="ng-binding">陈佳木</td>
                        </tr>
                        <tr>
                            <td class="text-right">小计:</td>
                            <td xo-data-count="grid.data" xo-data-field="amount" class="ng-isolate-scope">
                                <span class="ng-binding">2000</span>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 2 条记录">共 2 条记录</small>
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