export default {
    'pageName': 'rechargesearchdialogs',
    'pageLable': '充值记录',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '订单号',
                    'defvalue': '',
                    'default': true,
                    'value': 'student_name'
                },
                {
                    'label': '订单时间',
                    'defvalue': '',
                    'default': false,
                    'value': 'sex'
                },
                {
                    'label': '金额',
                    'defvalue': '',
                    'default': false,
                    'value': 'nickname'
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'text',
            'label': '订单号',
            'prop': 'order_no'
        },
        {
            'type': 'datetime',
            'label': '订单时间',
            'prop': 'creattime',
        },
        {
            'type': 'text',
            'label': '金额',
            'prop': 'order_amount'
        },
        {
            'type': 'getButtongroupText',
            'label': '支付状态',
            'color': 'gray',
            'othertype': [{
                'value': 0,
                'text': '未支付'
            }, {
                'value': 1,
                'text': '已支付'
            }, {
                'value': 2,
                'text': '支付失败'
            }],
            'prop': 'pay_status'
        },
    ],
    'pagedb': 'luban8',
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': '',
    rulesData(vm) {
        return {
            sms_count: [
                { required: true, message: '请选择缴费项目', trigger: 'change' }
            ]
        }
    }
}