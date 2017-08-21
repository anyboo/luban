<template>
    <div>
        <div class="modal-dialog" v-if="alipay==1">
            <div class="modal-content">
                <div class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" @click="lbClosedialog($event)">
                            <span>×</span>
                            <span class="sr-only">关闭</span>
                        </button>
                        <h3 class="modal-title">
                            <i class="fa fa-money"></i>系统充值</h3>
                    </div>
                    <div class="modal-body">
                        <div class="ng-scope">
                            <dl class="dl-horizontal">
                                    <el-form :model="localdata.form" :rules="rules" label-width="100px" ref="ruleForm"  >
                                        <el-form-item label="充值金额:" prop="priced" >
                                            <lb-numberinput type="number" class="form-control ng-pristine ng-valid ng-touched" v-model.lazy="localdata.form.priced"  style="width:23%;">
                                            </lb-numberinput>
                                        </el-form-item>
                                    </el-form>            
                                <dt class="m-t" style="width:88px;font-weight:300;">支付方式:</dt>
                                <dd class="m-t">
                                    <ul class="list-group" style="margin-left:-80px;">
                                        <li class="list-group-item ng-scope">
                                            <img src="/assets/images/alipay.jpg">
                                            <i class="fa fa-check-circle text-success pull-right ng-scope"></i>
                                        </li>
                                    </ul>
                                </dd>
                                <dt class="m-t"></dt>
                                <dd class="m-t">
                                    <button class="btn btn-primary" @click="submitForm">立即充值</button>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--充值-->
        <!--确定充值-->
        <div class="modal-dialog" v-if="alipay==2">
            <div class="modal-content">
                <div page-controller="system_charge" class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" @click="lbClosedialog($event)">
                            <span>×</span>
                            <span class="sr-only">关闭</span>
                        </button>
                        <h3 class="modal-title">
                            <i class="fa fa-money"></i>系统充值</h3>
                    </div>
                    <div class="modal-body" :class="getData">
                        <div ng-if="step == 2" class="ng-scope">
                            <h4 class="text-center">确认充值</h4>
                            <dl class="dl-horizontal m-t">
                                <dt >充值方式:</dt>
                                <dd>
                                    <img src="/assets/images/alipay.jpg">
                                </dd>
                                <dt class="m-t">充值金额:</dt>
                                <dd class="m-t ng-binding">{{this.localdata.form.priced}}</dd>
                            </dl>
                            <div class="text-center">
                                <button class="btn btn-primary" @click="recharge">确认充值</button>
                                <button class="btn btn-default m-l" @click="alipay=1">返回</button>
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
    name: 'newsclass',
    data() {
        let localdata = {
            'form': {
                'priced': '',
            },
        }
        var validateTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入大于1的数字'))
            } else if (value<1) {
                callback(new Error('请输入大于1的数字'))
            } else {
                callback()
            }
        }
        return {
            localdata,
            alipay: '1',
            model: 'money',
            balance: 0,
            orgid: '',
            rules: {
                priced: [
                    { validator: validateTel, required: true, trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        this.getTableApidata('org')
    },
    computed: {
        totalMoney() {
            let money = 0
            let vm = this
            this.getTablesData().forEach((product) => {
                money += parseInt(vm.getLookUp(product.charge, 'relations')[product.chargePriceIndex].priced)
            })
            return money
        },
        getData() {
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                if (org[0].balance) {
                    this.balance = parseInt(org[0].balance)
                }
                this.orgid = org[0]._id
            }
            return true
        },
    },
    watch: {},
    methods: {
        recharge() {
            this.handleSave().then(() => {
                this.$message({
                    message: '充值成功',
                    type: 'success',
                })
                this.balance += parseInt(this.localdata.form.priced)
                this.updateTeble('org', this.orgid, { balance: this.balance }).then(() => {
                    this.getTableApidata('org')
                    this.lbClosedialog()
                    this.$store.state.envs.currDialog = 'lb-cart'
                })
            })
        },
        handcut() {
            this.alipay = 1
            if (this.totalMoney > this.$store.state.system.balance) {
                this.prices = !this.prices
            }
        },
        submitForm() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.alipay = 2
                } else {
                    console.log('error submit!!')
                    return false;
                }
            })
        }
    }
}
</script>
