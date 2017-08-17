export default {
    'pageName': 'hourslessonsdetail',
    'pageLable': '排课详情',
    'tableSearch': [{
        'localField': 'course_id',
        'from': 'course',
        'foreignField': '_id',
        'as': 'course'
    }, {
        'localField': '_id',
        'from': 'order',
        'foreignField': 'class_id',
        'as': 'order'
    }],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'fields': [{}]
        },
        {
            'type': 'singleBtnSearch',
            'span': 5,
            'fields': [
                {
                    'label': '新增排课',
                    'type': 'success',
                    'showdialog': 'lb-newlessonmodal',
                    'actionoption': 'lessonmanageadd'
                }, {
                    'label': '批量删除',
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
            'prop': 'setting'
        },
        {
            'type': 'constant',
            'label': '教室',
            'prop': '舞蹈二班',
        },
        {
            'type': 'constant',
            'label': '上课老师',
            'prop': '老师',
        },
        {
            'type': 'constant',
            'label': '开始时间',
            'prop': '2017-08-19',
        },
        {
            'type': 'constant',
            'label': '结束时间',
            'prop': '2017-08-19',
        },
        {
            'type': 'constant',
            'label': '星期',
            'prop': '星期一',
        },
        {
            'type': 'constant',
            'label': '排课状态',
            'prop': '已排课',
        }
    ],
    'pageTable': 'classes',
    'pageTemplate': 'table1',
    'pagePath': ''
}