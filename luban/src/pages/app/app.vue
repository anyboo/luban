<template>
    <div>
        <a class="btn" href="#">
            <i class="icon-repeat"></i> Reload</a>
        <lb-taskbar></lb-taskbar>
        <lb-wallpaper></lb-wallpaper>
         <lb-personalise></lb-personalise>
        
    </div>
</template>
<script>
import taskbar from './taskbar.vue'
import wallpaper from './wallpaper.vue'
import docklogin from './docklogin.vue'
import personalise from './personalise.vue'
import management from './management.vue'
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
        'lb-docklogin': docklogin,
        'lb-personalise':personalise,
        'lb-management':management
    },
}
</script>