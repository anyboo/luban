<template>
    <div class='margins-tops'>
        <template v-for="item in menuArray">
            <lb-icon @iconmove="handleIconMove" :icondata="item" :index="item.index"></lb-icon>
        </template>
    </div>
</template>
<style>
.margins-tops {
    margin-top: 4.3rem;
    position: relative;
    width: 100%;
    height: 89%;
}
</style>
<script>
import menu from '~/stores/menu'
import icon from './icon.vue'
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata,
            menuArray: []
        }
    },
    computed: {
    },
    mounted() {
        let index = 0
        for (var item of menu) {
            if (item.menuShow != 0) {
                for (var sub of item.menu) {
                    if (sub.menuShow != 0) {
                        sub.index = index++
                        this.menuArray.push(sub)
                    }
                }
            }
        }
    },
    components: {
        'lb-icon': icon
    },
    methods: {
        handleIconMove(obj) {
            let height = this.$parent.$el.clientHeight
            let col = Math.floor(height / 80)
            let iconleft = obj.left.replace('px', '')
            let icontop = obj.top.replace('px', '')
            let iconcol = Math.floor(iconleft / 80)
            let iconrow = Math.floor(icontop / 80)
            let iconnewindex = iconcol * col + iconrow
            let iconindex = obj.iconindex
            let arrlen = this.menuArray.length
            let curItem = item
            let iconnewindexchange = iconnewindex
            for (var item of this.menuArray) {
                if (item.index == iconindex) {
                    curItem = item
                } else if (item.index >= iconnewindex) {
                    if (item.index < iconindex) {
                        item.index += 1
                    }else if ( iconnewindexchange == item.index){
                        iconnewindexchange++
                    }
                } else if (item.index > iconindex && item.index < arrlen) {
                    item.index -= 1
                }
            }
            curItem.index = iconnewindexchange
        }
    }
}
</script>
