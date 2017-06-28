<template>
    <div class="taskbar" :style="{'background-color': $store.state.system.theme}">
        <div class="taskbar-action-left">
            <el-tooltip content="桌面" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                <span class="taskbar-action-icon glyphicon glyphicon-th-large" @click="handleClick('desktop')"></span>
            </el-tooltip>
            <el-tooltip content="我的鲁班" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                <span class="taskbar-action-icon glyphicon glyphicon-user" @click="handleClick('dock','lb-login')"></span>
            </el-tooltip>
            <el-tooltip content="应用管理" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                <span class="taskbar-action-icon glyphicon glyphicon-list" @click="handleClick('dock','lb-management')"></span>
            </el-tooltip>
        </div>
        <div class="taskbar-inner" style="left: 120px; right: 278px;"></div>
        <div class="taskbar-action-right">
            <!--<el-tooltip content="应用市场" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                    <span class="taskbar-action-icon glyphicon glyphicon-folder-close"></span>
                    </el-tooltip>
                    <el-tooltip content="示例" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                        <span class="taskbar-action-icon glyphicon glyphicon-book"></span>
                    </el-tooltip>
               

                 -->
            <el-tooltip content="全屏模式" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                <span class="taskbar-action-icon fa fa-fw" :class="{'fa-compress':updown,'fa-expand':!updown}" @click="fullscreen"></span>
            </el-tooltip>
            <el-tooltip content="个性化设置" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                <span class="taskbar-action-icon glyphicon glyphicon-cog" @click="handleClick('dock','lb-theme')"></span>
            </el-tooltip>
            <el-tooltip content="反馈意见" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                <span class="taskbar-action-icon glyphicon glyphicon-edit" @click="handleClick('message','lb-feedback')"></span>
            </el-tooltip>
            <el-tooltip content="关于Luban" class="taskbar-action taskbar-action-profile" placement="top" effect="light">
                <span class="taskbar-action-icon glyphicon glyphicon-info-sign" @click="handleClick('message','lb-sysinfo')"></span>
            </el-tooltip>
            <div class="taskbar-action taskbar-action-time">{{time}}</div>
            <div class="taskbar-action" style="width:5px;border-left:1px solid #ccc"></div>
        </div>
    </div>
</template>
<style>
.taskbar {
    position: fixed;
    bottom: 0;
    left: 0px;
    height: 35px;
    padding: 0 0px;
    width: 100%;
    z-index: 9999;
    overflow: hidden;
    text-align: left;
}

.ie8 .taskbar {
    background-color: #d09615;
}

.taskbar-fixed {
    bottom: 0;
    z-index: 9998;
    padding: 0px;
    background-color: rgba(208, 150, 21, 0.75);
    border-top: 1px solid #1f5bb7;
}

.ie8 .taskbar-fixed {
    background-color: #6badf6;
}

.taskbar .taskbar-inner {
    position: absolute;
    top: 0px;
    left: 120px;
    right: 130px;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
}

.taskbar-fixed .taskbar-inner {
    left: 0px;
    right: 0px;
}

.taskbar-fixed.taskbar-overflow .taskbar-inner {
    left: 25px;
    right: 25px;
}

.taskbar .taskbar-nav {
    position: absolute;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    padding-top: 9px;
    height: 100%;
    top: -5px;
    display: none;
}

.taskbar-fixed .taskbar-nav {
    color: #fff;
}

.taskbar .taskbar-nav:hover {
    color: #1f5bb7;
}

.taskbar-fixed .taskbar-nav:hover {
    color: #1f5bb7;
}

.taskbar-overflow .taskbar-nav {
    display: block;
}

.taskbar .taskbar-nav.left {
    left: 60px;
}

.taskbar .taskbar-nav.right {
    right: 60px;
}

.taskbar-fixed .taskbar-nav.left {
    left: 3px;
}

.taskbar-fixed .taskbar-nav.right {
    right: 3px;
}

.taskbar-action-icon {
    color: #fff;
    height: 100%;
    line-height: 1.8;
    vertical-align: -10%;
    font-size: 16px;
    margin-top: 3px;
}

.taskbar-action-left {
    width: 120px;
    height: 100%;
}

.taskbar-action-right {
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
}

.taskbar-action {
    width: 36px;
    height: 100%;
    text-align: center;
    display: inline-block;
    float: left;
    cursor: pointer;
}

.taskbar-action:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.taskbar-action-time {
    color: #fff;
    line-height: 35px;
    text-align: center;
    width: 65px;
}
</style>
<script>
export default {
    name: 'taskbar',
    data() {
        let localdata = {}
        return {
            localdata,
            time: '',
            updown: false
        }
    },
    mounted() {
        setInterval(() => {
            this.time = moment().format("h:mm:ss");
        }, 1000)
    },
    methods: {
        handleClick(action, page) {
            this.$emit(action, page)
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
    },


}
</script>
