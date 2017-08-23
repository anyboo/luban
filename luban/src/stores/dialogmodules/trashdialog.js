export default {
    'pageName': 'trashdialog',
    'pageLable': '已封存档案',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '学生姓名',
                    'defvalue': '',
                    'default': true,
                    'value': 'student_name'
                },
                {
                    'label': '联系电话',
                    'defvalue': '',
                    'default': true,
                    'value': 'first_tel'
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'studentRouter',
            'label': '学生姓名',
        },
       {
            'type': 'text',
            'label': '联系电话',
            'prop': 'first_tel'
        },
        {
            'type': 'text',
            'label': '建档日期',
            'prop': 'nickname'
        }
    ],
    'pageTable': 'student',
    'pageTemplate': 'table1',
    'pagePath': ''
}