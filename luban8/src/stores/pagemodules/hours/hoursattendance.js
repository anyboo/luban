export default {
    'pageName': 'hoursattendance',
    'pageLable': '考勤',
    'tableSearch': [
        {
            'localField': 'teacher_id',
            'from': 'employee',
            'foreignField': '_id',
            'as': 'employee'
        },{
            'localField': 'course_id',
            'from': 'course',
            'foreignField': '_id',
            'as': 'course'
        }],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '班级名称',
                    'defvalue': '',
                    'default': true,
                    'value': 'class_name'
                },
                {
                    'label': '老师姓名',
                    'defvalue': '',
                    'default': false,
                    'value': 'employee.name'
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting',
            'fields': []
        },
        {
            'type': 'text',
            'label': '班级',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': ' 教师',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'textScale',
            'label': '排课情况',
            'table': 'course',
            'prop1': 'arrangecount',
            'prop2': 'inc_timesprice',
        },
        {
            'type': 'textScale1',
            'label': '报名情况',
            'prop1': 'regcount',
            'prop2': 'max_student_num',
        },
        {
            'type': 'textScale',
            'label': '上课情况',
            'table': 'course',
            'prop1': 'attendcount',
            'prop2': 'inc_timesprice',
        },
    ],
    'pageTable': 'classes',
    'pageTemplate': 'table1',
    'pagePath': ''
}