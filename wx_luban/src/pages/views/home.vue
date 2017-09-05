<template>
    <div>
        <div class="home_body">
            <div>
                <img class='home_banner' src="/assets/images/banner1.jpg" >
            </div>

            <template v-for="item in menudata">
                <el-col :span="8">
                    <div class="grid-contes" @click="handleClick(item.pageTable)">
                        <img :src="'/assets/icon/'+item.menuIcon+'.png'">
                        <p class="home_gray">{{item.menuTitle}}</p>
                    </div>
                </el-col>
            </template>
        </div>
    </div>
</template>
<script>
import menu from '~/stores/menu'
export default {
    name: 'home',
    data() {
        let localdata = {}
        return {
            menudata: menu,
            localdata,
        }
    },
    mounted() { },
    components: {

    },
    methods: {
        handleClick(value) {
            this.$store.dispatch('commons', value)
            /*   console.log(this.$store.state.commondata.commondata) */
            this.$store.commit('homes', 'lb-common')
        }
    }
}
</script>