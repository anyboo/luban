export default {
    'pageName': 'systemroles',
    'pageLable': ' 角色权限',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '姓名',
                    'defvalue': '',
                    'default': true,
                    'value': 'name'
                },
                {
                    'label': '描述',
                    'defvalue': '',
                    'default': true,
                    'value': 'desc'
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '添加角色',
                    'type': 'success',
                    'showdialog': 'rolesform',
                    'actionoption': 'rolesform'
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
            'label': '姓名',
            'prop': 'name'
        },
        {
            'type': 'text',
            'label': '描述',
            'prop': 'desc',
        }
    ],
    'pageTable': 'role',
    'pageTemplate': 'table1',
    'pagePath': ''
}