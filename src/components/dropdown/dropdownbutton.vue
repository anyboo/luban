<template>
    <button :class="buttonClass" :tooltip="buttonTooltip" @click="handleOpen" @blur="handleClose">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'LbDropdownButton',
    props: ['buttonClass', 'buttonTooltip'],
    data() {
        return {

        }
    },
    methods: {
        handleOpen() {
            if (this.$parent.handleOpen) {
                this.$parent.handleOpen()
            }
        },
        handleClose() {
            if (this.$parent.handleClose) {
                this.$parent.handleClose()
            }
        }
    },
    computed: {},
}
</script>
