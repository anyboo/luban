export default {
    'pageName': 'flowform',
    'pageLable': '流水',
    'form': {
        'type': 0,
        'amount': '',
        'sel': '',
        'note': '',
        'op_id': '',
        'create_time': '',
        'check_status': 0,
    },
    'mounted': function (vm) {
        console.log(vm.$store.state.system.id)
        vm.localdata.form.op_id = vm.$store.state.system.id
        vm.localdata.form.create_time = new Date()
    },
    'formField': [
        {
            'type': 'radiogroup',
            'label': '类型',
            'prop': 'type',
            'field': 'type',
            'labels': [
                { 'label': '支出' },
                { 'label': '收入' }
            ]
        },
        {
            'type': 'numberinput',
            'label': '金额',
            'text': '元',
            'prop': 'amount',
            'field': 'amount'
        },
        {
            'type': 'select',
            'label': '所属分类',
            'prop': 'sel',
            'field': 'sel',
            'dict': function (vm) {
                let dict = 7
                if (vm.localdata.form.type == 0) {
                    dict = 8
                }
                return dict
            }
        },
        {
            'type': 'selectSearch',
            'label': '经办人',
            'prop': 'op_id',
            'field': 'op_id',
            'text': '请选择老师',
            'showdialog': 'selectteacherdialog',
            'search': 'name'
        },
        {
            'type': 'datetime',
            'label': '日期',
            'prop': 'create_time',
            'field': 'create_time',
            'datetype': 'datetime',
        },
        {
            'type': 'input',
            'label': '备注',
            'prop': '',
            'field': 'note',
        }
    ],
    'pageTable': 'flow',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData(vm) {
        return {
            amount: [
                { required: true, validator: vm.validateNumberinput, message: '请输入金额', trigger: 'blur' }
            ],
            sel: [
                { required: true, message: '请选择所属分类', trigger: 'change' }
            ],
            op_id: [
                { required: true, message: '请选择老师／经办人', trigger: 'change' }
            ],
            create_time: [
                { type: 'date', required: true, message: '请输入日期', trigger: 'blur' }
            ],
        }
    }
}
