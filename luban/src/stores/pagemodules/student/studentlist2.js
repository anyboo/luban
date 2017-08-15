export default {
    'pageName': 'studentlist2',
    'pageLable': '在读学员',
    'tableSearch': [
        {
            'localField': 'student_id',
            'from': 'student',
            'foreignField': '_id',
            'as': 'student'
        },
    ],
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
            'type': 'studentRouter1',
            'label': '学员'
        },
        {
            'type': 'tabletext',
            'label': '联系电话',
            'table':'student',
            'prop': 'first_tel'
        },
        {
            'type': 'tabletext',
            'label': '所在班级',
            'table':'classes',
            'prop': 'class_name'
        },
        {
            'type': 'constant',
            'label': '授课老师',
            'prop': '老师'
        },
        {
            'type': 'datetime',
            'label': '报班日期',
            'prop': 'creattime',
        },
        {
            'type': 'constant',
            'label': '结课日期',
            'prop': '2017-05-15',
        },
       {
            'type': 'text',
            'label': '报读课次',
            'prop': 'origin_times',
        },
        {
            'type': 'constant',
            'label': '实际消耗',
            'prop': '1',
        },
        {
            'type': 'getButtongroupText',
            'label': '缴费状态',
            'color': 'gray',
            'prop': 'pay_status',
            'othertype': [{
                'value': 0,
                'text': '未缴费'
            }, {
                'value':1,
                'text': '部分缴费'
            }, {
                'value': 2,
                'text': '已缴费'
            }]
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}