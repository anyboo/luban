export default {
    'pageName': 'salaryRecord',
    'pageLable': '考勤记录',
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'text',
            'label': '班级',
            'prop': 'class_name',
        },
        {
            'type': 'text',
            'label': '上课老师',
            'prop': 'name'
        },
        {
            'type': 'datetime',
            'label': '考勤时间',
            'prop': 'start'
        },
        {
            'type': 'text',
            'label': '出勤状态',
            'prop': 'attence_flag'
        }
    ],
    'pageTable': 'attendance',
    'pageTemplate': 'table1',
    'pagePath': '/student/info'
}