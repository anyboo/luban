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
                    'showdialog':'lb-selectstudenttpl',
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