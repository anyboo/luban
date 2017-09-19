export default {
    'pageName': 'systembuyform',
    'pageLable': '短信购买',
    'form': {
        'sms_count': 1000,
        'order_amount': 90,
        'combo': '90'
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
        Vue.http.get('http://app.bullstech.cn/luban8/api/org?filter=' + filterTxt).then(obj => {
            if (obj.data.count > 0) {
                vm.org = obj.data.data[0]
            } else {
            }
        }).catch(() => {
        })
    },
    'selectChange': function (vm, obj) {
        vm.localdata.form.order_amount = obj
        if (obj == 90) {
            vm.localdata.form.sms_count = 1000
        } else if (obj == 250) {
            vm.localdata.form.sms_count = 3000
        } else if (obj == 350) {
            vm.localdata.form.sms_count = 5000
        }
        console.log(obj)
    },
    'handleSave': function (vm) {
        return new Promise((resolve, reject) => {
            let amount = 0
            if (vm.org.amount){
                amount = vm.org.amount
            }
            console.log(amount , vm.localdata.form.order_amount)
            if (amount > vm.localdata.form.order_amount) {
                vm.$message({
                    type: 'info',
                    message: '请先充值后再购买！'
                })
                reject({})
            } else {
                vm.$message({
                    type: 'info',
                    message: '请先充值后再购买！'
                })
                resolve({})
            } 
        })
    },
    'formField': [
        {
            'type': 'vmsubtext',
            'label': '当前余额',
            'prop': 'org',
            'subprop': 'amount',
            'text': '元'
        },
        {
            'type': 'selectoptions',
            'label': '套餐选择',
            'prop': 'combo',
            'field': 'combo',
            'optionData': [{
                value: '90',
                label: '1000条/90元'
            }, {
                value: '250',
                label: '3000条/250元'
            }, {
                value: '350',
                label: '50000条/350元'
            }],
        },
        {
            'type': 'text',
            'label': '应缴金额',
            'prop': '',
            'field': 'order_amount',
            'text': '元'
        },
        {
            'type': 'text',
            'label': '条数',
            'prop': '',
            'field': 'sms_count',
            'text': '条'
        }
    ],
    'pagedb': 'luban8',
    'pageTable': 'smsorder',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData(vm) {
        return {
            combo: [
                { required: true, message: '请选择缴费项目', trigger: 'change' }
            ]
        }
    }
}
