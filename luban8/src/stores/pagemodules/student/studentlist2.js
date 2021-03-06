export default {
    'pageName': 'studentlist2',
    'pageLable': '在读学员',
    'tableSearch': [
        {
            'key': 'order_type',
            'value': 1,
            'type': ''
        },
        {
            'key': 'classes.closed',
            'value': true,
            'type': ''
        },
        {
            'localField': 'student_id',
            'from': 'student',
            'foreignField': '_id',
            'as': 'student'
        },
        {
            'localField': 'classes_id',
            'from': 'classes',
            'foreignField': '_id',
            'as': 'classes'
        },
        {
            'key': 'teacher_id',
            'value': '$classes',
            'type': 'unwind'
        },
        {
            'localField': 'classes.teacher_id',
            'from': 'employee',
            'foreignField': '_id',
            'as': 'employee'
        },
    ],
    'pageSearch': [
        {
            'type': 'radioGroupSearch',
            'searchfunction': function (form) {
                let filterObj = []
                let search_value = form-1
                if (search_value>=0) {
                    filterObj.push({
                        'key': 'pay_status',
                        'value': Number(search_value),
                        'type': ''
                    })
                }
                return filterObj
            },
            'fields': [
                {
                    'labels': [
                        { 'label': '所有' },
                        { 'label': '未缴费' },
                        { 'label': '部分缴费' },
                        { 'label': '已缴费' },
                    ]
                }
            ]
        },
        {
            'type': 'selectSearch',
            'searchfunction': function (form) {
                let filterObj = []
                let searchValue = form + ''
                if (searchValue.length > 0) {
                    filterObj.push({
                    'key': 'student_id',
                    'value': searchValue,
                    'type': ''
                })
                }
                return filterObj
            },
            'fields': [
                {
                    'text': '请选择学员',
                    'showdialog': 'selectstudentdialog',
                    'search': 'student_name'
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'studentRouter1',
            'label': '学员'
        },
        {
            'type': 'tabletext',
            'label': '联系电话',
            'table':'student',
            'prop': 'first_tel'
        },
        {
            'type': 'subtext',
            'label': '班级',
            'prop': 'classes',
            'subprop': 'class_name'
        },
        {
            'type': 'tabletext',
            'label': '授课老师',
            'prop': 'name',
            'table': 'employee'
        },
        {
            'type': 'datetime',
            'label': '报班日期',
            'prop': 'createtime',
        },
        {
            'type': 'constant',
            'label': '结课日期',
            'prop': '2017-05-15',
        },
       {
            'type': 'text',
            'label': '报读课次',
            'prop': 'origin_times',
        },
        {
            'type': 'subtext',
            'label': '实际消耗',
            'prop': 'classes',
            'subprop': 'attendcount'
        },
        {
            'type': 'getButtongroupText',
            'label': '缴费状态',
            'color': 'gray',
            'prop': 'pay_status',
            'othertype': [{
                'value': 0,
                'text': '未缴费'
            }, {
                'value':1,
                'text': '部分缴费'
            }, {
                'value': 2,
                'text': '已缴费'
            }]
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}