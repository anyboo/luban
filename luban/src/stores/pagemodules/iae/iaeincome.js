export default {
    'pageName': 'iaeicome',
    'pageLable': '收入明细',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }, {
        'localField': 'teacher_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    }],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'fields': [{}]
        },
        {
            'type': 'selectUserSearch',
            'fields': [{}]
        },
        {
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'label': '未对账',
                    'icon': ''
                },
                {
                    'label': '已对账',
                    'icon': ''
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name',
        },
        {
            'type': 'datetime',
            'label': '付款日期',
            'prop': 'create_time'
        },
        {
            'type': 'textTag',
            'label': '金额',
            'prop': 'amount',
            'color': 'gray'
        },
        {
            'type': 'constant',
            'label': '付款方式',
            'prop': '现金',
        },
        {
            'type': 'text',
            'label': '备注',
            'prop': 'note',
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'checkstatus',
            'statutype':'accountcheck',
            'label': '对账状态'
        },
        {
            'type': 'checkstatus',
            'statutype':'checkAccount',
            'label': '操作'
        }
    ],
    'pageTable': 'flow',
    'pageTemplate': 'table1',
    'pagePath': ''
}