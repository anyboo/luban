<template>
    <div>
        <a class="btn" href="#">
        <i class="icon-repeat"></i> Reload</a>
        <lb-taskbar></lb-taskbar>
        <lb-wallpaper></lb-wallpaper>
    </div>
</template>
<script>
import taskbar from './taskbar.vue'
import wallpaper from './wallpaper.vue'
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
    },
}
</script>