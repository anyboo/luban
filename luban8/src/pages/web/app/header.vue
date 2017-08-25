<template>
    <div id="" class="page-header-topbar zIndexs">
        <nav id="topbar" role="navigation" style="margin-bottom: 0; z-index: 2;" class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
                <a id="logo" href="#" class="navbar-brand">
                    <span class="fa fa-rocket"></span>
                    <img src="/assets/images/logo.png" alt="." style="height:20px;width:20px;">
                    <span class="logo-text" style="font-size:18px; margin-left:-58px;margin-top:-19px;">鲁班 </span>
                    <span style="display: none" class="logo-text-icon">
                    </span>
                </a>
            </div>
            <div class="topbar-main">
                <a id="menu-toggle" class="hidden-xs" @click="variety()">
                    <i class="fa fa-bars"></i>
                </a>
                <ul class="nav navbar navbar-top-links navbar-right mbn">
                    <li>
                        <a @click="fullscreen">
                            <i class="fa fa-fw" :class="{'fa-compress':updown,'fa-expand':!updown}"></i>
                        </a>
                    </li>
                    <li class="dropdown topbar-user open">
                        <a href="javascript:void(0)" data-hover="dropdown" class="dropdown-toggle" @click="cut" @blur="blur">
                            <img src="/assets/images/a0.jpg" alt="" class="img-responsive img-circle">&nbsp;
                            <span class="hidden-xs">{{$store.state.system.name}}</span>&nbsp;
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-user pull-right" v-show="hide" style="top:49px;">
                            <li @mouseout="menu=false" @mouseover="menu=true">
                                <a @click="changeView('/system/personal_information')">
                                    <i class="fa fa-user" style="top:1px;"></i>个人资料</a>
                            </li>
                            <li @mouseout="menu=false" @mouseover="menu=true">
                                <a @click="changeView('/system/sign_in')">
                                    <i class="fa fa-lock" style="top:1px;"></i>锁屏</a>
                            </li>
                            <li @mouseout="menu=false" @mouseover="menu=true">
                                <a @click="accountexit()">
                                    <i class="fa fa-key" style="top:1px;"></i>退出</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Topbar',
    data() {
        return {
            hide: false,
            updown: false,
            menu: false,
        }
    },
    methods: {
        sidebarCollapsed: function () {
            this.$emit('sidebarCollapsed')
        },
        cut() {
            this.hide = !this.hide
        },
        variety() {
            this.$emit('variety')
        },
        accountexit() {
            this.$store.commit('user', { name: '', tel: '', _id: '' })
            this.changeView('/system/sign_in')
        },
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
                this.updown = false
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
                this.updown = true
            }
        },
        blur() {
            this.hide = this.menu
        },
        changeView(view) {
            this.$store.commit('router', view)
            this.hide = false
        }

    },
    computed: {},
}
</script>
