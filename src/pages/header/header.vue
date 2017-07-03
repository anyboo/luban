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
            <div >
                <a @click="variety()" >
                    <i class="fa fa-fw fa-dedent"></i>
                </a>
            </div>
            <ul ng-controller="NavCtrl" class="nav navbar-nav navbar-right ng-scope" ng-init="check_ft_comment()">
                <li class="hidden-xs">
                    <a class @click="fullscreen">
                        <i class="fa fa-expand fa-fw text"></i>
                        <i class="fa fa-compress fa-fw text-active"></i>
                    </a>
                </li>
                <li dropdown ng-if="user.gv.branchs.length > 0" class="dropdown ng-scope">
                    <a dropdown-toggle class="dropdown-toggle clear">
                        <span class="ng-binding">福州三金书画培训</span>
                    </a>
                </li>
                <li dropdown class="dropdown " :class="{open:open}">
                    <a href="#" dropdown-toggle class="dropdown-toggle clear" @click="operating" @blur="blur">
                        <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                            <img src="/assets/images/a0.jpg" alt="...">
                        </span>
                        <span ng-if="user.name" class="">林三金</span>
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight w">
                        <li></li>
                        <li @click="handleRouter($event,'/header/personal_information')" @mouseout="menu=false" @mouseover="menu=true">
                            <a ui-sref="main.profile" href="#/main/profile">
                                <i class="fa fa-user"></i>个人资料
                            </a>
                        </li>
                        <li @click="handleRouter($event,'/header/system')">
                            <a @mouseout="menu=false" @mouseover="menu=true" class="ng-scope" href="#/main/system">
                                <i class="fa fa-dashboard"></i>系统状态
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li @click="handleRouter($event,'/header/sign_in')" @mouseout="menu=false" @mouseover="menu=true">
                            <a ng-click="app.is_lock=1">
                                <i class="icon-lock"></i>锁屏
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
        let localdata = {
            'form': {

            },

        }
        return {
            localdata,
            open: false,
            menu: false,
            full: false
        }
    },
    computed: {},
    watch: {},
    methods: {
        fullscreen() {
            if (this.full) {
                this.full = false
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                }
            } else {
                this.full = true
                var docElm = document.documentElement
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen()
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen()
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen()
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen()
                }
            }
        },
        sidebarCollapsed() {
            this.$emit('sidebarCollapsed')
        },
        variety() {
            // this.$emit('variety')
            alert('hdd')
        },
        blur() {
            this.open = this.menu
        },
        operating() {
            this.open = !this.open
        },
        handleRouter(event, url) {
            this.$router.push(url)
            event.stopPropagation()
            this.open = false
        }
    }
}
</script>
