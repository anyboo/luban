<template>
    <div class="app ng-scope app-header-fixed app-aside-fixed" :class="{'app-aside-folded':isSidebarCollapsed}">
        <lb-header @sidebarcollapsed="sidebarCollapsed"></lb-header>
        <lb-sidebarmenu></lb-sidebarmenu>
        <div class="app-content ng-scope">
            <router-view></router-view>
        </div>
        <lb-footer></lb-footer>
        <lb-modalbackdrop>
            <lb-dialoglist></lb-dialoglist>
        </lb-modalbackdrop>
    </div>
</template>
<script>
import header from '../header/header.vue'
import sidebarmenu from '../sidebar-menu/sidebarmenu.vue'
import footer from '../footer/footer.vue'
import dialoglist from '../dialog/dialoglist.vue'
import modalbackdrop from '../modal-backdrop/modalbackdrop.vue'

export default {
    name: 'app',

    data() {
        return {
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
    computed: {},
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