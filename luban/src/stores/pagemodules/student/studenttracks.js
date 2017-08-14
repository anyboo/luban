export default {
    'pageName': 'studenttracks',
    'pageLable': '跟踪回访记录',
    'tableSearch': [
        {
            'localField': 'student_id',
            'from': 'student',
            'foreignField': '_id',
            'as': 'student'
        }
    ],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'fields': [{}]
        },
        {
            'type': 'radioGroupSearch',
            'span':12,
            'fields': [
                {
                    'labels': [
                        { 'label': '售前' },
                        { 'label': '售后' }
                    ]
                }
            ]
        },
        {
            'type': 'selectUserSearch',
            'fields': [
                {}
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '跟踪回访登记',
                    'type': 'success',
                    'icon': 'edit',
                    'showdialog': 'lb-selectstudenttpl',
                    'actionoption': 'lessonsclasses'
                }
            ]
        },
    ],
    'pageTableField': [
        {
            'type': 'studenttracksadd',
            'label': '学员',
            'prop': 'student',
        },
        {
            'type': 'constant',
            'label': '状态',
            'prop': '已报读',
        },
        {
            'type': 'content',
            'label': '沟通内容',
            'prop': 'detail',
        },
        {
            'type': 'text',
            'label': '沟通方式',
            'prop': 'track_way',
        },
        {
            'type': 'text',
            'label': '接洽人',
            'prop': 'op_name',
        },
        {
            'type': 'datetime',
            'label': '沟通时间',
            'prop': 'track_time'
        },
        {
            'type': 'getButtongroupText',
            'label': '类型',
            'prop': 'track_type',
            'othertype': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
            }]
        }
    ],
    'pageTable': 'inquiry',
    'pageTemplate': 'table1',
    'pagePath': ''
}