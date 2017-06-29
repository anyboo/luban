<template>
    <div class="window window-active animate-2s ui-draggable ui-resizable window-loaded" style="width: 900px; height: 500px; left: 34px; top: 155.5px; z-index: 1003; display: block;" :style="{'border': '1px '+getcolor+' solid'}" :class="{'window-maximize':windowmax}">
        <div class="window-cover"></div>
        <div class="window-header ui-draggable-handle" :style="{'background-color': getcolor,'border-top': '8px '+getcolor+' solid'}" @dblclick="handleWindowRestore" @mousedown="handleHeaderDown($event)" @mousemove="handleHeaderMove($event)" @mouseout="handleHeaderUp($event)" @mouseup="handleHeaderUp($event)">
            <span class="icon icon-windows">
            </span>
            <div class="title">应用市场</div>
            <span class="btn-min" @click="handleWindowMin"></span>
            <span class="btn-max" @click="handleWindowRestore"></span>
            <span class="btn-restore" @click="handleWindowRestore"></span>
            <span class="btn-close" @click="handleWindowClose"></span>
        </div>
        <div class="window-body">
            sdfsdf
        </div>
        <div class="ui-resizable-handle ui-resizable-n" style="z-index: 90;"></div>
        <div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
        <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
        <div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div>
        <div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div>
        <div class="ui-resizable-handle ui-resizable-sw" style="z-index: 90;"></div>
        <div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90;"></div>
        <div class="ui-resizable-handle ui-resizable-nw" style="z-index: 90;"></div>
    </div>
</template>
<style>
.window {
    background-color: #ffffff;
    border-top: 0;
    position: absolute;
    display: none;
    z-index: 1003;
    left: 0px;
    top: 0px;
    overflow: visible;
    border: 1px solid #d09615;
}

.window-dragging {
    opacity: 0.9;
    filter: alpha(opacity=90);
    -webkit-transition: all .0s;
    -webkit-transition-delay: .0;
    transition: all .0s;
    transition-delay: .0;
    -ms-transition: all .0s;
    -ms-transition-delay: .0;
}

.window-proxy {
    opacity: 0;
    -webkit-transition: all .25s;
    -webkit-transition-delay: 0;
    transition: all .25s;
    transition-delay: 0;
    -ms-transition: all .25s;
    -ms-transition-delay: 0;
    z-index: 9999;
}

.window .window-body iframe {
    border: none;
    width: 100%;
    height: 100%;
}

.window .window-header {
    position: absolute;
    top: 0;
    height: 28px;
    width: 100%;
    cursor: default;
    z-index: 2;
}

.window .window-header .icon {
    width: 18px;
    height: 18px;
    font-size: 16px;
    margin-top: -3px;
    margin-left: 8px;
    position: relative;
    float: left;
}

.ie8 .window .window-header .icon {
    margin-top: -8px;
}

.ie9 .window .window-header .icon {
    margin-top: -8px;
}

.window-maximize .window-header .icon {
    margin-top: -4px;
}

.window .window-header .title {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 13px;
    line-height: 12px;
    top: 0px;
    left: 0px;
    text-align: left;
    padding-left: 32px;
    color: #fff;
}

.window-maximize .window-header .title {
    line-height: 9px;
}

.window .window-header .super-title {
    position: absolute;
    top: 6px;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;
    z-index: 0;
    height: 100%;
}

.window-active {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3), 0 3px 8px rgba(0, 0, 0, 0.2);
}

.window-preloader {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    display: none;
}

.window-maximize {
    border-left: none;
    border-bottom: none;
    border-right: none;
    bottom: 34px;
    box-shadow: none;
}

.window-maximize .window-header {
    height: 26px;
}

.window .window-cover {
    position: absolute;
    left: 0px;
    right: 0px;
    display: none;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    filter: alpha(opacity=0);
}

.window-resize .window-cover,
.inactive .window-cover {
    display: block;
}

.window .window-body {
    padding-top: 27px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #518ECF;
}

.window-maximize .window-body {
    padding-top: 25px;
}

.window-loaded .window-body {
    display: block;
}

