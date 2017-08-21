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
        },
        {
            'type': 'radioGroupSearch',
            'span': 12,
            'searchfunction': function (form) {
                let filterObj = []
                let search_value = form + ''
                if (search_value.length > 0) {
                    if (search_value != '0') {
                        filterObj.push({
                            'key': 'status',
                            'value': status,
                            'type': ''
                        })
                    }
                }
                return filterObj
            },
            'fields': [
                {
                    'labels': [
                        { 'label': '所有学员' },
                        { 'label': '未报读学员' },
                        { 'label': '已报读学员' }
                    ]
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