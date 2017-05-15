<template>
    <div v-if="modalShow">
        <template v-for="item,index in getDialog">
            <lb-dialog v-for="item in getDialog" :zindex="index*2+2000">
                <component v-bind:is="item">
                </component>
            </lb-dialog>
        </template>
    </div>
</template>
<script>
import dialogpages from '~/stores/dialogpages.js'

console.log(dialogpages)
export default {
    name: 'dialog',
    data() {
        return {

        }
    },
    components: dialogpages,
    computed: {
        modalShow() {
            return this.$store.state.modalbackdrop
        },
        getDialog() {
            return this.$store.state.dailog
        }
    },
    watch: {},
    methods: {}
}
</script>
