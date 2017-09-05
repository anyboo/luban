<template>
    <div>
        <component v-bind:is="currentView">
            <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
        <lb-footer v-if="currentView!='lb-login'&&currentView!='lb-verification'">
            <lb-switchover v-on:increment="incrementTotalhome" :class="{blueer:iscolor1}" class="footer_icon">
                <i class="fa fa-circle-o fa-2x bradius" aria-hidden="ture"></i>
            </lb-switchover>
            <lb-switchover v-on:increment="incrementTotaluser" :class="{blueer:iscolor2}" class="footer_icon">
                <i class="fa fa-user-o fa-2x bradius" aria-hidden="ture"></i>
            </lb-switchover>
        </lb-footer>
    </div>
</template>
<script>
import footer from './Mobile/footer.vue'
import switchover from './Mobile/switchover.vue'
import user from '../views/user.vue'
import home from '../views/home.vue'
import verification from '../views/verification.vue'
import common_use from '../dialogs/common_use/common_use.vue'
import common_order from '../dialogs/common_use/common_order.vue'
import md5 from '~/api/md5.min.js'


export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            iscolor1: true,
            iscolor2: false,
            numberValidateForm: {
                user: 'luban',
                pwd: '123456'
            },
        }
    },
    computed: {
        currentView() {
            return this.$store.getters.yes
        }
    },
    mounted() {
        /*    this.login() */
        let vm = this
        if (this.$store.state.system.name.length > 0) {
            this.numberValidateForm.user = this.$store.state.system.tel
        }
        this.numberValidateForm.pwd = md5(this.numberValidateForm.pwd)
        let account = { user: this.numberValidateForm.user, pwd: this.numberValidateForm.pwd }
        vm.$store.dispatch('loginApi', account)
            .then((data) => {
                if (data.code == 0) {
                    let filterObj = []
                    let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                    this.handleGetFilterTableTable('dictionary', filterTxt).then(obj => {
                        console.log(obj)
                    })

                    let codeurl = window.location.search
                    let codeindex = codeurl.indexOf('=')
                    let codeend = codeurl.indexOf('&')
                    console.log(codeurl);
                    console.log(codeindex);
                    console.log(codeend);
                    let cdstr = ''
                    if (codeend) {
                        cdstr = codeurl.slice(codeindex + 1, codeend)
                    }
                    console.log(cdstr)
                    if (cdstr.length > 0) {
                        Vue.http.post('http://app.bullstech.cn:8888/wx/', { code: cdstr }).then(obj => {
                            console.log(obj.bodyText.openid)
                            this.$store.commit('getopenid', obj.bodyText.openid)
                            let openid = this.$store.state.openid.openid
                            filterObj = []
                            filterObj.push({
                                'key': 'openid',
                                'value': openid,
                                'type': ''
                            })
                            filterTxt = this.base64.encode(JSON.stringify(filterObj))
                            this.handleGetFilterTableTable('student', filterTxt).then(obj => {
                                 console.log(obj.data) 
                                if (obj.data.count > 0) {
                                    this.$store.commit('student', obj.data.data[0]._id)
                                    this.$store.commit('homes', 'lb-home')
                                } else {
                                    this.$store.commit('getopenid', openid)
                                    this.$store.commit('homes', 'lb-verification')
                                }
                            })
                            this.$store.commit('user', data.account)
                        })
                    }
                    /*   let openid = 'oZy8Uwata23l5-Nfsfd239ndfk0lVEFaDeeqwew' */
                }
            })
        console.log('登陆成功')
    },
    components: {
        'lb-footer': footer,
        'lb-home': home,
        'lb-user': user,
        'lb-switchover': switchover,
        'lb-common': common_use,
        'lb-verification': verification,
        'lb-order': common_order,
    },
    methods: {
        incrementTotalhome() {
            this.iscolor1 = true
            if (this.iscolor1 = true) {
                this.iscolor2 = false
            }
            this.$store.commit('homes', 'lb-home')
        },
        incrementTotaluser() {
            this.iscolor2 = true
            if (this.iscolor2 = true) {
                this.iscolor1 = false
            }
            this.$store.commit('homes', 'lb-user')
        }
    }
}
</script>
