export default {
    'pageName': 'classesform',
    'pageLable': '考勤',
    'stepsInfo': ['选择班级', '选择排课', '考勤'],
    'stepData': [
        {
            'step': '1',
            'tableData': {
                'tableSearch': [{
                    'localField': 'region_oe_id',
                    'from': 'employee',
                    'foreignField': '_id',
                    'as': 'employee'
                }],
                'pageSearch': [
                    {
                        'type': 'textSearch',
                        'fields': [
                            {
                                'label': '老师姓名',
                                'defvalue': '',
                                'default': true,
                                'value': 'employee.name'
                            },
                            {
                                'label': '班级名称',
                                'defvalue': '',
                                'default': true,
                                'value': 'class_name'
                            }
                        ]
                    }
                ],
                'pageTableField': [
                    {
                        'type': 'operation',
                        'label': '操作',
                        'student': true,
                        'prop': 'setting'
                    },
                ],
                'pageTable': 'classes',
            }
        }
    ],
    'pageTable': 'attendance',
    'pagePath': ''
}
