export default {
    'pageName': 'orderform',
    'pageLable': '报名&缴费',
    'student': true,
    'form': {
        'class_id': '',
        'course_id': '',
        'origin_times': 0,
        'refund_status': 0,
        'back_amount': 0,
        'unit_price': 0,
        'origin_amount': 0,
        'has_discount': '',
        'has_present': '',
        'c_unit_price': '',
        'order_remark': '',
        'present_times': 0,
        'discount': 0,
        'discount_amount': 0,
        'order_amount': 0,
        'unpay_amount': 0,
        'pay_status': 0,
        'student_id': '',
        'order_no': '',
        'order_type': 1,
        'body': ''
    },
    'formField': [
        {
            'type': 'selectSearch',
            'label': '班级',
            'prop': 'classes_id',
            'field': 'classes_id',
            'text': '请选择',
            'showdialog': 'selectclassesdialog',
            'search': 'class_name',
            'table': 'classes'
        },
        {
            'type': 'numberinput',
            'label': '报名课次',
            'prop': '',
            'field': 'origin_times',
            'text': '次'
        },
        {
            'type': 'numberinput',
            'label': '课次单价',
            'prop': '',
            'field': 'unit_price',
            'text': '元/次'
        },
        {
            'type': 'numberinput',
            'label': '订单金额',
            'prop': '',
            'field': 'origin_amount',
            'text': '元'
        },
        {
            'type': 'switchdiscount',
            'switchlabel1': '折扣金额',
            'switchlabel2': '计算器',
            'prop': '',
            'field1': 'has_discount',
            'field2': 'discount',
            'fieldActive1':false,
            'fieldActive2':false,
            'text1':'元',
            'text2':'计算',
        },
        {
            'type': 'switchnumber',
            'label': '赠送课次',
            'prop': '',
            'field': 'has_present',
            'fieldActive':false,
            'text':'次'
        },
        {
            'type': 'lessonprice',
            'label': '课耗单价',
            'prop': '',
            'field': 'c_unit_price',
            'text': '元/次'
        },
        {
            'type': 'input',
            'label': '订单备注',
            'prop': '',
            'field': 'order_remark'
        },
        {
            'type': 'textTag',
            'label': '应缴金额',
            'prop': '',
            'field': 'order_amount',
            'text':'元'
        },
        {
            'type': 'textTag',
            'label': '总课次',
            'prop': '',
            'field': 'order_amount',
            'text':'次'
        },
    ],
    'pageTable': 'order',
    'pageTemplate': 'form',
    'pagePath': '',
    rules: {}
}