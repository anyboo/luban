export default {
    'pageName': 'refundstepdialog',
    'pageLable': '退费',
    'student': true,
    'stepsInfo': [{
        'label': '选择缴费记录',
        'module': 'refundlistdialog',
        'buttons': []
    }, {
        'label': '确认退款',
        'module': 'refundform',
        'buttons': [{
            'text': '确定',
            'exec': function (vm) { 
                vm.$refs['ruleForm'].append().then((obj) => {
                    vm.lbClosedialog()
                    vm.$store.state.dialogs.dailogdata = null
                    vm.$store.state.envs.currDialog = 'moduleform'
                })
            }
        }]
    }],
    'pageTable': 'refund',
    'pagePath': ''
}
