export default {
    'pageName': 'feelist1',
    'pageLable': '缴费明细',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }, {
        'localField': 'class_id',
        'from': 'classes',
        'foreignField': '_id',
        'as': 'classes'
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
            'label': '金额',
            'prop': 'money_pay_amount',
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table':'student',
            'prop': 'student_name'
        },
        {
            'type': 'payment',
            'label': '付款方式',
            'prop': 'region_oe_id',
        },
        {
            'type': 'tabletext',
            'label': '课程/班级',
            'table':'classes',
            'prop': 'class_name'
        },
        {
            'type': 'text',
            'label': '备注',
            'prop': 'order_remark'
        }
    ],
    'pageTable': 'pay',
    'pageTemplate': 'table1',
    'pagePath': ''
}