export default {
    'pageName': 'reportform',
    'pageLable': '汇报',
    'form': {
        'own':'',
        'tasks': '',
        'start': '',
        'end': '',
        'summary': '',
        'note': ''
    },
    'formField': [
         {
            'type': 'input',
            'label': '汇报人',
            'prop': 'own',
            'field': 'own'
        },
        {
            'type': 'input',
            'label': '今日任务',
            'prop': 'tasks',
            'field': 'tasks'
        },
        {
            'type': 'datetime',
            'label': '开始时间',
            'prop': '',
            'field': 'start',
            'datetype':'datetime'
        },
        {
            'type': 'datetime',
            'label': '结束时间',
            'prop': '',
            'field': 'end',
            'datetype':'datetime'
        },
        {
            'type': 'textarea',
            'label': '总结',
            'prop': 'summary',
            'field': 'summary'
        },
        {
            'type': 'textarea',
            'label': '批注',
            'prop': '',
            'field': 'note'
        }
    ],
    'pagedb': 'luban8',
    'pageTable': 'summary',
    'pageTemplate': 'form',
    'pagePath': '',
    rules: {
        own: [
            { required: true, message: '请输入汇报人', trigger: 'blur' }
        ],
        tasks: [
            { required: true, message: '请输入今日任务', trigger: 'blur' }
        ],
        summary: [
            { required: true, message: '请输入总结内容', trigger: 'blur' }
        ]
    }
}