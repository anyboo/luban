<template>
    <div id="web" :class="{'sidebar-collapsed':isvariety}">
        <lb-header @variety="variety"></lb-header>
        <div id="wrapper">
            <lb-sidebar></lb-sidebar>
            <lb-body>
                <template v-if="getCurrentView ==1">
                    <lb-systemmodule :module="moduleObj">
                    </lb-systemmodule>
                </template>
                <template v-if="getCurrentView == 0">
                    <component v-bind:is="currentView">
                    </component>
                </template>
                <template v-if="getCurrentView == 2">
                    <lb-blank @blankmounted="blankmounted">
                    </lb-blank>
                </template>
            </lb-body>
        </div>
        <lb-footer></lb-footer>
        <lb-modalbackdrop></lb-modalbackdrop>
        <lb-dialoglist></lb-dialoglist>
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
import blank from './blank.vue'
import module from '~/stores/module.js'
import pages from '~/stores/viewpages.js'
import dialoglist from '../dialog/dialoglist.vue'
import modalbackdrop from '../dialog/modalbackdrop.vue'
import systemmodule from '~/pages/views/system/module.vue'

pages['lb-header'] = header
pages['lb-sidebar'] = sidebar
pages['lb-body'] = body
pages['lb-footer'] = footer
pages['lb-blank'] = blank
pages['lb-dialoglist'] = dialoglist
pages['lb-modalbackdrop'] = modalbackdrop
pages['lb-systemmodule'] = systemmodule

export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            currentView: '',
            isvariety: false,
            moduleObj: ''
        }
    },
    components: pages,
    beforeCreate() {
        let system = JSON.parse(window.localStorage.getItem('system'))
        if (system) {
            this.$store.commit('system', system)
        }
    },
    mounted() {
        if (this.$store.state.models.login) {
            this.getTableApidata('dictionary')
        }
    },
    computed: {
        getCurrentView() {
            let isModlues = 0
            if (!this.$store.state.models.login) {
                this.currentView = 'lb-systemsign_in'
            } else if (this.$store.state.system.name.length == 0) {
                this.currentView = 'lb-systemsign_in'
            } else {
                let to = this.$store.state.system.router
                let view = 'lb-studentadd'
                if (to == '/' || to == '/web') {
                    view = 'lb-studentadd'
                } else {
                    if (to) {
                        let tomodule = to.replace(/\//g, '')
                        if (module[tomodule]) {
                            this.moduleObj = tomodule
                            if (this.$store.state.system.isModlues) {
                                this.$store.state.system.isModlues = false
                                isModlues = 1
                            } else {
                                isModlues = 2
                            }
                        }
                        else {
                            view = 'lb-' + to.replace(/\//g, '')
                        }
                    }
                }
                this.currentView = view
            }
            console.log(isModlues)
            return isModlues
        }
    },
    methods: {
        blankmounted(){
            this.$store.state.system.isModlues=true
        },
        handleClick() {
            this.$emit('dockhidden')
        },
        variety() {
            this.isvariety = !this.isvariety
        }
    }
}
</script>
