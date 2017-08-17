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
import login from '../views/login.vue'
import verification from '../views/verification.vue'
import common_use from '../dialogs/common_use/common_use.vue'


export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            iscolor1: true,
            iscolor2: false,
        }
    },
    computed: {
        currentView() {
            return this.$store.getters.yes
        }
    },
    mounted() {
        if (this.$store.state.models.login) {
            this.getTableApidata('dictionary')
        }
        /*         let codeurl = window.location.search
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
                    })
                } */
        let openid = 'oZy8Uwatalkn5 - N39nk0lVEFaDCw'
        let filterObj = []
        filterObj.push({
            'key': 'openid',
            'value': openid,
            'type': ''
        })
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        this.handleGetFilterTableTable('student', filterTxt).then(obj => {
            console.log(obj)
        })


    },
    components: {
        'lb-footer': footer,
        'lb-home': home,
        'lb-user': user,
        'lb-switchover': switchover,
        'lb-login': login,
        'lb-common': common_use,
        'lb-verification': verification,
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
