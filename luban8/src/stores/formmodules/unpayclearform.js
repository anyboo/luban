export default {
    'pageName': 'unpayclearform',
    'pageLable': '清除费用',
    'student': true,
    'form': {
        'order_id': '',
        'student_id': '',
        'classes_id': '',
        'times': 0,
        'amount': 0,
        'note': ''
    },
    'created': function (vm) {
        if (vm.$store.state.dialogs.dailogdata) {
            vm.order = vm.$store.state.dialogs.dailogdata
            vm.localdata.form.order_id = vm.order.order_id
            vm.localdata.form.classes_id = vm.order.classes_id
            vm.handleGetTableID('student', vm.order.student_id).then((obj) => {
                if (obj.data.length > 0) {
                    vm.$store.state.envs.currStudent = obj.data[0]
                    vm.currStudent = obj.data[0]
                }
            })
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
            'type': 'vmsubtext',
            'label': '购买课次',
            'prop': 'order',
            'subprop': 'origin_times',
            'text': '次'
        },
        {
            'type': 'vmsubtext',
            'label': '赠送课次',
            'prop': 'order',
            'subprop': 'present_times',
            'text': '次'
        },
        {
            'type': 'vmsubtext',
            'label': '课次单价',
            'prop': 'order',
            'subprop': 'unit_price',
            'text': '元'
        },
        {
            'type': 'numberinput',
            'label': '清除课次',
            'text': '次',
            'prop': 'times',
            'field': 'times'
        },
        {
            'type': 'numberinput',
            'label': '清除金额',
            'text': '元',
            'prop': 'amount',
            'field': 'amount',
            'max': function (vm) {
                let maxvalue = vm.order.unpay_amount
                return maxvalue
            },
        },
        {
            'type': 'input',
            'label': '清除备注',
            'prop': 'note',
            'field': 'note'
        }
    ],
    'pageTable': 'clear',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData(vm) {
        return {
            times: [
                { required: true, validator: vm.validateNumberinput, message: '请输入清除课次', trigger: 'blur' }
            ],
            amount: [
                { required: true, validator: vm.validateNumberinput, message: '请输入清除金额', trigger: 'blur' }
            ],
            note: [
                { required: true, message: '请输入清除原因', trigger: 'blur' },
                { min: 1, max: 256, message: '长度在 1 到 256个字符', trigger: 'blur' }
            ]
        }
    }
}
