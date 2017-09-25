export default {
    'pageName': 'refundlistdialog',
    'pageLable': '欠费清除',
    'student': true,
    'tableSearch': [],
    'pageSearch': [],
    'created':function(vm){
        if (vm.$store.state.dialogs.dailogdata) {
            vm.order = vm.$store.state.dialogs.dailogdata
            vm.handleGetTableID('student', vm.order.student_id).then((obj) => {
                if (obj.data.length > 0) {
                    vm.$store.state.envs.currStudent = obj.data[0]
                }
            })
            vm.deffilterObj.push({
                'key': 'order_id',
                'value': vm.order._id,
                'type': ''
            })
        }
    },
    'pageTableField': [
        {
            'type': 'datetimeMinute',
            'label': '缴费日期',
            'prop': 'createtime'
        },
        {
            'type': 'text',
            'label': '缴费金额',
            'prop': 'money_pay_amount',
        },
        {
            'type': 'constant',
            'label': '缴费方式',
            'prop': '现金'
        }
    ],
    'pageTable': 'pay',
    'pageTemplate': 'table1',
    'pagePath': ''
}