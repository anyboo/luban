<template>
    <div id="" class="page-header-topbar">
        <nav id="topbar" role="navigation" style="margin-bottom: 0; z-index: 2;" class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
                <a id="logo" href="index.html" class="navbar-brand">
                    <span class="fa fa-rocket"></span>
                    <span class="logo-text" style="font-size:18px">鲁班 </span>
                    <span style="display: none" class="logo-text-icon">
                    </span>
                </a>
            </div>
            <div class="topbar-main">
                <a id="menu-toggle" href="#" class="hidden-xs" @click="variety()">
                    <i class="fa fa-bars"></i>
                </a>
                <ul class="nav navbar navbar-top-links navbar-right mbn">
                    <li class="dropdown topbar-user open">
                        <a data-hover="dropdown" href="#" class="dropdown-toggle" @click="cut" style="height:49px">
                            <img src="/assets/images/a0.jpg" alt="" class="img-responsive img-circle">&nbsp;
                            <span class="hidden-xs">林祖鑫</span>&nbsp;
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-user pull-right" v-if="hide">
                            <li>
                                <a href="extra-profile.html">
                                    <i class="fa fa-user"></i>My Profile</a>
                            </li>
                            <li>
                                <a href="page-calendar.html">
                                    <i class="fa fa-calendar"></i>My Calendar</a>sS
                            </li>
                            <li>
                                <a href="email-inbox.html">
                                    <i class="fa fa-envelope"></i>My Inbox
                                    <span class="badge badge-danger">3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-tasks"></i>My Tasks
                                    <span class="badge badge-success">7</span>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="extra-lock-screen.html">
                                    <i class="fa fa-lock"></i>Lock Screen</a>
                            </li>
                            <li>
                                <a href="extra-signin.html">
                                    <i class="fa fa-key"></i>Log Out</a>
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
            hide: false
        }
    },
    methods: {
        sidebarCollapsed: function() {
            this.$emit('sidebarCollapsed')
        },
        cut() {
            this.hide = !this.hide
        },
        variety() {
            this.$emit('variety')
        },

    },
    computed: {},
}
</script>
