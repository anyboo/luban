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
                        <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员"><i class="icon-user"></i></button></span></div>
                </div>
                <button class="btn btn-default btn-sm m-l-xs" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <div class="btn-group">
                    <label btn-radio="'0'" ng-model="params.region_oe_id" class="btn btn-default ng-pristine ng-untouched ng-valid">未归属</label>
                </div>
                <!-- ngIf: params.region_oe_id == '0' -->
                <div class="btn-group m-l">
                    <label btn-radio="'today'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">今日</label>
                    <label btn-radio="'week'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本周</label>
                    <label btn-radio="'month'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本月</label>
                </div>
            </div>
        </div>
        <!--row-->
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
                    <!-- ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown " dropdown="" btn-class="btn-default btn-xs" btn-tooltip="操作" item="item">
                                <button class="btn btn-default btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                    <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope">操作</span></ng-transclude><span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a ui-per="student.region_set" ng-click="$util.open('tpl/app/student/region_set.modal.html','sm',item)"><i class="icon-rocket"></i> 学员归属设定</a></li>
                                    <li><a ui-per="student.purpose_set" ng-click="$util.open('tpl/app/student/purpose_set.modal.html','sm',item)"><i class="icon-heart"></i> 意向程度设置</a></li>
                                    <li><a ui-per="student.tracks.add" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)"><i class="fa fa-phone-square"></i> 跟踪回访</a></li>
                                </ul>
                            </div>
                        </td>
                        <td><a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63895"><span ng-bind-html="item.sex|sex:0" class="ng-binding"><i class="fa fa-female"></i></span>zzz</a>
                            <!-- ngIf: item.age --><span class="label bg-info ng-binding ng-scope" ng-if="item.age">0岁</span>
                            <!-- end ngIf: item.age -->
                        </td>
                        <td class="ng-binding">12345678645</td>
                        <td>
                            <!-- ngIf: item.region_oe_id == '0' --><span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                            <!-- end ngIf: item.region_oe_id == '0' -->
                            <!-- ngIf: item.region_oe_id != '0' -->
                        </td>
                        <td>
                            <!-- ngIf: item.purpose == '0' --><span class="label bg-gray ng-scope" ng-if="item.purpose == '0'">未设置</span>
                            <!-- end ngIf: item.purpose == '0' -->
                            <!-- ngIf: item.purpose != '0' -->
                        </td>
                        <td class="ng-binding">广告</td>
                        <td class="ng-binding">2017-05-13</td>
                        <td>
                            <p ng-bind-html="item.note" class="ng-binding">dwwqad</p>
                        </td>
                        <td>
                            <!-- ngIf: item.last_track -->
                            <!-- ngIf: !item.last_track --><span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                            <!-- end ngIf: !item.last_track -->
                        </td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown " dropdown="" btn-class="btn-default btn-xs" btn-tooltip="操作" item="item">
                                <button class="btn btn-default btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                    <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope">操作</span></ng-transclude><span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a ui-per="student.region_set" ng-click="$util.open('tpl/app/student/region_set.modal.html','sm',item)"><i class="icon-rocket"></i> 学员归属设定</a></li>
                                    <li><a ui-per="student.purpose_set" ng-click="$util.open('tpl/app/student/purpose_set.modal.html','sm',item)"><i class="icon-heart"></i> 意向程度设置</a></li>
                                    <li><a ui-per="student.tracks.add" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)"><i class="fa fa-phone-square"></i> 跟踪回访</a></li>
                                </ul>
                            </div>
                        </td>
                        <td><a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63894"><span ng-bind-html="item.sex|sex:0" class="ng-binding"><i class="fa fa-male"></i></span>qssd</a>
                            <!-- ngIf: item.age --><span class="label bg-info ng-binding ng-scope" ng-if="item.age">0岁</span>
                            <!-- end ngIf: item.age -->
                        </td>
                        <td class="ng-binding">13456789754</td>
                        <td>
                            <!-- ngIf: item.region_oe_id == '0' --><span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                            <!-- end ngIf: item.region_oe_id == '0' -->
                            <!-- ngIf: item.region_oe_id != '0' -->
                        </td>
                        <td>
                            <!-- ngIf: item.purpose == '0' --><span class="label bg-gray ng-scope" ng-if="item.purpose == '0'">未设置</span>
                            <!-- end ngIf: item.purpose == '0' -->
                            <!-- ngIf: item.purpose != '0' -->
                        </td>
                        <td class="ng-binding">上门</td>
                        <td class="ng-binding">2017-05-13</td>
                        <td>
                            <p ng-bind-html="item.note" class="ng-binding">sqqs</p>
                        </td>
                        <td>
                            <!-- ngIf: item.last_track -->
                            <!-- ngIf: !item.last_track --><span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                            <!-- end ngIf: !item.last_track -->
                        </td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown " dropdown="" btn-class="btn-default btn-xs" btn-tooltip="操作" item="item">
                                <button class="btn btn-default btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                    <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope">操作</span></ng-transclude><span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a ui-per="student.region_set" ng-click="$util.open('tpl/app/student/region_set.modal.html','sm',item)"><i class="icon-rocket"></i> 学员归属设定</a></li>
                                    <li><a ui-per="student.purpose_set" ng-click="$util.open('tpl/app/student/purpose_set.modal.html','sm',item)"><i class="icon-heart"></i> 意向程度设置</a></li>
                                    <li><a ui-per="student.tracks.add" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)"><i class="fa fa-phone-square"></i> 跟踪回访</a></li>
                                </ul>
                            </div>
                        </td>
                        <td><a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63893"><span ng-bind-html="item.sex|sex:0" class="ng-binding"><i class="fa fa-female"></i></span>qqq</a>
                            <!-- ngIf: item.age --><span class="label bg-info ng-binding ng-scope" ng-if="item.age">0岁</span>
                            <!-- end ngIf: item.age -->
                        </td>
                        <td class="ng-binding">13545389311</td>
                        <td>
                            <!-- ngIf: item.region_oe_id == '0' --><span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                            <!-- end ngIf: item.region_oe_id == '0' -->
                            <!-- ngIf: item.region_oe_id != '0' -->
                        </td>
                        <td>
                            <!-- ngIf: item.purpose == '0' --><span class="label bg-gray ng-scope" ng-if="item.purpose == '0'">未设置</span>
                            <!-- end ngIf: item.purpose == '0' -->
                            <!-- ngIf: item.purpose != '0' -->
                        </td>
                        <td class="ng-binding">其他</td>
                        <td class="ng-binding">2017-05-13</td>
                        <td>
                            <p ng-bind-html="item.note" class="ng-binding">ad</p>
                        </td>
                        <td>
                            <!-- ngIf: item.last_track -->
                            <!-- ngIf: !item.last_track --><span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                            <!-- end ngIf: !item.last_track -->
                        </td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                </tbody>
            </table>
            <div class="wrapper" style="height:80px"></div>
            <div class="grid-data-result">
                <!-- ngIf: loading -->
                <!-- ngIf: !loading && grid.data.length==0 -->
            </div>
        </div>
        <!--table-responsive-->
        <div class="panel-footer">
            <div class="row">
                <div class="col-sm-4 col-xs-12"></div>
                <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 3 条记录">共 3 条记录</small></div>
                <div class="col-sm-4 text-right text-center-xs">
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                        <!-- ngIf: boundaryLinks && totalPages > 1 -->
                        <!-- ngIf: directionLinks && totalPages > 1 -->
                        <!-- ngRepeat: page in pages track by $index -->
                        <!-- ngIf: totalPages > 1 -->
                        <!-- end ngRepeat: page in pages track by $index -->
                        <!-- ngIf: directionLinks && totalPages > 1 -->
                        <!-- ngIf: boundaryLinks && totalPages > 1 -->
                    </ul>
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
