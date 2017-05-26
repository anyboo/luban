<template>
    <lb-dropdowns @command="handleCommand" menu-align="start">
        <div>
            <slot name="buttonslot"></slot>
        </div>
        <lb-dropdown-menu slot="dropdown">
            <template v-for="item in dropMenuData">
                <lb-dropdown-item :command="getItemCommand(item)">
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
            if (common.indexOf('u:')) {
                let url = common.replace('u:', '')
                this.handleShowDialog(url, this.menuData)
            } else {
                let action = common.replace('u:', '')
                this.this.$emit('command', action)
            }
        }
    },
    computed: {
        getItemCommand(item) {
            let result = 'u:' + item.url
            if (item.action) {
                result = 'a:' + item.action
            }
            return result
        }
    },
}
</script>
