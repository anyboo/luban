export default {
    'pageName': 'payRecord',
    'pageLable': '缴费记录',
    'tableSearch': [{
        'localField': 'class_id',
        'from': 'classes',
        'foreignField': '_id',
        'as': 'classes'
    }, {
        'localField': 'order_id',
        'from': 'order',
        'foreignField': '_id',
        'as': 'order'
    },
    ],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'creattime',
        },
        {
            'type': 'text',
            'label': '金额',
            'prop': 'money_pay_amount'
        },
        {
            'type': 'payment',
            'label': '付款方式',
            'prop': 'region_oe_id'
        },
        {
            'type': 'tabletext',
            'label': '订单内容',
            'prop': 'body',
            'table': 'order'
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