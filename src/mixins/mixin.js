export default {
    methods: {
        lbShowDailog(event,url) {
            event.preventDefault()
            this.$store.commit('pushdailog', url)
        },
        lbCloseDailog(event) {
            event.preventDefault()
            this.$store.commit('popdailog')
        }
    }
}
