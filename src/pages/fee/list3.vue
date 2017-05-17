<template>
    <div ui-view="" class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="arrearages" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="arrearages">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline">
                        <input type="text" id="ctl_date_start" ng-model="params.date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;">
                        <input type="text" id="ctl_date_end" ng-model="params.date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;">
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <div class="btn-group m-l">
                        <label btn-radio="'today'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">今日</label>
                        <label btn-radio="'week'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本周</label>
                        <label btn-radio="'month'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本月</label>
                    </div>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowDailog($event,'lb-selectstudenttpl')">
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
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>日期</th>
                            <th>订单号</th>
                            <th>订单内容</th>
                            <th>欠费金额</th>
                            <th>总金额</th>
                            <th>学员</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                        操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu slot="menuslot">
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)" @click="lbShowDailog($event,'lb-paynowmodal')">
                                                <i class="icon-wallet"></i>现场缴费
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)" @click="lbShowDailog($event,'lb-payregmodal')">
                                                <i class="icon-note"></i>缴费登记
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order_unpay_clear.modal.html','md',item)" @click="lbShowDailog($event,'lb-orderunpayclearmodal')">
                                                <i class="icon-ban"></i>欠费清除
                                            </a>
                                        </li>
                                    </lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td class="ng-binding">2017-05-05 15:23</td>
                            <td class="ng-binding">OB1161217050523032304926</td>
                            <td class="ng-binding">班课[3期班]60次</td>
                            <td>
                                <span class="badge bg-danger ng-binding">3000.00</span>
                            </td>
                            <td>
                                <span class="badge bg-info ng-binding">3000.00</span>
                            </td>
                            <td class="ng-binding">小兵</td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                        操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu slot="menuslot">
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)" @click="lbShowDailog($event,'lb-paynowmodal')">
                                                <i class="icon-wallet"></i>现场缴费
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)" @click="lbShowDailog($event,'lb-payregmodal')">
                                                <i class="icon-note"></i>缴费登记
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order_unpay_clear.modal.html','md',item)" @click="lbShowDailog($event,'lb-orderunpayclearmodal')">
                                                <i class="icon-ban"></i>欠费清除
                                            </a>
                                        </li>
                                    </lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td class="ng-binding">2017-05-05 15:23</td>
                            <td class="ng-binding">OB1161217050523032399824</td>
                            <td class="ng-binding">班课[3期班]60次</td>
                            <td>
                                <span class="badge bg-danger ng-binding">3000.00</span>
                            </td>
                            <td>
                                <span class="badge bg-info ng-binding">3000.00</span>
                            </td>
                            <td class="ng-binding">李岩</td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                        操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu slot="menuslot">
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)" @click="lbShowDailog($event,'lb-paynowmodal')">
                                                <i class="icon-wallet"></i>现场缴费
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)" @click="lbShowDailog($event,'lb-payregmodal')">
                                                <i class="icon-note"></i>缴费登记
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order_unpay_clear.modal.html','md',item)" @click="lbShowDailog($event,'lb-orderunpayclearmodal')">
                                                <i class="icon-ban"></i>欠费清除
                                            </a>
                                        </li>
                                    </lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td class="ng-binding">2017-05-05 14:43</td>
                            <td class="ng-binding">OB1161217050557024328509</td>
                            <td class="ng-binding">班课[3期班]62次</td>
                            <td>
                                <span class="badge bg-danger ng-binding">1000.00</span>
                            </td>
                            <td>
                                <span class="badge bg-info ng-binding">3000.00</span>
                            </td>
                            <td class="ng-binding">李哥</td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                        操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu slot="menuslot">
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)" @click="lbShowDailog($event,'lb-paynowmodal')">
                                                <i class="icon-wallet"></i>现场缴费
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)" @click="lbShowDailog($event,'lb-payregmodal')">
                                                <i class="icon-note"></i>缴费登记
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order_unpay_clear.modal.html','md',item)" @click="lbShowDailog($event,'lb-orderunpayclearmodal')">
                                                <i class="icon-ban"></i>欠费清除
                                            </a>
                                        </li>
                                    </lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td class="ng-binding">2017-04-17 17:49</td>
                            <td class="ng-binding">OC1161217170436054927089</td>
                            <td class="ng-binding">1对1课[古典吉他初级]20次</td>
                            <td>
                                <span class="badge bg-danger ng-binding">2000.00</span>
                            </td>
                            <td>
                                <span class="badge bg-info ng-binding">2000.00</span>
                            </td>
                            <td class="ng-binding">李达康</td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <lb-dropdown>
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                        操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                    <lb-dropdown-menu slot="menuslot">
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)" @click="lbShowDailog($event,'lb-paynowmodal')">
                                                <i class="icon-wallet"></i>现场缴费
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)" @click="lbShowDailog($event,'lb-payregmodal')">
                                                <i class="icon-note"></i>缴费登记
                                            </a>
                                        </li>
                                        <li>
                                            <a ng-click="$util.open('tpl/app/student/order_unpay_clear.modal.html','md',item)" @click="lbShowDailog($event,'lb-orderunpayclearmodal')">
                                                <i class="icon-ban"></i>欠费清除
                                            </a>
                                        </li>
                                    </lb-dropdown-menu>
                                </lb-dropdown>
                            </td>
                            <td class="ng-binding">2017-04-17 15:37</td>
                            <td class="ng-binding">OB1161217170444033750849</td>
                            <td class="ng-binding">班课[1班]20次</td>
                            <td>
                                <span class="badge bg-danger ng-binding">40.00</span>
                            </td>
                            <td>
                                <span class="badge bg-info ng-binding">270.00</span>
                            </td>
                            <td class="ng-binding">李哥</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right">小计:</td>
                            <td xo-data-count="grid.data" xo-data-field="unpay_amount" class="ng-isolate-scope">
                                <span class="ng-binding">9040</span>
                            </td>
                            <td xo-data-count="grid.data" xo-data-field="order_amount" class="ng-isolate-scope">
                                <span class="ng-binding">11270</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr ng-if="grid.$data.ctotal_unpay_amount" class="ng-scope">
                            <td></td>
                            <td colspan="6">
                                本页小计:
                                <span class="text-success ng-binding">9040元</span>
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
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>