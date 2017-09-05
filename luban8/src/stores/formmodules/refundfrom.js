export default {
    'pageName': 'refundfrom',
    'pageLable': '确认退款',
    'student': true,
    'form': {
        'order_id': '',
        'student_id': '',
        'pay_id': '',
        'classes_id': '',
        'money_pay_amount': '',
        'amount': 0,
        'refund_to': '0',
        'money_refund_to': '1',
        'times_policy': '0',
        'times': 0,
        'note': ''
    },
    'created': function (vm) {
        vm.localdata.form.pay_id = vm.stepsdata._id
        vm.localdata.form.order_id = vm.stepsdata.order_id
        vm.localdata.form.classes_id = vm.stepsdata.classes_id
        vm.order = {}
        vm.handleGetTableID('order', vm.stepsdata.order_id).then((obj) => {
            if (obj.data && obj.data.length > 0) {
                vm.order = obj.data[0]
            }
        })
    },
    'afterSave': function (vm, obj) {
        return new Promise((resolve, reject) => {
            let back_amount = Number(vm.localdata.form.amount) + Number(vm.order.back_amount)
            let refund_status = 1
            if (back_amount == 0) {
                refund_status = 0
            } else if (back_amount == vm.order.order_amount) {
                refund_status = 2
            }
            vm.updateTeble('order', vm.order._id, {
                'refund_status': refund_status,
                'back_amount': back_amount
            }).then(() => {
                vm.$message({
                    message: '退款成功',
                    type: 'success'
                })
                resolve({ order: vm.order })
            })
        })
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
            'label': '已退金额',
            'prop': 'order',
            'subprop': 'back_amount',
            'text': '元'
        },
        /*
         {
             'type': 'getorderPay',
             'label': '课耗金额',
             'prop': '',
             'field': 'getorderPay',
             'text':'元'
         },
         {
             'type': 'getorder',
             'label': '可退金额',
             'prop': '',
             'field': 'getorder',
             'text':'元'
         },
         {
             'type': 'getDatetimeFormat',
             'label': '缴费日期',
             'prop': '',
             'field': 'creattime'
         },*/
        {
            'type': 'numberinput',
            'label': '退款金额',
            'prop': 'amount',
            'field': 'amount',
            'text': '元',
            'max': function (vm) {
                let maxvalue = vm.order.pay_amount - vm.order.back_amount
                return maxvalue
            },
        },
        {
            'type': 'radiogroup',
            'label': '退款方式',
            'prop': 'refund_to',
            'field': 'refund_to',
            'labels': [
                { 'label': '现金' },
                { 'label': '原路返回' }
            ]
        },
        {
            'type': 'radiogroup',
            'label': '现金退款',
            'prop': 'money_refund_to',
            'field': 'money_refund_to',
            'labels': [
                { 'label': '退现金' },
                { 'label': '退到钱包余额' }
            ]
        },/*
        {
            'type': 'radiogroup',
            'label': '课时处理',
            'prop': 'times_policy',
            'field': 'times_policy',
            'labels': [
                { 'label': '不用处理' },
                { 'label': '直接结课' },
                { 'label': '扣减课次' }
            ]
        },*/
        {
            'type': 'input',
            'label': '退款备注',
            'prop': '',
            'field': 'note'
        },
    ],
    'pageTable': 'refund',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData(vm) {
        return {
            amount: [
                { required: true, validator: vm.validateNumberinput, message: '请输入退款金额', trigger: 'blur' }
            ],
        }
    }
}