<template>
    <div class='lbSdebarUlStyle'>
        <lb-sidebarMenu>
            <template v-for='menuItem of getMenu'>
                <lb-sidebarMenuItem submenu="menu" :menu-title="menuItem.menuTitle" @menuchange='menuchange' v-if='menuItem.menuShow!=0' :menu="menuItem">
                    <template v-if="menuItem.menu">
                        <lb-sidebarMenu>
                            <template v-for="menuItem1 of menuItem.menu">
                                <lb-sidebarMenuItem submenu="menu-title" @menuchange='menuchange' v-if="menuItem1.menuShow!=0" :menu="menuItem1">
                                </lb-sidebarMenuItem>
                            </template>
                        </lb-sidebarMenu>
                    </template>
                </lb-sidebarMenuItem>
            </template>
        </lb-sidebarMenu>
    </div>
</template>
<style>
.lbSdebarUlStyle {
    max-height: 88.8%;
    padding: 0px;
    margin: 0px;
}

.contaierUnfold .lbSdebarUlStyle {
    overflow: auto;
}

::-webkit-scrollbar {
    width: 14px;
    height: 14px;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 5px solid transparent;
}

::-webkit-scrollbar-track {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .2) inset;
}

::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, .2) inset;
}

::-webkit-scrollbar-corner {
    background: transparent;
}

 ::-webkit-scrollbar-thumb .lbSdebarUlStyle {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, .1) inset;
}

.lbSdebarUlStyle a {
    display: inline-block;
    width: 100%;
    padding-top: 12px;
    color: white;
    border-bottom: 1px solid #374d63;
    cursor: pointer;
}

.lbSdebarUlStyle a i {
    margin-left: 15px;
}

.lbSdebarUlStyle a span {
    display: inline-block;
    margin-left: 10px;
    padding-bottom: 12px;
}
</style>
<script>
import menuStore from '~/stores/menu'
import sidebarMenu from './sidebarMenu.vue'
import sidebarMenuItem from './sidebarMenuItem.vue'
export default {
    name: 'sidebarItem',
    data() {
        return {
            menu: [],
        }
    },
    components: {
        'lb-sidebarMenu': sidebarMenu,
        'lb-sidebarMenuItem': sidebarMenuItem
    },
    mounted() {

    },
    computed: {
        getMenu() {
            this.menu = []
            if (this.$store.state.system.roles && this.$store.state.system.roles.length > 0) {
                let index = 0
                for (var item of menuStore) {
                    let menuitem = {}
                    Object.assign(menuitem, item)
                    menuitem.cssStyle = 'lbSdebarMenu'
                    menuitem.isActive = false
                    menuitem.index = ++index
                    menuitem.menu = []
                    if (item.menu) {
                        let find = false
                        for (var subitem of item.menu) {
                            let submenuitem = {}
                            Object.assign(submenuitem, subitem)
                            submenuitem.cssStyle = 'lbSdebarMenuItem'
                            submenuitem.isActive = false
                            submenuitem.index = ++index
                            if (submenuitem.to) {
                                if (this.getRole(submenuitem.to)) {
                                    find = true
                                    menuitem.menu.push(submenuitem)
                                }
                            }
                        }
                        if (find) {
                            this.menu.push(menuitem)
                        }
                    } else {
                        this.menu.push(menuitem)
                    }
                }
            }
            return this.menu
        }
    },
    methods: {
        menuchange(index) {
            for (var item of this.menu) {
                if (item.index == index) {
                    item.isActive = !item.isActive
                } else {
                    let childSel = false
                    if (item.menu) {
                        for (var subitem of item.menu) {
                            if (subitem.index == index) {
                                subitem.isActive = true
                                childSel = true
                            } else {
                                subitem.isActive = false
                            }
                        }
                    }
                    item.isActive = childSel
                }
            }
        }
    }
}
</script>