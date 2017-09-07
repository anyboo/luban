export default {
    'pageName': 'systemsms',
    'pageLable': ' 短信功能',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'radioGroupSearch',
            'span': 12,
            'searchfunction': function (form) {
                let filterObj = []
                let search_value = form + ''
                if (search_value.length > 0) {
                    if (search_value != '0') {
                        filterObj.push({
                            'key': 'status',
                            'value': status,
                            'type': ''
                        })
                    }
                }
                return filterObj
            },
            'fields': [
                {
                    'labels': [
                        { 'label': '未发送' },
                        { 'label': '已发送' }
                    ]
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'span': 5,
            'fields': [
                {
                    'label': '发送学员',
                    'type': 'success',
                    'showdialog': 'studentsmsform',
                    'actionoption': 'lessonmanageadd'
                }, {
                    'label': '班级群发',
                    'type': '',
                    'showdialog': 'classsmsdialog',
                    'actionoption': 'lessonmanageles'
                }, {
                    'label': '活动推广',
                    'type': '',
                    'showdialog': 'allsmsform',
                    'actionoption': 'allsmsform'
                },
            ]
        }
    ],
    'pageTableField': [
        {
            'expand': true,
            'type': 'tableexpand',
            'label': '发送对象',
            'module': 'smssendlist',
            'prop': 'tel',
        },
        {
            'type': 'text',
            'label': '发送内容',
            'prop': 'content',
        },
        {
            'type': 'datetimeMinute',
            'label': '发送时间',
            'prop': 'creattime',
        }, {
            'type': 'getButtongroupText',
            'label': '状态',
            'color': 'gray',
            'prop': 'status',
            'othertype': [{
                'value': 0,
                'text': '未发送'
            }, {
                'value': 1,
                'text': '未发送'
            }, {
                'value': 2,
                'text': '已发送'
            }]
        }
    ],
    'pageTable': 'smssend',//smssend
    'pageTemplate': 'table1',
    'pagePath': ''
}