.window .window-header .btn-close,
.window .window-header .btn-min,
.window .window-header .btn-max,
.window .window-header .btn-restore {
    color: #fff;
    position: absolute;
    top: -8px;
    right: 3px;
    width: 48px;
    height: 22px;
    min-height: 22px;
    text-align: center;
    vertical-align: middle;
    font-family: 'Cambria_', 'PT Serif Caption', Verdana, Arial, Helvetica, sans-serif;
    font-size: 16pt;
    font-weight: normal;
    padding: 0 0 10px 0;
    z-index: 3;
    outline: none;
    -webkit-transition: all .1s;
    -webkit-transition-delay: .1;
    transition: all .1s;
    transition-delay: .1;
    -ms-transition: all .1s;
    -ms-transition-delay: .1;
}

.window .window-header .btn-close {
    font-size: 22px;
}

.window .window-header .btn-restore {
    display: none;
}

.window-maximize .window-header .btn-restore {
    display: block;
}

.window-maximize .window-header .btn-max {
    display: none;
}

.window-unmaximize .window-header .btn-restore,
.window-unmaximize .window-header .btn-max {
    display: none;
}

.window .window-header .btn-close:hover,
.window .window-header .btn-min:hover,
.window .window-header .btn-max:hover,
.window .window-header .btn-restore:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
}

.window .window-header .btn-close:active,
.window .window-header .btn-min:active,
.window .window-header .btn-max:active,
.window .window-header .btn-restore:active {
    background-color: rgba(255, 255, 255, 0.4) !important;
    top: -8px;
    right: 3px;
    left: auto;
}

.window .window-header .btn-close:after,
.window .window-header .btn-min:after,
.window .window-header .btn-max:after,
.window .window-header .btn-restore:after {
    content: '\D7';
    position: absolute;
    left: 50%;
    top: -6px;
    margin-left: -0.37em;
    font-weight: 100;
}

.ie8 .window .window-header .btn-close,
.ie8 .window .window-header .btn-min,
.ie8 .window .window-header .btn-max,
.ie8 .window .window-header .btn-restore {
    min-height: 22px;
    height: 22px;
    top: -9px;
}

.ie8 .window .window-header .btn-close:after {
    top: -5px;
}

.window .window-header .btn-min,
.window .window-header .btn-max,
.window .window-header .btn-restore {
    background-color: transparent;
    color: #fff;
    width: 48px;
    padding-bottom: 10px;
}

.window .window-header .btn-min:hover,
.window .window-header .btn-max:hover,
.window .window-header .btn-restore:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
}

.window .window-header .btn-min:hover:after,
.window .window-header .btn-max:hover:after,
.window .window-header .btn-restore:after {
    border-color: #fff;
}

.window .window-header .btn-min:after {
    display: block;
    position: absolute;
    width: 14px;
    height: 10px;
    border: 0px #fff solid;
    border-bottom-width: 1px;
    content: ' ';
    bottom: 10px;
    left: 50%;
    margin-left: -5px;
    top: auto;
}

.window .window-header .btn-max:after {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border: 0px #fff solid;
    border-bottom-width: 2px;
    content: ' ';
    bottom: 6px;
    left: 50%;
    margin-left: -5px;
    top: auto;
}

.window .window-header .btn-restore:after,
.window .window-header .btn-restore:before {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border: 0px #fff solid;
    border-bottom-width: 2px;
    content: ' ';
    left: 50%;
    margin-left: -5px;
}

.window .window-header .btn-restore:after {
    top: 6px;
}

.window .window-header .btn-restore:before {
    top: 4px;
}

.window .window-header .btn-min,
.window .window-header .btn-min:active {
    right: 103px;
}

.window .window-header .btn-min:active {
    background-color: rgba(255, 255, 255, 0.4);
}

.window .window-header .btn-max,
.window .window-header .btn-restore,
.window .window-header .btn-max:active,
.window .window-header .btn-restore:active {
    right: 53px;
}

.window .window-header .btn-restore:active {
    background-color: rgba(255, 255, 255, 0.4);
}

.window-unmaximize .window-header .btn-min,
.window-unmaximize .window-header .btn-min:active {
    right: 53px;
}

