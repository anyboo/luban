export default {
    'pageName': 'paynowform',
    'pageLable': '班级',
    'form': {
        'order_id': '',
        'student_id': '',
        'class_id': '',
        'money_pay_amount': '',
        'pay_type': 0,
        'use_balance': false,
        'balance_pay_amount': 0,
        'region_oe_id': '请选择',
        'print': false
    },
    'formField': [
        {
            'type': 'text',
            'label': '学员',
            'prop': '',
            'field': 'student_name',
        },
        {
            'type': 'text',
            'label': '订单号',
            'prop': '',
            'field': 'order_no'
        },
        {
            'type': 'text',
            'label': '订单内容',
            'prop': '',
            'field': 'body'
        },
        {
            'type': 'text',
            'label': '订单金额',
            'prop': '',
            'field': 'order_amount',
            'text':'元'
        },
        {
            'type': 'subduction',
            'label': '已缴金额',
            'prop': '',
            'field1': 'order_amount',
            'field2': 'unpay_amount'
        },
        {
            'type': 'text',
            'label': '未缴金额',
            'prop': '',
            'field': 'unpay_amount',
            'text':'元'
        },
        {
            'type': 'numberinput',
            'label': '现款缴费',
            'prop': '',
            'field': 'money_pay_amount',
            'text': '元'
        },
        {
            'type': 'select',
            'label': '缴费方式',
            'prop': '',
            'field': 'sel',
            'dict': function(vm){
                let dict = 2
                return dict
            }
        },
    ],
    'pageTable': 'pay',
    'pageTemplate': 'form',
    'pagePath': '',
    rules: {}
}
