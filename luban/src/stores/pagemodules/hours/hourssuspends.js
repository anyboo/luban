export default {
    'pageName': 'hourssuspends',
    'pageLable': '停课设置',
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
                    'label': '停课登记',
                    'type': 'success',
                    'showdialog':'lb-suspendshours',
                    'actionoption':'hourssuspends'
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
            'label': '停课学员',
            'table': 'student',
            'prop': 'student_name',
        },
        {
            'type': 'datetime',
            'label': '停课时间',
            'prop': 'daterange1'
        },
        {
            'type': 'text',
            'label': '停课原因',
            'prop': 'reason',
        },
        {
            'type': 'datetime',
            'label': '登记时间',
            'prop': 'createtime',
        }
    ],
    'pageTable': 'suspend',
    'pageTemplate': 'table1',
    'pagePath': ''
}