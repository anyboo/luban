export default {
    'pageName': 'selectstudentdialog',
    'pageLable': '选择教室',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '课程名',
                    'defvalue': '',
                    'default': true,
                    'value': 'lesson_name'
                },
                {
                    'label': '课程编号',
                    'defvalue': '',
                    'default': true,
                    'value': 'lesson_no'
                }
            ]
        }
    ],
    'dialogUrl': 'selectstudentdialog',
    'pageTableField': [
        {
            'type': 'text',
            'label': '学员',
            'prop': 'student_name'
        },
        {
            'type': 'getButtongroupText',
            'label': '性别',
            'prop': 'sex',
            'othertype': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }, {
                'value': '0',
                'iclass': 'fa fa-question-circle',
                'text': '待确定'
            }]
        },
        {
            'type': 'text',
            'label': '英文名',
            'prop': 'nickname'
        }
    ],
    'pageTable': 'student',
    'pageTemplate': 'table1',
    'pagePath': ''
}