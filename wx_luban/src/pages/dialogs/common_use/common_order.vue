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
        <div class="card_body overflower_show ">
            <lb-scroll :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomPullText='bottomText' :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
                <div>
                    <!--   这里写你需要的另外的模块 -->
                    <template v-for="item in order_data">
                        <el-card class="box-card margin_bottom">
                            <template v-for=" itemval in  moduledata">
                                <div class="card_text card_item">
                                    {{ getInfo(itemval, item)}}
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
            </lb-scroll>
        </div>
    </div>
</template>
<style>
.clear_pad {
    padding-top: 0;
    padding-bottom: 0;
}
</style>

<script>
import order_menu from '~/stores/order_menu.js'
export default {
    name: 'order',
    data() {
        return {
            moduledata: order_menu,
            scrollHeight: 0,
            scrollTop: 0,
            containerHeight: 0,
            loading: false,
            bottomText: '上拉加载更多...',
            allLoaded: false,
            bottomStatus: '',
            totalCount: '',
            order_data: [],
        }
    },
    mounted() {
        let filterObj = []
        filterObj.push({
            'key': 'student_id',
            'value': this.$store.state.student_id.student_id,
            'type': ''
        })
        filterObj.push(
            {
                'key': 'lookup',
                'value': {
                    'localField': 'class_id',
                    'from': 'classes',
                    'foreignField': '_id',
                    'as': 'classes'
                },
                'type': 'lookup'
            }
        )
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        Vue.http.get('http://app.bullstech.cn:8888/lubandemo/api/order/?filter=' + filterTxt).then(obj => {
            this.order_data = obj.data.data
            console.log(this.order_data)
        })
    },
    methods: {
        getInfo(itemval, item) {
            this.$store.commit('commons', itemval.prop)
            let info = ''
            info = itemval.menuTitle + ' : ' + item[itemval.prop]
            if (itemval.prop == 'pay_status') {
                if (item[itemval.prop] == 0) {
                    item[itemval.prop] = '未付款'
                    info = itemval.menuTitle + ' : ' + item[itemval.prop]
                }
                if (item[itemval.prop] == 1) {
                    item[itemval.prop] = '部分付款'
                    info = itemval.menuTitle + ' : ' + item[itemval.prop]
                }
                if (item[itemval.prop] == 2) {
                    item[itemval.prop] = '已付款'
                    info = itemval.menuTitle + ' : ' + item[itemval.prop]
                }
            }
            if (itemval.prop == 'class_name') {
                info = itemval.menuTitle + ' : '
                if (item.classes && item.classes.length) {
                    console.log(item.classes[0].class_name)
                    info = itemval.menuTitle + ' : ' + item.classes[0].class_name
                }
            }
            return info
        },
        handleBack() {
            this.$store.commit('homes', 'lb-user')
        },
        loadBottom: function () {
            let filterObj = []
            filterObj.push({
                'key': 'student_id',
                'value': this.$store.state.student_id.student_id,
                'type': ''
            })
            filterObj.push(
                {
                    'key': 'lookup',
                    'value': {
                        'localField': 'class_id',
                        'from': 'classes',
                        'foreignField': '_id',
                        'as': 'classes'
                    },
                    'type': 'lookup'
                }
            )
            this.loading = true;
            this.pagination.currentPage += 1;   // 每次更迭加载的页数
            /*      console.log(this.pagination.currentPage) */
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            if (this.pagination.currentPage * this.pagination.pagesize < this.pagination.total) {
                // 当allLoaded = true时上拉加载停止
                this.loading = false;
                this.allLoaded = true;
                /*     api.commonApi(后台接口，请求参数) 这个api是封装的axios有不懂的可以看vue2+ vuex + axios那篇文章 */
                this.handleGetFilterTableTable(this.$store.state.commondata.commondata, filterTxt).then(res => {
                    setTimeout(() => {
                        /*       要使用的后台返回的数据写在setTimeout里面 */
                        this.$nextTick(() => {
                            this.loading = false;
                        })
                    }, 1000)
                });
            } else {
                this.loading = false;
                this.allLoaded = true;
            }
        },
        handleBottomChange(status) {
            this.bottomStatus = status;
        },
    }
}
</script>