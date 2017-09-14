export default {
    'pageName': 'attendance',
    'pageLable': '考勤',
    'tableSearch': [
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
            'localField': 'teacher_id',
            'from': 'employee',
            'foreignField': '_id',
            'as': 'employee'
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
            'type': 'tabledatetime',
            'label': '上课时间',
            'table': 'coursescheduling',
            'prop': 'start'
        },
        {
            'type': 'tabletext',
            'label': '时长',
            'table': 'course',
            'prop': 'unit_hours'
        },
        {
            'type': 'tabletext',
            'label': '课程金额',
            'prop': 'unit_price',
            'table': 'course'
        },
        {
            'type': 'tabletext',
            'label': '授课老师',
            'prop': 'name',
            'table': 'employee'
        },
        {
            'type': 'text',
            'label': '登记时间',
            'prop': 'creattime',
        },
        {
            'type': 'text',
            'label': '出勤状态',
            'prop': 'attence_flag'
        }
    ],
    'pageClasses': true,
    'pageTable': 'attendance',
    'pageTemplate': 'table1',
    'pagePath': ''
}