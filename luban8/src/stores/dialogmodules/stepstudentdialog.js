export default {
    'pageName': 'stepstudentdialog',
    'pageLable': '选择学员',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student',
    }, {
        'key': 'order_type',
        'value': 1,
        'type': ''
    }],
    'paginationhide': true,
    'pagesize': 500,
    'created': function (vm) {
        if (vm.$store.state.dialogs.dailogdata) {
            vm.selectsearchValue = vm.$store.state.dialogs.dailogdata._id
            vm.deffilterObj.push({
                'key': 'classes_id',
                'value': vm.selectsearchValue,
                'type': ''
            })
        }
    },
    'tableChange': function (vm, data) {
        let filterObj = []
        return new Promise((resolve, reject) => {
            let attendance = []
            if (vm.stepsdata) {
                filterObj.push({
                    'key': 'coursescheduling_id',
                    'value': vm.stepsdata._id,
                    'type': ''
                })
                let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
                vm.handleGetFilterTableTable('attendance', filterTxt).then((obj) => {
                    for (let subitem in data) {
                        let studentarray = data[subitem].student
                        if (studentarray && studentarray.length > 0) {
                            let student = studentarray[0]
                            student.attence_flag = '1'
                            for (let item in obj.data.data) {
                                let attenitem = obj.data.data[item]
                                if (student._id == attenitem.student_id) {
                                    student.attence_id = attenitem._id
                                    student.attence_flag = attenitem.attence_flag
                                }
                            }
                            if (student.attence_flag == vm.radiovalue) {
                                attendance.push(student)
                            } else if (vm.radiovalue == '0') {
                                attendance.push(student)
                            }
                        }
                    }
                    resolve(attendance)
                })
            } else {
                resolve(attendance)
            }
        })
    },
    'attence': function (vm, param) {
        let eve = []
        for (let tableitem of vm.multipleSelection) {
            let item = {
                attence_flag: param,
                classes_id: vm.stepsdata.classes_id,
                sclasses_id: vm.stepsdata.sclasses_id,
                teacher_id: vm.stepsdata.teacher_id,
                student_id: tableitem._id,
                coursescheduling_id: vm.stepsdata._id,
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
                vm.getCount('attendance', 'coursescheduling_id', vm.stepsdata._id).then(data => {
                    console.log('attendance----', data, vm.stepsdata._id)
                    vm.updateTeble('coursescheduling', vm.stepsdata._id, {
                        'attend': true,
                        'schedulingcount': data
                    }).then(() => {
                        let query = { 'attend': true }
                        vm.getCount('coursescheduling', 'classes_id', vm.stepsdata.classes_id, query).then(data => {
                            vm.handleGetTableID('student', vm.stepsdata.classes_id).then((obj) => {
                                if (obj.data.length > 0) {
                                    let classesdata = {
                                        'attendcount': data,
                                        'closed': false
                                    }
                                    classesdata.closed = obj.data[0].inc_timesprice >= data
                                    if (classesdata.closed) {
                                        classesdata.class_flag = 2
                                    }
                                    vm.updateTeble('classes', vm.stepsdata.classes_id, classesdata).then(() => {
                                        vm.$store.state.envs.currDialog = 'moduleform'
                                    })
                                }
                            })
                        })
                    })
                    vm.$message({
                        message: '操作成功',
                        type: 'success'
                    })
                    vm.handleSearch()
                })
            })
        } else {
            vm.$message({
                message: '请选择一个学员',
                type: 'success'
            })
        }
    },
    'pageSearch': [
        {
            'type': 'radioGroupSearch',
            'searchfunction': function (form) {
                let filterObj = []
                return filterObj
            },
            'fields': [
                {
                    'labels': [
                        { 'label': '所有' },
                        { 'label': '未考勤' },
                        { 'label': '已考勤' },
                        { 'label': '请假' },
                    ]
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'span': 5,
            'fields': [
                {
                    'label': '签到',
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
    'dialogUrl': 'selectstudentdialog',
    'pageTableField': [
        {
            'type': 'checkbox',
            'label': '',
        },
        {
            'type': 'text',
            'label': '学员',
            'prop': 'student_name'
        },
        {
            'type': 'text',
            'label': '英文名',
            'prop': 'nickname',
        },
        {
            'type': 'checkstatus',
            'statutype': 'attenceStatus',
            'label': '考勤状态',
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}