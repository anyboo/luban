export default {
    'pageName': 'lessonsclasses',
    'pageLable': '教室设置',
    'tableSearch': [],
    'beforedelete': function (vm, data) {
        return new Promise((resolve, reject) => {
            vm.getCount('coursescheduling', 'sclasses_id', data._id).then(count => {
                if (count > 0) {
                    vm.$message({
                        type: 'info',
                        message: '该教室已有排课，请先删除排课后再进行此操作'
                    })
                } else {
                    resolve(data)
                }
            })
        })
    },
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '教室名称',
                    'defvalue': '',
                    'default': true,
                    'value': 'class_name'
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '新建教室',
                    'type': 'success',
                    'showdialog': 'sclassesform',
                    'actionoption': 'lessonsclasses'
                }
            ]
        },
    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting',
            'fields': [{ 'msg': '编辑', 'action': 'plus' }, { 'msg': '删除', 'action': 'delete' }]
        },
        {
            'type': 'text',
            'label': '教室名称',
            'prop': 'class_name',
        },
        {
            'type': 'text',
            'label': '最大人数',
            'prop': 'max_student_num',
        },
    ],
    'pageTable': 'sclasses',
    'pageTemplate': 'table1',
    'pagePath': '/lesson/sclasses'
}