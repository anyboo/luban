<template>
    <div id="dropdown" class="btn-group dropdown" :class="{'open':open}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'LbDropdown',
    data() {
        return {
            open: false
        }
    },
    methods: {
        handleOpen() {
            this.open = true
        },
        handleClose() {
            this.open = false
        }
    },
    computed: {},
}
</script>
