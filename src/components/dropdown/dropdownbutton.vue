<template>
    <button :class="buttonClass" :tooltip="buttonTooltip" @click="handleOpen($event)" @blur="handleClose($event)">
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
        handleOpen(event) {
            event.preventDefault()
            if (this.$parent && this.$parent.handleOpen) {
                clearTimeout(this.timeCloseId)
                this.$parent.handleOpen()
            }

        },
        handleClose(event) {
            event.preventDefault()
            if (this.$parent && this.$parent.handleClose) {
                this.timeCloseId = setTimeout(() => {
                    this.$parent.handleClose()
                }, 200)
            }
        }
    },
    computed: {},
}
</script>
