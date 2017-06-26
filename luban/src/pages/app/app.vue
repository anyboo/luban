<template>
    <div :style="{'background-color': $store.state.system.theme}">
        <lb-header></lb-header>
        <lb-body></lb-body>
        <lb-taskbar @dock="handleDock" @desktop="handleDesktop"></lb-taskbar>
        <lb-wallpaper @dockhidden="handleDockHidden"></lb-wallpaper>
        <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
            <lb-dock v-if="dockshow" :view="dockview" @dockhidden="handleDockHidden"></lb-dock>
        </transition>
    </div>
</template>
<script>
import header from './header.vue'
import body from './body.vue'
import taskbar from './taskbar.vue'
import wallpaper from './wallpaper.vue'
import dock from '../dock/dock.vue'


export default {
    name: '',
    data() {
        let localdata = {}
        return {
            localdata,
            dockshow: true,
            dockview: 'lb-theme'
        }
    },
    components: {
        'lb-wallpaper': wallpaper,
        'lb-taskbar': taskbar,
        'lb-dock': dock,
        'lb-header': header,
        'lb-body': body
    },
    methods: {
        handleDock(action) {
            this.dockshow = this.dockview == action ? !this.dockshow : true
            this.dockview = action
        },
        handleDesktop() {
            this.dockshow = false
        },
        handleDockHidden() {
            this.dockshow = false
        },
    }
}
</script>
