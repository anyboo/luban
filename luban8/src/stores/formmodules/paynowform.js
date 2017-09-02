export default {
    'pageName': 'paynowform',
    'pageLable': '缴费',
    'student': true,
    'form': {
        'order_id': '',
        'student_id': '',
        'classes_id': '',
        'money_pay_amount': '',
        'pay_type': 0,
        'use_balance': false,
        'balance_pay_amount': 0,
        'region_oe_id': '请选择',
        'print': false
    },
    'mounted':function(vm){
        if (vm.$store.state.dialogs.dailogdata) {
            vm.order = vm.$store.state.dialogs.dailogdata
            console.log(vm.order)
        }
    },
    'formField': [
        {
            'type': 'vmsubtext',
            'label': '订单号',
            'prop': 'order',
            'subprop': 'order_no'
        },
        {
            'type': 'vmsubtext',
            'label': '订单内容',
            'prop': 'order',
            'subprop': 'body'
        },
        {
            'type': 'vmsubtext',
            'label': '订单金额',
            'prop': 'order',
            'subprop': 'order_amount',
            'text': '元'
        },
        {
            'type': 'vmsubtext',
            'label': '已缴金额',
            'prop': 'order',
            'subprop': 'pay_amount',
            'text': '元'
        },
        {
            'type': 'vmsubtext',
            'label': '未缴金额',
            'prop': 'order',
            'subprop': 'unpay_amount',
            'text': '元'
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
            'dict': function (vm) {
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
