<template>
    <div class="wrapper bg-white ng-scope" xo-rest="inquiry_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="inquiry_students">
        <div class="row no-gutter">
            <div class="col-xs-12 col-md-4 m-t">
                <div class="inline va-m">
                    <input type="text" id="ctl_date_start" ng-model="params.date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;">
                    <input type="text" id="ctl_date_end" ng-model="params.date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;">
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
                <button class="btn btn-default btn-sm m-l-xs" ng-click="open_aside_left('search',{backdrop:false});">
                    <i class="fa fa-filter"></i>过滤
                </button>
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <div class="btn-group">
                    <label btn-radio="'0'" ng-model="params.region_oe_id" class="btn btn-default ng-pristine ng-untouched ng-valid">未归属</label>
                </div>
                <div class="btn-group m-l">
                    <label btn-radio="'today'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">今日</label>
                    <label btn-radio="'week'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本周</label>
                    <label btn-radio="'month'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本月</label>
                </div>
            </div>
        </div>
        <div class="table-responsive m-t">
            <table class="table table-striped b-t b-light">
                <thead>
                    <tr>
                        <th width="90">操作</th>
                        <th width="100">学员</th>
                        <th width="100">联系电话</th>
                        <th width="100">学员归属</th>
                        <th width="100">意向程度</th>
                        <th width="100">来源渠道</th>
                        <th width="150">建档日期</th>
                        <th>档案备注</th>
                        <th>最后跟踪</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <lb-dropdown>
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-xs" button-tooltip="操作">
                                    <i class="fa fa-cog ng-scope"></i>
                                    <span class="ng-scope">操作</span>
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                                <lb-dropdown-menu slot="menuslot">
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/region_set.modal.html','sm',item)" @click="lbShowDailog($event,'lb-regionsetmodal')">
                                            <i class="icon-rocket"></i>学员归属设定
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/purpose_set.modal.html','sm',item)" @click="lbShowDailog($event,'lb-purposesetmodal')">
                                            <i class="icon-heart"></i>意向程度设置
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)" @click="lbShowDailog($event,'lb-addtrackmodal')">
                                            <i class="fa fa-phone-square"></i>跟踪回访
                                        </a>
                                    </li>
                                </lb-dropdown-menu>
                            </lb-dropdown>
                        </td>
                        <td>
                            <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63895">
                                <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-female"></i>
                                </span>zzz
                            </a>
                            <span class="label bg-info ng-binding ng-scope" ng-if="item.age">0岁</span>
                        </td>
                        <td class="ng-binding">12345678645</td>
                        <td>
                            <span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                        </td>
                        <td>
                            <span class="label bg-gray ng-scope" ng-if="item.purpose == '0'">未设置</span>
                        </td>
                        <td class="ng-binding">广告</td>
                        <td class="ng-binding">2017-05-13</td>
                        <td>
                            <p ng-bind-html="item.note" class="ng-binding">dwwqad</p>
                        </td>
                        <td>
                            <span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                        </td>
                    </tr>
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <lb-dropdown>
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-xs" button-tooltip="操作">
                                    <i class="fa fa-cog ng-scope"></i>
                                    <span class="ng-scope">操作</span>
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                                <lb-dropdown-menu slot="menuslot">
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/region_set.modal.html','sm',item)" @click="lbShowDailog($event,'lb-regionsetmodal')">
                                            <i class="icon-rocket"></i>学员归属设定
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/purpose_set.modal.html','sm',item)" @click="lbShowDailog($event,'lb-purposesetmodal')">
                                            <i class="icon-heart"></i>意向程度设置
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)" @click="lbShowDailog($event,'lb-addtrackmodal')">
                                            <i class="fa fa-phone-square"></i>跟踪回访
                                        </a>
                                    </li>
                                </lb-dropdown-menu>
                            </lb-dropdown>
                        </td>
                        <td>
                            <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63894">
                                <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-male"></i>
                                </span>qssd
                            </a>
                            <span class="label bg-info ng-binding ng-scope" ng-if="item.age">0岁</span>
                        </td>
                        <td class="ng-binding">13456789754</td>
                        <td>
                            <span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                        </td>
                        <td>
                            <span class="label bg-gray ng-scope" ng-if="item.purpose == '0'">未设置</span>
                        </td>
                        <td class="ng-binding">上门</td>
                        <td class="ng-binding">2017-05-13</td>
                        <td>
                            <p ng-bind-html="item.note" class="ng-binding">sqqs</p>
                        </td>
                        <td>
                            <span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                        </td>
                    </tr>
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <lb-dropdown>
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-xs" button-tooltip="操作">
                                    <i class="fa fa-cog ng-scope"></i>
                                    <span class="ng-scope">操作</span>
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                                <lb-dropdown-menu slot="menuslot">
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/region_set.modal.html','sm',item)" @click="lbShowDailog($event,'lb-regionsetmodal')">
                                            <i class="icon-rocket"></i>学员归属设定
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/purpose_set.modal.html','sm',item)" @click="lbShowDailog($event,'lb-purposesetmodal')">
                                            <i class="icon-heart"></i>意向程度设置
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)" @click="lbShowDailog($event,'lb-addtrackmodal')">
                                            <i class="fa fa-phone-square"></i>跟踪回访
                                        </a>
                                    </li>
                                </lb-dropdown-menu>
                            </lb-dropdown>
                        </td>
                        <td>
                            <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63893">
                                <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-female"></i>
                                </span>qqq
                            </a>
                            <span class="label bg-info ng-binding ng-scope" ng-if="item.age">0岁</span>
                        </td>
                        <td class="ng-binding">13545389311</td>
                        <td>
                            <span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                        </td>
                        <td>
                            <span class="label bg-gray ng-scope" ng-if="item.purpose == '0'">未设置</span>
                        </td>
                        <td class="ng-binding">其他</td>
                        <td class="ng-binding">2017-05-13</td>
                        <td>
                            <p ng-bind-html="item.note" class="ng-binding">ad</p>
                        </td>
                        <td>
                            <span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="wrapper" style="height:80px"></div>
            <div class="grid-data-result"></div>
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-sm-4 col-xs-12"></div>
                <div class="col-sm-4 text-center">
                    <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 3 条记录">共 3 条记录</small>
                </div>
                <div class="col-sm-4 text-right text-center-xs">
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'list0',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>