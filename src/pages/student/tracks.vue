<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper bg-white ng-scope" xo-rest="student_tracks" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="student_tracks">
            <div class="row no-gutter">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline va-m">
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
                    <lb-buttongroup :group-data="lb_localdata.lb_param_track_type" v-model="lb_localdata.form.lb_param_track_type"></lb-buttongroup>
                    <button class="btn btn-primary pull-right" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="add_track" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行咨询回访登记" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                        <i class="icon-plus"></i>跟踪回访登记
                    </button>
                </div>
            </div>
            <div class="table-responsive m-t">
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th width="100">学员</th>
                            <th>沟通内容</th>
                            <th>沟通方式</th>
                            <th>接洽人</th>
                            <th>沟通时间</th>
                            <th>类型</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <a class="link" ng-click="add_track(item.student)" tooltip="新增记录">
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63717">
                                    <span ng-bind-html="item.sex|sex:0" class="ng-binding"></span>LLL
                                </a> </td>
                            <td>
                                <pre ng-bind-html="item.detail" class="ng-binding">4IUI5I5I</pre>
                            </td>
                            <td width="120" class="ng-binding">电话</td>
                            <td width="100" class="ng-binding">陈佳木</td>
                            <td width="110" class="ng-binding">2017-05-08 15:16</td>
                            <td width="60">
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <a class="link" ng-click="add_track(item.student)" tooltip="新增记录">
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63717">
                                    <span ng-bind-html="item.sex|sex:0" class="ng-binding"></span>LLL
                                </a> </td>
                            <td>
                                <pre ng-bind-html="item.detail" class="ng-binding">3T435T45Y45Y</pre>
                            </td>
                            <td width="120" class="ng-binding">面谈</td>
                            <td width="100" class="ng-binding">陈佳木</td>
                            <td width="110" class="ng-binding">2017-05-08 15:16</td>
                            <td width="60">
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <a class="link" ng-click="add_track(item.student)" tooltip="新增记录">
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63240">
                                    <span ng-bind-html="item.sex|sex:0" class="ng-binding"></span>小兵
                                </a> </td>
                            <td>
                                <pre ng-bind-html="item.detail" class="ng-binding">56与u456u456</pre>
                            </td>
                            <td width="120" class="ng-binding">网络</td>
                            <td width="100" class="ng-binding">陈佳木</td>
                            <td width="110" class="ng-binding">2017-05-08 15:14</td>
                            <td width="60">
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <a class="link" ng-click="add_track(item.student)" tooltip="新增记录">
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/51426">
                                    <span ng-bind-html="item.sex|sex:0" class="ng-binding"></span>李哥
                                </a> </td>
                            <td>
                                <pre ng-bind-html="item.detail" class="ng-binding">咨询舞蹈</pre>
                            </td>
                            <td width="120" class="ng-binding">电话</td>
                            <td width="100" class="ng-binding">陈佳木</td>
                            <td width="110" class="ng-binding">2017-04-17 10:26</td>
                            <td width="60">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="wrapper" style="height:80px"></div>
                <div class="grid-data-result">
                </div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 4 条记录">共 4 条记录</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tracks',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_params_date_end': '',
                'lb_duration': '',
                'lb_param_student_name': '',
                'lb_param_track_type': ''
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
            'lb_param_track_type': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
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