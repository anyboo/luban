<template>
    <div class="modal-backdrop fade in" :style="{'z-index': modalIndex}" v-if="modalShow"></div>
</template>
<script>
export default {
    name: 'modal-backdrop',
    data() {
        return {

        }
    },
    computed: {
        modalShow() {
            return this.$store.state.modalbackdrop
        },
        modalIndex() {
            return this.$store.state.modalbackdropzindex
        }
    },
    watch: {},
    methods: {}
}
</script>