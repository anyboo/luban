<template>
    <div class="lbBody">
        <div class="lbBody_lbcontainer">
            <component v-bind:is="getCurrentView">
            </component>
        </div>
    </div>
</template>
<script>
import pages from '~/stores/viewpages.js'
export default {
    name: 'body',
    data() {
        return {
        }
    },
    components: pages,
    beforeCreate() {
        let system = JSON.parse(window.localStorage.getItem('system'))
        if (system) {
            this.$store.commit('system', system)
        }
    },
    mounted() {
        if (this.$store.state.models.login) {
            this.getTableApidata('dictionary')
        }
    },
    computed: {
        getCurrentView() {
            let view = 'lb-studentadd'
            if (!this.$store.state.models.login) {
                view = 'lb-systemsign_in'
            } else if (this.$store.state.system.name.length == 0) {
                view = 'lb-systemsign_in'
            } else {
                let to = this.$store.state.system.router
                if (to == '') {
                    view = 'lb-studentadd'
                } else {
                    view = 'lb-' + to.replace(/\//g, '')
                }
            }
            console.log(this.$store.state.system)
            return view
        }
    },

}
</script>