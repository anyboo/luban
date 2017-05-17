<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper-xs ng-scope" xo-rest="packages" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="packages" loading-text="正在加载课时包..." empty-text="没有符合条件的课时包!">
            <ul class="breadcrumb bg-white b-a">
                <li>
                    <a ui-sref="lesson.packages" href="#/lesson/packages">
                        <i class="fa fa-suitcase"></i>课时包
                    </a>
                </li>
                <li class="active">报读学员</li>
            </ul>
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline w va-m">
                            <select name="ol_id" ui-jq="chosen" ng-options="lesson.ol_id as lesson.lesson_name for lesson in $gv.lessons|filter:cur_branch|filter:{'lesson_type':'10'}" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="lb_localdata.form.lb_params_ol_id">
                                <option value="" class="">选择课程</option>
                            </select>
                            <div class="chosen-container chosen-container-single" style="width: 81px;" title="">
                                <a class="chosen-single" tabindex="-1">
                                    <span>选择课程</span>
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
                        <div class="inline w va-m">
                            <div class="input-group ng-valid" select-title="请选择学员" ng-model="params.os_id" select-params="{ob_id:user.gv.ob_id}">
                                <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="lb_localdata.form.lb_name">
                                <span class="input-group-btn">
                                    <button class="btn btn-default " select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="selectParams" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                        <i class="icon-user"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});">
                            <i class="fa fa-filter"></i>过滤
                        </button>
                        <lb-buttongroup :group-data="lb_localdata.lb_params_pay_status" v-model="lb_localdata.form.lb_params_pay_status"></lb-buttongroup>
                        <lb-buttongroup :group-data="lb_localdata.lb_params_assign_class" v-model="lb_localdata.form.lb_params_assign_class"></lb-buttongroup>
                        <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status"></lb-buttongroup>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped b-t b-light">
                        <thead>
                            <tr>
                                <th>学员</th>
                                <th>课程</th>
                                <th>缴费&课时</th>
                                <th>分班</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <div class="grid-data-result">
                        <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                            <i class="fa fa-frown-o"></i>没有符合条件的课时包!
                        </p>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12"></div>
                        <div class="col-sm-4 text-center">
                            <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 份课时包记录">共 0 份课时包记录</small>
                        </div>
                        <div class="col-sm-4 text-right text-center-xs">
                            <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'packages',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_ol_id': '',
                'lb_name': '',
                'lb_params_pay_status': '',
                'lb_params_assign_class': '',
                'lb_params_status': ''
            },
            'lb_params_pay_status': [{
                'value': '2',
                'text': '已缴费'
            }, {
                'value': '1',
                'text': '部分缴费'
            }, {
                'value': '0',
                'text': '未缴费'
            }],
            'lb_params_assign_class': [{
                'value': '0',
                'text': '未分班'
            }, {
                'value': '100',
                'text': '已分班'
            }],
            'lb_params_status': [{
                'value': '100',
                'text': '已结课'
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