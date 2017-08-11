export default {
    'pageName': 'iaeicome',
    'pageLable': '支出明细',
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
        }
    ],
    'pageTableField': [
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'create_time'
        },
        {
            'type': 'negativeTag',
            'label': '金额',
            'prop': 'amount',
            'color': 'gray'
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
        }
    ],
    'pageTable': 'flow',
    'pageTemplate': 'table1',
    'pagePath': ''
}