<template>
    <div ui-view class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="arrearages" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="arrearages">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline">
                        <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="lb_localdata.form.lb_params_date_start">
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
                    <button class="btn btn-default m-l-xs ng-isolate-scope" export="arrearages" export-params="params">
                        <i class="glyphicon glyphicon-export"></i>导出
                    </button>
                    <div id="fct-arrearages" style="display:none;">
                        <form name="export_form_arrearages" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                            <input type="hidden" name="X-XSRF-TOKEN" value="cee96e8dd9bbce533937bb8352bc7dde">
                            <input type="hidden" name="resource" value="arrearages">
                            <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                        </form>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <lb-table :data="getTableData" stripe>
                    <lb-table-column prop="data" label="操作">
                        <template scope="scope">
                            <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                    操作
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="日期">
                        <template scope="scope">2017-05-05 15:23</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="订单号">
                        <template scope="scope">OB1161217050523032304926</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="订单内容">
                        <template scope="scope">班课[3期班]60次</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="欠费金额">
                        <template scope="scope">
                            <span class="badge bg-danger ng-binding">3000.00</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="总金额">
                        <template scope="scope">
                            <span class="badge bg-info ng-binding">3000.00</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="学员">
                        <template scope="scope">小兵</template>
                    </lb-table-column>
                </lb-table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 5 个欠费订单">共 5 个欠费订单</small>
                        <small ng-if="grid.$data.total_unpay_amount" class="ng-binding ng-scope">总金额:9040.00元</small>
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
    name: 'list3',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
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
            }],
            'dropDownMenu': [{
                'url': 'lb-paynowmodal',
                'icon': 'icon-wallet',
                'text': '现场缴费'
            }, {
                'url': 'lb-payregmodal',
                'icon': 'icon-note',
                'text': '缴费登记'
            }, {
                'url': 'lb-orderunpayclearmodal',
                'icon': 'icon-ban',
                'text': '欠费清除'
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