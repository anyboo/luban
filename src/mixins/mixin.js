export default {
    methods: {
        lbShowdialog(event,url) {
            event.preventDefault()
            this.$store.commit('pushdialog', url)
        },
        lbClosedialog(event) {
            event.preventDefault()
            this.$store.commit('popdialog')
        }
    }
}
