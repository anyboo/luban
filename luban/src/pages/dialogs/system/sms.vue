<template>
    <div class="modal-dialog">
        <div class="modal-content" modal-transclude="">
            <div class="ng-scope">
                <div class="modal-header" :class="getSms">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-mobile"></i>购买短信</h3>
                </div>
                <div class="modal-body" :class="getData">
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
                                        <a class="btn btn-info" @click="handsms">购买</a>
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
                                        <a class="btn btn-info" @click="handsmt">购买</a>
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
                                        <a class="btn btn-info" @click="handsmf">购买</a>
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
            'form': {
            },
        }
        return {
            localdata,
            orgid: '',
            balance: 0,
            sms: 0,
        }
    },
    mounted() {
        this.getTableApidata('org')
    },
    computed: {
        getData() {
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                this.balance = parseInt(org[0].balance)
                this.orgid = org[0]._id
            }
            return this.balance
            console.log('balance', this.balance)
        },
        getSms() {
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                this.sms = parseInt(org[0].sms)
                this.orgid = org[0]._id
            }
            return this.sms
            console.log('sms456', this.sms)
        }
    },
    watch: {},
    methods: {
        handsms() {
            this.handleSave().then(() => {
                this.$message({
                    message: '购买成功',
                    type: 'success',
                })
                this.balance -= parseInt(400)
                this.sms += parseInt(5000)
                this.updateTeble('org', this.orgid, { balance: this.balance, sms: this.sms }).then(() => {
                    console.log('sms123', this.sms)
                    console.log('balance',this.balance)
                    console.log('orgid', this.orgid)
                    this.getTableApidata('org')
                    this.lbClosedialog()
                    this.$store.state.envs.currDialog = 'lb-cart'
                })
            })
        },
        handsmt() {
            this.handleSave().then(() => {
                this.$message({
                    message: '购买成功',
                    type: 'success',
                })
                this.balance -= parseInt(1500)
                console.log('123', this.balance)
                this.updateTeble('org', this.orgid, { balance: this.balance }).then(() => {
                    this.getTableApidata('org')
                    this.lbClosedialog()
                    this.$store.state.envs.currDialog = 'lb-cart'
                })
            })
        },
        handsmf() {
            this.handleSave().then(() => {
                this.$message({
                    message: '购买成功',
                    type: 'success',
                })
                this.balance -= parseInt(3500)
                console.log('123', this.balance)
                this.updateTeble('org', this.orgid, { balance: this.balance }).then(() => {
                    this.getTableApidata('org')
                    this.lbClosedialog()
                    this.$store.state.envs.currDialog = 'lb-cart'
                })
            })
        }
    }
}
</script>
