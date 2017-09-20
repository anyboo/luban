<template>
    <div class='lbSdebarUlStyle'>
        <lb-sidebarMenu>
            <template v-for='menuItem of menu'>
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
    overflow: auto;
    padding: 0px;
    margin: 0px;
}

::-webkit-scrollbar {
    width: 12px;
}


/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {
    /*  -webkit-box-shadow: inset 0 0 6px rgba(50, 50, 50, 0.3);  */
    /* border-radius: 10px; */
    background-color:#374d63;
}
/*定义滑块 内阴影+圆角*/ 
::-webkit-scrollbar-thumb {
  /*   border-radius: 10px; */
     -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #ddd;
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
            Object.assign(menuitem, item)
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