<template>
    <div v-if="modalShow">
        <template v-for="item,index in getDialog">
            <lb-dialog :zindex="index*2+1500">
                <template v-if="getDialogMoudle(item)">
                    <lb-systemdialogmmodule :module="moduleObj">
                    </lb-systemdialogmmodule>
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
import moduleform from '~/stores/moduleform.js'
import systemdialogmmodule from '~/pages/dialogs/system/module.vue'

dialogpages['lb-systemdialogmmodule'] = systemdialogmmodule

export default {
    name: 'dialog',
    data() {
        let localdata = {}
        return {
            localdata,
            moduleObj: '',
            type: 0
        }
    },
    components: dialogpages,
    computed: {
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
                        this.moduleObj._type = 0
                        isModlues = true
                    } else if (moduleform[tomodule]) {
                        this.moduleObj = moduleform[tomodule]
                        this.moduleObj._type = 1
                        isModlues = true
                    }
                }
            }
            return isModlues
        }
    }
}
</script>