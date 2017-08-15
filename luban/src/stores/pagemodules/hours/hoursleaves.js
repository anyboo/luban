export default {
    'pageName': 'hoursleaves',
    'pageLable': '班级设置',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }],
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
                console.log('22222', filterObj)
                return filterObj
            },
            'fields': [{} ]
        },
        {
            'type': 'selectUserSearch',
            'fields': [{}]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '请假登记',
                    'type': 'success',
                    'showdialog':'lb-leaveshours',
                    'actionoption':'hoursleaves'
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
            'type': 'datetime',
            'label': '请假时间',
            'prop': 'daterange1'
        },
        {
            'type': 'datetime',
            'label': '复课时间',
            'prop': 'daterange2',
        },
        {
            'type': 'text',
            'label': '请假原因',
            'prop': 'reason',
        },
        {
            'type': 'datetime',
            'label': '登记时间',
            'prop': 'createtime',
        }
    ],
    'pageTable': 'leaves',
    'pageTemplate': 'table1',
    'pagePath': ''
}