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
            timeCloseId: 0
        }
    },
    methods: {
        handleOpen() {
            if (this.$parent.handleOpen) {
                clearTimeout(this.timeCloseId)
                this.$parent.handleOpen()
            }
        },
        handleClose() {
            if (this.$parent.handleClose) {
                this.timeCloseId = setTimeout(() => {
                    this.$parent.handleClose()
                }, 200)
            }
        }
    },
    computed: {},
}
</script>
