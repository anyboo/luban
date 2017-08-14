export default {
    'pageName': 'studentlist1',
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
            'label': '学员'
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
            'label': '缴费状态',
            'prop': '欠费:￥22.00',
        },
        {
            'type': 'constant',
            'label': '报读课次',
            'prop': '4',
        },
        {
            'type': 'constant',
            'label': '课次单价',
            'prop': '￥16.50',
        },
        {
            'type': 'constant',
            'label': '剩余课次',
            'prop': '3',
        },
        {
            'type': 'constant',
            'label': '剩余金额',
            'prop': '￥49.5',
        },
        {
            'type': 'getEmployeeName',
            'label': '学员归属',
        },
        {
            'type': 'datetime',
            'label': '建档日期',
            'prop': 'creattime'
        },
    ],
    'pageTable': 'student',
    'pageTemplate': 'table1',
    'pagePath': ''
}