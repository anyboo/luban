<template>
    <div id="web" :class="{'sidebar-collapsed':isvariety}">
        <lb-header @variety="variety"></lb-header>
        <div id="wrapper">
            <lb-sidebar></lb-sidebar>
            <lb-body>
                <component v-bind:is="getCurrentView">
                </component>
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
import pages from '~/stores/page.js'

pages['lb-header'] = header
pages['lb-sidebar'] = sidebar
pages['lb-body'] = body
pages['lb-footer'] = footer

export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            currentView: '',
            isvariety: false
        }
    },
    components: pages,
    watch: {
        '$route.path': {
            handler(val) {
                
                console.log('web', val)
            }
        }
    },
    computed: {
        getCurrentView(){
            let to = this.$route.path
            this.currentView = 'lb-studentadd'
            return 'lb-studentadd'
        }
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
