import * as types from '~/stores/modules/mutation-types'

export default {
    created: function() {
        this.modalsType = types.APPEND_API
        this._id = ''
    },
    computed: {
        getStudentName(){
            return this.$store.state.envs.currStudent.lb_student_student_name
        }
    },
    methods: {
        handleShowDialog(url) {
            this.$store.commit('pushdialog', url)
        },
        lbShowdialog(event, url) {
            if (event) event.preventDefault()
            this.$store.commit('pushdialog', url)
        },
        lbClosedialog(event) {
            if (event) event.preventDefault()
            this.$store.commit('popdialog')
        },
        handleSave() {
            let vm = this
            let modalform = this.lb_localdata.form
                //let modalformValue = modalform.getForm()
            console.log(modalform, this.modalsType)
                //if (modalformValue.validate) {
            return new Promise((resolve,reject) => {
                if (this.modalsType == types.APPEND_API) {
                    vm.$store.dispatch(types.APPEND_API, {
                        'model': this.model,
                        'form': modalform
                    }).then(() => {
                        resolve()
                    }).catch((error) => {
                        reject()
                        console.log(error, 'Promise error')
                    })
                } else {
                    vm.$store.dispatch(types.EDIT_API, {
                        'model': this.model,
                        'id': this._id,
                        'form': modalform,
                    }).then(() => {
                        resolve()
                    }).catch((error) => {
                        reject()
                        console.log(error, 'Promise error')
                    })
                }
            })
        }
    }
}
