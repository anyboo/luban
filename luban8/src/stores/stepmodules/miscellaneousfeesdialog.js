export default {
    'pageName': 'miscellaneousfeesdialog',
    'pageLable': '预充值',
    'student': true,
    'stepsInfo': [{
        'label': '创建订单',
        'module': 'miscellaneousfees',
        'buttons': [{
            'text': '下一步',
            'exec': function (vm) {
                vm.next()
            }
        }]
    },{
        'label': '缴费',
        'module': 'lb-orderandpay'
    }],
    'pageTable': 'attendance',
    'pagePath': ''
}
