export default {
    'pageName': 'salaryRecord',
    'pageLable': '考勤记录',
    'tableSearch': [{
        'localField': 'classes_id',
        'from': 'classes',
        'foreignField': '_id',
        'as': 'classes'
    }, {
        'localField': 'arrange_id',
        'from': 'arrange',
        'foreignField': '_id',
        'as': 'arrange'
    }, {
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'tabletext',
            'label': '班级',
            'table': 'classes',
            'prop': 'student_name'
        },
        {
            'type': 'text',
            'label': '上课老师',
            'table': 'employee',
            'prop': 'name'
        },
        {
            'type': 'datetime',
            'label': '考勤时间',
            'prop': 'arrangestart'
        },
        {
            'type': 'text',
            'label': '出勤状态',
            'prop': ''
        }
    ],
    'pageTable': 'attendance',
    'pageTemplate': 'table1',
    'pagePath': ''
}