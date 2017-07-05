<template>
    <el-dropdown @command="handleCommand" menu-align="start">
        <div>
            <slot name="buttonslot"></slot>
        </div>
        <el-dropdown-menu slot="dropdown">
            <template v-for="item in dropMenuData">
                <el-dropdown-item :command="getItemCommand(item)">
                    <a :id="id">
                        <i :class="item.icon" v-if="item.icon"></i>{{item.text}}
                    </a>
                </el-dropdown-item>
            </template>
        </el-dropdown-menu>
    </el-dropdown>
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
            if (common.indexOf('u:') >= 0) {
                let url = common.replace('u:', '')
                this.handleShowDialog(url, this.menuData)
            } else {
                let action = common.replace('a:', '')
                this.$emit('command', {
                    'action': action,
                    'data': this.menuData
                })
            }
        },
        getItemCommand(item) {
            let result = 'u:' + item.url
            if (item.action) {
                result = 'a:' + item.action
            }
            return result
        }
    },
    computed: {},
}
</script>
