<template>
    <ul class="dropdown-menu">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name: 'LbDropdownMenu',
    data() {
        return {
            open: false
        }
    },
    methods: {

    },
    computed: {},
}
</script>
