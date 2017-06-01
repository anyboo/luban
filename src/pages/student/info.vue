<template>
    <div>
        <div class="wrapper ng-scope" page-controller="student">
            <div class="page-bar row m-b">
                <div class="col-xs-12 col-md-2">
                    <div class="btn-group dropdown" dropdown=""><a class="btn btn-default" href="javascript:history.back();">返回</a>
                        <button class="btn btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li ui-per="student.list"><a ui-sref="student.list" href="#/student/list">到学员列表</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-12 col-md-10 text-right">
                    <div class=" btn-group dropdown  btn-group dropdown " dropdown="" btn-class="btn-default m-b-xs" btn-tooltip="操作" item="student">
                        <button class="btn btn-default m-b-xs" tooltip="操作" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                            <ng-transclude><i class="fa fa-cog ng-scope"></i><span class="ng-scope"> 操作</span></ng-transclude><span class="caret"></span></button>
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
                    <button class="btn btn-danger btn-danger m-b-xs ng-isolate-scope" confirm-text="确定要封存该学员档案吗?" confirm-action="student_delete()" ui-per="student.delete"><i class="fa fa-trash-o"></i> 封存档案</button>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading"><i class="fa fa-user"></i> 学员信息</div>
                <div class="panel-body">
                    <!-- ngIf: student_rest.$loaded -->
                    <!-- ngInclude: 'tpl/app/student/view/basic.html' -->
                    <div class="bg-white row no-gutter ng-scope" data-ng-include="'tpl/app/student/view/basic.html'" ng-if="student_rest.$loaded">
                        <div class="col-xs-12 col-md-4 ng-scope">
                            <div class="text-center clear">
                                <!-- ngIf: student.avatar -->
                                <!-- ngIf: !student.avatar -->
                                <div class="face ng-scope" style="width:120px;margin:0 auto" ng-if="!student.avatar">
                                    <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 120px; width:120px; height:120px; "><img src="data:image/png;base64,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" class="avatar-picture" style="vertical-align:top;" width="100%" height=""></div>
                                </div>
                                <!-- end ngIf: !student.avatar --><a class="btn btn-default btn-xs m-t-xs m-b-xs" ui-per="student.photo" ng-click="$util.open('tpl/app/student/edit_photo.modal.html','lg',student)">更换头像</a></div>
                            <p class="text-center"><span class="text-2x ng-binding">qws</span> <span ng-bind-html="student.sex|sex" class="ng-binding"><i class="fa fa-male"></i>男</span></p>
                            <ul class="list-unstyled">
                                <li>
                                    <label class="field">昵称/英文名:</label><span class="ng-binding">未填写</span></li>
                                <li>
                                    <label class="field">建档日期:</label><span class="ng-binding">2017-05-31</span></li>
                                <li>
                                    <label class="field">生日:</label>
                                    <!-- ngIf: student.birth_year>0 -->
                                    <!-- ngIf: student.birth_year==0 --><span class="text-info ng-scope" ng-if="student.birth_year==0">未填写</span>
                                    <!-- end ngIf: student.birth_year==0 -->
                                    <!-- ngIf: student.age -->
                                </li>
                                <li class="m-t-xs">
                                    <label class="field">账户余额:</label><span class="label bg-danger ng-binding">￥0.00</span> <a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/view/amount_history.modal.html','md',student)">余额详情</a> <a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/view/amount_withdraw.modal.html','md',student)" ng-disabled="student.amount <= 0" ui-per="student.amount_withdraw" disabled="disabled">余额提现</a></li>
                                <li class="m-t-xs">
                                    <label class="field">学习积分:</label><span class="label bg-info ng-binding">0</span> <a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/view/score_history.modal.html','md',student)">积分详情</a></li>
                                <li class="m-t-xs">
                                    <label class="field">学习管家账号:</label>
                                    <!-- ngIf: student.has_opened != '0' --><span class="label bg-info ng-scope" ng-if="student.has_opened != '0'">已开通</span>
                                    <!-- end ngIf: student.has_opened != '0' -->
                                    <!-- ngIf: student.has_opened == '0' -->
                                </li>
                                <li class="m-t-xs">
                                    <label class="field">微信绑定:</label>
                                    <!-- ngIf: student.wb_id == '0' --><span class="badge bg-gray ng-scope" ng-if="student.wb_id == '0'">未绑定</span>
                                    <!-- end ngIf: student.wb_id == '0' -->
                                    <!-- ngIf: student.wb_id != '0' -->
                                </li>
                                <!-- ngIf: have_field('os_no') -->
                                <!-- ngIf: have_field('card_no') -->
                                <li class="m-t-xs ng-scope" ng-if="have_field('card_no')">
                                    <label class="field">考勤卡号:</label><span class="ng-binding"></span></li>
                                <!-- end ngIf: have_field('card_no') -->
                                <!-- ngIf: student.region_oe_id != '0' -->
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8 ng-scope">
                            <div class="panel panel-default">
                                <div class="panel-heading"><i class="icon-info"></i> 基础信息</div>
                                <div class="panel-body">
                                    <div class="row no-gutter">
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">校区:</label><span ng-bind-html="student.ob_id|branch_name" class="ng-binding"><label class="badge bg-info badge-xm">呵呵</label></span></div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">住址:</label><span class="ng-binding">未填写</span></div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">备注:</label><span ng-bind-html="student.note|empty_replace:'-'" class="ng-binding">-</span></div>
                                        <!-- ngIf: have_field('idcard') -->
                                        <div class="col-xs-12 col-md-6 ng-scope" ng-if="have_field('idcard')">
                                            <label class="inline w-xs text-right">身份证:</label><span class="ng-binding"></span></div>
                                        <!-- end ngIf: have_field('idcard') -->
                                        <!-- ngIf: have_field('school') -->
                                        <div class="col-xs-12 col-md-6 ng-scope" ng-if="have_field('school')">
                                            <label class="inline w-xs text-right">学校:</label><span class="ng-binding">未填写</span></div>
                                        <!-- end ngIf: have_field('school') -->
                                        <!-- ngIf: have_field('grade') -->
                                        <div class="col-xs-12 col-md-6 ng-scope" ng-if="have_field('grade')">
                                            <label class="inline w-xs text-right">年级:</label><span class="ng-binding">-</span></div>
                                        <!-- end ngIf: have_field('grade') -->
                                        <!-- ngIf: have_field('class') -->
                                        <div class="col-xs-12 col-md-6 ng-scope" ng-if="have_field('class')">
                                            <label class="inline w-xs text-right">班级:</label><span class="ng-binding">-</span></div>
                                        <!-- end ngIf: have_field('class') -->
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading"><a class="btn btn-xs btn-default pull-right" ui-per="student.edit" ng-click="$util.open('tpl/app/student/add_contact.modal.html','sm',student)"><i class="fa fa-plus"></i> 添加联系人</a> <i class="icon-users"></i> 联系人</div>
                                <table class="table table-striped m-b-none">
                                    <thead>
                                        <tr>
                                            <th>电话</th>
                                            <th class="hidden-xs">称呼</th>
                                            <th class="hidden-xs">姓名</th>
                                            <th class="hidden-xs">学习管家账号</th>
                                            <th class="hidden-xs">微信绑定</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- ngRepeat: item in student.relations -->
                                        <tr ng-repeat="item in student.relations" class="ng-scope">
                                            <td class="ng-binding">
                                                <!-- ngIf: item.is_main == '1' --><i class="fa fa-star text-warning ng-scope" tooltip="第1联系人" ng-if="item.is_main == '1'"></i>
                                                <!-- end ngIf: item.is_main == '1' -->
                                                <!-- ngIf: item.is_main == '0' -->11111111111</td>
                                            <td class="hidden-xs ng-binding">爸爸</td>
                                            <td class="hidden-xs ng-binding">未填写</td>
                                            <td class="hidden-xs">
                                                <!-- ngIf: item.ou_id != '0' --><span class="label bg-info ng-scope" ng-if="item.ou_id != '0'">已开通</span>
                                                <!-- end ngIf: item.ou_id != '0' -->
                                                <!-- ngIf: item.ou_id == '0' -->
                                            </td>
                                            <td class="hidden-xs">
                                                <!-- ngIf: item.wb_id == '0' --><span class="badge bg-gray ng-scope" ng-if="item.wb_id == '0'">未绑定</span>
                                                <!-- end ngIf: item.wb_id == '0' -->
                                                <!-- ngIf: item.wb_id != '0' -->
                                            </td>
                                            <td><a ng-disabled="item.is_main == '1'" class="btn btn-xs btn-danger ng-isolate-scope" confirm-action="remove_relation($index,item)" confirm-text="确定要删除该联系人吗?" tooltip="删除" disabled="disabled"><i class="icon-close"></i></a> <a class="btn btn-xs btn-info m-l-xs" ng-click="$util.open('tpl/app/student/edit_contact.modal.html','md',{student:student,contact:item})" tooltip="编辑"><i class="fa fa-pencil"></i></a> <a class="btn btn-xs btn-info m-l-xs" ng-click="$util.open('tpl/app/student/wxbind_qrcode.modal.html','md',{student:student,contact:item})" tooltip="微信绑定二维码"><i class="fa fa-qrcode"></i></a></td>
                                        </tr>
                                        <!-- end ngRepeat: item in student.relations -->
                                        <!-- ngIf: student.relations.length == 0 -->
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="6">
                                                <p class="text-muted">提醒：学习管家账号是手机号，默认密码是手机号后6位</p>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- end ngIf: student_rest.$loaded -->
                    <!-- ngIf: student_rest.$loading -->
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading" tab-link="student.list"><span class="tab-title"><i class="fa fa-list"></i> 学员动态记录</span>
                    <div class="dropdown pull-right" dropdown=""><span tooltip="更多" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="glyphicon glyphicon-align-justify"></i></span>
                        <ul class="dropdown-menu">
                            <!-- ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.trials.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope" style="display: none;"><a ui-sref="student.view.trials({os_id:os_id})" class="ng-binding" href="#/student/65114/trials"><i class="icon-chemistry"></i> 试课记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.evaluates.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope" style="display: none;"><a ui-sref="student.view.evaluates({os_id:os_id})" class="ng-binding" href="#/student/65114/evaluates"><i class="fa fa-user-md"></i> 评估记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.lessons" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.lessons({os_id:os_id})" class="ng-binding" href="#/student/65114/lessons"><i class="fa fa-book"></i> 课程记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.pays.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.pays({os_id:os_id})" class="ng-binding" href="#/student/65114/pays"><i class="fa fa-money"></i> 缴费记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.tracks.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.tracks({os_id:os_id})" class="ng-binding" href="#/student/65114/tracks"><i class="fa fa-comments"></i> 跟踪回访记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.arranges.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.arranges({os_id:os_id})" class="ng-binding" href="#/student/65114/arranges"><i class="fa fa-calendar"></i> 排课记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.attendances.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.attendances({os_id:os_id})" class="ng-binding" href="#/student/65114/attendances"><i class="fa fa-calendar-o"></i> 考勤记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.leaves.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.leaves({os_id:os_id})" class="ng-binding" href="#/student/65114/leaves"><i class="fa fa-bell-o"></i> 请假记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.comments.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.comments({os_id:os_id})" class="ng-binding" href="#/student/65114/comments"><i class="fa fa-comments"></i> 点评记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.performance.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.performance({os_id:os_id})" class="ng-binding" href="#/student/65114/performance"><i class="fa fa-star"></i> 成绩记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li ui-per="student.match.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.matchs({os_id:os_id})" class="ng-binding" href="#/student/65114/matchs"><i class="fa fa-flag-o"></i> 赛事记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                        </ul>
                    </div>
                </div>
                <!-- uiView:  -->
                <div class="panel-body ng-scope" ui-view="">
                    <div class="wrapper" tab-nav-link="student.list">
                        <p class="text-muted text-center"><i class="fa fa-info"></i> 提示:点击标题上的 <i class="glyphicon glyphicon-align-justify"></i> 菜单查看学员相应的动态记录</p>
                        <ul class="list-group">
                            <!-- ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.trials.list" ng-repeat="item in $const.student_view_tabs" style="display: none;"><a ui-sref="student.view.trials({os_id:os_id})" class="ng-binding" href="#/student/65114/trials"><i class="icon-chemistry"></i> 试课记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.evaluates.list" ng-repeat="item in $const.student_view_tabs" style="display: none;"><a ui-sref="student.view.evaluates({os_id:os_id})" class="ng-binding" href="#/student/65114/evaluates"><i class="fa fa-user-md"></i> 评估记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.lessons" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.lessons({os_id:os_id})" class="ng-binding" href="#/student/65114/lessons"><i class="fa fa-book"></i> 课程记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.pays.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.pays({os_id:os_id})" class="ng-binding" href="#/student/65114/pays"><i class="fa fa-money"></i> 缴费记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.tracks.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.tracks({os_id:os_id})" class="ng-binding" href="#/student/65114/tracks"><i class="fa fa-comments"></i> 跟踪回访记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.arranges.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.arranges({os_id:os_id})" class="ng-binding" href="#/student/65114/arranges"><i class="fa fa-calendar"></i> 排课记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.attendances.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.attendances({os_id:os_id})" class="ng-binding" href="#/student/65114/attendances"><i class="fa fa-calendar-o"></i> 考勤记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.leaves.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.leaves({os_id:os_id})" class="ng-binding" href="#/student/65114/leaves"><i class="fa fa-bell-o"></i> 请假记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.comments.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.comments({os_id:os_id})" class="ng-binding" href="#/student/65114/comments"><i class="fa fa-comments"></i> 点评记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.performance.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.performance({os_id:os_id})" class="ng-binding" href="#/student/65114/performance"><i class="fa fa-star"></i> 成绩记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                            <li class="list-group-item ng-scope" ui-per="student.match.list" ng-repeat="item in $const.student_view_tabs"><a ui-sref="student.view.matchs({os_id:os_id})" class="ng-binding" href="#/student/65114/matchs"><i class="fa fa-flag-o"></i> 赛事记录</a></li>
                            <!-- end ngRepeat: item in $const.student_view_tabs -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
