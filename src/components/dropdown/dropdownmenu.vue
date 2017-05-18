<template>
    <ul class="dropdown-menu">
        <template v-for="item in dropMenuData">
            <lb-dropdown-menu-item :url="item.url" :icon="item.icon" :text="item.text" :id="id">
            </lb-dropdown-menu-item>
        </template>
    </ul>
</template>
<script>
export default {
    name: 'LbDropdownMenu',
    props: ['dropMenuData','id'],
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
