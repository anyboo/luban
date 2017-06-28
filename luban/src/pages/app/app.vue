<template>
    <div :style="{'background-color': $store.state.system.theme}">
        <lb-header></lb-header>
        <lb-body></lb-body>
        <lb-taskbar @dock="handleDock" @desktop="handleDesktop" @message="handleMessage"></lb-taskbar>
        <lb-wallpaper @dockhidden="handleDockHidden"></lb-wallpaper>
        <div class="col-md-3 col-xs-12 col-sm-6 dock" :style="{'background-color': $store.state.system.theme}"  v-show="dockshow">
            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
                <lb-dock v-show="dockshow" :view="dockview" @dockhidden="handleDockHidden"></lb-dock>
            </transition>
        </div>
        <lb-messager v-if="messageshow" :view="messageview" @messageclose="handleMessageClose"></lb-messager>
    </div>
</template>
<style>
.dock {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    z-index: 1000;
    overflow: hidden;
    padding: 0px;
    box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.2);
}
</style>
<script>
import header from './header.vue'
import body from './body.vue'
import taskbar from './taskbar.vue'
import wallpaper from './wallpaper.vue'
import dock from '../dock/dock.vue'
import messager from '../message/messager.vue'

export default {
    name: '',
    data() {
        let localdata = {}
        return {
            localdata,
            dockshow: true,
            messageshow: false,
            dockview: 'lb-theme',
            messageview: 'lb-sysinfo'
        }
    },
    components: {
        'lb-wallpaper': wallpaper,
        'lb-taskbar': taskbar,
        'lb-dock': dock,
        'lb-header': header,
        'lb-body': body,
        'lb-messager': messager
    },
    methods: {
        handleDock(action) {
            this.dockshow = this.dockview == action ? !this.dockshow : true
            this.dockview = action
        },
        handleDesktop() {
            this.dockshow = false
        },
        handleMessage(action) {
            this.messageshow = this.messageview == action ? !this.messageshow : true
            this.messageview = action
        },
        handleDockHidden() {
            this.dockshow = false
        },
        handleMessageClose(){
            this.messageshow = false
        }
    }
}
</script>
