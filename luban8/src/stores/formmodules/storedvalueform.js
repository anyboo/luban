export default {
    'pageName': 'storedvalueform',
    'pageLable': '报名&缴费',
    'form': {
        'class_id': '',
        'course_id': '',
        'origin_times': '',
        'unit_price': 0,
        'origin_amount': 0,
        'refund_status': 0,
        'back_amount': 0,
        'has_discount': '',
        'has_present': '',
        'c_unit_price': '',
        'order_remark': '',
        'present_times': '',
        'discount': 0,
        'discount_amount': 0,
        'order_amount': 0,
        'unpay_amount': 0,
        'pay_status': 0,
        'student_id': '',
        'order_no': '',
        'order_type': 2,
        'body': ''
    },
    'formField': [
        {
            'type': 'text',
            'label': '当前余额',
            'prop': '',
            'field': 'amount',
        },
        {
            'type': 'numberinput',
            'label': '充值金额',
            'prop': '',
            'field': 'origin_amount',
            'text': '元'
        },
        {
            'type': 'numberinput',
            'label': '返现金额',
            'prop': '',
            'field': 'back_amount',
            'text': '元'
        },
        {
            'type': 'input',
            'label': '订单备注',
            'prop': '',
            'field': 'order_remark',
        },
        {
            'type': 'text',
            'label': '应缴金额',
            'prop': '',
            'field': 'origin_amount',
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'form',
    'pagePath': '',
    rules: {}
}
