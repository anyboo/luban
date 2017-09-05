<template>
    <div class="gray">
        <div class='user-header greener shadow'>
            <el-row>
                <el-col :span="24">
                    <div>
                        <h3 class='txt-center '>个人中心</h3>
                    </div>
                </el-col>
            </el-row>
            <el-row class="padbom">
                <el-col :span="2">
                    <div class='grid-contnet'>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div>
                        <!--  data -->
                        <img src='/assets/images/1.jpg'>
                        <div class="disinblock header-content ">
                            <ul>
                                <li>姓名:{{dbdata.student_name}}</li>
                                <li>昵称:{{dbdata.nickname}}</li>
                                <li>电话:{{dbdata.first_tel}}</li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class='grid-contnet'>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="user-order shadow">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content orderdata borderbotm">
                        <el-row>
                            <el-col :span="16">
                                <i class="fa fa-file-text-o fa-lg" aria-hidden="true"></i>
                                <div class='disinblock fontwei'>课程订单</div>
                            </el-col>
                            <el-col :span="8">
                                <div class='colorgray floatright' >
                                    <span>查看所有订单</span>
                                    <i class="fa fa-angle-right " aria-hidden="true"></i>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content order-content" @click="handleClick">
                        <el-row>
                            <el-col :span="12">
                                <div class="txt-center">
                                    <span>
                                        <!--  data -->
                                        <el-badge :value="getunpay(order_data)" class="user-item">
                                            <i class="fa fa-calendar-o fa-3x" aria-hidden="true"></i>
                                        </el-badge>
                                    </span>
                                    <p class="txt-center fontwei">未付款</p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="txt-center">
                                    <span>
                                        <!--  data -->
                                        <el-badge :value="getpay(order_data)" class="user-item">
                                            <i class="fa fa-calendar-check-o fa-3x" aria-hidden="true"></i>
                                        </el-badge>
                                    </span>
                                    <p class="txt-center fontwei">已付款</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="user-pay shadow">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content orderdata borderbotm">
                        <el-row>
                            <el-col :span="24">
                                <i class="fa fa-money fa-lg" aria-hidden="true"></i>
                                <div class='disinblock fontwei'>我的钱包</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content order-content">
                        <el-row>
                            <el-col :span="24">
                                <div class="txt-center">
                                    <p class='colorred'>{{dbdata.amount}}元</p>
                                    <p>账户余额</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user',
    data() {
        let localdata = {}
        return {
            localdata,
            dbdata: [],
            order_data: []
        }
    },
    components: {

    },
    mounted() {
        Vue.http.get('http://app.bullstech.cn:8888/lubandemo/api/student/' + this.$store.state.student_id.student_id).then(obj => {
            if (obj.data.length > 0) {
                this.dbdata = obj.data[0]
            }
        })
        let filterObj = []
        filterObj.push({
            'key': 'student_id',
            'value': this.$store.state.student_id.student_id,
            'type': ''
        })
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        Vue.http.get('http://app.bullstech.cn:8888/lubandemo/api/order/?filter=' + filterTxt).then(obj => {
            this.order_data = obj.data.data
        })
    },
    methods: {
        handleClick() {
            this.$store.commit('homes', 'lb-order')
        },
        getunpay(val) {
            let unpay = 0
            let count = 0
            for (var i = 0; i < val.length; i++) {
                if (parseInt(val[i].pay_status) < 2) {
                    unpay += parseInt(val[i].pay_status)
                    count++
                }
            }
            return count
        },
        getpay(val) {
            let pay = 0
            let count = 0
            for (var i = 0; i < val.length; i++) {
                if (parseInt(val[i].pay_status) == 2) {
                    pay += parseInt(val[i].pay_status)
                    count++
                }
            }
            return count
        }
    }
}
</script>