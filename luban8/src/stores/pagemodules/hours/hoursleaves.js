export default {
    'pageName': 'hoursleaves',
    'pageLable': '班级设置',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }, {
        'localField': 'coursescheduling_id',
        'from': 'coursescheduling',
        'foreignField': '_id',
        'as': 'coursescheduling'
    }, {
        'key': 'attence_flag',
        'value': '3',
        'type': ''
    }],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'searchfunction': function (form, vm) {
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
                            'value': startTime,
                            'type': 'gte'
                        })
                        filterObj.push({
                            'key': 'daterange1',
                            'value': endTime,
                            'type': 'lte'
                        })
                    }
                }
                return filterObj
            },
            'fields': [{}]
        },
        {
            'type': 'selectSearch',
            'searchfunction': function (form) {
                let filterObj = []
                let searchValue = form + ''
                if (searchValue.length > 0) {
                    filterObj.push({
                        'key': 'student_id',
                        'value': searchValue,
                        'type': ''
                    })
                }
                return filterObj
            },
            'fields': [
                {
                    'text': '请选择学员',
                    'showdialog': 'selectstudentdialog',
                    'search': 'student_name'
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '请假登记',
                    'type': 'success',
                    'showdialog': 'studentattendancedialog',
                    'actionoption': 'hoursleaves'
                }
            ]
        },

    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
        },
        {
            'type': 'tabletext',
            'label': '请假学员',
            'table': 'student',
            'prop': 'student_name',
        },
        {
            'type': 'tabledatetime',
            'label': '日期',
            'table': 'coursescheduling',
            'prop': 'start',
        },
        {
            'type': 'datetimetableRange',
            'label': '时间段',
            'table': 'coursescheduling',
            'prop1': 'start',
            'prop2': 'end',
        },
        {
            'type': 'tablecheckweek',
            'table': 'coursescheduling',
            'prop': 'days',
            'label': '星期',
        }
    ],
    'pageTable': 'attendance',
    'pageTemplate': 'table1',
    'pagePath': ''
}