export default {
    'pageName': 'iaeflow',
    'pageLable': '流水',
    'tableSearch': [{
        'localField': 'teacher_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    }],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'fields': [{}]
        },
        {
            'type': 'selectUserSearch',
            'fields': [{}]
        },
        {
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'label': '所有',
                    'icon': ''
                },
                {
                    'label': '支出',
                    'icon': ''
                },
                {
                    'label': '收入',
                    'icon': ''
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '记一笔',
                    'type': 'success',
                    'icon':'edit',
                    'showdialog': 'lb-flowaddmodal',
                    'actionoption': 'iaeflow'
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'creattime'
        },
        {
            'type': 'textTag',
            'label': '金额',
            'prop': 'amount',
            'color': 'gray'
        },
        {
            'type': 'getButtongroupText',
            'label': '类型',
            'othertype': [{
                'value': '',
                'text': '所有'
            }, {
                'value': '0',
                'text': '支出'
            }, {
                'value': '1',
                'text': '收入'
            }],
            'prop': 'type'
        },
        {
            'type': 'text',
            'label': '备注',
            'prop': 'note',
        },
        {
            'type': 'tabletext',
            'label': '经办人',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'datetime',
            'label': '录入日期',
            'prop': 'creattime'
        }
    ],
    'pageTable': 'flow',
    'pageTemplate': 'table1',
    'pagePath': ''
}