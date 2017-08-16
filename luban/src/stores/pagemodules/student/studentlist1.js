export default {
    'pageName': 'studentlist1',
    'pageLable': '在读学员',
    'tableSearch': [
        {
            'localField': 'student_id',
            'from': 'student',
            'foreignField': '_id',
            'as': 'student'
        },
        {
            'localField': 'course_id',
            'from': 'classes',
            'foreignField': 'course_id',
            'as': 'classes'
        },
        {
            'localField': 'teacher_id',
            'from': 'employee',
            'foreignField': '_id',
            'as': 'employee'
        }
    ],
    'pageSearch': [
        {
            'type': 'radioGroupSearch',
            'searchfunction': function (form) {
                let filterObj = []
                let search_value = form+''
                if (search_value.length>0) {
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
                        { 'label': '未缴费' },
                        { 'label': '部分缴费' },
                        { 'label': '已缴费' },
                    ]
                }
            ]
        },
        {
            'type': 'selectUserSearch',
            'fields': [
                {}
            ]
        },
        // {
        //     'type': 'classesSearch',
        //     'fields': [
        //         {}
        //     ]
        // },
    ],
    'pageTableField': [
        {
            'type': 'studentRouter1',
            'label': '学员'
        },
        {
            'type': 'tabletext',
            'label': '联系电话',
            'table': 'student',
            'prop': 'first_tel'
        },
        {
            'type': 'tabletext',
            'label': '所在班级',
            'table': 'classes',
            'prop': 'class_name'
        },
        {
            'type': 'constant',
            'label': '授课老师',
            'prop': '老师'
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
                'value': 1,
                'text': '部分缴费'
            }, {
                'value': 2,
                'text': '已缴费'
            }]
        },
        {
            'type': 'text',
            'label': '报读课次',
            'prop': 'origin_times',
        },
        {
            'type': 'text',
            'label': '课次单价',
            'prop': 'c_unit_price',
        },
        {
            'type': 'constant',
            'label': '剩余课次',
            'prop': '3',
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}