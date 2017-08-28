export default {
    'pageName': 'allsmsform',
    'pageLable': '活动推广',
    'form': {
        'first_tel': '',
        'content': '',
        'active': false,
        'fixed_time': '',
        'student_id': ''
    },
    'formField': [
        {
            'type': 'input',
            'label': '发送号码',
            'prop': 'first_tel',
            'field': 'first_tel'
        },
        {
            'type': 'textarea',
            'label': '发送内容',
            'prop': 'content',
            'field': 'content'
        },
        {
            'type': 'switchdatetime',
            'label': '定时发送',
            'prop': '',
            'field': 'fixed_time',
            'fieldActive': 'active',
            'datetype': 'datetime',
        }
    ],
    'pageTable': 'recording',
    'pageTemplate': 'form',
    'pagePath': '',
    rules: {
        first_tel: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min: 1, max: 11, message: '长度在 1 到 11 个字符', trigger: 'blur' }
        ],
        content: [
            { required: true, message: '请输入发送内容', trigger: 'blur' },
            { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
        ]
    }
}