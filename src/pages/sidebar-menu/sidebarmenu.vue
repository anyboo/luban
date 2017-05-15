<template>
    <div class="aside-wrap ng-scope">
        <div class="app-aside hidden-xs bg-black">
            <div class="navi-wrap ps-container ps-theme-default">
                <nav class="navi clearfix ng-scope">
                    <ul class="nav ng-scope">
                        <li class="">
                            <a href="#/main/home">
                                <i class="icon icon-home text-primary-dker"></i>
                                <span class="font-normal">工作台</span>
                            </a>
                        </li>
                        <template v-for="item in menu">
                            <lb-sidebamenu-item :menu="item"></lb-sidebamenu-item>
                        </template>
                    </ul>
                </nav>
                <lb-homestat></lb-homestat>
            </div>
        </div>
    </div>
</template>
<script>
import sidebarmenuitem from '../sidebar-menu/sidebarmenuitem.vue'
import homestat from '../homestat/homestat.vue'
import menu from '~/stores/menu'

export default {
    name: 'homestat',
    data() {
        return {
            menu
        }
    },
    components: {
        'lb-sidebamenu-item': sidebarmenuitem,
        'lb-homestat': homestat
    },
    computed: {},
    watch: {},
    methods: {

    }
}
</script>