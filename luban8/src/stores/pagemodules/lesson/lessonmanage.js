export default {
    'pageName': 'lessonmanage',
    'pageLable': '课程设置',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '课程名',
                    'defvalue': '',
                    'default': true,
                    'value': 'lesson_name'
                },
                {
                    'label': '课程编号',
                    'defvalue': '',
                    'default': false,
                    'value': 'lesson_no'
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'span': 5,
            'fields': [
                {
                    'label': '添加课程',
                    'type': 'success',
                    'showdialog': 'lb-newlessonmodal',
                    'actionoption': 'lessonmanageadd'
                }, {
                    'label': '课程分类',
                    'type': '',
                    'showdialog': 'lb-cate',
                    'actionoption': 'lessonmanageles'
                },
            ]
        }
    ],
    'beforedelete': function (vm, data) {
        return new Promise((resolve, reject) => {
            vm.getCount('classes', 'course_id', data._id).then(count => {
                if (count > 0) {
                    vm.$message({
                        type: 'info',
                        message: '该课程已有班级，请先删除班级后再进行此操作'
                    })
                }else{
                    resolve(data)
                }
            })
        })
    },
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting',
        },
        {
            'type': 'lesson',
            'label': '课程',
            'lesson_type': 'lesson_type',
            'lesson_name': 'lesson_name',
            'lesson_no': 'lesson_no',
            'othertype': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '2',
                'text': '课时包'
            }],
        },
        {
            'type': 'lessonpriceText',
            'typeinfo': 'singleprice',
            'label': ' 课程单价',
            'prop': 'unit_price',
        },
        {
            'type': 'lessonpriceText',
            'typeinfo': 'price',
            'label': '课程售价',
            'prop': 'price',
        },
        {
            'type': 'contentText',
            'typeinfo': 'singletime',
            'label': '单次课时',
        },
        {
            'type': 'text',
            'prop': 'inc_timesprice',
            'label': '总课时',
        },
        {
            'type': 'contentText',
            'typeinfo': 'time',
            'label': '总课长',
        }
    ],
    'pageTable': 'course',
    'pageTemplate': 'table1',
    'pagePath': ''
}