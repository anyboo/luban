export default {
    'pageName': 'paynowform',
    'pageLable': '缴费',
    'student': true,
    'form': {
        'order_id': '',
        'student_id': '',
        'classes_id': '',
        'money_pay_amount': 0,
        'pay_type': 0,
        'use_balance': false,
        'balance_pay_amount': 0,
        'region_oe_id': '',
        'print': false
    },
    'numberChange': function (vm, obj) {
        if (obj.filed=="use_balance"||obj.filed=="balance_pay_amount"){
            if (vm.localdata.form.use_balance) {
                if (vm.localdata.form.balance_pay_amount == 0) {
                    if (vm.order.unpay_amount > vm.currStudent.amount) {
                        vm.localdata.form.balance_pay_amount = vm.currStudent.amount
                    } else {
                        vm.localdata.form.balance_pay_amount = vm.order.unpay_amount
                    }
                } else if (vm.localdata.form.balance_pay_amount > vm.order.unpay_amount) {
                    vm.localdata.form.balance_pay_amount = vm.order.unpay_amount
                }
                vm.localdata.form.money_pay_amount = vm.order.unpay_amount - vm.localdata.form.balance_pay_amount
            } else {
                vm.localdata.form.money_pay_amount = vm.order.unpay_amount
            }
            vm.$refs['ruleForm'].validateField('money_pay_amount')
        }
    },
    'created': function (vm) {
        if (vm.$store.state.dialogs.dailogdata) {
            vm.order = vm.$store.state.dialogs.dailogdata
            vm.currStudent = vm.$store.state.envs.currStudent
        }
    },
    'beforeSave': function (vm) {
        vm.localdata.form.order_id = vm.order._id
        vm.localdata.form.classes_id = vm.order.classes_id
    },
    'afterclose': function (vm, obj) {
        console.log(obj)
        vm.handleShowDialog('lb-finishorder', obj)
    },
    'afterSave': function (vm, obj) {
        return new Promise((resolve, reject) => {
            function updateOrder() {
                let unpay_amount = vm.order.unpay_amount - vm.localdata.form.money_pay_amount
                if (vm.localdata.form.use_balance) {
                    unpay_amount -= vm.localdata.form.balance_pay_amount
                }
                let pay_status = 1
                if (unpay_amount == 0) {
                    pay_status = 2
                } else if (unpay_amount == vm.order.order_amount) {
                    pay_status = 0
                }
                vm.order.unpay_amount = unpay_amount
                vm.order.pay_amount = vm.order.order_amount - unpay_amount
                vm.updateTeble('order', vm.order._id, {
                    'pay_status': pay_status,
                    'unpay_amount': unpay_amount,
                    'pay_amount': vm.order.pay_amount
                }).then(() => {
                    let flowform = {
                        'type': '1',              
                        'amount': obj.money_pay_amount,
                        'sel': '0',
                        'note': vm.order.body,            
                        'op_id': vm.order.op_id,          
                        'create_time': vm.order.createtime,  
                        'check_status': 0,
                    }
                    vm.handleSavedb({'table':'flow','form':flowform}).then(()=>{
                        resolve({ pay: obj, order: vm.order })
                    })
                })
            }
            function setStudentAmountOrder() {
                let amount = Number(vm.currStudent.amount) - Number(vm.localdata.form.balance_pay_amount)
                vm.currStudent.amount = amount
                vm.updateTeble('student', vm.currStudent._id, {
                    'amount': amount
                }).then(() => {
                    updateOrder()
                })
            }
            function setStudentAmount() {
                let amount = Number(vm.currStudent.amount) + Number(vm.order.back_amount) + Number(vm.order.origin_amount)
                vm.updateTeble('student', vm.currStudent._id, {
                    'amount': amount
                }).then(() => {
                    updateOrder()
                })
            }
            console.log(vm.order.order_type)
            if (vm.order.order_type == 2) {
                setStudentAmount()
            } else if (vm.order.order_type == 1) {
                setStudentAmountOrder()
            } else {
                updateOrder()
            }
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
            'type': 'orderpaystudent',
            'label': '余额付款',
            'prop': '',
            'field': 'balance_pay_amount',
            'fieldActive': 'use_balance',
            'text': '元',
            'max': function (vm) {
                let max = vm.order.unpay_amount
                if (vm.order.unpay_amount > vm.currStudent.amount) {
                    max = vm.currStudent.amount
                }
                return max
            }
        },
        {
            'type': 'numberinput',
            'label': '现款缴费',
            'prop': 'money_pay_amount',
            'field': 'money_pay_amount',
            'text': '元',
            'max': function (vm) {
                let maxvalue = vm.order.unpay_amount
                if (vm.localdata.form.use_balance) {
                    maxvalue -= vm.localdata.form.balance_pay_amount
                }
                return maxvalue
            },
            'required': function (vm) {
                let required = true
                if (vm.localdata.form.use_balance) {
                    if (vm.localdata.form.balance_pay_amount>0){
                        required = false
                    }
                }
                return required
            }
        },
        {
            'type': 'select',
            'label': '缴费方式',
            'prop': 'region_oe_id',
            'field': 'region_oe_id',
            'dict': function (vm) {
                let dict = 2
                return dict
            }
        },
    ],
    'pageTable': 'pay',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData: function (vm) {
        vm.validatemountinput = (rule, value, callback) => {
            let required = true
            if (vm.localdata.form.use_balance) {
                if (vm.localdata.form.balance_pay_amount>0){
                    required = false
                }
            }
            console.log(required,value)
            if (required){
                if (value === '') {
                    callback(new Error(rule.message))
                } else if (value <= 0) {
                    callback(new Error('请输入大于零的数'))
                } else {
                    callback()
                }
            }else{
                callback()
            }
        }
        return {
            money_pay_amount: [
                {  validator: vm.validatemountinput, message: '请输入金额', trigger: 'change' }
            ],
            region_oe_id: [
                { required: true, message: '请选择缴费方式', trigger: 'change' }
            ]
        }
    }
}
