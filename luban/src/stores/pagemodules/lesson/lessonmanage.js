export default {
    'pageName': 'lessonmanage',
    'pageLable': '课程设置',
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
            'type': 'singleBtnSearch',
            'span': 4,
            'fields': [
                {
                    'label': '添加课程',
                    'type': 'success',
                    'showdialog': 'lb-newlessonmodal',
                    'actionoption': 'lessonmanageadd'
                }, {
                    'label': '课程分类',
                    'type': '',
                    'showdialog': 'lb-cate',
                    'actionoption': 'lessonmanageles'
                },
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting',
        },
        {
            'type': 'lesson',
            'label': '课程',
            'lesson_type': 'lesson_type',
            'lesson_name': 'lesson_name',
            'lesson_no': 'lesson_no',
            'othertype':[{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '2',
                'text': '课时包'
            }],
        },
        {
            'type': 'lessonpriceText',
            'label': '定价',
            'unit_price': 'unit_price',
            'price': 'price',
        },
        {
            'type': 'contentText',
            'label': ' 内容'
        }
    ],
    'pageTable': 'course',
    'pageTemplate': 'table1',
    'pagePath': ''
}