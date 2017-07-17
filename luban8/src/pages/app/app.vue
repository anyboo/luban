<template>
    <div class="lbcontainer" :class="{'contaierUnfold':isvariety,'lbcontainerRetraction':!isvariety}">
        <lb-sidebar></lb-sidebar>
        <lb-header @variety="variety"></lb-header>
        <lb-body></lb-body>
        <lb-footer></lb-footer>
        <lb-modalbackdrop></lb-modalbackdrop>
        <lb-dialoglist></lb-dialoglist>
    </div>
</template>
<script>
import header from './header.vue'
import body from './body.vue'
import footer from './footer.vue'
import dialoglist from './dialoglist.vue'
import modalbackdrop from './modalbackdrop.vue'

let pages = {}
pages['lb-dialoglist'] = dialoglist
pages['lb-modalbackdrop'] = modalbackdrop
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
    methods: {
        variety() {
            this.isvariety = !this.isvariety
        }
    }
}
</script>
