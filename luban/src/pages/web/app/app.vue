<template>
    <div id="web" :class="{'sidebar-collapsed':isvariety}">
        <lb-header @variety="variety"></lb-header>
        <div id="wrapper">
            <lb-sidebar></lb-sidebar>
            <lb-body>
                <router-view></router-view>
            </lb-body>
        </div>
        <lb-footer></lb-footer>
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
import body from './body.vue'
import footer from './footer.vue'

export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            isvariety: false
        }
    },
    components: {
        'lb-header': header,
        'lb-sidebar': sidebar,
        'lb-body': body,
        'lb-footer': footer
    },
    methods: {
        handleClick() {
            this.$emit('dockhidden')
        },
        variety() {
            this.isvariety = !this.isvariety
        }
    }
}
</script>
