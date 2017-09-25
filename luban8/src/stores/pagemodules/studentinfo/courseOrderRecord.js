export default {
    'pageName': 'courseOrderRecord',
    'pageLable': '排课记录',
    'tableSearch': [{
        'localField': 'classes_id',
        'from': 'classes',
        'foreignField': '_id',
        'as': 'classes'
    },
    {
        'localField': 'course_id',
        'from': 'course',
        'foreignField': '_id',
        'as': 'course'
    }, {
        'key': 'order_type',
        'value': 1,
        'type': ''
    }],
    'pageSearch': [],
    'pageTableField': [
        {
            'expand': true,
            'type': 'tableexpand',
            'label': '',
            'module': 'courserecord',
            'prop': 'classes_id',
        },
        {
            'type': 'tabletext',
            'label': '班级名',
            'table': 'classes',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': '课程',
            'table': 'course',
            'prop': 'lesson_name',
        },
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}