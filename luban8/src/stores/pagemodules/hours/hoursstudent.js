export default {
    'pageName': 'hoursstudent',
    'pageLable': '学员课耗',
    'tableSearch': [
        {
            'localField': 'student_id',
            'from': 'student',
            'foreignField': '_id',
            'as': 'student'
        },
        {
            'localField': 'coursescheduling_id',
            'from': 'coursescheduling',
            'foreignField': '_id',
            'as': 'coursescheduling'
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
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name'
        },
        {
            'type': 'tabledatetime',
            'label': '上课时间',
            'table': 'coursescheduling',
            'prop': 'start'
        },
        {
            'type': 'tabletext',
            'label': '时长',
            'prop': 'classes',
            'subprop': 'unit_hours'
        },
        {
            'type': 'tabletext',
            'label': '类型',
            'prop': 'name',
            'table': 'employee'
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
    'pageTable': 'attence',
    'pageTemplate': 'table',
    'pagePath': ''
}