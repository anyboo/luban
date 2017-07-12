<template>
    <lb-sidebarMenu class='lbSdebarUlStyle'>
            <template v-for='menuItem of menuStore'>
                <lb-sidebarMenuItem  css-style="lbSdebarMenu" v-if='menuItem.menuShow!=0' :to="menuItem.to" :menu-name="menuItem.menuName" :menu-title="menuItem.menuTitle" :menu-icon="menuItem.menuIcon">
                    <template v-if="menuItem.menu">
                        <lb-sidebarMenu navlevel="1" collapse="true">
                                    <template v-for="menuItem1 of menuItem.menu">
                                         <lb-sidebarMenuItem  css-style='lbSdebarMenuItem' v-if="menuItem1.menuShow!=0" :to="menuItem1.to" :menu-name="menuItem1.menuName" :menu-title="menuItem1.menuTitle" :menu-icon="menuItem1.menuIcon">
                                        </lb-sidebarMenuItem>    
                                    </template>
                        </lb-sidebarMenu>
                    </template>
                </lb-sidebarMenuItem>
            </template>
        </lb-sidebarMenu>
</template>
<style>
.lbSdebarUlStyle {
    width: 100%;
    padding: 0px;
    margin: 0px;
}
.lbSdebarUlStyle a {
    display:inline-block;
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
            menuStore,
        }
    },
    components: {
        'lb-sidebarMenu': sidebarMenu,
        'lb-sidebarMenuItem': sidebarMenuItem
    },
    methods: {
    }
}
</script>