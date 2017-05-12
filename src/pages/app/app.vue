<template>
    <div class="app-header navbar ng-scope">
        <!-- navbar header-->
        <div class="navbar-header bg-white-only" ng-controller="UtilCtrl">
            <button ui-toggle-class="show" data-target=".navbar-collapse" class="pull-right visible-xs dk"><i class="glyphicon glyphicon-cog"></i></button>
            <button ui-toggle-class="off-screen" data-target=".app-aside" ui-scroll="app" class="pull-right visible-xs"><i class="glyphicon glyphicon-align-justify"></i></button>
            <a href="#/" ng-if="user.og_id == '0' || $gv.org.org_logo == ''" class="navbar-brand text-lt ng-scope">
                <img src="/assets/images/logo.png" alt=".">
                <span class="hidden-folded m-l-xs ng-binding">鲁班</span></a>
        </div>
        <!-- / navbar header-->
        <!-- navbar collapse-->
        <div class="collapse pos-rlt navbar-collapse box-shadow bg-info dker">
            <div class="nav navbar-nav hidden-xs ng-scope" ng-controller="UtilCtrl"><a class="btn no-shadow navbar-btn" ng-click="$util.open('tpl/public/feature.modal.html','md',{})"><span class="badge badge-sm up bg-danger pull-right-xs ng-binding">2.1</span></a></div>
            <!-- buttons-->
            <div class="nav navbar-nav hidden-xs"><a href="" ng-click="app.settings.asideFolded = !app.settings.asideFolded" class="btn no-shadow navbar-btn"><i class="fa fa-fw fa-dedent"></i></a></div>
            <!-- / buttons-->
            <!--my-->
            <ul class="nav navbar-nav ng-scope" ng-controller="UtilCtrl">
                <li dropdown="" class="dropdown"><a href="" dropdown-toggle="" class="dropdown-toggle clear" aria-haspopup="true" aria-expanded="false"><i class="icon-user"></i> <span>我的</span><b class="caret"></b></a>
                    <!-- dropdown-->
                    <ul class="dropdown-menu">
                        <!-- ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.news" href="#/my/news">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-file-text text-info-dker"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">公告</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.students" href="#/my/students">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-users text-info-dker"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">学生</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.notify" href="#/my/notify">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-bullhorn text-info-dker"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">提醒</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.schedule" href="#/my/schedule">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="glyphicon glyphicon-calendar icon text-info-dker"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">课表</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.courses" href="#/my/courses">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-calendar"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">课时</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.tracks" href="#/my/tracks">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-comments"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">回访</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.inquiry" href="#/my/inquiry">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="icon-users"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">咨询</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                        <li ng-repeat="item in user.gv.navs.my" ui-sref-active="active" class="ng-scope">
                            <a ui-sref="my.comments" href="#/my/comments">
                                <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-comment-o"></i>
                                <!-- end ngIf: item.class --><span class="ng-binding">课堂点评</span></a>
                        </li>
                        <!-- end ngRepeat: item in user.gv.navs.my -->
                    </ul>
                </li>
            </ul>
            <!--my end-->
            <!-- nabar right-->
            <ul ng-controller="NavCtrl" class="nav navbar-nav navbar-right ng-scope" ng-init="check_ft_comment()">
                <li class="hidden-xs"><a ui-fullscreen="" class=""><i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i></a></li>
                <!-- ngIf: ft_comment.count > 0 -->
                <!-- ngIf: user.gv.branchs.length > 0 -->
                <li dropdown="" ng-if="user.gv.branchs.length > 0" class="dropdown ng-scope"><a dropdown-toggle="" class="dropdown-toggle clear" aria-haspopup="true" aria-expanded="false"><span class="ng-binding">福州三金书画培训</span> <!-- ngIf: user.gv.branchs.length > 1 --></a>
                    <!-- ngIf: user.gv.branchs.length > 1 && user.gv.branchs.length < 10 -->
                    <!-- ngIf: user.gv.branchs.length >= 10 -->
                </li>
                <!-- end ngIf: user.gv.branchs.length > 0 -->
                <li dropdown="" class="dropdown"><a href="" dropdown-toggle="" class="dropdown-toggle clear" aria-haspopup="true" aria-expanded="false"><span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm"><img src="/assets/images/a0.jpg" alt="..."></span> <!-- ngIf: user.name --><span ng-if="user.name" class="hidden-sm hidden-md ng-binding ng-scope">林三金</span><!-- end ngIf: user.name --> <!-- ngIf: !user.name --> <b class="caret"></b></a>
                    <!-- dropdown-->
                    <ul class="dropdown-menu animated fadeInRight w">
                        <!--<li><a ui-sref="main.config"><i class="fa fa-cog"></i>                  <span>设置</span></a></li>-->
                        <li>
                            <!-- ngIf: user.gv.employee.is_ft == '1' -->
                        </li>
                        <li><a ui-sref="main.profile" href="#/main/profile"><i class="fa fa-user"></i> 个人资料</a></li>
                        <li>
                            <!-- ngIf: user.is_main == '1' || user.is_master == 1 --><a ui-sref="main.system" ng-if="user.is_main == '1' || user.is_master == 1" class="ng-scope" href="#/main/system"><i class="fa fa-dashboard"></i>系统状态</a>
                            <!-- end ngIf: user.is_main == '1' || user.is_master == 1 -->
                        </li>
                        <li><a ui-sref="main.help" href="#/main/help"><i class="fa fa-question-circle"></i> 系统帮助</a></li>
                        <li class="divider"></li>
                        <li><a ng-click="refresh_cache()"><i class="icon-reload"></i> 更新系统缓存</a></li>
                        <li><a ng-click="app.is_lock=1"><i class="icon-lock"></i> 锁屏</a></li>
                        <li><a href="javascript:window.location.reload();"><i class="icon-refresh"></i> 刷新界面</a></li>
                        <li><a href="http://v.xiao360.com/shortcut"><i class="fa fa-save"></i> 保存到桌面</a></li>
                        <li><a ng-click="logout()"><i class="icon-logout"></i> 退出</a></li>
                    </ul>
                    <!-- / dropdown-->
                </li>
            </ul>
            <!-- / navbar right-->
        </div>
        <!-- / navbar collapse-->
    </div>
</template>
