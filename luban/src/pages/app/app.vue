<template>
    <div>
        <lb-header></lb-header>
        <lb-taskbar @action="handleAction"></lb-taskbar>
        <lb-wallpaper @dockhidden="handleHidden"></lb-wallpaper>
        <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
            <lb-docklogin v-if="dockshow"></lb-docklogin>
        </transition>
    </div>
</template>
<script>
import header from './header.vue'
import taskbar from './taskbar.vue'
import wallpaper from './wallpaper.vue'
import docklogin from './docklogin.vue'
export default {
    name: '',
    data() {
        let localdata = {}
        return {
            localdata,
            dockshow: true,
        }
    },
    components: {
        'lb-wallpaper': wallpaper,
        'lb-taskbar': taskbar,
        'lb-docklogin': docklogin,
        'lb-header': header
    },
    methods: {
        handleAction(action) {
            if (action == 'my') {
                this.dockshow = !this.dockshow
            }
            if (action == 'desktop') {
                this.dockshow = false
            }
        },
        handleHidden() {
            console.log('handleClick')
            this.dockshow = false
        }
    }
}
</script>