export default {
    'pageName': 'recordingdetail',
    'pageLable': '详情',
    'student': true,
    'tableSearch': [],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'datetime',
            'label': '参赛日期',
            'prop': 'creattime'
        },
        {
            'type': 'text',
            'label': '赛事名称',
            'prop': 'match_name'
        },
        {
            'type': 'text',
            'label': '比赛成绩',
            'prop': 'result',
        },
        {
            'type': 'text',
            'label': '赛事详情',
            'prop': 'info',
        }
    ],
    'pageTable': 'recording',
    'pageTemplate': 'table1',
    'pagePath': ''
}