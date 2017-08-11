export default {
    'pageName': 'studentlist',
    'pageLable': '学员管理',
    'tableSearch': [{
        'localField': 'region_oe_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    }],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '姓名',
                    'defvalue': '',
                    'default': true,
                    'value': 'student_name'
                },
                {
                    'label': '手机号',
                    'defvalue': '',
                    'default': true,
                    'value': 'first_tel'
                },
                {
                    'label': '住址',
                    'defvalue': '',
                    'default': true,
                    'value': 'home_address'
                },
                {
                    'label': '英文名',
                    'defvalue': '',
                    'default': true,
                    'value': 'nickname'
                },
                {
                    'label': '学员卡号',
                    'defvalue': '',
                    'default': true,
                    'value': 'card_no'
                }
            ]
        },
        {
            'type': 'radioGroupSearch',
            'span': 12,
            'fields': [
                {
                    'labels': [
                        { 'label': '所有学员' },
                        { 'label': '未报读学员' },
                        { 'label': '已报读学员' }
                    ]
                },
                {
                    'labels': [
                        { 'label': '头像' },
                        { 'label': '列表' },
                    ]
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '已封存档案',
                    'type': 'success',
                    'showdialog': 'lb-openclassmodal',
                    'actionoption': 'lessonclasses'
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
            'type': 'studentRouter',
            'label': '学员',
            'sex': 'sex',
            'student_name': 'student_name',
            'nickname': 'nickname'
        },
        {
            'type': 'text',
            'label': '联系电话',
            'prop': 'first_tel',
        },
        {
            'type': 'fromNow',
            'label': '年龄',
            'prop': 'birth',
        },
        {
            'type': 'text',
            'label': '住址',
            'prop': 'home_address',
        },
        {
            'type': 'getEmployeeName',
            'label': '学员归属',
        },
        {
            'type': 'text',
            'label': '档案备注',
            'prop': 'note',
        },
    ],
    'pageTable': 'student',
    'pageTemplate': 'table1',
    'pagePath': ''
}