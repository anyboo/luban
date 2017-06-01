import * as types from '~/stores/modules/mutation-types'
import lodash from 'lodash'
import schema from 'async-validate'
import schemaall from 'async-validate/plugin/all'
import moment from 'moment'
import makeimage from '~/api/makeImage.js'
import base64 from '~/api/base64.js'

moment.updateLocale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s',
        s: '',
        m: 'a minute',
        mm: '%d分钟',
        h: 'an hour',
        hh: '%d小时',
        d: 'a day',
        dd: '%d天',
        M: 'a month',
        MM: '%d月',
        y: 'a year',
        yy: '%d岁'
    }
})

export default {
    created: function() {
        this.modalsType = types.APPEND_API
        this._id = ''
        this.lodash = lodash
        this.makeImage = makeimage
        this.base64 = base64
        this.types = types
        this.pagination = {}
        this.pagination.currentPage = 1
        this.pagination.total = 0
        this.pagination.pagesize = 10
        this.pagination.pagesizes = [10, 20, 50, 100]
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
        getDatetimeStartOf(value, end) {
            let datetime = moment().startOf(value)
            if (end) {
                datetime = moment().endOf(value)
            }
            return datetime.toDate().getTime()
        },
        getDatetimeEndOf(value) {
            let datetime = moment(value)
            if (datetime.isValid()) {
                datetime = datetime.endOf('day')
            }
            return datetime.toDate().getTime()
        },
        fromNow(datestring) {
            let dateTemp = moment(datestring)
            let fromNowStr = ''
            if (dateTemp.isValid()) {
                fromNowStr = dateTemp.fromNow()
            }
            return fromNowStr
        },
        getButtongroupText(obj, value) {
            let result = ''
            if (obj.length > 0) {
                let findobj = this.lodash.find(obj, { 'value': value })
                if (findobj) {
                    result = findobj.text
                }
            }
            return result
        },
        getDatetime(datestring) {
            let dateTemp = moment(datestring)
            let datetimestr = 0
            if (dateTemp.isValid()) {
                datetimestr = dateTemp.toDate().getTime()
            }
            return datetimestr
        },
        getDateFormat(datestring) {
            let dateTemp = moment(datestring)
            let datetimestr = ''
            if (dateTemp.isValid()) {
                datetimestr = dateTemp.format('YYYY-M-D h:mm')
            }
            return datetimestr
        },
        setEditModle(id) {
            this.modalsType = types.EDIT_API
            this._id = id
        },
        getStudentName() {
            return this.$store.state.envs.currStudent.student_name
        },
        getStudentId() {
            return this.$store.state.envs.currStudent._id
        },
        getTablesData() {
            let tablaData = []
            if (this.lb_tables) {
                let tablaName = this.lb_tables[0]
                tablaData = this.$store.state.models.models[tablaName].data
                this.pagination.total = this.$store.state.models.models[tablaName].count
            }
            return tablaData
        },
        handleShowDialog(url, menuData) {
            console.log(menuData)
            this.$store.commit('pushdialog', { url, menuData })
        },
        lbShowdialog(event, url) {
            if (event) event.preventDefault()
            this.$store.commit('pushdialog', { url })
        },
        lbClosedialog() {
            this.$store.state.envs.currDialog = ''
            this.$store.state.envs.currDialogResult = null
            this.$store.commit('popdialog')
        },
        handlelookup() {
            let filterObj = []
            filterObj.push({
                'key': 'lookup',
                'value': this.lb_localdata.lookup,
                'type': 'lookup'
            })

            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
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
                    this.getTablesData()
                })
            }
        },
        getTabledata(table) {
            let vm = this
            if (table) {
                vm.$store.dispatch(types.GET_API, table).then(() => {
                    
                })
            }
        },
        handleGetTable() {
            let vm = this
            if (vm.lb_tables) {
                vm.$store.dispatch(types.GET_ARRAY_API, vm.lb_tables).then(() => {
                    this.getTablesData()
                })
            }
        },
        handleDelete(id) {
            let vm = this
            return new Promise((resolve, reject) => {
                if (vm.lb_tables) {
                    let table = {}
                    table.model = vm.lb_tables[0]
                    table.id = id

                    vm.$store.dispatch(types.DELETE_API, table).then(() => {
                        console.log('handleDelete')
                        resolve()
                    }).catch((error) => {
                        reject()
                        console.log(error, 'Promise error')
                    })

                } else {
                    reject()
                }
            })
        },
        handleSave() {
            let vm = this
            let modalform = vm.lb_localdata.form
            return new Promise((resolve, reject) => {
                vm.validate()
                vm.changeFormDateTime(modalform)
                if (vm.lb_localdata.validator && vm.lb_localdata.validator.errorStatus) {
                    reject()
                    return
                }

                if (vm.modalsType == types.APPEND_API) {
                    let creattime = new Date()
                    modalform.creattime = creattime.getTime()

                    vm.$store.dispatch(types.APPEND_API, {
                        'model': vm.model,
                        'form': modalform
                    }).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject()
                        console.log(error, 'Promise error')
                    })
                } else {
                    vm.$store.dispatch(types.EDIT_API, {
                        'model': vm.model,
                        'id': vm._id,
                        'form': modalform,
                    }).then((response) => {
                        resolve(response)
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
            if (descriptor) {
                for (var item in descriptor.fields) {
                    if (descriptor.fields[item].type == 'date') {
                        let dateValue = modalform[item]
                        let dataTemp = new Date(dateValue)
                        modalform[item] = dataTemp.getTime()
                    }
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

            if (descriptor) {
                vm.lb_localdata.validator.errorStatus = false
                if (filed) {
                    descriptor.fields[filed].errorStatus = false
                } else {
                    for (var item in descriptor.fields) {
                        descriptor.fields[item].errorStatus = false
                    }
                }
                let validator = new schema(descriptor)
                schema.plugin(schemaall)
                validator.validate(modalform, (errors, fields) => {
                    if (fields && fields.errors && fields.errors.length > 0) {
                        vm.lb_localdata.validator.errorStatus = true
                        return vm.handleValidateErrors(fields.fields, filed)
                    }
                })
            }

        },
        getLookUp(obj, key) {
            let result = ''
            if (obj && obj.length > 0) {
                if (key) {
                    result = obj[0][key]
                } else {
                    result = obj[0]
                }
            }
            return result
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        }
    }
}
