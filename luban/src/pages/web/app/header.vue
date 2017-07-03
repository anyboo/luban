<template>
    <div id="header-topbar-option-demo" class="page-header-topbar">
        <nav id="topbar" role="navigation" style="margin-bottom: 0; z-index: 2;" class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a id="logo" href="index.html" class="navbar-brand">
                    <span class="fa fa-rocket"></span>
                    <span class="logo-text">鲁班 </span>
                    <span style="display: none" class="logo-text-icon">
                    </span>
                </a>
            </div>
            <div class="topbar-main">
                <a id="menu-toggle" href="#" class="hidden-xs" @click="sidebarCollapsed">
                    <i class="fa fa-bars"></i>
                </a>
                <ul class="nav navbar-nav">
                    <li>
                        <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">Layouts &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="layout-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li>
                                <a href="layout-right-sidebar.html">Right Sidebar</a>
                            </li>
                            <li>
                                <a href="layout-left-sidebar-collapsed.html">Left Sidebar Collasped</a>
                            </li>
                            <li>
                                <a href="layout-right-sidebar-collapsed.html">Right Sidebar Collasped</a>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">More Options</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="#">Second level link</a>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">More Options</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="#">Third level link</a>
                                            </li>
                                            <li>
                                                <a href="#">Third level link</a>
                                            </li>
                                            <li>
                                                <a href="#">Third level link</a>
                                            </li>
                                            <li>
                                                <a href="#">Third level link</a>
                                            </li>
                                            <li>
                                                <a href="#">Third level link</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Second level link</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="mega-menu-dropdown">
                        <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">UI Elements &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="mega-menu-content">
                                    <div class="row">
                                        <ul class="col-md-4 mega-menu-submenu">
                                            <li>
                                                <h3>Neque porro quisquam</h3>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                            </li>
                                        </ul>
                                        <ul class="col-md-4 mega-menu-submenu">
                                            <li>
                                                <h3>Neque porro quisquam</h3>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                            </li>
                                        </ul>
                                        <ul class="col-md-4 mega-menu-submenu">
                                            <li>
                                                <h3>Neque porro quisquam</h3>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="mega-menu-dropdown mega-menu-full">
                        <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">Extras &nbsp;
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="mega-menu-content">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <h3>Neque porro quisquam</h3>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <h3>Neque porro quisquam</h3>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <h3>Neque porro quisquam</h3>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-5 document-demo">
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-info-circle"></i>
                                                        <span>Introduction</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-download"></i>
                                                        <span>Installation</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-cog"></i>
                                                        <span>T3 Settings</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-desktop"></i>
                                                        <span>Layout System</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-magic"></i>
                                                        <span>Customization</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-question-circle"></i>
                                                        <span>FAQs</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar navbar-top-links navbar-right mbn">
                    <li class="dropdown topbar-user open">
                        <a data-hover="dropdown" href="#" class="dropdown-toggle">
                            <img src="/assets/images/a0.jpg" alt="" class="img-responsive img-circle">&nbsp;
                            <span class="hidden-xs">林祖鑫</span>&nbsp;
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-user pull-right">
                            <li>
                                <a href="extra-profile.html">
                                    <i class="fa fa-user"></i>My Profile</a>
                            </li>
                            <li>
                                <a href="page-calendar.html">
                                    <i class="fa fa-calendar"></i>My Calendar</a>
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
        }
    },
    methods: {
        sidebarCollapsed: function () {
            this.$emit('sidebarCollapsed')
        }
    },
    computed: {},
}
</script>
