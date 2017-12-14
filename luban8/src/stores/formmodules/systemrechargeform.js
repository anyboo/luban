export default {
    'pageName': 'systemrechargeform',
    'pageLable': '系统缴费',
    'form': {
        'order_remark': '',
        'order_amount': 0,
        'pay_status': 0,
        'order_no': '',
        'order_type': 1,
        'amount': 0,
        'body': ''
    },
    'created': function (vm) {
        vm.localdata.form.db = vm.$store.state.system.db
        let filterObj = []
        filterObj.push({
            'key': '_id',
            'value': vm.$store.state.system.org_id,
            'type': ''
        })
        let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
        Vue.http.get('http://api.luban8.cn:8888/luban8/api/org?filter=' + filterTxt).then(obj => {
            if (obj.data.count > 0) {
                vm.localdata.form.amount = obj.data.data[0].amount
            } else {
            }
        }).catch(() => {
        })
    },
    'beforeSave': function (vm) {
        vm.localdata.form.order_no = 'LB' + vm.moment().format('YYYYMMDDssSSSS')
        vm.localdata.form.body = '交费[' + vm.localdata.form.order_amount + '元]'
        vm.localdata.form.amount = null
        delete vm.localdata.form.amount
    },
    'formField': [
        {
            'type': 'text',
            'label': '当前余额',
            'field': 'amount',
            'text': '元'
        },
        {
            'type': 'numberinput',
            'label': '充值金额',
            'prop': 'order_amount',
            'field': 'order_amount',
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
            'field': 'order_amount',
            'text': '元'
        }
    ],
    'pagedb': 'luban8',
    'pageTable': 'order',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData(vm) {
        return {
            order_amount: [
                { required: true, validator: vm.validateNumberinput, message: '请输入充值金额', trigger: 'blur' }
            ],
        }
    }
}