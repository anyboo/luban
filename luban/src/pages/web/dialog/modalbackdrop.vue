<template>
    <div class="modal-backdrop fade in" :style="{'z-index': modalIndex}" v-if="modalShow"></div>
</template>
<script>
export default {
    name: 'modal-backdrop',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {
        modalShow() {
            return this.$store.state.dialogs.modalbackdrop
        },
        modalIndex() {
            return this.$store.state.dialogs.modalbackdropzindex
        }
    }
}
</script>