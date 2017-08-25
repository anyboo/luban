<template>
    <div class='lbSdebarUlStyle'>
        <lb-sidebarMenu>
            <template v-for='menuItem of menu'>
                <lb-sidebarMenuItem submenu="menu" :menu-title="menuItem.menuTitle"  @menuchange='menuchange' v-if='menuItem.menuShow!=0' :menu="menuItem" >
                    <template v-if="menuItem.menu">
                        <lb-sidebarMenu>
                            <template v-for="menuItem1 of menuItem.menu">
                                <lb-sidebarMenuItem submenu="menu-title"  @menuchange='menuchange' v-if="menuItem1.menuShow!=0" :menu="menuItem1" >
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
    width: 100%;
    padding: 0px;
    margin: 0px;
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
        let index = 0
        for (var item of menuStore) {
            let menuitem = {}
            Object.assign(menuitem,item)
            menuitem.cssStyle = 'lbSdebarMenu'
            menuitem.isActive = false
            menuitem.index = ++index
            if (menuitem.menu) {
                for (var subitem of menuitem.menu) {
                    subitem.cssStyle = 'lbSdebarMenuItem'
                    subitem.isActive = false
                    subitem.index = ++index
                }
            }
            this.menu.push(menuitem)
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
                            if (subitem.index == index){
                                subitem.isActive = true
                                childSel = true
                            }else{
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