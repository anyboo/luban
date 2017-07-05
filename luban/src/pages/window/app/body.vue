<template>
    <div class='margins-tops'>
        <template v-for="item in getMenu">
            <lb-icon :icondata="item"></lb-icon>
        </template>
    </div>
</template>
<style>
.margins-tops {
    margin-top: 4.3rem;
    position: relative;
    width: 100%;
    height: 89%;
}
</style>
<script>
import menu from '~/stores/menu'
import icon from './icon.vue'
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata,
            Array: ''
        }
    },
    computed: {
        getMenu() {
            let menuArray = []
            let index = 0
            for (var item of menu) {
                if (item.menuShow != 0) {
                    for (var sub of item.menu) {
                        if (sub.menuShow != 0) {
                            sub.index = index++
                            menuArray.push(sub)
                        }
                    }
                }
            }
            return menuArray
        }
    },
    components: {
        'lb-icon': icon
    }
}
</script>
