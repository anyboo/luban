export default {
    'pageName': 'storedvalueform',
    'pageLable': '报名&缴费',
    'student': true,
    'form': {
        'classes_id': '',
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
        'order_type': 3,
        'body': ''
    },
    'beforeSave':function(vm){
        vm.localdata.form.unpay_amount = vm.localdata.form.origin_amount
        vm.localdata.form.order_no = 'LB' + vm.moment().format('YYYYMMDDssSSSS')
        vm.localdata.form.body = '学杂费[' + vm.localdata.form.sel + '元]'
    },
    'formField': [
       {
            'type': 'select',
            'label': '缴费项目',
            'prop': 'sel',
            'field': 'sel',
            'dict': function(vm){
                let dict = 5
                return dict
            }
        },
        {
            'type': 'numberinput',
            'label': '订单金额',
            'prop': 'origin_amount',
            'field': 'origin_amount',
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
            'text':'元'
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'form',
    'pagePath': '',
    rules: {
        sel: [
            { required: true, message: '请选择缴费项目', trigger: 'blur' }
        ],
        origin_amount: [
            { required: true, message: '请输入订单金额', trigger: 'blur' },
            { min: 1, max: 300, message: '长度在 1 到 300 个字符', trigger: 'blur' }
        ]
    }
}
