<template>
    <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side">
        <div class="sidebar-collapse menu-scroll" id="side-menu">
            <lb-menu>
                <template v-for="menuItem of getMenu">
                    <lb-menu-item submenu="menu-title" :to="menuItem.to" :menu-name="menuItem.menuName" :menu-title="menuItem.menuTitle" :menu-icon="menuItem.menuIcon">
                        <template v-if="menuItem.menu">
                            <lb-menu navlevel="1" collapse="true">
                                <template v-for="menuItem1 of menuItem.menu">
                                    <lb-menu-item submenu="submenu-title" :to="menuItem1.to" :menu-name="menuItem1.menuName" :menu-title="menuItem1.menuTitle" :menu-icon="menuItem1.menuIcon">
                                    </lb-menu-item>
                                </template>
                            </lb-menu>
                        </template>
                    </lb-menu-item>
                </template>
            </lb-menu>
        </div>
    </nav>
</template>

<script>
import menu from '../menu/menu.vue'
import menuitem from '../menu/menu-item.vue'
import menuStore from '~/stores/menu'

export default {
    name: 'SidebarMenu',
    data() {
        return {
        }
    },
    components: {
        'lb-menu-item': menuitem,
        'lb-menu': menu,
    },
    computed: {
        getMenu() {
            let menu = []
            for (var item of menuStore) {
                let menuitem = {}
                let find = false
                if (item.menuShow != 0) {
                    if (item.menu) {
                        menuitem.menu = []
                        for (var subitem of item.menu) {
                            if (subitem.menuShow != 0) {
                                if (this.getRole(subitem.to)) {
                                    let menusubitem = {}
                                    menusubitem.to = subitem.to
                                    menusubitem.menuName = subitem.menuName
                                    menusubitem.menuTitle = subitem.menuTitle
                                    menusubitem.menuIcon = subitem.menuIcon
                                    menuitem.menu.push(menusubitem)
                                    find = true
                                }
                            }
                        }
                    }
                    if (find) {
                        menuitem.to = item.to
                        menuitem.menuName = item.menuName
                        menuitem.menuTitle = item.menuTitle
                        menuitem.menuIcon = item.menuIcon
                        menu.push(menuitem)
                    }
                }
            }
            return menu
        }
    },
    methods: {
        menushow(menuItem1) {
            return menuItem1.menuShow != 0 && this.getRole(menuItem1.to)
        },
        handleNodeClick(data) {

        },
    }
}
</script>
