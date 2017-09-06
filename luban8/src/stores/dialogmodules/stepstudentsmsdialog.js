export default {
    'pageName': 'stepstudentsmsdialog',
    'pageLable': '选择学员',
    'tableSearch': [{
        'key': 'order_type',
        'value': 1,
        'type': ''
    }, {
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student',
    }],
    'checkbox':true,
    'paginationhide': true,
    'pagesize': 500,
    'created': function (vm) {
        vm.deffilterObj.push({
            'key': 'classes_id',
            'value': vm.stepsdata._id,
            'type': ''
        })
        console.log(vm.stepsdata._id)
    },

    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'checkbox',
            'label': '',
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name'
        },
        {
            'type': 'tabletext',
            'label': '英文名',
            'table': 'student',
            'prop': 'nickname'
        },
        {
            'type': 'tabletext',
            'label': '联系电话',
            'table': 'student',
            'prop': 'first_tel'
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}