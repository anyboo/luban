export default {
    'pageName': 'studentlist2',
    'pageLable': '在读学员',
    'tableSearch': [{
        'localField': 'region_oe_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    }],
    'pageSearch': [
        {
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'labels': [
                        { 'label': '已缴费' },
                        { 'label': '部分缴费' },
                        { 'label': '未缴费' },
                    ]
                }
            ]
        },
        {
            'type': 'selectUserSearch',
            'fields': [
                {}
            ]
        },
        // {
        //     'type': 'classesSearch',
        //     'fields': [
        //         {}
        //     ]
        // },
    ],
    'pageTableField': [
        {
            'type': 'studentRouter',
            'label': '学员',
            'sex': 'sex',
            'student_name': 'student_name',
            'nickname': 'nickname'
        },
        {
            'type': 'text',
            'label': '联系电话',
            'prop': 'first_tel',
        },
        {
            'type': 'constant',
            'label': '所在班级',
            'prop': '班级一班',
        },
        {
            'type': 'constant',
            'label': '授课老师',
            'prop': '张英乙',
        },
        {
            'type': 'constant',
            'label': '报班日期',
            'prop': '2017-05-13',
        },
         {
            'type': 'constant',
            'label': '结课日期',
            'prop': '2017-05-15',
        },
        {
            'type': 'constant',
            'label': '报读课次',
            'prop': '4',
        },
        {
            'type': 'constant',
            'label': '实际消耗',
            'prop': '1',
        },
        {
            'type': 'constant',
            'label': '缴费状态',
            'prop': '已缴清',
        },
    ],
    'pageTable': 'student',
    'pageTemplate': 'table1',
    'pagePath': ''
}