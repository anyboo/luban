<template>
    <div id="title-breadcrumb-option-demo" class="page-title-breadcrumb">
        <div class="page-header pull-left">
            <div class="page-title">{{getCurrMenu}}</div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<script>
import menu from '~/stores/menu'
export default {
    name: 'breadcrumb',
    data() {
        let localdata = {}
        return {
            localdata
        }
    },
    computed: {
        getCurrMenu() {
            var menuName = ''
            let to = this.$route.path
            console.log(to)
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
            if (to=='/'||to=='/web'){
                menuName = '档案录入'
            }
            return menuName
        }

    }
}
</script>
