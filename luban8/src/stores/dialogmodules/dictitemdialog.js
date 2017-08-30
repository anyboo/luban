export default {
    'pageName': 'dictitemdialog',
    'pageLable': ' 字典项目',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '内容',
                    'defvalue': '',
                    'default': true,
                    'value': 'text'
                },
                {
                    'label': '排序',
                    'defvalue': '',
                    'default': true,
                    'value': 'sort'
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '新增',
                    'type': 'success',
                    'showdialog': 'dictform',
                    'actionoption': 'dictform'
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
            'label': '内容',
            'prop': 'text'
        },
        {
            'type': 'text',
            'label': '排序',
            'prop': 'sort',
        },
        {
            'type': 'checkstatus',
            'statutype': 'defvaluestatus',
            'label': '状态',
        }
    ],
    'pageTable': 'dictionary',
    'pageTemplate': 'table1',
    'pagePath': ''
}