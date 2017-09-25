export default {
    'pageName': 'lessonclasses',
    'pageLable': '选择班级',
    'tableSearch': [{
        'localField': 'teacher_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    }, {
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
                    'label': '班级名',
                    'defvalue': '',
                    'default': true,
                    'value': 'class_name'
                }
            ]
        },
    ],
    'dialogUrl':'selectclassesdialog',
    'pageTableField': [
        {
            'type': 'text',
            'label': '班级',
            'prop': 'class_name'
        },
        {
            'type': 'tabletext',
            'label': '课程',
            'table': 'course',
            'prop': 'lesson_name',
        },
        {
            'type': 'tabletext',
            'label': '老师',
            'table': 'employee',
            'prop': 'name',
        },
        /*
        {
            'type': 'textScale',
            'label': '已报人数',
            'prop1': 'order',
            'prop2':'max_student_num'
        },
       
        {
            'type': 'textScale',
            'label': '上课次数',
            'prop1': 'total_times',
            'prop2':'total_times'
        }
         */
    ],
    'pageTable': 'classes',
    'pageTemplate': 'table1',
    'pagePath': ''
}