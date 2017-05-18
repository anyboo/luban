<template>
    <div ui-view="" class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="teacher_hours" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="teacher_hours">
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
                    <div class="inline w-md m-l-xs">
                        <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;" v-model="lb_localdata.form.lb_params_oe_id">
                            <option value="" class="">选择老师</option>
                            <option value="0">陈佳木</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 240px;" title="">
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
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>教师</th>
                            <th>授课时间</th>
                            <th>时长</th>
                            <th>学生数</th>
                            <th>类型</th>
                            <th>对象</th>
                            <th>课程金额</th>
                            <th>点评</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <a class="link ng-binding" ng-click="params.oe_id=item.oe_id;params_teacher_name=item.teacher_name">陈佳木</a>
                            </td>
                            <td class="ng-binding">2017-05-12 11:00</td>
                            <td>
                                <span class="badge bg-success ng-binding">1.00小时</span>
                            </td>
                            <td class="ng-binding">1</td>
                            <td class="ng-binding">1对1</td>
                            <td class="ng-binding">李达康</td>
                            <td>
                                <a ng-click="$util.open('tpl/app/hours/view_lesson_amount.modal.html','md',item)" @click="lbShowdialog($event,'lb-viewlessonamountmodal')">
                                    <span class="label bg-info ng-binding">￥100.00</span>
                                </a>
                            </td>
                            <td>
                                <span ng-if="item.is_comment == '0'" class="badge bg-warning ng-scope">未点评</span>
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <a class="link ng-binding" ng-click="params.oe_id=item.oe_id;params_teacher_name=item.teacher_name">陈佳木</a>
                            </td>
                            <td class="ng-binding">2017-05-12 11:00</td>
                            <td>
                                <span class="badge bg-success ng-binding">1.00小时</span>
                            </td>
                            <td class="ng-binding">1</td>
                            <td class="ng-binding">班课</td>
                            <td class="ng-binding">小兵</td>
                            <td>
                                <a ng-click="$util.open('tpl/app/hours/view_lesson_amount.modal.html','md',item)" @click="lbShowdialog($event,'lb-viewlessonamountmodal')">
                                    <span class="label bg-info ng-binding">￥0.00</span>
                                </a>
                            </td>
                            <td>
                                <span ng-if="item.is_comment == '0'" class="badge bg-warning ng-scope">未点评</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        课程金额总计:
                        <span class="label bg-info ng-binding">￥100.00</span>,小计:
                        <span class="label bg-info ng-binding">￥100</span>
                    </div>
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
    name: 'teacher',
    data() {
        let lb_localdata = {
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
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>