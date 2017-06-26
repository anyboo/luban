<template>
    <div class="taskbar" :style="{'background-color': $store.state.system.theme}">
        <div class="taskbar-action-left">
            <div @click="handleClick('desktop')" class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="桌面">
                <span class="taskbar-action-icon icon-th-large"></span>
            </div>
            <div @click="handleClick('dock','lb-login')" class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="我的鲁班">
                <span class="taskbar-action-icon icon-user"></span>
            </div>
            <div @click="handleClick('dock','lb-management')" class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="应用管理" >
                <span class="taskbar-action-icon icon-list"></span>
            </div>
        </div>
        <div class="taskbar-inner" style="left: 120px; right: 278px;"></div>
        <div class="taskbar-action-right">
            <div class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="应用市场">
                <span class="taskbar-action-icon icon-folder-close"></span>
            </div>
            <div @click="handleClick('dock','lb-theme')" class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="个性化设置">
                <span class="taskbar-action-icon icon-cog"></span>
            </div>
            <div class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="示例">
                <span class="taskbar-action-icon icon-book"></span>
            </div>
            <div class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="反馈意见">
                <span class="taskbar-action-icon icon-edit"></span>
            </div>
            <div class="taskbar-action taskbar-action-profile" data-toggle="tooltip" data-placement="top" data-original-title="关于Luban">
                <span class="taskbar-action-icon icon-info-sign"></span>
            </div>
            <div class="taskbar-action taskbar-action-time" data-toggle="tooltip" data-placement="top" data-original-title="2017-6-21">{{time}}</div>
            <div class="taskbar-action" style="width:5px;border-left:1px solid #ccc"></div>
        </div>
        <div class="taskbar-nav left">
    
        </div>
        <div class="taskbar-nav right">
    
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
    z-index: 1;
    overflow: hidden;
    text-align: left;
<<<<<<< HEAD
=======

    transition: all .25s;
    transition-delay: 0;

    background-color: rgba(208, 150, 21, 0.8);
>>>>>>> afe5172b2ff82070479196b928c9a57200fb3d7e
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
    font-size: 18.5px;
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
        }
    }
}
</script>