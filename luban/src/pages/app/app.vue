<template>
    <div>
        <a class="btn" href="#">
            <i class="icon-repeat"></i> Reload</a>
        <lb-taskbar></lb-taskbar>
        <lb-wallpaper></lb-wallpaper>
        <lb-docklogin></lb-docklogin>
        
    </div>
</template>
<script>
import taskbar from './taskbar.vue'
import wallpaper from './wallpaper.vue'
import docklogin from './docklogin.vue'
export default {
    name: '',
    data() {
        let localdata = {}
        return {
            localdata,
            isvariety: false,
        }
    },
    components: {
        'lb-wallpaper': wallpaper,
        'lb-taskbar': taskbar,
        'lb-docklogin': docklogin
    },
}
</script>