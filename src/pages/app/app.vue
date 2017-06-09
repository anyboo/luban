<template>
    <div class="app ng-scope app-header-fixed app-aside-fixed" :class="{'app-aside-folded':isSidebarCollapsed}">
        <lb-header @sidebarcollapsed="sidebarCollapsed"></lb-header>
        <lb-sidebarmenu></lb-sidebarmenu>
        <div class="app-content ng-scope">
            <div class="bg-light lter b-b wrapper-md" v-if="getCurrMenu.length>0">
                <h1 class="m-n font-thin h3 ng-binding">{{getCurrMenu}}</h1>
            </div>
            <router-view></router-view>
        </div>
        <lb-footer></lb-footer>
        <lb-modalbackdrop></lb-modalbackdrop>
        <lb-dialoglist></lb-dialoglist>
    </div>
</template>
<script>
import header from '../header/header.vue'
import sidebarmenu from '../sidebar-menu/sidebarmenu.vue'
import footer from '../footer/footer.vue'
import dialoglist from '../dialog/dialoglist.vue'
import modalbackdrop from '../modal-backdrop/modalbackdrop.vue'
import menu from '~/stores/menu'
export default {
    name: 'app', 
    data() {
        let localdata = {}
        return {
            localdata,
            isSidebarCollapsed: false,
        }
    },
    components: {
        'lb-header': header,
        'lb-sidebarmenu': sidebarmenu,
        'lb-footer': footer,
        'lb-dialoglist': dialoglist,
        'lb-modalbackdrop': modalbackdrop
    },
    computed: {
        getCurrMenu() {
            var menuName = this.$store.state.envs.currMenu
            if (this.$store.state.envs.currMenu.length == 0) {
                let to = this.$route.path
                for (var item of menu) {
                    if (item.to == to) {
                        menuName = item.menuTitle
                        break
                    } else {
                        if (item.menu) {
                            for (var subitem of item.menu) {
                                if (subitem.to == to) {
                                    menuName = subitem.menuTitle
                                    break
                                }
                            }
                        }
                    }
                }
            }
            return menuName
        }
    },
    watch: {
        '$route.path': {
            handler(val) {
                console.log(val)
            }
        }
    },
    methods: {
        switchLang(lang) {
            this.$router.push(lang)
        },
        sidebarCollapsed() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed
        },
        handleSelect(index) {
            console.log(index)
                /**/
        },
    }
}
</script>
