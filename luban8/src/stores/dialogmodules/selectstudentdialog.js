export default {
    'pageName': 'selectstudentdialog',
    'pageLable': '选择学员',
    'tableSearch': [{
        'key': 'isdel',
        'value': false,
        'type': ''
    }],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '学员',
                    'defvalue': '',
                    'default': true,
                    'value': 'student_name'
                },
                {
                    'label': '性别',
                    'defvalue': '',
                    'default': true,
                    'value': 'sex'
                },
                {
                    'label': '英文名',
                    'defvalue': '',
                    'default': true,
                    'value': 'nickname'
                },
                {
                    'label': '号码',
                    'defvalue': '',
                    'default': true,
                    'value': 'first_tel'
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
        },
        {
            'type': 'text',
            'label': '手机号码',
            'prop': 'first_tel'
        }
    ],
    'pageTable': 'student',
    'pageTemplate': 'table1',
    'pagePath': ''
}