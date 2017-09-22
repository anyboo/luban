export default {
    'pageName': 'lessonorderform',
    'pageLable': '订单',
    'form': {
        'order_id': '',
        'max_student_num': 0,
        'teacher_id': '',
        'del_able': false,
        'classes_id': '',
    },
    'formField': [
        {
            'type': 'input',
            'label': '订单号',
            'prop': 'class_name',
            'field': 'class_name'
        },
        {
            'type': 'datetime',
            'label': '开课日期',
            'prop': '',
            'field': 'open_time',
            'datetype': 'date',
        },
        {
            'type': 'datetime',
            'label': '预计结课',
            'prop': '',
            'field': 'close_time',
            'datetype': 'date',
        },
    ],
    'pageTable': 'order',
    'pageTemplate': 'form',
    'pagePath': '',
}
