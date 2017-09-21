export default {
    'pageName': 'studentOrder',
    'pageLable': '学员记录',
    'tableSearch': [{
        'localField': 'classes_id',
        'from': 'classes',
        'foreignField': '_id',
        'as': 'classes'
    }, {
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    },
    {
        'localField': 'course_id',
        'from': 'order',
        'foreignField': '_id',
        'as': 'course'
    }],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'text',
            'label': '姓名',
            'prop': 'student_name',
        },
        {
            'type': 'text',
            'label': '联系电话',
            'prop': 'first_tel'
        },
    ],
    'pageTable': 'student',
    'pageTemplate': 'table1',
    'pagePath': ''
}