<template>
    <div class="wrapper bg-light ng-scope">
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r" @click="lbShowdialog($event,'lb-recharge')">
                <i class="fa fa-money"></i> 充值</button>
            <button class="btn btn-default pull-right r m-r" @click="lbShowdialog($event,'lb-rechargerecord')">
                <i class="fa fa-money"></i> 充值记录</button>
            <h4 style="margin-bottom:0px;">
                <i class="fa fa-cny"></i> 系统余额:
                <span class="label bg-info ng-binding">￥{{getData}}</span>
            </h4>
        </div>     
        <div class="wrapper b-a r-5x bg-white box-shadow m-t"> 
            
            <button class="btn btn-default pull-right r" @click="lbShowdialog($event,'lb-sms')">
                <i class="icon-basket"></i> 购买</button>
                 <button class="btn btn-default pull-right r m-r" @click="lbShowdialog($event,'lb-smsrecording')">
                <i class="fa fa-money"></i> 短信购买记录</button>
            <h4 style="margin-bottom:0px;">
                <i class="fa fa-mobile"></i> 短信剩余:
                <span class="label bg-info ng-binding">{{getSms}}</span>
                <small class="text-muted m-l ng-binding">已使用:0 条</small>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r" @click="lbShowdialog($event,'lb-cart')">
                <i class="icon-basket"></i> 购物车</button>
            <button class="btn btn-default pull-right m-r" @click="lbShowdialog($event,'lb-orders')">
                <i class="fa fa-book"></i> 我的订单</button>
            <h4>
                <i class="fa fa-th-large"></i> luban功能选择:
            </h4>
        </div>
        <div class="row m-t ng-scope" ng-if="system.level < 2">
            <template v-for="item in getTablesData()">
                <div class="col-xs-12 col-sm-4" style="margin-bottom:6px;">
                    <div class="wrapper-sm r box-shadow bg-teal-gradient">
                        <h4 class="text-center m-b">
                            <i></i>{{item.name}}</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <label class="text-black">功能选择:</label>
                                <label class="badge ng-binding">{{item.chargemodule}}</label>
                            </li>
                            <li class="list-group-item">
                                <label class="text-black">收费方式:</label>
                                <!--收费方式-->
                                <el-select v-model="item.relationsIndex" placeholder="方式" style="width: 100px;">
                                    <el-option v-for="(subitem,index) in item.relations" :key="index" :label="subitem.relation" :value="index" :disabled="item.disabled">
                                    </el-option>
                                </el-select>
                                <!--收费方式-->
                                <label class="badge bg-info ng-binding" style="margin-top:7px;">{{item.relations[item.relationsIndex].priced}}¥</label>
                            </li>
                            <li class="list-group-item">
                                <label class="text-black">描述:</label>
                                <label class="badge  ng-binding">{{item.description}}</label>
                            </li>
                        </ul>
                        <button class="btn btn-block btn-default" @click="lbShowdialog($event,'lb-cart')" @mousedown="handleClick(item)">
                            <i class="icon-plus"></i>加入购物车</button>
                    </div>
                </div>
            </template>
        </div>
        <div class="panel-footer">
            <div class="row">
                <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style>
.bg-info {
    color: #fff;
    background-color: #4d90fe;
}
</style>
<script>
export default {
    name: 'systems',
    data() {
        let localdata = {
            'form': {
                'charge_id': '',
                'chargePriceIndex': '',
                'priced': ''

            }
        }
        return {
            tables: ['charge'],
            model: 'cart',
            localdata,
            priced: ''

        }
    },
    mounted() {
        this.getTableApidata('org')
    },
    computed: {
        getData() {
            let balance = 0
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                if (org[0].balance) {
                    balance = org[0].balance
                }
            }
            return balance
        },
         getSms() {
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                if (org[0].sms){
                    this.sms = parseInt(org[0].sms)
                }
                this.orgid = org[0]._id
            }
            return this.sms
            console.log('sms456', this.sms)
        }
    },
    methods: {
        handleClick(item) {
            this.localdata.form.chargePriceIndex = item.relationsIndex
            this.localdata.form.charge_id = item._id
            this.handleSave().then(() => {
                this.$message({
                    message: '添加购物车成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-cart'
            })
        },
        handleSearch() {
            let filterObj = []
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then(obj => {
                console.log(obj)
            })
        },
    }
}
</script>







