<template>
    <div>
        <div ng-include="'tpl/app/widget/attendance/select_'+att.lesson_type+'.block.html'" ng-if="att.sj_id > 0 || att.lesson_type == '0' || att.lesson_type == '1'" class="ng-scope">
            <div class="wrapper bg-light lter ng-scope">
                <p class="text-center text-muted ng-scope" ng-if="!att.contract">请在下面选择学员,点击选择</p>
            </div>
            <div class="wrapper-xs ng-scope" xo-rest="contracts" xo-rest-ctrl="att_ct" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,is_expired:0,end_time:0,ob_id:user.gv.ob_id}}" loading-text="正在加载1对1合同..." empty-text="没有符合条件的1对1合同!">
                <div class="row wrapper no-gutter bg-light">
                    <div class="col-xs-2">
                        <p>筛选</p>
                        <button class="btn btn-default btn-xs btn-info active" ng-class="{'btn-info':show_en_name,'active':show_en_name}" ng-click="toggle_en_name()" ui-toggle-class="btn-info">英文名</button>
                    </div>
                    <div class="col-xs-10">
                        <div class="m-b-xs">
                            <select class="form-control ng-pristine ng-untouched ng-valid" name="ol_id" ui-jq="chosen" ng-options="lesson.ol_id as lesson.lesson_name for lesson in $gv.lessons|filter:{'lesson_type':'1'}" style="display: none;" v-model="lb_localdata.form.lb_params_ol_id">
                                <option value="" class="">选择课程</option>
                                <option value="0">qq</option>
                            </select>
                            <div class="chosen-container chosen-container-single" style="width: 707px;" title="">
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
                        <div class="m-b">
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
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-hover b-t b-light">
                        <thead>
                            <tr>
                                <th>学员</th>
                                <th>课程</th>
                                <th>课次</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-click="select_contract(item)" ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                <td>
                                    <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                        <i class="fa fa-female"></i>
                                    </span>
                                    <span class="ng-binding">zzzsz</span>
                                    <span ng-if="show_en_name" class="ng-binding ng-scope">hh</span>
                                </td>
                                <td>
                                    <span class="ng-binding">qq</span>
                                </td>
                                <td>
                                    <div class="progress ng-isolate-scope" style="margin:0" max="item.lesson_times" value="item.use_times" type="info">
                                        <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="12" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                            <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 12</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="grid-data-result"></div>
                </div>
                <div class="panel-footer ng-scope" ng-if="grid.total > 0">
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'oto',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_ol_id': '',
                'lb_name': ''
            }
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