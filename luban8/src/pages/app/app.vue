<template>
    <div class="lbcontainer">
        <lb-sidebar v-if="login" :class="{'contaierUnfold':isvariety,'lbcontainerRetraction':!isvariety}"></lb-sidebar>
        <div class="app_container" :class="{'margincontaierUnfold':isvariety,'marginlbcontainerRetraction':!isvariety}">
            <lb-header @variety="variety"></lb-header>
            <lb-body></lb-body>
        </div>
        <lb-dialoglist></lb-dialoglist>
        <lb-footer></lb-footer>
    </div>
</template>
<style>
.margincontaierUnfold {
    margin-left: 180px;
}

.marginlbcontainerRetraction {
    margin-left: 55px;
}
</style>

<script>
import header from './header.vue'
import body from './body.vue'
import footer from './footer.vue'
import dialoglist from './dialoglist.vue'

let pages = {}
pages['lb-dialoglist'] = dialoglist
pages['lb-header'] = header
pages['lb-body'] = body
pages['lb-footer'] = footer

export default {
    name: 'app',
    data() {
        return {
            isvariety: true
        }
    },
    components: pages,
    computed: {
        login() {
            let login = this.$store.state.system.login
            if (login) {
                login = this.$store.state.models.login
            }
            return login
        }
    },
    methods: {
        variety() {
            this.isvariety = !this.isvariety
        }
    }
}
</script>
