<template>
    <div class="modal-dialog">
        <div class="modal-content" modal-transclude="">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-mobile"></i>购买短信</h3>
                </div>
                <div class="modal-body" :class="getSms">
                    <div class="bg-light lter padder padder-v">您的当前账户余额:
                        <span class="text-success ng-binding" style="color:#35aa47;">￥{{getData}}</span>元,剩余短信:
                        <span class="text-info ng-binding" style="color:#4d90fe;">{{getSms}}</span>条</div>
                    <div ng-if="step == 1" class="ng-scope">
                        <p class="padder padder-v">请选择您要购买的短信套餐</p>
                        <div class="row ng-scope">
                            <div class="col-xs-12 col-sm-4 ng-scope">
                                <div class="wrapper b-a r">
                                    <h3 class="ng-binding">5000条</h3>
                                    <p>单价:
                                        <span class="text text-danger ng-binding">0.08元/条</span>
                                    </p>
                                    <p>售价:
                                        <span class="text text-success ng-binding">400 元</span>
                                    </p>
                                    <p>
                                        <a class="btn btn-info" @click="handsms('5000','0.08','400')">购买</a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 ng-scope">
                                <div class="wrapper b-a r">
                                    <h3 class="ng-binding">20000条</h3>
                                    <p>单价:
                                        <span class="text text-danger ng-binding">0.075元/条</span>
                                    </p>
                                    <p>售价:
                                        <span class="text text-success ng-binding">1500 元</span>
                                    </p>
                                    <p>
                                        <a class="btn btn-info" @click="handsms('20000','0.075','1500')">购买</a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 ng-scope">
                                <div class="wrapper b-a r">
                                    <h3 class="ng-binding">50000条</h3>
                                    <p>单价:
                                        <span class="text text-danger ng-binding">0.07元/条</span>
                                    </p>
                                    <p>售价:
                                        <span class="text text-success ng-binding">3500元</span>
                                    </p>
                                    <p>
                                        <a class="btn btn-info" @click="handsms('50000','0.07','3500')">购买</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sms',
    data() {
        let localdata = {
        }
        return {
            localdata,
            orgid: '',
            balance: 0,
            sms: 0,
            sum: '',
            unitPrice: '',
            model: 'sms',
        }
    },
    mounted() {
        this.getTableApidata('org')
    },
    computed: {
        getData() {
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                if (org[0].balance) {
                    this.balance = parseInt(org[0].balance)
                }
                this.orgid = org[0]._id
            }
            return this.balance
        },
        getSms() {
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                if (org[0].sms) {
                    this.sms = parseInt(org[0].sms)
                }
                this.orgid = org[0]._id
            }
            return this.sms
        }
    },
    watch: {},
    methods: {
        handsms(sum, unitPrice, price) {
            let form = {
                'sum': sum,
                'unitPrice': unitPrice,
                'price': price
            }
            if (this.getData < price) {
                   this.handleShowDialog('lb-recharge')
            }
            else {
                this.handleSave(form).then(() => {
                    this.$message({
                        message: '购买成功',
                        type: 'success',
                    })
                    this.balance -= parseInt(price)
                    this.sms += parseInt(sum)
                    this.updateTeble('org', this.orgid, { balance: this.balance, sms: this.sms }).then(() => {
                        this.getTableApidata('org')
                        this.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-cart'
                    })
                })
            }
        },
    }
}
</script>
