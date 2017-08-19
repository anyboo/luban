<template>
    <div v-if="modalShow">
        <template v-for="item,index in getDialog">
            <lb-dialog :zindex="index*2+1500">
                <template v-if="getDialogMoudle(item)">
                    <lb-systedialogmmodule :module="moduleObj">
                    </lb-systedialogmmodule>
                </template>
                <template v-else>
                    <component v-bind:is="item"></component>
                </template>
            </lb-dialog>
        </template>
    </div>
</template>
<script>
import dialogpages from '~/stores/dialogpages.js'
import module from '~/stores/moduledialog.js'
import systedialogmmodule from '~/pages/dialogs/system/module.vue'

dialogpages['lb-systedialogmmodule'] = systedialogmmodule

export default {
    name: 'dialog',
    data() {
        let localdata = {}
        return {
            localdata,
            moduleObj:''
        }
    },
    components: dialogpages,
    computed: {
        getCurrentView() {


        },
        modalShow() {
            return this.$store.state.dialogs.modalbackdrop
        },
        getDialog() {
            return this.$store.state.dialogs.dailoglist
        }
    },
    methods: {
        getDialogMoudle(item) {
            console.log(item)
            let isModlues = false
            if (!this.$store.state.models.login) {
                this.$store.state.system.router = 'lb-systemsign_in'
            } else if (this.$store.state.system.name.length == 0) {
                this.$store.state.system.router = 'lb-systemsign_in'
            } else {
                let to = item
                if (to) {
                    let tomodule = to.replace(/\//g, '')
                    if (module[tomodule]) {
                        this.moduleObj = module[tomodule]
                        isModlues = true
                    }
                }
            }
            return isModlues
        }
    }
}
</script>