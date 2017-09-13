<template>
    <div class="wrapper bg-light ng-scope">
        <div class="wrapper b-a r-5x bg-white box-shadow m-t bg_self">
            <button class="btn btn-default pull-right" @click="lbShowdialog($event,'systemrechargedialog')">
                <i class="fa fa-money"></i> 充值</button>
            <button class="btn btn-default pull-right r m-r distance" @click="lbShowdialog($event,'lb-rechargerecord')">
                <i class="fa fa-money"></i> 充值记录</button>
            <h4 style="margin-bottom:0px;">
                <i class="fa fa-cny"></i> 系统余额:
                <span class="label bg-info ng-binding">￥{{getData}}</span>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t bg_self">
            <button class="btn btn-default pull-right r" @click="lbShowdialog($event,'lb-sms')">
                <i class="icon-basket"></i> 购买</button>
            <button class="btn btn-default pull-right r m-r distance" @click="lbShowdialog($event,'lb-smsrecording')">
                <i class="fa fa-money"></i> 短信购买记录</button>
            <h4 style="margin-bottom:0px;">
                <i class="fa fa-mobile"></i> 短信剩余:
                <span class="label bg-info ng-binding">{{getSms}}</span>
                <small class="text-muted m-l ng-binding">已使用:0 条</small>
            </h4>
        </div>
    </div>
</template>
<style>
.bg-info {
    color: #fff;
    background-color: #4d90fe;
}


.bg_self {
    width: 100%;
    height: 5em;
    border: 1px solid #ddd;
    background: white;
    padding: 15px 8px;
    border-radius: 10px;
}

.m-t {
    margin-bottom: 1em
}

.distance {
    margin-right: 1em
}
</style>
<script>
export default {
    name: 'systems',
    data() {
        return {
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
            let sms = 0
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                if (org[0].sms) {
                    sms = parseInt(org[0].sms)
                }
            }
            return sms
        }
    },
    methods: {

    }
}
</script>







