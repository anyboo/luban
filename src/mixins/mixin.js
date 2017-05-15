export default {
    methods: {
        lbShowDailog(url) {
            this.$store.commit('pushdailog', url)
        },
        lbCloseDailog() {
            this.$store.commit('popdailog')
        }
    }
}
