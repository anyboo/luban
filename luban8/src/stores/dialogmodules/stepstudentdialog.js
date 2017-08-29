export default {
    'pageName': 'stepstudentdialog',
    'pageLable': '选择学员',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student',
    }, {
        'key': 'order_type',
        'value': 1,
        'type': ''
    }],
    'pagesize':500,
    'created': function (vm) {
        if (vm.$store.state.dialogs.dailogdata) {
            vm.selectsearchValue = vm.$store.state.dialogs.dailogdata._id
            vm.deffilterObj.push({
                'key': 'class_id',
                'value': vm.selectsearchValue,
                'type': ''
            })
            
        }
    },
    'stepok':function(vm){

    },
    'pageSearch': [],
    'dialogUrl': 'selectstudentdialog',
    'pageTableField': [
        {
            'type': 'checkbox',
            'label': '',
        },
        {
            'type': 'studentRouter1',
            'label': '学员',
            'prop': 'student_name'
        },
        {
            'type': 'tabletext',
            'label': '英文名',
            'prop': 'nickname',
            'table': 'student'
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}