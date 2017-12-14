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
                <small class="text-muted m-l ng-binding">已使用:{{getSmsSend}} 条</small>
            </h5>
        </div>
    </div>
</template>
<style>
.text-muted {
    font-size: 14px !important;
}

.clpadding {
    padding-top: 17px !important;
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
            org: null
        }
    },
    mounted() {
    },
    computed: {
        getData() {
            if ('moduleform' == this.$store.state.envs.currDialog) {
                this.handleSearch()
                this.$store.state.envs.currDialog = ''
            }
            let amount = 0
            if (this.org && this.org.amount) {
                amount = this.org.amount
            }
            return amount
        },
        getSms() {
            let sms = 0
            if (this.org && this.org.sms) {
                sms = this.org.sms
            }
            return sms
        },
        getSmsSend() {
            let smssend = 0
            if (this.org && this.org.smssend) {
                smssend = this.org.smssend
            }
            return smssend
        },
    },
    methods: {
        handleSearch() {
            console.log('handleSearch')
            let filterObj = []
            filterObj.push({
                'key': '_id',
                'value': this.$store.state.system.org_id,
                'type': ''
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            let token = window.localStorage.getItem('token')
            let tokentime = window.localStorage.getItem('tokentime')
            Vue.http.headers.common['authorization'] = token
            Vue.http.headers.common['authtime'] = tokentime
            Vue.http.get('http://api.luban8.cn:8888/luban8/api/org?filter=' + filterTxt).then(obj => {
                if (obj.data.count > 0) {
                    this.org = obj.data.data[0]
                } else {
                }
            }).catch(() => {
            })
        }
    }
}
</script>







