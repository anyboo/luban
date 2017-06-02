<template>
    <div v-if="modalShow">
        <template v-for="item,index in getDialog">
            <lb-dialog :zindex="index*2+1500">
                <component v-bind:is="item"></component>
            </lb-dialog>
        </template>
    </div>
</template>
<script>
import dialogpages from '~/stores/dialogpages.js'
import finishadd from '~/pages/student/finishadd.vue'
dialogpages['lb-finishadd'] = finishadd
export default {
    name: 'dialog',
    data() {
        let localdata = {}
        return {
            localdata,
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
    watch: {},
    methods: {}
}
</script>