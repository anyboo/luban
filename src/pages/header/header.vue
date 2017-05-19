<template>
    <div class="app-header navbar ng-scope">
        <div class="navbar-header bg-white-only" ng-controller="UtilCtrl">
            <button ui-toggle-class="show" data-target=".navbar-collapse" class="pull-right visible-xs dk">
                <i class="glyphicon glyphicon-cog"></i>
            </button>
            <button ui-toggle-class="off-screen" data-target=".app-aside" ui-scroll="app" class="pull-right visible-xs">
                <i class="glyphicon glyphicon-align-justify"></i>
            </button>
            <a href="#/" ng-if="user.og_id == '0' || $gv.org.org_logo == ''" class="navbar-brand text-lt ng-scope">
                <img src="/assets/images/logo.png" alt=".">
                <span class="hidden-folded m-l-xs ng-binding">鲁班</span>
            </a>
        </div>
        <div class="collapse pos-rlt navbar-collapse box-shadow bg-info dker">
            <div class="nav navbar-nav hidden-xs">
                <a @click="sidebarCollapsed" class="btn no-shadow navbar-btn">
                    <i class="fa fa-fw fa-dedent"></i>
                </a>
            </div>
            <ul class="nav navbar-nav ng-scope" ng-controller="UtilCtrl">
                <li dropdown class="dropdown">
                    <a href dropdown-toggle class="dropdown-toggle clear" aria-haspopup="true" aria-expanded="false">
                        <i class="icon-user"></i>
                        <span>我的</span>
                        <b class="caret"></b>
                    </a>
                </li>
            </ul>
            <ul ng-controller="NavCtrl" class="nav navbar-nav navbar-right ng-scope" ng-init="check_ft_comment()">
                <li class="hidden-xs">
                    <a ui-fullscreen class>
                        <i class="fa fa-expand fa-fw text"></i>
                        <i class="fa fa-compress fa-fw text-active"></i>
                    </a>
                </li>
                <li dropdown ng-if="user.gv.branchs.length > 0" class="dropdown ng-scope">
                    <a dropdown-toggle class="dropdown-toggle clear" aria-haspopup="true" aria-expanded="false">
                        <span class="ng-binding">福州三金书画培训</span>
                    </a>
                </li>
                <li dropdown class="dropdown">
                    <a href dropdown-toggle class="dropdown-toggle clear" aria-haspopup="true" aria-expanded="false">
                        <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                            <img src="/assets/images/a0.jpg" alt="...">
                        </span>
                        <span ng-if="user.name" class="hidden-sm hidden-md ng-binding ng-scope">林三金</span>
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight w">
                        <li></li>
                        <li>
                            <a ui-sref="main.profile" href="#/main/profile">
                                <i class="fa fa-user"></i>个人资料
                            </a>
                        </li>
                        <li>
                            <a ui-sref="main.system" ng-if="user.is_main == '1' || user.is_master == 1" class="ng-scope" href="#/main/system">
                                <i class="fa fa-dashboard"></i>系统状态
                            </a>
                        </li>
                        <li>
                            <a ui-sref="main.help" href="#/main/help">
                                <i class="fa fa-question-circle"></i>系统帮助
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a ng-click="refresh_cache()">
                                <i class="icon-reload"></i>更新系统缓存
                            </a>
                        </li>
                        <li>
                            <a ng-click="app.is_lock=1">
                                <i class="icon-lock"></i>锁屏
                            </a>
                        </li>
                        <li>
                            <a href="javascript:window.location.reload();">
                                <i class="icon-refresh"></i>刷新界面
                            </a>
                        </li>
                        <li>
                            <a href="http://v.xiao360.com/shortcut">
                                <i class="fa fa-save"></i>保存到桌面
                            </a>
                        </li>
                        <li>
                            <a ng-click="logout()">
                                <i class="icon-logout"></i>退出
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'header',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {
        sidebarCollapsed() {
            this.$emit('sidebarCollapsed')
        },
    }
}
</script>