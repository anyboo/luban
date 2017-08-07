export default {
    'pageName': 'lessonsclasses',
    'pageLable': '教室管理',
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '教室名称',
                    'defvalue': '',
                    'default': true,
                    'value': 'classname'
                },
                {
                    'label': '教师名字',
                    'defvalue': '',
                    'default': true,
                    'value': 'teachername'
                }
            ]
        },
        {
            'type': 'dateSearch',
            'fields': [
                {
                    'label': '教室名称',
                    'defvalue': '',
                    'default': true,
                    'value': 'name'
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '搜索',
                    'type': 'success',
                    'icon': 'search'
                }
            ]
        },
        {
            'type': 'groupBtnSearch',
            'fields': [
                {
                    'label': '已开课',
                    'type': 'primary',
                    'icon': ''
                },
                {
                    'label': '未开课',
                    'type': 'primary',
                    'icon': ''
                },
                {
                    'label': '已结课',
                    'type': 'primary',
                    'icon': ''
                }
            ]
        },
        {
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'label': '已开课',
                    'icon': ''
                },
                {
                    'label': '未开课',
                    'icon': ''
                },
                {
                    'label': '已结课',
                    'icon': ''
                }
            ]
        },
    ],
    'pageTableField': [
        {
            'type': 'text',
            'label': '学员姓名',
            'prop': 'name',
        },
        {
            'type': 'datetime',
            'label': '入学日期',
            'prop': 'date'
        },
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting',
            'fields': ['编辑', '删除', '标记']
        },
        {
            'type': 'textTag',
            'label': '出勤情况',
            'prop': 'tagtext',
            'color': 'danger'
        },
        {
            'type': 'progress',
            'label': '招生情况',
            'prop': 'tagtext',
            'textInside': 'true',
            'strokeWidth': '18',
            'percentage': '60',
            'text': '40/60'
        },
        {
            'type': 'priceText',
            'label': '定价',
        },
        {
            'type': 'contentText',
            'label': '内容',
            'prop': 'contentText',
        },
    ],
    'pageTable': 'sclasses',
    'pageTemplate': 'table1',
    'pagePath': '/lesson/sclasses'
}