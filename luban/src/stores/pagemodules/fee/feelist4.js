export default {
    'pageName': 'feelist4',
    'pageLable': '退费明细',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'fields': [{}]
        },
        {
            'type': 'selectUserSearch',
            'fields': [{}]
        }
    ],
    'pageTableField': [
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'creattime'
        },
        {
            'type': 'getToFixed',
            'label': '退款金额',
            'prop': 'amount',
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name'
        }
    ],
    'pageTable': 'refund',
    'pageTemplate': 'table1',
    'pagePath': ''
}