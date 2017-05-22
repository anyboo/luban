import * as types from '~/stores/modules/mutation-types'

export default {
    created: function() {
        this.modalsType = types.APPEND_API
        this._id = ''
    },
    mounted: function() {
        this.handleGetTable()
    },
    computed: {
        getTableData() {
            return [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        getStudentName() {
            return this.$store.state.envs.currStudent.student_name
        },
        getTablesData() {
            let tablaData = []
            if (this.lb_tables) {
                let tablaName = this.lb_tables[0]
                tablaData = this.$store.state.models.models[tablaName].data
            }
            return tablaData
        },
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
        handleGetTable() {
            let vm = this
            if (vm.lb_tables) {
                vm.$store.dispatch(types.GET_ARRAY_API, vm.lb_tables).then(() => {
                    //this.getTablesData()
                })
            }
        },
        handleSave() {
            let vm = this
            let modalform = this.lb_localdata.form
                //let modalformValue = modalform.getForm()
            console.log(modalform, this.modalsType)
                //if (modalformValue.validate) {
            return new Promise((resolve, reject) => {
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
