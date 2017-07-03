<template>
    <div :class="{'sidebar-collapsed':isvariety}">
        <lb-header></lb-header>
        <div id="wrapper">
            <lb-sidebar></lb-sidebar>
        </div>
    </div>
</template>
<style>
#wrapper {
    width: 100%;
    min-height: 100%;
    background-color: #33485c;
}
</style>
<script>
import '~/styles/webmain.css'
import header from './header.vue'
import sidebar from '../menu/sidebar-menu.vue'

export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            isvariety:false
        }
    },
    components: {
        'lb-header': header,
        'lb-sidebar': sidebar,
    },
    methods: {
        handleClick() {
            this.$emit('dockhidden')
        }
    }
}
</script>
