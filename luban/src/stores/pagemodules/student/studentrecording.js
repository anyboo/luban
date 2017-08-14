export default {
    'pageName': 'studentrecording',
    'pageLable': '赛事记录',
    'tableSearch': [
        {
            'localField': 'student_id',
            'from': 'student',
            'foreignField': '_id',
            'as': 'student'
        }
    ],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'fields': [{}]
        },
        {
            'type': 'selectUserSearch',
            'fields': [
                {}
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': ' 添加赛事记录',
                    'type': 'success',
                    'showdialog': 'lb-regstudentmatchmodal',
                    'actionoption': 'studentrecording'
                }
            ]
        },
    ],
    'pageTableField': [
        {
            'type': 'studentlink',
            'label': '学员',
            'prop': 'student'
        },
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'creattime'
        },
        {
            'type': 'text',
            'label': '赛事名称',
            'prop': 'match_name',
        },
        {
            'type': 'text',
            'label': '比赛成绩',
            'prop': 'result',
        },
        {
            'type': 'constant',
            'label': '录入时间',
            'prop': '2017-06-06',
        },
        {
            'type': 'operation',
            'label': '操作'
        },
    ],
    'pageTable': 'recording',
    'pageTemplate': 'table1',
    'pagePath': ''
}