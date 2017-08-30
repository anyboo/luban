export default {
    'pageName': 'rolesform',
    'pageLable': '数据字典',
    'form': {
        'text': '默认',
        'sort': '100',
        'defvalue': false
    },
    'formField': [
        {
            'type': 'input',
            'label': '内容',
            'prop': 'text',
            'field': 'text'
        },
        {
            'type': 'input',
            'label': '排序',
            'prop': '',
            'field': 'sort'
        },
        {
            'type': 'switch',
            'label': '默认',
            'prop': '',
            'field': 'defvalue'
        }
    ],
    'pageTable': 'role',
    'pageTemplate': 'form',
    'pagePath': '',
    rules: {
        text: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
        ],
    }
}