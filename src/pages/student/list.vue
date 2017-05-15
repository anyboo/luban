<template>
    <div class="panel panel-default ng-scope" xo-rest="students" xo-rest-grid="{maxsize:5,params:{pagesize:12,page:1}}" xo-rest-ctrl="students" loading-container=".list-student" loading-text="正在加载学员..." empty-text="没有符合条件的学员!">
        <div class="row wrapper">
            <div class="col-xs-12 col-md-4 m-t">
                <div class="padder">
                    <div class="input-group w-full">
                        <div class="input-group">
                            <div class="input-group-btn" ng-init="
                filter.fields = [
                  {name:'student_name',value:'姓名'},
                  {name:'first_tel',value:'手机号'},
                  {name:'home_address',value:'住址'},
                  {name:'nickname',value:'英文名'},
                  {name:'card_no',value:'学员卡号'}
                ];
                grid.search_key = 'student_name';
                grid.search_value = '';
                ">
                                <button type="button" class="btn btn-default btn-sm ng-pristine ng-valid ng-touched" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">姓名&nbsp;<span class="caret"></span></button>
                            </div>
                            <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" ng-model="grid.search_value" ui-keyup="{enter:'search()'}" placeholder="关键字"> <span class="input-group-btn"><button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button></span></div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>
                <div class="btn-group m-l">
                    <label btn-radio="" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                    <label btn-radio="'0'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">未报读学员</label>
                    <label btn-radio="'1'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已报读学员</label>
                </div>
                <div class="btn-group m-l-xs">
                    <label btn-radio="'image'" ng-model="view_mode" class="btn btn-default ng-pristine ng-untouched ng-valid"><i class="fa fa-image"></i> 头像</label>
                    <label btn-radio="'list'" ng-model="view_mode" class="btn btn-default ng-untouched ng-valid active ng-dirty ng-valid-parse"><i class="fa fa-list"></i> 列表</label>
                </div>
                <button class="btn btn-default ng-isolate-scope" ui-per="student.export" export="students" export-params="params"><i class="glyphicon glyphicon-export"></i>导出Excel</button>
                <div id="fct-students" style="display:none;">
                    <form name="export_form_students" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                        <input type="hidden" name="X-XSRF-TOKEN" value="30bed37d3e9766e5dc6b3b2b3ee823e0">
                        <input type="hidden" name="resource" value="students">
                        <!-- ngRepeat: (key,value) in params -->
                        <input type="hidden" name="ob_id" value="11158" ng-repeat="(key,value) in params" class="ng-scope">
                        <!-- end ngRepeat: (key,value) in params -->
                        <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                        <!-- end ngRepeat: (key,value) in params -->
                        <input type="hidden" name="pagesize" value="12" ng-repeat="(key,value) in params" class="ng-scope">
                        <!-- end ngRepeat: (key,value) in params -->
                    </form>
                </div> <a class="link m-l-xs" ui-per="student.trash" ng-click="$util.open('tpl/app/student/trash.html','md',{})"><i class="icon-lock"></i> 已封存档案</a></div>
        </div>
        <!--row-->
        <div class="wrapper list-student bg-light lter">
            <!-- ngIf: view_mode == 'image' -->
            <!-- ngIf: view_mode == 'list' -->
            <div class="table-responsive ng-scope" ng-if="view_mode == 'list'">
                <table class="table table-striped table-hover b-t b-light">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>学员 <span class="table-header-sort ng-isolate-scope" header-sort="student_name" params="params"><span class="icon"><i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i></span><span class="icon"><i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i></span></span>
                            </th>
                            <th>联系电话</th>
                            <th>年龄</th>
                            <th>微信绑定</th>
                            <!-- ngIf: have_field('card_no') -->
                            <th ng-if="have_field('card_no')" class="ng-scope">考勤卡号 <span class="table-header-sort ng-isolate-scope" header-sort="card_no" params="params"><span class="icon"><i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i></span><span class="icon"><i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i></span></span>
                            </th>
                            <!-- end ngIf: have_field('card_no') -->
                            <!-- ngIf: have_field('os_no') -->
                            <th>住址</th>
                            <th>学员归属</th>
                            <th>档案备注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ui-per="student.edit" ng-click="$util.open('tpl/app/student/edit_info.modal.html','lg',item)"><i class="fa fa-pencil"></i> 修改资料</a></li>
                                        <li><a ui-per="student.photo" ng-click="$util.open('tpl/app/student/edit_photo.modal.html','lg',item)"><i class="fa fa-image"></i> 更换头像</a></li>
                                        <li><a ui-per="student.order" ng-click="$util.open('tpl/app/student/order.modal.html','md',item)"><i class="fa fa-shopping-cart"></i> 报名</a></li>
                                        <li><a ui-per="student.pay" ng-click="$util.open('tpl/app/student/orders.modal.html','md',item)"><i class="fa fa-money"></i> 缴费</a></li>
                                        <li><a ui-per="student.attendances.add" ng-click="$util.open('tpl/app/student/reg_student_attendances.modal.html','md',item)"><i class="fa fa-calendar-o"></i> 登记考勤</a></li>
                                        <li><a ui-per="student.change_class" ng-click="$util.open('tpl/app/student/change_class.modal.html','md',item)"><i class="fa fa-exchange">转班</i></a></li>
                                        <li><a ui-per="student.wechat" ng-click="$util.open('tpl/app/student/wechat.modal.html','md',item)"><i class="fa fa-weixin"></i> 微信对话</a></li>
                                        <li><a ui-per="student.tracks.add" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)"><i class="fa fa-phone-square"></i> 跟踪回访</a></li>
                                        <li><a ui-per="student.match.add" ng-click="$util.open('tpl/app/student/reg_student_match.modal.html','md',item)"><i class="fa fa-flag-o"></i> 登记赛事记录</a></li>
                                        <li><a ui-per="student.refund" ng-click="$util.open('tpl/app/student/order/refund.modal.html','md',item)"><i class="fa fa-reply"></i> 退费</a></li>
                                        <li><a ui-per="student.endlesson" ng-click="$util.open('tpl/app/student/endlesson.modal.html','md',item)"><i class="fa fa-stop"></i> 结课</a></li>
                                        <li><a ui-per="student.change_branch" ng-click="$util.open('tpl/app/student/change_branch.modal.html','md',item)"><i class="icon-shuffle"></i> 转校区</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td><a class="link ng-binding" ui-sref="student.view({os_id:item.os_id})" ui-per="student.view" href="#/student/63897"><span ng-bind-html="item.sex|sex:0" class="ng-binding"><i class="fa fa-female"></i></span> zzzsz <!-- ngIf: item.nickname != '' --><span ng-if="item.nickname != ''" class="ng-binding ng-scope">hh</span><!-- end ngIf: item.nickname != '' --></a></td>
                            <td><span ng-bind="item.first_tel" class="ng-binding">12345678765</span></td>
                            <td>
                                <!-- ngIf: item.age --><span ng-if="item.age" class="ng-binding ng-scope">0岁</span>
                                <!-- end ngIf: item.age -->
                            </td>
                            <td>
                                <!-- ngIf: item.wb_id > 0 -->
                                <!-- ngIf: item.wb_id == 0 --><span ng-if="item.wb_id == 0" class="ng-scope">未绑定</span>
                                <!-- end ngIf: item.wb_id == 0 -->
                            </td>
                            <!-- ngIf: have_field('card_no') -->
                            <td ng-if="have_field('card_no')" class="ng-binding ng-scope"></td>
                            <!-- end ngIf: have_field('card_no') -->
                            <!-- ngIf: have_field('os_no') -->
                            <td class="ng-binding">12eed</td>
                            <td>
                                <!-- ngIf: item.region_oe_id == '0' --><span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                                <!-- end ngIf: item.region_oe_id == '0' -->
                                <!-- ngIf: item.region_oe_id != '0' -->
                            </td>
                            <td>
                                <p ng-bind-html="item.note" class="ng-binding">ewf</p>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ui-per="student.edit" ng-click="$util.open('tpl/app/student/edit_info.modal.html','lg',item)"><i class="fa fa-pencil"></i> 修改资料</a></li>
                                        <li><a ui-per="student.photo" ng-click="$util.open('tpl/app/student/edit_photo.modal.html','lg',item)"><i class="fa fa-image"></i> 更换头像</a></li>
                                        <li><a ui-per="student.order" ng-click="$util.open('tpl/app/student/order.modal.html','md',item)"><i class="fa fa-shopping-cart"></i> 报名</a></li>
                                        <li><a ui-per="student.pay" ng-click="$util.open('tpl/app/student/orders.modal.html','md',item)"><i class="fa fa-money"></i> 缴费</a></li>
                                        <li><a ui-per="student.attendances.add" ng-click="$util.open('tpl/app/student/reg_student_attendances.modal.html','md',item)"><i class="fa fa-calendar-o"></i> 登记考勤</a></li>
                                        <li><a ui-per="student.change_class" ng-click="$util.open('tpl/app/student/change_class.modal.html','md',item)"><i class="fa fa-exchange">转班</i></a></li>
                                        <li><a ui-per="student.wechat" ng-click="$util.open('tpl/app/student/wechat.modal.html','md',item)"><i class="fa fa-weixin"></i> 微信对话</a></li>
                                        <li><a ui-per="student.tracks.add" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)"><i class="fa fa-phone-square"></i> 跟踪回访</a></li>
                                        <li><a ui-per="student.match.add" ng-click="$util.open('tpl/app/student/reg_student_match.modal.html','md',item)"><i class="fa fa-flag-o"></i> 登记赛事记录</a></li>
                                        <li><a ui-per="student.refund" ng-click="$util.open('tpl/app/student/order/refund.modal.html','md',item)"><i class="fa fa-reply"></i> 退费</a></li>
                                        <li><a ui-per="student.endlesson" ng-click="$util.open('tpl/app/student/endlesson.modal.html','md',item)"><i class="fa fa-stop"></i> 结课</a></li>
                                        <li><a ui-per="student.change_branch" ng-click="$util.open('tpl/app/student/change_branch.modal.html','md',item)"><i class="icon-shuffle"></i> 转校区</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td><a class="link ng-binding" ui-sref="student.view({os_id:item.os_id})" ui-per="student.view" href="#/student/63895"><span ng-bind-html="item.sex|sex:0" class="ng-binding"><i class="fa fa-female"></i></span> zzz <!-- ngIf: item.nickname != '' --><span ng-if="item.nickname != ''" class="ng-binding ng-scope">wew</span><!-- end ngIf: item.nickname != '' --></a></td>
                            <td><span ng-bind="item.first_tel" class="ng-binding">12345678645</span></td>
                            <td>
                                <!-- ngIf: item.age --><span ng-if="item.age" class="ng-binding ng-scope">0岁</span>
                                <!-- end ngIf: item.age -->
                            </td>
                            <td>
                                <!-- ngIf: item.wb_id > 0 -->
                                <!-- ngIf: item.wb_id == 0 --><span ng-if="item.wb_id == 0" class="ng-scope">未绑定</span>
                                <!-- end ngIf: item.wb_id == 0 -->
                            </td>
                            <!-- ngIf: have_field('card_no') -->
                            <td ng-if="have_field('card_no')" class="ng-binding ng-scope"></td>
                            <!-- end ngIf: have_field('card_no') -->
                            <!-- ngIf: have_field('os_no') -->
                            <td class="ng-binding">dqadqawd</td>
                            <td>
                                <!-- ngIf: item.region_oe_id == '0' --><span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                                <!-- end ngIf: item.region_oe_id == '0' -->
                                <!-- ngIf: item.region_oe_id != '0' -->
                            </td>
                            <td>
                                <p ng-bind-html="item.note" class="ng-binding">dwwqad</p>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ui-per="student.edit" ng-click="$util.open('tpl/app/student/edit_info.modal.html','lg',item)"><i class="fa fa-pencil"></i> 修改资料</a></li>
                                        <li><a ui-per="student.photo" ng-click="$util.open('tpl/app/student/edit_photo.modal.html','lg',item)"><i class="fa fa-image"></i> 更换头像</a></li>
                                        <li><a ui-per="student.order" ng-click="$util.open('tpl/app/student/order.modal.html','md',item)"><i class="fa fa-shopping-cart"></i> 报名</a></li>
                                        <li><a ui-per="student.pay" ng-click="$util.open('tpl/app/student/orders.modal.html','md',item)"><i class="fa fa-money"></i> 缴费</a></li>
                                        <li><a ui-per="student.attendances.add" ng-click="$util.open('tpl/app/student/reg_student_attendances.modal.html','md',item)"><i class="fa fa-calendar-o"></i> 登记考勤</a></li>
                                        <li><a ui-per="student.change_class" ng-click="$util.open('tpl/app/student/change_class.modal.html','md',item)"><i class="fa fa-exchange">转班</i></a></li>
                                        <li><a ui-per="student.wechat" ng-click="$util.open('tpl/app/student/wechat.modal.html','md',item)"><i class="fa fa-weixin"></i> 微信对话</a></li>
                                        <li><a ui-per="student.tracks.add" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)"><i class="fa fa-phone-square"></i> 跟踪回访</a></li>
                                        <li><a ui-per="student.match.add" ng-click="$util.open('tpl/app/student/reg_student_match.modal.html','md',item)"><i class="fa fa-flag-o"></i> 登记赛事记录</a></li>
                                        <li><a ui-per="student.refund" ng-click="$util.open('tpl/app/student/order/refund.modal.html','md',item)"><i class="fa fa-reply"></i> 退费</a></li>
                                        <li><a ui-per="student.endlesson" ng-click="$util.open('tpl/app/student/endlesson.modal.html','md',item)"><i class="fa fa-stop"></i> 结课</a></li>
                                        <li><a ui-per="student.change_branch" ng-click="$util.open('tpl/app/student/change_branch.modal.html','md',item)"><i class="icon-shuffle"></i> 转校区</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td><a class="link ng-binding" ui-sref="student.view({os_id:item.os_id})" ui-per="student.view" href="#/student/63894"><span ng-bind-html="item.sex|sex:0" class="ng-binding"><i class="fa fa-male"></i></span> qssd <!-- ngIf: item.nickname != '' --><span ng-if="item.nickname != ''" class="ng-binding ng-scope">s</span><!-- end ngIf: item.nickname != '' --></a></td>
                            <td><span ng-bind="item.first_tel" class="ng-binding">13456789754</span></td>
                            <td>
                                <!-- ngIf: item.age --><span ng-if="item.age" class="ng-binding ng-scope">0岁</span>
                                <!-- end ngIf: item.age -->
                            </td>
                            <td>
                                <!-- ngIf: item.wb_id > 0 -->
                                <!-- ngIf: item.wb_id == 0 --><span ng-if="item.wb_id == 0" class="ng-scope">未绑定</span>
                                <!-- end ngIf: item.wb_id == 0 -->
                            </td>
                            <!-- ngIf: have_field('card_no') -->
                            <td ng-if="have_field('card_no')" class="ng-binding ng-scope"></td>
                            <!-- end ngIf: have_field('card_no') -->
                            <!-- ngIf: have_field('os_no') -->
                            <td class="ng-binding">sss</td>
                            <td>
                                <!-- ngIf: item.region_oe_id == '0' --><span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                                <!-- end ngIf: item.region_oe_id == '0' -->
                                <!-- ngIf: item.region_oe_id != '0' -->
                            </td>
                            <td>
                                <p ng-bind-html="item.note" class="ng-binding">sqqs</p>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                        <!-- ngIf: !loading -->
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td>
                                <div class="btn-group dropdown " dropdown="" btn-class="btn-info btn-xs" btn-tooltip="操作" item="item">
                                    <button class="btn btn-info btn-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <ng-transclude><i class="fa fa-cog ng-scope"></i></ng-transclude><span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li><a ui-per="student.edit" ng-click="$util.open('tpl/app/student/edit_info.modal.html','lg',item)"><i class="fa fa-pencil"></i> 修改资料</a></li>
                                        <li><a ui-per="student.photo" ng-click="$util.open('tpl/app/student/edit_photo.modal.html','lg',item)"><i class="fa fa-image"></i> 更换头像</a></li>
                                        <li><a ui-per="student.order" ng-click="$util.open('tpl/app/student/order.modal.html','md',item)"><i class="fa fa-shopping-cart"></i> 报名</a></li>
                                        <li><a ui-per="student.pay" ng-click="$util.open('tpl/app/student/orders.modal.html','md',item)"><i class="fa fa-money"></i> 缴费</a></li>
                                        <li><a ui-per="student.attendances.add" ng-click="$util.open('tpl/app/student/reg_student_attendances.modal.html','md',item)"><i class="fa fa-calendar-o"></i> 登记考勤</a></li>
                                        <li><a ui-per="student.change_class" ng-click="$util.open('tpl/app/student/change_class.modal.html','md',item)"><i class="fa fa-exchange">转班</i></a></li>
                                        <li><a ui-per="student.wechat" ng-click="$util.open('tpl/app/student/wechat.modal.html','md',item)"><i class="fa fa-weixin"></i> 微信对话</a></li>
                                        <li><a ui-per="student.tracks.add" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',item)"><i class="fa fa-phone-square"></i> 跟踪回访</a></li>
                                        <li><a ui-per="student.match.add" ng-click="$util.open('tpl/app/student/reg_student_match.modal.html','md',item)"><i class="fa fa-flag-o"></i> 登记赛事记录</a></li>
                                        <li><a ui-per="student.refund" ng-click="$util.open('tpl/app/student/order/refund.modal.html','md',item)"><i class="fa fa-reply"></i> 退费</a></li>
                                        <li><a ui-per="student.endlesson" ng-click="$util.open('tpl/app/student/endlesson.modal.html','md',item)"><i class="fa fa-stop"></i> 结课</a></li>
                                        <li><a ui-per="student.change_branch" ng-click="$util.open('tpl/app/student/change_branch.modal.html','md',item)"><i class="icon-shuffle"></i> 转校区</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td><a class="link ng-binding" ui-sref="student.view({os_id:item.os_id})" ui-per="student.view" href="#/student/63893"><span ng-bind-html="item.sex|sex:0" class="ng-binding"><i class="fa fa-female"></i></span> qqq <!-- ngIf: item.nickname != '' --><span ng-if="item.nickname != ''" class="ng-binding ng-scope">1we</span><!-- end ngIf: item.nickname != '' --></a></td>
                            <td><span ng-bind="item.first_tel" class="ng-binding">13545389311</span></td>
                            <td>
                                <!-- ngIf: item.age --><span ng-if="item.age" class="ng-binding ng-scope">0岁</span>
                                <!-- end ngIf: item.age -->
                            </td>
                            <td>
                                <!-- ngIf: item.wb_id > 0 -->
                                <!-- ngIf: item.wb_id == 0 --><span ng-if="item.wb_id == 0" class="ng-scope">未绑定</span>
                                <!-- end ngIf: item.wb_id == 0 -->
                            </td>
                            <!-- ngIf: have_field('card_no') -->
                            <td ng-if="have_field('card_no')" class="ng-binding ng-scope"></td>
                            <!-- end ngIf: have_field('card_no') -->
                            <!-- ngIf: have_field('os_no') -->
                            <td class="ng-binding">qwdwegfweg</td>
                            <td>
                                <!-- ngIf: item.region_oe_id == '0' --><span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                                <!-- end ngIf: item.region_oe_id == '0' -->
                                <!-- ngIf: item.region_oe_id != '0' -->
                            </td>
                            <td>
                                <p ng-bind-html="item.note" class="ng-binding">ad</p>
                            </td>
                        </tr>
                        <!-- end ngIf: !loading -->
                        <!-- end ngRepeat: item in grid.data -->
                    </tbody>
                </table>
            </div>
            <!-- end ngIf: view_mode == 'list' -->
            <div class="grid-data-result">
                <!-- ngIf: loading -->
                <!-- ngIf: !loading && grid.data.length==0 -->
            </div>
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-sm-4 col-xs-12">
                    <div class="btn-group dropdown ng-hide" dropdown="" ng-show="viewmode == '1'"></div>
                </div>
                <div class="col-sm-3 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 4 名学员">共 4 名学员</small></div>
                <div class="col-sm-5 text-right text-center-xs">
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" items-per-page="grid.params.pagesize" max-size="grid.maxsize" boundary-links="true" rotate="false">
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
</template>
<script>
export default {
    name: 'list',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
