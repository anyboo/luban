export default {
    'pageName': 'lessonleaveRecord',
    'pageLable': '请假记录',
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'datetime',
            'label': '请假时间',
            'prop': 'daterange1',
        },
        {
            'type': 'text',
            'label': '请假原因',
            'prop': 'reason'
        },
        {
            'type': 'datetime',
            'label': '登记时间',
            'prop': 'createtime'
        }
    ],
    'pageTable': 'leaves',
    'pageTemplate': 'table1',
    'pagePath': ''
}