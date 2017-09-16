export default {
    'pageName': 'attendance',
    'pageLable': '考勤',
    'tableSearch': [
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
    'pageSearch': [],
    'pageTableField':  [
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
    ],
    'pageLink': 'salaryRecord',
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}