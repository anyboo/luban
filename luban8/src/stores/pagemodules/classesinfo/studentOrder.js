export default {
    'pageName': 'studentOrder',
    'pageLable': '学员记录',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'tabletext',
            'label': '姓名',
            'table':'student',
            'prop': 'student_name',
        },
        {
            'type': 'tabletext',
            'label': '联系电话',
            'table':'student',
            'prop': 'first_tel'
        },
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}