export default {
    'pageName': 'systemrechargedialog',
    'pageLable': '充值',
    'stepsInfo': [{
        'label': '创建订单',
        'module': 'systemrechargeform',
        'buttons': [{
            'text': '下一步',
            'exec': function (vm) {
                vm.next()
            }
        }]
    },{
        'label': '缴费',
        'module': 'lb-sysorderandpay'
    }],
    'pageTable': 'rechargesearchorder',
    'pagePath': ''
}
