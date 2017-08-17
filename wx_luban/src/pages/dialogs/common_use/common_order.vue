<template>
    <div class='gray overflower_hid'>
        <div class='card_header greener flexs'>
            <div class="back" @click="handleBack">
                <i class="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
            </div>
            <el-row>
                <el-col :span="24">
                    <div>
                        <h3 class='txt-center margin_bottom'>
                            我的订单
                        </h3>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="card_body overflower_show">
            <!--   这里写你需要的另外的模块 -->
            <template v-for="item in getTime(dbdata)">
                <el-card class="box-card margin_bottom">
                    <template v-for="itemval in getpageTable">
                        <div class="card_text card_item">
                            {{getInfo(itemval,item)}}
                        </div>
                    </template>
                </el-card>
            </template>
        </div>
        <div v-show="loading" slot="bottom" class="loading">
            <div class="txt-center">
                <img src="/assets/images/loadup.gif" style="height:15px;with:15px">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'order',
    data() {
        return {
        }
    },
    methods: {
        handleBack() {
            this.$store.commit('homes', 'lb-home')
        },
    }
}
</script>