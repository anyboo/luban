export default {
    'pageName': 'payRecord',
    'pageLable': '缴费记录',
    'tableSearch': [{
        'localField': 'order_id',
        'from': 'order',
        'foreignField': '_id',
        'as': 'order'
    },{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student',
    }],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name'
        },
        {
            'type': 'datetimeMinute',
            'label': '日期',
            'prop': 'createtime',
        },
        {
            'type': 'text',
            'label': '金额',
            'prop': 'money_pay_amount'
        },
        {
            'type': 'tabletext',
            'label': '订单号',
            'table': 'order',
            'prop': 'order_no'
        },
        {
            'type': 'dicttext',
            'label': '付款方式',
            'prop': 'region_oe_id',
        },
        {
            'type': 'getButtongrouplookupText',
            'label': '类型',
            'color': 'gray',
            'table': 'order',
            'prop': 'order_type',
            'othertype': [{
                'value': 1,
                'text': '报名费'
            }, {
                'value': 2,
                'text': '预交费'
            }, {
                'value': 3,
                'text': '学杂费'
            }],
        },
        {
            'type': 'tabletext',
            'label': '缴费内容',
            'table': 'order',
            'prop': 'body'
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