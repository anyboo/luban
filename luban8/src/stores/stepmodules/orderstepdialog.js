export default {
    'pageName': 'orderstepdialog',
    'pageLable': '报名',
    'student': true,
    'stepsInfo': [{
        'label': '创建订单',
        'module': 'studentorderform',
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
