<template>
    <div class="wrapper-xs ng-scope" xo-rest="contracts" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="contract" loading-text="正在加载1对1合同..." empty-text="没有符合条件的1对1合同!">
        <div class="panel panel-default">
            <div class="row wrapper no-gutter">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline w va-m">
                        <select class="form-control ng-pristine ng-untouched ng-valid" name="ol_id" ui-jq="chosen" ng-model="params.ol_id" ng-options="lesson.ol_id as lesson.lesson_name for lesson in $gv.lessons|filter:cur_branch|filter:filter_contract" style="display: none;">
                            <option value="" class="">选择课程</option>
                            <option value="0">古典吉他初级</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 200px;" title=""><a class="chosen-single" tabindex="-1"><span>选择课程</span><div><b></b></div></a>
                            <div class="chosen-drop">
                                <div class="chosen-search">
                                    <input type="text" autocomplete="off">
                                </div>
                                <ul class="chosen-results"></ul>
                            </div>
                        </div>
                    </div>
                    <div class="inline w va-m">
                        <div class="input-group  ng-valid" select-title="请选择学员" ng-model="params.os_id" select-params="{ob_id:user.gv.ob_id}">
                            <input type="text" placeholder="学员" ng-model="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default " select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="selectParams" select-title="请选择学员"><i class="icon-user"></i></button></span></div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <!--<button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>-->
                    <div class="btn-group m-l">
                        <label btn-radio="'1'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已开课</label>
                        <label btn-radio="'0'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">未开课</label>
                        <label btn-radio="'2'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已结课</label>
                        <label btn-radio="" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                    </div>
                    <div class="btn-group m-l">
                        <label btn-radio="'2'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">已缴费</label>
                        <label btn-radio="'1'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">部分缴费</label>
                        <label btn-radio="'0'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">未缴费</label>
                        <label btn-radio="" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                    </div><a class="btn btn-default" ng-click="$util.open('tpl/app/lesson/contracts/add_performance.modal.html','md',grid.data)"><i class="icon-plus"></i> 登记成绩</a></div>
            </div>
            <!--row-->
            <div class="table-responsive">
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>学员</th>
                            <th><span class="inline w-xs text-right">合同</span></th>
                            <th><span class="inline w-xs text-right">课程</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td><a class="link ng-binding" ui-sref="student.view({os_id:item.os_id})" ui-per="student.view" href="#/student/63899"><span ng-bind-html="item.student.sex|sex:0" class="ng-binding"><i class="fa fa-male"></i></span>威锋</a>
                                <br><i class="fa fa-phone"></i><span ng-bind="item.student.first_tel" class="ng-binding">13605557745</span>
                                <br>
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope"> 操作</span></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ui-per="contract.edit" ng-click="$util.open('tpl/app/lesson/contract/edit.modal.html','md',item)"><i class="fa fa-pencil"></i> 修改课耗单价</a></li>
                                        <li><a ui-per="contract.arrange" ng-click="$util.open('tpl/app/lesson/contracts/lesson_arrange.modal.html','lg',item)"><i class="fa fa-calendar text-info"></i> 排课</a></li>
                                        <li><a ui-per="contract.dispatch" ng-click="$util.open('tpl/app/lesson/contracts/lesson_dispatch.modal.html','md',item)"><i class="fa fa-calendar text-warning"></i> 调课</a></li>
                                        <li><a ui-per="contract.end" ng-click="$util.open('tpl/app/lesson/contracts/lesson_end.modal.html','md',item)"><i class="fa fa-calendar text-danger"></i> 结课</a></li>
                                        <!--
      <li>
        <a ui-per="contract.end" ng-click="$util.open('tpl/app/lesson/contracts/lesson_pause.modal.html','md',item)">
            <i class="fa fa-calendar text-warning"></i> 停课
        </a>
      </li>-->
                                        <li><a ui-per="contract.delete" ng-click="$util.open('tpl/app/lesson/contracts/lesson_delete.modal.html','md',item)"><i class="fa fa-trash-o"></i> 合同删除</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <ul class="list-unstyled">
                                    <li>
                                        <label class="inline w-xs">合同号:</label><span><a class="link ng-binding" tooltip="合同详情" ui-sref="lesson.contract({oct_id:item.oct_id})" href="#/lesson/contract/11635">C1161217130540023959331</a></span>
                                        <!--
                                    <span class="label bg-gray" ng-if="item.status == '0'">未开课</span>
                                    <span class="label bg-success" ng-if="item.status == '1'">已开课</span>
                                    <span class="label bg-danger" ng-if="item.status == '2'">已结课</span>
                                    --></li>
                                    <!--
                                <li class="m-t-xs">
                                    <label class="inline w-xs">日期:</label>
                                    <span>{{item.sign_date|datetime:'yyyy-MM-dd'}}签订</span>
                                    <span>{{item.start_date|datetime:'yyyy-MM-dd'}}开课</span>
                                </li>-->
                                    <li class="m-t-xs">
                                        <label class="inline w-xs">缴费情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.contract_amount" value="item.pay_amount" type="info">
                                                <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="2000.00" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0.00 / 2000.00</span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <label class="inline w-xs">课耗单价:</label><span class="ng-binding">￥100.00</span>
                                        <!--
                                    <span class="label bg-gray" ng-if="item.status == '0'">未开课</span>
                                    <span class="label bg-success" ng-if="item.status == '1'">已开课</span>
                                    <span class="label bg-danger" ng-if="item.status == '2'">已结课</span>
                                    --></li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-unstyled">
                                    <li>
                                        <label class="inline w-xs">课程:</label><span class="ng-binding">古典吉他初级</span></li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs">排课情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.lesson_times" value="item.arrange_times" type="info">
                                                <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs">课耗情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.lesson_times" value="item.use_times" type="info">
                                                <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td><a class="link ng-binding" ui-sref="student.view({os_id:item.os_id})" ui-per="student.view" href="#/student/51442"><span ng-bind-html="item.student.sex|sex:0" class="ng-binding"><i class="fa fa-male"></i></span>李达康</a>
                                <br><i class="fa fa-phone"></i><span ng-bind="item.student.first_tel" class="ng-binding">18050238516</span>
                                <br>
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope"> 操作</span></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ui-per="contract.edit" ng-click="$util.open('tpl/app/lesson/contract/edit.modal.html','md',item)"><i class="fa fa-pencil"></i> 修改课耗单价</a></li>
                                        <li><a ui-per="contract.arrange" ng-click="$util.open('tpl/app/lesson/contracts/lesson_arrange.modal.html','lg',item)"><i class="fa fa-calendar text-info"></i> 排课</a></li>
                                        <li><a ui-per="contract.dispatch" ng-click="$util.open('tpl/app/lesson/contracts/lesson_dispatch.modal.html','md',item)"><i class="fa fa-calendar text-warning"></i> 调课</a></li>
                                        <li><a ui-per="contract.end" ng-click="$util.open('tpl/app/lesson/contracts/lesson_end.modal.html','md',item)"><i class="fa fa-calendar text-danger"></i> 结课</a></li>
                                        <!--
      <li>
        <a ui-per="contract.end" ng-click="$util.open('tpl/app/lesson/contracts/lesson_pause.modal.html','md',item)">
            <i class="fa fa-calendar text-warning"></i> 停课
        </a>
      </li>-->
                                        <li><a ui-per="contract.delete" ng-click="$util.open('tpl/app/lesson/contracts/lesson_delete.modal.html','md',item)"><i class="fa fa-trash-o"></i> 合同删除</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <ul class="list-unstyled">
                                    <li>
                                        <label class="inline w-xs">合同号:</label><span><a class="link ng-binding" tooltip="合同详情" ui-sref="lesson.contract({oct_id:item.oct_id})" href="#/lesson/contract/11316">C1161217170436054948591</a></span>
                                        <!--
                                    <span class="label bg-gray" ng-if="item.status == '0'">未开课</span>
                                    <span class="label bg-success" ng-if="item.status == '1'">已开课</span>
                                    <span class="label bg-danger" ng-if="item.status == '2'">已结课</span>
                                    --></li>
                                    <!--
                                <li class="m-t-xs">
                                    <label class="inline w-xs">日期:</label>
                                    <span>{{item.sign_date|datetime:'yyyy-MM-dd'}}签订</span>
                                    <span>{{item.start_date|datetime:'yyyy-MM-dd'}}开课</span>
                                </li>-->
                                    <li class="m-t-xs">
                                        <label class="inline w-xs">缴费情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.contract_amount" value="item.pay_amount" type="info">
                                                <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="2000.00" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0.00 / 2000.00</span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <label class="inline w-xs">课耗单价:</label><span class="ng-binding">￥100.00</span>
                                        <!--
                                    <span class="label bg-gray" ng-if="item.status == '0'">未开课</span>
                                    <span class="label bg-success" ng-if="item.status == '1'">已开课</span>
                                    <span class="label bg-danger" ng-if="item.status == '2'">已结课</span>
                                    --></li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-unstyled">
                                    <li>
                                        <label class="inline w-xs">课程:</label><span class="ng-binding">古典吉他初级</span></li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs">排课情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.lesson_times" value="item.arrange_times" type="info">
                                                <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="5%" ng-transclude="" style="width: 5%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">1 / 20</span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs">课耗情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.lesson_times" value="item.use_times" type="info">
                                                <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="5%" ng-transclude="" style="width: 5%;"><span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">1 / 20</span></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                    </tbody>
                </table>
                <div class="grid-data-result">
                    <!-- ngIf: loading -->
                    <!-- ngIf: !loading && grid.data.length==0 -->
                </div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 2 份合同">共 2 份合同</small></div>
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
            <!--panel footer-->
        </div>
        <!--panel-->
    </div>
</template>
<script>
export default {
    name: 'contracts',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
