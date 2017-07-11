<template>
    <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side ">
        <div class="sidebar-collapse menu-scroll" id="side-menu">
            <lb-menu>
                <template v-for="menuItem of menuStore">
                    <lb-menu-item submenu="menu-title" v-if="menuItem.menuShow!=0" :to="menuItem.to" :menu-name="menuItem.menuName" :menu-title="menuItem.menuTitle" :menu-icon="menuItem.menuIcon">
                        <template v-if="menuItem.menu">
                            <lb-menu navlevel="1" collapse="true">
                                <template v-for="menuItem1 of menuItem.menu">
                                    <lb-menu-item v-if="menuItem1.menuShow!=0" submenu="submenu-title" :to="menuItem1.to" :menu-name="menuItem1.menuName" :menu-title="menuItem1.menuTitle" :menu-icon="menuItem1.menuIcon">
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
            menuStore     
        }
    },
    components: {
        'lb-menu-item': menuitem,
        'lb-menu': menu,
    },
    methods: {
        handleNodeClick(data) {
            
        },
    }
}
</script>
