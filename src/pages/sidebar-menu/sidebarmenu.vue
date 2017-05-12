<template>
    <div class="aside-wrap ng-scope">
        <div class="app-aside hidden-xs bg-black">
            <div class="navi-wrap ps-container ps-theme-default" ui-jq="perfectScrollbar" data-ps-id="638570ad-1094-4aca-a5a2-f18fdfc5feb7">
                <!-- nav-->
                <!-- ngInclude: 'tpl/blocks/nav.html' -->
                <nav ui-nav="" ng-include="'tpl/blocks/nav.html'" class="navi clearfix ng-scope">
                    <ul class="nav ng-scope">
                        <li ui-sref-active="active" class=""><a ui-sref="main.home" href="#/main/home"><i class="icon icon-home text-primary-dker"></i> <span class="font-normal">工作台</span></a></li>
                        <lb-sidebamenu-item />
                        <!-- end ngRepeat: item in user.gv.navs.module -->
                        <li class="ng-scope ">
                            <!-- ngIf: !item.sub -->
                            <!-- ngIf: item.sub --><a ng-if="item.sub" class="auto ng-scope"><span class="pull-right text-muted"><i class="fa fa-fw fa-angle-right text"></i> <i class="fa fa-fw fa-angle-down text-active"></i></span> <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-book"></i><!-- end ngIf: item.class --> <span class="font-normal ng-binding">课程</span></a>
                            <!-- end ngIf: item.sub -->
                            <!-- ngIf: item.sub -->
                            <ul ng-if="item.sub" class="nav nav-sub dk ng-scope">
                                <li class="nav-sub-header"><a href=""><span class="ng-binding">课程</span></a></li>
                                <!-- ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="lesson.manage" href="#/lesson/manage"><span class="ng-binding">课程设置</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="lesson.orders" href="#/lesson/orders"><span class="ng-binding">订单</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="lesson.classes" href="#/lesson/classes"><span class="ng-binding">班组课</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="lesson.contracts" href="#/lesson/contracts"><span class="ng-binding">1对1课</span> <!-- ngIf: subitem.class --></a></li>
                                <li ng-if="subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope">
                                    <!-- ngIf: subitem.class -->
                                    <!-- ngIf: !subitem.sub -->
                                    <!-- ngIf: subitem.sub -->
                                    <a href="" class="auto ng-scope" ng-if="subitem.sub">
                                        <!-- ngIf: subitem.sub --><span class="pull-right text-muted ng-scope" ng-if="subitem.sub"><i class="fa fa-fw fa-angle-right text"></i> <i class="fa fa-fw fa-angle-down text-active"></i></span>
                                        <!-- end ngIf: subitem.sub --><span class="ng-binding">课时包</span></a>
                                    <!-- end ngIf: subitem.sub -->
                                    <!-- ngIf: subitem.sub -->
                                    <ul ng-if="subitem.sub" class="nav dker ng-scope">
                                        <!-- ngRepeat: threeitem in subitem.sub -->
                                        <li ui-sref-active="active" ng-repeat="threeitem in subitem.sub" class="ng-scope"><a ui-sref="lesson.packages" href="#/lesson/packages"><span class="ng-binding">报读学员</span></a></li>
                                        <!-- end ngRepeat: threeitem in subitem.sub -->
                                        <li ui-sref-active="active" ng-repeat="threeitem in subitem.sub" class="ng-scope"><a ui-sref="lesson.subjects" href="#/lesson/subjects"><span class="ng-binding">科目设置</span></a></li>
                                        <!-- end ngRepeat: threeitem in subitem.sub -->
                                        <li ui-sref-active="active" ng-repeat="threeitem in subitem.sub" class="ng-scope"><a ui-sref="lesson.sclasses" href="#/lesson/sclasses"><span class="ng-binding">班级设置</span></a></li>
                                        <!-- end ngRepeat: threeitem in subitem.sub -->
                                    </ul>
                                    <!-- end ngIf: subitem.sub -->
                                </li>
                                <!-- end ngIf: subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                            </ul>
                            <!-- end ngIf: item.sub -->
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.module -->
                        <li ng-repeat="item in user.gv.navs.module" ng-class="{active:$state.includes(item.name)}" class="ng-scope">
                            <!-- ngIf: !item.sub -->
                            <!-- ngIf: item.sub --><a ng-if="item.sub" class="auto ng-scope"><span class="pull-right text-muted"><i class="fa fa-fw fa-angle-right text"></i> <i class="fa fa-fw fa-angle-down text-active"></i></span> <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-money"></i><!-- end ngIf: item.class --> <span class="font-normal ng-binding">学费</span></a>
                            <!-- end ngIf: item.sub -->
                            <!-- ngIf: item.sub -->
                            <ul ng-if="item.sub" class="nav nav-sub dk ng-scope">
                                <li class="nav-sub-header"><a href=""><span class="ng-binding">学费</span></a></li>
                                <!-- ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="fee.list1" href="#/fee/list1"><span class="ng-binding">缴费明细</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="fee.list2" href="#/fee/list2"><span class="ng-binding">预存明细</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="fee.list3" href="#/fee/list3"><span class="ng-binding">欠费明细</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="fee.list4" href="#/fee/list4"><span class="ng-binding">退费明细</span> <!-- ngIf: subitem.class --></a></li>
                            </ul>
                            <!-- end ngIf: item.sub -->
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.module -->
                        <li ng-repeat="item in user.gv.navs.module" ng-class="{active:$state.includes(item.name)}" class="ng-scope">
                            <!-- ngIf: !item.sub -->
                            <!-- ngIf: item.sub --><a ng-if="item.sub" class="auto ng-scope"><span class="pull-right text-muted"><i class="fa fa-fw fa-angle-right text"></i> <i class="fa fa-fw fa-angle-down text-active"></i></span> <!-- ngIf: item.class --><i ng-if="item.class" class="icon-clock"></i><!-- end ngIf: item.class --> <span class="font-normal ng-binding">课时</span></a>
                            <!-- end ngIf: item.sub -->
                            <!-- ngIf: item.sub -->
                            <ul ng-if="item.sub" class="nav nav-sub dk ng-scope">
                                <li class="nav-sub-header"><a href=""><span class="ng-binding">课时</span></a></li>
                                <!-- ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.arrange" href="#/hours/arrange"><span class="ng-binding">排课</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.schedule" href="#/hours/schedule"><span class="ng-binding">课程表</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.attendance" href="#/hours/attendance"><span class="ng-binding">考勤</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.teacher" href="#/hours/teacher"><span class="ng-binding">教师课耗</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.student" href="#/hours/student"><span class="ng-binding">学员课耗</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.warning" href="#/hours/warning"><span class="ng-binding">课时预警</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.absences" href="#/hours/absences"><span class="ng-binding">缺课记录</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.leaves" href="#/hours/leaves"><span class="ng-binding">请假管理</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="hours.suspends" href="#/hours/suspends"><span class="ng-binding">停课管理</span> <!-- ngIf: subitem.class --></a></li>
                            </ul>
                            <!-- end ngIf: item.sub -->
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.module -->
                        <li ng-repeat="item in user.gv.navs.module" ng-class="{active:$state.includes(item.name)}" class="ng-scope">
                            <!-- ngIf: !item.sub -->
                            <!-- ngIf: item.sub --><a ng-if="item.sub" class="auto ng-scope"><span class="pull-right text-muted"><i class="fa fa-fw fa-angle-right text"></i> <i class="fa fa-fw fa-angle-down text-active"></i></span> <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-tachometer"></i><!-- end ngIf: item.class --> <span class="font-normal ng-binding">收支</span></a>
                            <!-- end ngIf: item.sub -->
                            <!-- ngIf: item.sub -->
                            <ul ng-if="item.sub" class="nav nav-sub dk ng-scope">
                                <li class="nav-sub-header"><a href=""><span class="ng-binding">收支</span></a></li>
                                <!-- ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="iae.flow" href="#/iae/flow"><span class="ng-binding">流水</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="iae.income" href="#/iae/income"><span class="ng-binding">收入明细</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="iae.expenses" href="#/iae/expenses"><span class="ng-binding">支出明细</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngRepeat: subitem in item.sub -->
                                <!-- ngIf: subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                            </ul>
                            <!-- end ngIf: item.sub -->
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.module -->
                        <li ng-repeat="item in user.gv.navs.module" ng-class="{active:$state.includes(item.name)}" class="ng-scope">
                            <!-- ngIf: !item.sub -->
                            <!-- ngIf: item.sub --><a ng-if="item.sub" class="auto ng-scope"><span class="pull-right text-muted"><i class="fa fa-fw fa-angle-right text"></i> <i class="fa fa-fw fa-angle-down text-active"></i></span> <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-university"></i><!-- end ngIf: item.class --> <span class="font-normal ng-binding">家校</span></a>
                            <!-- end ngIf: item.sub -->
                            <!-- ngIf: item.sub -->
                            <ul ng-if="item.sub" class="nav nav-sub dk ng-scope">
                                <li class="nav-sub-header"><a href=""><span class="ng-binding">家校</span></a></li>
                                <!-- ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="has.sms" href="#/has/sms"><span class="ng-binding">短信通知</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="has.comments" href="#/has/comments"><span class="ng-binding">点评记录</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="has.wechats" href="#/has/wechats"><span class="ng-binding">微信互动</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="has.inbox" href="#/has/inbox"><span class="ng-binding">校长信箱</span> <!-- ngIf: subitem.class --></a></li>
                                <!-- end ngIf: !subitem.sub -->
                                <!-- end ngRepeat: subitem in item.sub -->
                                <!-- ngIf: !subitem.sub -->
                                <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="has.news" href="#/has/news"><span class="ng-binding">公告发布</span> <!-- ngIf: subitem.class --></a></li>
                            </ul>
                            <!-- end ngIf: item.sub -->
                        </li>
                        <li ng-repeat="item in user.gv.navs.sys" ng-class="{active:$state.includes(item.name)}" class="ng-scope">
                            <!-- ngIf: !item.sub || item.single -->
                            <a ui-sref="system.config" ng-if="!item.sub || item.single" class="ng-scope" href="#/system/config">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-cog"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">设置</span></a>
                            <!-- end ngIf: !item.sub || item.single -->
                            <!-- ngIf: item.sub && !item.single -->
                            <!-- ngIf: item.sub && !item.single -->
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.sys -->
                        <li ng-repeat="item in user.gv.navs.sys" ng-class="{active:$state.includes(item.name)}" class="ng-scope">
                            <!-- ngIf: !item.sub || item.single -->
                            <a ui-sref="logs.sms" ng-if="!item.sub || item.single" class="ng-scope" href="#/logs/sms">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-file-archive-o"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">日志</span></a>
                            <!-- end ngIf: !item.sub || item.single -->
                            <!-- ngIf: item.sub && !item.single -->
                            <!-- ngIf: item.sub && !item.single -->
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.sys -->
                        <!-- ngIf: user.is_main == '1' || user.is_master == 1 -->
                        <li ng-if="user.is_main == '1' || user.is_master == 1" class="ng-scope"><a ui-sref="main.system" href="#/main/system"><i class="fa fa-dashboard"></i> <span>系统状态</span></a></li>
                        <!-- end ngIf: user.is_main == '1' || user.is_master == 1 -->
                        <li><a ui-sref="main.help" href="#/main/help"><i class="fa fa-question-circle"></i> <span>系统帮助</span></a></li>
                    </ul>
                </nav>
                <!-- nav-->
                <!-- aside footer -->
                <div class="wrapper m-t" ui-per="widget.home_stat">
                    <div class="text-center-folded"><span class="pull-right pull-none-folded ng-binding">0/50</span> <span class="hidden-folded">学员数</span></div>
                    <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" value="user.gv.org.student_num_current" max="user.gv.org.student_num_limit" type="info">
                        <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="50" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;"></div>
                    </div>
                    <div class="text-center-folded"><span class="pull-right pull-none-folded ng-binding">1/5</span> <span class="hidden-folded">账号数</span></div>
                    <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" value="user.gv.org.teacher_num_current" max="user.gv.org.teacher_num_limit" type="primary">
                        <div class="progress-bar progress-bar-primary" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" ng-style="{width: percent + '%'}" aria-valuetext="20%" ng-transclude="" style="width: 20%;"></div>
                    </div>
                    <div class="text-center-folded"><span class="pull-right pull-none-folded ng-binding">1/1</span> <span class="hidden-folded">校区数</span></div>
                    <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" value="user.gv.org.branch_num_current" max="user.gv.org.branch_num_limit" type="warning">
                        <div class="progress-bar progress-bar-warning" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="1" ng-style="{width: percent + '%'}" aria-valuetext="100%" ng-transclude="" style="width: 100%;"></div>
                    </div>
                </div>
                <!-- / aside footer -->
                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                    <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sidebarmenuitem from '../sidebar-menu/sidebarmenuitem.vue'

export default {
    name: 'sidebarmenu',
    data() {
        return {

        }
    },
    components: {
        'lb-sidebamenu-item': sidebarmenuitem,
    },
    computed: {},
    watch: {},
    methods: {

    }
}
</script>
