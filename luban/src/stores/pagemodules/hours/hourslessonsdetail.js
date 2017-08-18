export default {
    'pageName': 'hourslessonsdetail',
    'pageLable': '排课详情',
    'tableSearch': [{
        'localField': 'sclasses_id',
        'from': 'sclasses',
        'foreignField': '_id',
        'as': 'sclasses'
    },{
        'localField': 'teacher_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
    },{
        'localField': 'classes_id',
        'from': 'classes',
        'foreignField': '_id',
        'as': 'classes'
    }],
    'pageSearch': [
        {
            'type': 'handleback',
            'searchfunction': function (vm) {
                let filterObj = []
                let classId=vm.$store.state.system.currClassID
                if (classId.length>0) {
                    filterObj.push({
                        'key': 'classes_id',
                        'value': classId,
                        'type': ''
                    })
                }
                return filterObj
            },
            'fields': [{}]
        },
        {
            'type': 'dateSearch',
            'fields': [{}]
        },
        {
            'type': 'selectLessonSearch',
            'fields': [
                {}
            ]
        },
        {
            'type': 'singleBtnSearch',
            'span': 5,
            'fields': [
                {
                    'label': '新增排课',
                    'type': 'success',
                    'showdialog': 'lb-arrangeedit',
                    'actionoption': 'lessonmanageadd'
                }, {
                    'label': '批量删除',
                    'type': '',
                    'showdialog': 'lb-cate',
                    'actionoption': 'lessonmanageles'
                },
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'checkbox',
            'label': '',
        },
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting'
        },
        {
            'type': 'tabletext',
            'label': '班级名',
            'table': 'classes',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': '教室',
            'table': 'sclasses',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': '上课老师',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'datetime',
            'label': '开课日期',
            'prop': 'start',
        },
        {
            'type': 'datetimeRange',
            'label': '上课时间段',
            'prop1': 'start',
            'prop2': 'end',
        },
        {
            'type': 'checkweek',
            'label': '上课星期',
        },
        {
            'type': 'constant',
            'label': '排课状态',
            'prop': '已排课',
        }
    ],
    'pageTable': 'coursescheduling',
    'pageTemplate': 'table1',
    'pagePath': ''
}