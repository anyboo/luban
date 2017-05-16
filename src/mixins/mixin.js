export default {
    methods: {
        lbShowDailog(url) {
            console.log('lbShowDailog', url)
            this.$store.commit('pushdailog', url)
        },
        lbCloseDailog() {
            this.$store.commit('popdailog')
        },
        lbDropDown() {

        }
    }
}
