<template>
    <div class="wrapper bg-light ng-scope">
        <div class="wrapper b-a r-5x bg-white box-shadow">
            <button tooltip="VIP会员拥有更多学员数、校区数、账号数" class="btn btn-info pull-right r ng-scope">
                <i class="fa fa-arrow-circle-up"></i> 升级成VIP会员</button>
            <h4 style="margin-bottom:0px;">
                <i class="icon-badge"></i>会员身份:
                <span class="label bg-gray ng-scope">免费会员</span>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r">
                <i class="fa fa-money"></i> 充值</button>
            <h4 style="margin-bottom:0px;">
                <i class="fa fa-cny"></i> 系统余额:
                <span class="label bg-info ng-binding">￥0.00</span>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r">
                <i class="icon-basket"></i> 购买</button>
            <h4 style="margin-bottom:0px;">
                <i class="fa fa-mobile"></i> 短信剩余:
                <span class="label bg-info ng-binding">10</span>
                <small class="text-muted m-l ng-binding">已使用:0 条</small>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r" @click="lbShowdialog($event,'lb-cart')">
                <i class="icon-basket"></i> 购物车</button>
            <button class="btn btn-default pull-right m-r">
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
                                <template>
                                    <el-select v-model="localdata.form.chargr_type" placeholder="方式">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
                                        </el-option>
                                    </el-select>
                                </template>
                                <!--收费方式-->
                                <label class="badge bg-info ng-binding" style="margin-top:7px;">{{item.first_price}}</label>
                            </li>
                            <li class="list-group-item">
                                <label class="text-black">描述:</label>
                                <label class="badge  ng-binding">{{item.description}}</label>
                            </li>
                        </ul>
                        <button class="btn btn-block btn-default" @click="lbShowdialog($event,'lb-cart')" @mousedown="handleClick()" >
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
        <p class="text-center m-t">
            <a class="link">保密协议</a> |
            <a class="link">服务协议</a>
        </p>
    </div>
</template>
<script>
export default {
    name: 'systems',
    data() {
        let localdata = {
            'form': {
                'chargr_type': '',
            }
        }
        return {
            tables: ['charge'],
            model: 'cart',
            localdata,
            options: [{
                value: '0',
                label: '1月'
            }, {
                value: '1',
                label: '3月'
            }, {
                value: '2',
                label: '6月'
            }, {
                value: '3',
                label: '12月'
            }]
        }
    },
    computed: {
    },
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '添加购物车成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-cart'
            })
        },
    }
}
</script>
