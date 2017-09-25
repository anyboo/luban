<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <el-button-group>
                    <el-button @click="handleBack" type="info" size="small">返回</el-button>
                    <el-popover ref="popover" placement="right" trigger="click">
                        <img :src="qrcodeimg">
                    </el-popover>
                </el-button-group>
            </div>
            <div class="panel-body">
                <div class="bg-white row no-gutter">
                    <div class="col-xs-12 col-md-4">
                        <div class="text-center clear">
                            <div class="face" style="width:80px;margin:0 auto">
                                <div class="avatar-wrapper adres-css " style="border-radius:0; display:block; overflow:hidden;border-radius: 120px; width:80px; height:80px;">
                                    <img :src="makeImage(getLookUp(order.student,'student_name'),50)" class='canvasimg' style="vertical-align:top;" width="80" height="">
                                </div>
                            </div>
                        </div> 
                        <ul class="list-unstyled ">
                            <li>
                                <label class="field">学员:</label> 
                                <span>{{ getLookUp(order.student,'student_name') }}</span>
                            </li>
                        </ul>
                    </div>  
                    <div class="col-xs-12 col-md-8">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <i class="icon-info"></i> 基础信息</div>
                            <div class="panel-body">
                                <div class="row no-gutter">
                                    <div class="col-xs-12 col-md-6">
                                        <label class="inline w-xs text-right">订单号:</label>
                                        <span>{{ order.order_no }}</span>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <label class="inline w-xs text-right">订单金额:</label>
                                        <span>{{ order.origin_amount }}</span>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <label class="inline w-xs text-right">订单内容:</label>
                                        <span>{{ order.body }}</span>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <label class="inline w-xs text-right">下单日期:</label>
                                        <span>{{ getDateFormat(order.createtime) }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-tabs type="border-card" @tab-click="showTab">
            <template v-for="(item,index) in moduledata">
                <el-tab-pane :label="item.pageLable">
                    <template v-if="index==tabIndex">
                        <lb-moduletable :module="item" :info="true" :searchorderid="$store.state.system.currOrderID"></lb-moduletable>
                    </template>
                </el-tab-pane>
            </template>
        </el-tabs>
    </div>
</template>
<script>
import pagesmodule from '~/stores/moduleorderinfo.js'
import getUrl from '~/api/restfulapi.js'
export default {
    name: 'order',
    data() {
        let localdata = {
            'lookup': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            },
        }
        return {
            moduledata: pagesmodule,
            localdata,
            activeName: '1',
            order: {},
            tabIndex: '',
            tables: ['order'],
            uid: '',
            qrcodeimg: '',
        }
    },
    created() {
        let currOrder = this.$store.state.envs.currOrder
        console.log('sad', currOrder)
        if (currOrder && currOrder._id && currOrder._id.length > 0) {
            this.uid = currOrder._id
            this.$store.commit('order', this.uid)
            this.handleSearch()
        } else {
            this.uid = this.$store.state.system.currOrderID
            if (this.uid) {
                this.handleSearch()
            }
        }
    },
    computed: {
        getOrderInfo() {
            console.log(this.order)
            return this.order
        },
    },
    watch: {},
    methods: {
        showTab(tab, event) {
            this.tabIndex = tab.index
        },
        handleBack() {
            this.$store.commit('router', this.$store.state.system.routerback)
        },
        handleSearch() {
            if (this.uid && this.uid.length > 0) {
                let filterObj = []
                let order_id = this.uid
                if (order_id.length > 0) {
                    filterObj.push({
                        'key': '_id',
                        'value': order_id,
                        'type': ''
                    })
                }
                filterObj.push({
                    'key': 'lookup',
                    'value': this.localdata.lookup,
                    'type': 'lookup'
                })
                console.log(filterObj)
                let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                this.handleGetFilterTable(filterTxt).then((obj) => {
                    if (obj.data.data && obj.data.data.length > 0) {
                        this.order = obj.data.data[0]
                    }
                })
            }
        }
    }
}
</script>


