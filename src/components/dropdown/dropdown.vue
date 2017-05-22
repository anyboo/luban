<template>
    <lb-dropdowns @command="handleCommand" menu-align="start">
        <div>
            <slot name="buttonslot"></slot>
        </div>
        <lb-dropdown-menu slot="dropdown">
            <template v-for="item in dropMenuData">
                <lb-dropdown-item :command="item.url">
                    <a :id="id">
                        <i :class="item.icon" v-if="item.icon"></i>{{item.text}}
                    </a>
                </lb-dropdown-item>
            </template>
        </lb-dropdown-menu>
    </lb-dropdowns>
</template>
<script>
export default {
    name: 'LbDropdown',
    props: ['dropMenuData', 'id', 'menuData'],
    data() {
        return {

        }
    },
    methods: {
        handleCommand(common) {
            this.handleShowDialog(common,this.menuData)
        }
    },
    computed: {},
}
</script>
