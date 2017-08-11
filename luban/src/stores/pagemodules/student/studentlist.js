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
            'fields': [
                {
                    'label': '所有学员',
                    'icon': ''
                },
                {
                    'label': '未报读学员',
                    'icon': ''
                },
                {
                    'label': '已报读学员',
                    'icon': ''
                }
            ]
        },
        {
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'label': '头像',
                    'icon': ''
                },
                {
                    'label': '列表',
                    'icon': ''
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '开班',
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
            'type': 'text',
            'label': '班级名',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': '老师',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'tabletext',
            'label': '课程名',
            'table': 'course',
            'prop': 'lesson_name',
        },
        {
            'type': 'datetime',
            'label': '开课时间',
            'prop': 'open_time',
        },
        {
            'type': 'openlessonsstatus',
            'label': '状态',
        }, {
            'type': 'progress',
            'label': '招生情况',
            'order': 'order',
            'max_student_num': 'max_student_num'
        },
        {
            'type': 'payment1',
            'label': '缴费情况',
            'order': 'order',
        },
    ],
    'pageTable': 'classes',
    'pageTemplate': 'table1',
    'pagePath': ''
}