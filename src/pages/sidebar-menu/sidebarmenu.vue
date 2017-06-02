<template>
    <div class="aside-wrap ng-scope">
        <div class="app-aside hidden-xs bg-black">
            <div class="navi-wrap ps-container ps-theme-default" :style="getClientHeight" @mouseout="handleMouseout" @mouseover="handleMouseove">
                <nav class="navi clearfix ng-scope">
                    <ul class="nav ng-scope">
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
<style>
::-webkit-scrollbar {
    width: 10px !important;
    background-color: #F5F5F5 !important;
}

::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #F5F5F5;
}
</style>
<script>
import sidebarmenuitem from '../sidebar-menu/sidebarmenuitem.vue'
import homestat from '../homestat/homestat.vue'
import menu from '~/stores/menu'
export default {
    name: 'homestat',
    data() {
        let localdata = {}
        return {
            localdata,
            menu,
            clientHeight: '800px',
            overflowy: 'hidden'
        }
    },
    mounted() {
        this.clientHeight = document.body.clientHeight + 'px'
    },
    components: {
        'lb-sidebamenu-item': sidebarmenuitem,
        'lb-homestat': homestat
    },
    computed: {
        getClientHeight() {
            return {
                'max-height': this.clientHeight,
                'overflow-y': this.overflowy
            }
        }
    },
    watch: {},
    methods: {
        handleMouseout() {
            this.clientHeight = document.body.clientHeight + 'px'
            this.overflowy = 'hidden'
        },
        handleMouseove() {
            this.clientHeight = document.body.clientHeight + 'px'
            this.overflowy = 'auto'
        },

    }
}
</script>
