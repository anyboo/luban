export default {
    'pageName': 'lessonclasses',
    'pageLable': '班级设置',
    'tableSearch': [{
        'localField': 'course_id',
        'from': 'course',
        'foreignField': '_id',
        'as': 'course'
    }, {
        'localField': 'teacher_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    }, {
        'localField': '_id',
        'from': 'order',
        'foreignField': 'classes_id',
        'as': 'order'
    }],
    'beforedelete': function (vm, data) {
        return new Promise((resolve, reject) => { 
            if (data.order && data.order.length > 0) {
                vm.$message({
                    type: 'info',
                    message: '该班级已有学员,班级不能删除'
                })
            } else {
                vm.getCount('coursescheduling', 'classes_id', data._id).then(count => {
                    if (count > 0) {
                        vm.$message({
                            type: 'info',
                            message: '该班级已有排课，请先删除排课后再进行此操作'
                        })
                    } else {
                        resolve(data)
                    }
                })
            }
        })
    },
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '班级名',
                    'defvalue': '',
                    'default': true,
                    'value': 'class_name'
                }/*,
                {
                    'label': '老师名',
                    'defvalue': '',
                    'default': false,
                    'value': 'employee.name'
                }*/
            ]
        },
        {
            'type': 'radioGroupSearch',
            'searchfunction': function (form) {
                console.log('js', form)
                let filterObj = []
                let status = form + ''
                if (status.length > 0) {
                    let opentime = new Date()
                    if (status == '0') {
                        filterObj.push({
                            'key': 'open_time',
                            'value': opentime.getTime(),
                            'type': 'lte'
                        })
                    }
                    if (status == '1') {
                        filterObj.push({
                            'key': 'open_time',
                            'value': opentime.getTime(),
                            'type': 'gt'
                        })
                    }
                    if (status == '2') {
                        filterObj.push({
                            'key': 'status',
                            'value': 2,
                            'type': ''
                        })
                    }
                }
                return filterObj
            },
            'fields': [
                {
                    'labels': [
                        { 'label': '已开课' },
                        { 'label': '未开课' },
                        { 'label': '已结课' },

                    ]
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '开班',
                    'type': 'success',
                    'showdialog': 'classesform',
                    'actionoption': 'lessonclasses'
                },
            ]
        },

    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting'
        },
        {
            'type': 'teacherRouter',
            'label': '班级名',
        },
        {
            'type': 'tabletext',
            'label': '老师',
            'prop': 'name',
            'table': 'employee'
        },
        {
            'type': 'tabletext',
            'label': '课程名',
            'table': 'course',
            'prop': 'lesson_name',
        },
        {
            'type': 'datetime',
            'label': '开课时间',
            'prop': 'open_time',
        },
        {
            'type': 'checkstatus',
            'statutype': 'openlessonsstatus',
            'label': '状态',
        },
        {
            'type': 'payconditions',
            'label': '缴费情况',
            'order': 'order',
        },
        {
            'type': 'textScale1',
            'label': '报名情况',
            'prop1': 'regcount',
            'prop2': 'max_student_num',
        }
    ],
    'pageTable': 'classes',
    'pageTemplate': 'table1',
    'pagePath': ''
}