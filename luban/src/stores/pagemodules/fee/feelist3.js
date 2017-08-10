export default {
    'pageName': 'feelist3',
    'pageLable': '欠费明细',
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
            'type': 'operation',
            'label': '操作',
        },
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'creattime'
        },
        {
            'type': 'text',
            'label': '订单号',
            'prop': 'order_no',
        },
        {
            'type': 'text',
            'label': '订单内容',
            'prop': 'body'
        },
        {
            'type': 'getToFixed',
            'label': '欠费金额',
            'prop': 'unpay_amount',
        },
        {
            'type': 'getToFixed',
            'label': '总金额',
            'prop': 'order_amount'
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table':'student',
            'prop': 'student_name'
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}