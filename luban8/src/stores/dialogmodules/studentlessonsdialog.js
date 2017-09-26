export default {
    'pageName': 'studentlessonsdialog',
    'pageLable': '请假',
    'modallg': true,
    'tableSearch': [{
        'localField': 'sclasses_id',
        'from': 'sclasses',
        'foreignField': '_id',
        'as': 'sclasses'
    }, {
        'localField': 'teacher_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    }, {
        'localField': 'classes_id',
        'from': 'classes',
        'foreignField': '_id',
        'as': 'classes'
    }],
    'tableChange': function (vm, data) {
        let filterObj = []
        return new Promise((resolve, reject) => {
            let attendance = []
            let coursescheduling = []
            for (let item of data) {
                item.attence_flag = '1'
                coursescheduling.push(item._id)
            }
            if (vm.stepsdata) {
                filterObj.push({
                    'key': 'coursescheduling_id',
                    'value': coursescheduling,
                    'type': 'in'
                })
                filterObj.push({
                    'key': 'student_id',
                    'value': vm.stepsdata._id,
                    'type': ''
                })
                let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
                vm.handleGetFilterTableTable('attendance', filterTxt).then((obj) => {
                    console.log(obj.data.data)
                    for (let item of data) {
                        for (let subitem of obj.data.data) {
                            if (subitem.coursescheduling_id == item._id) {
                                item.attence_id = subitem._id
                                item.attence_flag = subitem.attence_flag
                            }
                        }
                    }
                    resolve(data)
                })
            } else {
                resolve(data)
            }
        })
    },
    'created': function (vm) {
        vm.pagedatalateload = true
        vm.searchshowtext = vm.stepsdata.student_name
        let filterObj = []
        filterObj.push({
            'key': 'student_id',
            'value': vm.stepsdata._id,
            'type': ''
        })
        filterObj.push({
            'key': 'order_type',
            'value': 1,
            'type': ''
        })
        console.log(filterObj)
        let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
        vm.handleGetFilterTableTable('order', filterTxt).then((obj) => {
            console.log(obj.data.data)
            if (obj.data.data) {
                let classesid = []
                for (let item of obj.data.data) {
                    classesid.push(item.classes_id)
                }
                vm.deffilterObj.push({
                    'key': 'classes_id',
                    'value': classesid,
                    'type': 'in'
                })
                vm.pagedatalateload = false
                vm.handleSearch()
            }
        })
    },
    'attence': function (vm, param) {
        let eve = []
        for (let tableitem of vm.multipleSelection) {
            let item = {
                attence_flag: param,
                classes_id: tableitem.classes_id,
                sclasses_id: tableitem.sclasses_id,
                teacher_id: tableitem.teacher_id,
                student_id: vm.stepsdata._id,
                coursescheduling_id: tableitem._id,
                org_id: vm.$store.state.system.org_id,
                campus_id: vm.$store.state.system.campus_id
            }
            if (tableitem.attence_id) {
                item._id = tableitem.attence_id
            } else {
                let createtime = new Date()
                item.createtime = createtime.getTime()
            }
            eve.push(item)
        }
        if (eve.length > 0) {
            vm.mx_db_bulkwrite('attendance', eve).then(response => {
                let getcountarray = []
                let updatecountarray = []
                let getclassarray = []
                let updateclassarray = []
                for (let tableitem of vm.multipleSelection) {
                    let coursescheduling_id = tableitem._id
                    let classes_id = tableitem.classes_id
                    updatecountarray.push({
                        '_id': coursescheduling_id,
                        'attend': true,
                        'schedulingcount': tableitem.schedulingcount
                    })
                    if (updateclassarray.indexOf(classes_id) == -1) {
                        updateclassarray.push({
                            '_id': classes_id,
                            'attendcount': 0
                        })
                        let query = { 'attend': true }
                        getclassarray.push(vm.getCount('coursescheduling', 'classes_id', classes_id, query))
                    }
                    getcountarray.push(vm.getCount('attendance', 'coursescheduling_id', coursescheduling_id))
                }
                Promise.all(getcountarray).then(countobj => {
                    for (let i in updatecountarray) {
                        if (i < countobj.length) {
                            updatecountarray[i].schedulingcount = countobj[i]
                        }
                    }
                    vm.mx_db_bulkwrite('coursescheduling', updatecountarray).then(update => {
                        Promise.all(getclassarray).then(classesobj => {
                            for (let i in updateclassarray) {
                                if (i < classesobj.length) {
                                    updateclassarray[i].attendcount = classesobj[i]
                                }
                            }
                            vm.mx_db_bulkwrite('classes', updateclassarray).then(() => {
                                vm.$store.state.envs.currDialog = 'moduleform'
                                vm.$message({
                                    message: '操作成功',
                                    type: 'success'
                                })
                                vm.handleSearch()
                            })
                        })
                    })
                })
            })
        } else {
            vm.$message({
                message: '请选择一个排课',
                type: 'success'
            })
        }
    },
    'pageSearch': [
        {
            'type': 'dateSearch',
            'searchfunction': function (form,vm) {
                let filterObj = []
                if (form && form.length == 2) {
                    let startTime = vm.getDatetime(form[0])
                    let endTime = vm.getDatetime(form[1])
                    if (startTime > 0) {
                        if (startTime == endTime) {
                            endTime = vm.getDatetimeEndOf(form[1])
                        }
                        filterObj.push({
                        'key': 'daterange1',
                        'value': start,
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'daterange1',
                        'value': start,
                        'type': 'lte'
                    })
                    }
                }
                console.log('22222', filterObj)
                return filterObj
            },
            'fields': [{}]
        },
        {
            'type': 'selectSearch',
            'searchfunction': function (form, vm) {
                let filterObj = []
                let searchValue = form + ''
                if (searchValue.length > 0) {
                    vm.deffilter = false
                    filterObj.push({
                        'key': 'classes_id',
                        'value': searchValue,
                        'type': ''
                    })
                } else {
                    vm.deffilter = true
                }
                return filterObj
            },
            'fields': [
                {
                    'text': '请选择班级',
                    'showdialog': 'selectclassesdialog',
                    'search': 'class_name',
                    'table': 'classes'
                }
            ]
        }, {
            'type': 'singleBtnSearch',
            'span': 5,
            'fields': [
                {
                    'label': '上课',
                    'type': 'success',
                    'func': 'attence',
                    'param': '2',
                    'actionoption': 'lessonmanageadd'
                }, {
                    'label': '请假',
                    'type': '',
                    'func': 'attence',
                    'param': '3',
                    'actionoption': 'lessonmanageles'
                },
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'checkbox',
            'label': '',
        },
        {
            'type': 'tabletext',
            'label': '班级',
            'table': 'classes',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': '教室',
            'table': 'sclasses',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': '老师',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'start',
        },
        {
            'type': 'datetimeRange',
            'label': '时间段',
            'prop1': 'start',
            'prop2': 'end',
        },
        {
            'type': 'checkweek',
            'label': '星期',
        },
        {
            'type': 'checkstatus',
            'statutype': 'attenceStatus',
            'label': '考勤状态',
        }
    ],
    'pageTable': 'coursescheduling',
    'pageTemplate': 'table1',
    'pagePath': ''
}