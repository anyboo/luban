export default {
    'pageName': 'systembuyform',
    'pageLable': '短信购买',
    'form': {
        'sms_count': '',
        'origin_amount': 0,
        'combo':''
    },
    'selectChange': function (vm, obj) {
        vm.localdata.form.origin_amount = obj
        if(obj==500){
            vm.localdata.form.sms_count=1000
        }else if(obj==2300){
            vm.localdata.form.sms_count=5000
        }else if(obj==4500){
            vm.localdata.form.sms_count=10000
        }
        console.log(obj)
    },
    'formField': [
        {
            'type': 'selectoptions',
            'label': '套餐选择',
            'prop': 'combo',
            'field': 'combo',
            'optionData': [{
                value: '500',
                label: '1000条/500元'
            }, {
                value: '2300',
                label: '5000条/2300元'
            }, {
                value: '4500',
                label: '10000条/4500元'
            }],
        },
        {
            'type': 'text',
            'label': '应缴金额',
            'prop': '',
            'field': 'origin_amount',
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
    'pageTable': 'rechargeorder',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData(vm) {
        return {
            sms_count: [
                { required: true, message: '请选择缴费项目', trigger: 'change' }
            ]
        }
    }
}
