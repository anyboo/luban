<template>
    <div ui-view="" class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="fees" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="fees">
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
                    <lb-buttongroup :group-data="lb_localdata.lb_params_type" v-model="lb_localdata.form.lb_params_type"></lb-buttongroup>
                    <button class="btn btn-default ng-isolate-scope" export="flow" export-params="params">
                        <i class="glyphicon glyphicon-export"></i>导出Excel
                    </button>
                    <div id="fct-flow" style="display:none;">
                        <form name="export_form_flow" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                            <input type="hidden" name="X-XSRF-TOKEN" value="3fcd68790fbf79751a57ca8fbda8b037">
                            <input type="hidden" name="resource" value="flow">
                            <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="date_start" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                        </form>
                    </div>
                    <a ng-click="$util.open('tpl/app/iae/flow.add.modal.html','md',{})" @click="lbShowdialog($event,'lb-flowaddmodal')">
                        <i class="fa fa-pencil"></i>记一笔
                    </a>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>日期</th>
                            <th>金额</th>
                            <th>类型</th>
                            <th>分类</th>
                            <th>备注</th>
                            <th>经办人</th>
                            <th>录入日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <a class="btn btn-danger btn-xs ng-isolate-scope" confirm-action="do_delete(item)" confirm-text="确定要撤销流水账吗?" ui-per="iae.delete">
                                    <i class="fa fa-reply"></i>撤销
                                </a>
                                <a ng-click="$util.open('tpl/app/iae/set_odi.modal.html','sm',item)" @click="lbShowdialog($event,'lb-setodimodal')" class="btn btn-default btn-xs ng-click-active">设置分类</a>
                            </td>
                            <td class="ng-binding">2017-05-12 15:41</td>
                            <td>
                                <span ng-if="item.amount < 0" class="badge bg-warning ng-binding ng-scope">-30.00</span>
                            </td>
                            <td>
                                <span ng-if="item.type == '0'" class="badge bg-warning ng-scope">支出</span>
                            </td>
                            <td>
                                <span ng-if="item.type == '0'" class="label bg-info ng-binding ng-scope">未设置</span>
                            </td>
                            <td>
                                <span ng-bind-html="item.note" class="ng-binding">李哥订单退款,订单号:OB1161217170444033750849</span>
                            </td>
                            <td class="ng-binding">陈佳木</td>
                            <td class="ng-binding">2017-05-12 15:41</td>
                        </tr>
                        <tr ng-if="grid.$data.ctotal_amount" class="ng-scope">
                            <td></td>
                            <td colspan="7">
                                小计:
                                <span class="text-success ng-binding">-30元</span>
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
                        <small ng-if="grid.$data.total_amount" class="ng-binding ng-scope">总金额:-30.00元</small>
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
    name: 'flow',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_daterange': '',
                'lb_params_date_end': '',
                'lb_duration': '',
                'lb_params_type': ''
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
            'lb_params_type': [{
                'value': '0',
                'text': '支出'
            }, {
                'value': '1',
                'text': '收入'
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