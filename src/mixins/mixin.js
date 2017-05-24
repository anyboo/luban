import * as types from '~/stores/modules/mutation-types'
import lodash from 'lodash'
import schema from 'async-validate'
import schemaall from 'async-validate/plugin/all'

export default {
    created: function() {
        this.modalsType = types.APPEND_API
        this._id = ''
        this.lodash = lodash
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
        setEditModle(id) {
            this.modalsType = types.EDIT_API
            this._id = id
        },
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
        handleShowDialog(url, menuData) {
            this.$store.commit('pushdialog', { url, menuData })
        },
        lbShowdialog(event, url) {
            if (event) event.preventDefault()
            this.$store.commit('pushdialog', { url })
        },
        lbClosedialog(event) {
            if (event) event.preventDefault()
            this.$store.commit('popdialog')
        },
        handleGetFilterTable(filter, prepage, page) {
            let vm = this
            if (vm.lb_tables) {
                let table = {}
                table.model = vm.lb_tables[0]
                table.filter = filter
                table.prepage = prepage
                table.page = page

                vm.$store.dispatch(types.GET_Filter_API, table).then(() => {
                    //this.getTablesData()
                })
            }
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
            let modalform = vm.lb_localdata.form
            return new Promise((resolve, reject) => {
                vm.validate()
                vm.changeFormDateTime(modalform)
                console.log(vm.lb_localdata.validator.errorStatus)
                if (vm.lb_localdata.validator.errorStatus) {
                    reject()
                    return
                }

                if (vm.modalsType == types.APPEND_API) {
                    let creattime = new Date()
                    modalform.creattime = creattime.getTime()

                    vm.$store.dispatch(types.APPEND_API, {
                        'model': vm.model,
                        'form': modalform
                    }).then(() => {
                        resolve()
                    }).catch((error) => {
                        reject()
                        console.log(error, 'Promise error')
                    })
                } else {
                    vm.$store.dispatch(types.EDIT_API, {
                        'model': vm.model,
                        'id': vm._id,
                        'form': modalform,
                    }).then(() => {
                        resolve()
                    }).catch((error) => {
                        reject()
                        console.log(error, 'Promise error')
                    })
                }
                console.log(modalform, vm.modalsType)
            })
        },
        changeFormDateTime(modalform) {
            let vm = this
            let descriptor = vm.lb_localdata.validator
            for (var item in descriptor.fields) {
                if (descriptor.fields[item].type == 'date') {
                    let dateValue = modalform[item]
                    let dataTemp = new Date(dateValue)
                    modalform[item] = dataTemp.getTime()
                }
            }
        },
        handleValidateErrors(errors, filed) {
            let vm = this
            if (filed) {
                if (errors[filed]) {
                    vm.lb_localdata.validator.fields[filed].errorStatus = true
                }
            } else {
                for (var err in errors) {
                    vm.lb_localdata.validator.fields[err].errorStatus = true
                }
            }
        },
        validate(filed) {
            let vm = this
            let modalform = vm.lb_localdata.form
            let descriptor = vm.lb_localdata.validator
            let validator = new schema(descriptor)
            schema.plugin(schemaall)
            vm.lb_localdata.validator.errorStatus = false
            if (filed) {
                descriptor.fields[filed].errorStatus = false
            } else {
                for (var item in descriptor.fields) {
                    descriptor.fields[item].errorStatus = false
                }
            }
            validator.validate(modalform, (errors, fields) => {
                if (fields && fields.errors && fields.errors.length > 0) {
                    vm.lb_localdata.validator.errorStatus = true
                    return vm.handleValidateErrors(fields.fields, filed)
                }
            })
        }
    }
}
