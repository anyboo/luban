<template>
    <div class="app ng-scope app-header-fixed app-aside-fixed" :class="{'app-aside-folded':isSidebarCollapsed}">
        <lb-header @sidebarCollapsed = "sidebarCollapsed"/>
        <lb-sidebarmenu />
    </div>
</template>
<script>
import header from '../header/header.vue'
import sidebarmenu from '../sidebar-menu/sidebarmenu.vue'

export default {
    name: 'app',

    data() {
        return {
            isSidebarCollapsed: false,
        }
    },
    components: {
        'lb-header': header,
        'lb-sidebarmenu': sidebarmenu
    },
    computed: {},
    watch: {
        '$route.path': {
            handler(val) {
                console.log(val)
            }
        }
    },
    methods: {
        switchLang(lang) {
            this.$router.push(lang)
        },
        sidebarCollapsed() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed
        },
        handleSelect(index) {
            console.log(index)
                /**/
        },
    }
}
</script>
