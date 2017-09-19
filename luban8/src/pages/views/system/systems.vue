<template>
    <div class="wrapper bg-light ng-scope">
        <div class="wrapper b-a r-5x bg-white box-shadow m-t bg_self clpadding">
            <button class="btn btn-default pull-right" @click="lbShowdialog($event,'systemrechargedialog')">
                <i class="fa fa-money"></i> 充值</button>
            <button class="btn btn-default pull-right r m-r distance" @click="lbShowdialog($event,'rechargesearchdialogs')">
                <i class="fa fa-money"></i> 充值记录</button>
            <h5>
                <i class="fa fa-cny"></i> 系统余额:
                <span class="label bg-info ng-binding">￥{{getData}}</span>
            </h5>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t bg_self clpadding">
            <button class="btn btn-default pull-right r" @click="lbShowdialog($event,'systembuyform')">
                <i class="icon-basket"></i> 购买</button>
            <button class="btn btn-default pull-right r m-r distance" @click="lbShowdialog($event,'buytextdialogs')">
                <i class="fa fa-money"></i> 短信购买记录</button>
            <h5>
                <i class="fa fa-mobile"></i> 短信剩余:
                <span class="label bg-info ng-binding">{{getSms}}</span>
                <small class="text-muted m-l ng-binding">已使用:0 条</small>
            </h5>
        </div>
    </div>
</template>
<style>
.clpadding{
    padding-top:17px !important;
}
.bg-info {
    color: #fff;
    background-color: #4d90fe;
}

.bg_self button {
    font-size: 10px
}

.bg_self {
    width: 100%;
    height: 5em;
    border: 1px solid #ddd;
    background: white;
    padding: 1.4em 1.3em;
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
            } console.log('333', balance)
            return balance
        },
        getSms() {
            let sms = 0
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                if (org[0].sms) {
                    sms = parseInt(org[0].sms)
                }
            } console.log('2314', sms)
            return sms
        },
    },
    methods: {

    }
}
</script>