.window .window-header .btn-max:after,
.window .window-header .btn-restore:after {
    height: 12px;
    border: 1px #fff solid;
    border-top-width: 1px;
}

.window .window-header .btn-restore:hover:after {
    border-color: #fff;
}

.window .window-header .btn-restore:hover:before {
    border-color: #fff;
}

.window .window-header .btn-restore:before {
    height: 12px;
    border: 1px solid;
    border-top-width: 1px;
    border-left: none;
    border-bottom: none;
}

.window .window-header .btn-restore:before {
    bottom: 8px;
    left: 50%;
}

.window .window-header .btn-restore:after {
    left: 45%;
}

.window.inactive {
    border-color: #ebebeb;
}

.window.inactive .window-header {
    background-color: #ebebeb;
    border-top: 8px #ebebeb solid;
}

.window.inactive .window-body {
    border-color: #ebebeb;
}

.window.inactive .btn-close {
    background-color: #bcbcbc;
}

.ui-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
    -ms-touch-action: none;
    touch-action: none;
}

.ui-resizable-disabled .ui-resizable-handle,
.ui-resizable-autohide .ui-resizable-handle {
    display: none;
}

.ui-resizable-n {
    cursor: n-resize;
    height: 8px;
    width: 100%;
    top: 0px;
    left: 0px;
}

.ui-resizable-s {
    cursor: s-resize;
    height: 8px;
    width: 100%;
    bottom: -8px;
    left: 0px;
}

.ui-resizable-e {
    cursor: e-resize;
    width: 8px;
    right: -8px;
    top: 0;
    height: 100%;
}

.ui-resizable-w {
    cursor: w-resize;
    width: 8px;
    left: -8px;
    top: 0;
    height: 100%;
}

.ui-resizable-se {
    cursor: se-resize;
    width: 9px;
    height: 9px;
    right: -8px;
    bottom: -8px;
}

.ui-resizable-sw {
    cursor: sw-resize;
    width: 9px;
    height: 9px;
    left: -8px;
    bottom: -8px;
}

.ui-resizable-nw {
    cursor: nw-resize;
    width: 9px;
    height: 9px;
    left: -8px;
    top: 0px;
}

.ui-resizable-ne {
    cursor: ne-resize;
    width: 9px;
    height: 9px;
    right: -8px;
    top: 0px;
}
</style>
<script>
export default {
    name: 'window',
    data() {
        let localdata = {}
        return {
            localdata,
            moveflag: false,
            disx: 0,
            disy: 0,
            windowmax: false
        }
    },
    computed: {
        getcolor() {
            let rgb = this.$store.state.system.theme
            let color = rgb.toString().match(/\d+/g)
            let hex = "#"
            for (var i = 0; i < 3; i++) {
                hex += ("0" + Number(color[i]).toString(16)).slice(-2)
            }
            return hex
        }
    },
    methods: {
        handleWindowClose() {
            this.$emit('windowclose')
        },
        handleHeaderDown(ev) {
            this.moveflag = true
            if (!this.windowmax) {
                this.disx = ev.clientX - this.$el.offsetLeft
                this.disy = ev.clientY - this.$el.offsetTop
            }
        },
        handleHeaderMove(ev) {
            if (this.moveflag && !this.windowmax) {
                this.$el.style.left = ev.clientX - this.disx + 'px';
                this.$el.style.top = ev.clientY - this.disy + 'px';
            }
        },
        handleHeaderUp(ev) {
            this.moveflag = false
        },
        handleWindowMin() {

        },
        handleWindowRestore() {
            if (this.windowmax) {
                this.$el.style.width = '900px'
                this.$el.style.height = '500px'
                this.$el.style.left = this.disx
                this.$el.style.top = this.disy
            } else {
                this.$el.style.width = '100%'
                this.$el.style.height = document.body.clientHeight - 35 + 'px'
                this.disx = this.$el.style.left
                this.disy = this.$el.style.top
                this.$el.style.left = 0
                this.$el.style.top = 0
            }
            this.windowmax = !this.windowmax

        }
    }
}
</script>
