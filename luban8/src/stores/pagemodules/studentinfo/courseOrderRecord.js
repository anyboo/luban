export default {
    'pageName': 'courseOrderRecord',
    'pageLable': '排课记录',
    'tableSearch': [
        {
            'key': 'order_type',
            'value': 1,
            'type': ''
        }, {
            'localField': 'classes_id',
            'from': 'classes',
            'foreignField': '_id',
            'as': 'classes'
        },
        {
            'key': 'course_id',
            'value': '$classes',
            'type': 'unwind'
        },
        {
            'localField': 'classes.course_id',
            'from': 'course',
            'foreignField': '_id',
            'as': 'course'
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
            'type': 'subtext',
            'label': '班级名',
            'prop': 'classes',
            'subprop': 'class_name',
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