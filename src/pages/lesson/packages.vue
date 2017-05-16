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
                            <select name="ol_id" ui-jq="chosen" ng-model="params.ol_id" ng-options="lesson.ol_id as lesson.lesson_name for lesson in $gv.lessons|filter:cur_branch|filter:{'lesson_type':'10'}" class="ng-pristine ng-untouched ng-valid" style="display: none;">
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
                                <input type="text" placeholder="学员" ng-model="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly">
                                <span class="input-group-btn">
                                    <button class="btn btn-default " select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="selectParams" select-title="请选择学员" @click="lbShowDailog('lb-selectstudenttpl')">
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
                        <div class="btn-group m-l-xs">
                            <label btn-radio="'2'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">已缴费</label>
                            <label btn-radio="'1'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">部分缴费</label>
                            <label btn-radio="'0'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">未缴费</label>
                            <label btn-radio="" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                        </div>
                        <div class="btn-group m-l-xs">
                            <label btn-radio="'0'" ng-model="params.assign_class" class="btn btn-default ng-pristine ng-untouched ng-valid">未分班</label>
                            <label btn-radio="'100'" ng-model="params.assign_class" class="btn btn-default ng-pristine ng-untouched ng-valid">已分班</label>
                            <label btn-radio="" ng-model="params.assign_class" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                        </div>
                        <div class="btn-group m-l-xs">
                            <label btn-radio="'100'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已结课</label>
                            <label btn-radio="" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                        </div>
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
        <div class="modal-header">
            <h3 class="modal-title">
                条件查询
                <button class="btn btn-sm btn-default pull-right" ng-click="$dismiss()" @click="lbCloseDailog()">关闭</button>
            </h3>
        </div>
        <div class="modal-body" ng-init="params.expire_duration = 0">
            <p class="m-t-xs">有效期限制:</p>
            <div class="btn-group">
                <label btn-radio="'0'" ng-model="params.has_time_limited" class="btn btn-default">无限制</label>
                <label btn-radio="'1'" ng-model="params.has_time_limited" class="btn btn-default">有限制</label>
            </div>
            <div ng-if="params.has_time_limited == '1'">
                <p class="m-t-xs">到期时间:</p>
                <select class="form-control" ng-model="params.expire_duration">
                    <option value="0">所有</option>
                    <option value="1">1个月内</option>
                    <option value="2">2个月内</option>
                    <option value="3">3个月内</option>
                    <option value="100">已过期</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'packages',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>