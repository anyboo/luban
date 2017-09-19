export default {
    'pageName': 'systemreport',
    'pageLable': ' 每日汇报',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '今日任务',
                    'defvalue': '',
                    'default': true,
                    'value': 'tasks'
                },
                {
                    'label': '时间',
                    'defvalue': '',
                    'default': true,
                    'value': 'start'
                },
                {
                    'label': '今日总结',
                    'defvalue': '',
                    'default': true,
                    'value': 'summary'
                },
                {
                    'label': '批注',
                    'defvalue': '',
                    'default': true,
                    'value': 'note'
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '添加新汇报',
                    'type': 'success',
                    'showdialog': 'reportform',
                    'actionoption': 'systememorgsavestudent'
                },
            ]
        },
    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting'
        },
        {
            'type': 'text',
            'label': '汇报人',
            'prop': 'own',
        },
        {
            'type': 'text',
            'label': '今日任务',
            'prop': 'tasks',
        },
        {
            'type': 'datetimeMinute',
            'label': '时间',
            'prop': 'start',
            'prop2': 'end'
        },
        {
            'type': 'datetimeMinute',
            'label': '时间',
            'prop': 'end',
        },
        {
            'type': 'text',
            'label': '今日总结',
            'prop': 'summary',
        },
        {
            'type': 'text',
            'label': '批注',
            'prop': 'note',
        }
    ],
    'pagedb': 'luban8',
    'pageTable': 'summary',
    'pageTemplate': 'table1',
    'pagePath': ''
}