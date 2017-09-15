export default {
    'pageName': 'systemsms',
    'pageLable': ' 短信功能',
    'localdata': {
        'form': {
            'status':'0'
        }
    },
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'radioGroupSearch',
            'span': 12,
            'searchfunction': function (form) {
                let filterObj = []
                let search_value = form + ''
                if (search_value.length > 0) {
                    //if (search_value != '0') {
                        filterObj.push({
                            'key': 'status',
                            'value': search_value,
                            'type': ''
                        })
                    //}
                }
                return filterObj
            },
            'fields': [
                {
                    'labels': [
                        { 'label': '已发送' },
                        { 'label': '未发送' }
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
                    'actionoption': 'studentsmsform'
                }, {
                    'label': '班级群发',
                    'type': '',
                    'showdialog': 'classsmsdialog',
                    'actionoption': 'classsmsdialog'
                }, {
                    'label': '全员发送',
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
        }, {
            'type': 'text',
            'label': '发送类型',
            'prop': 'sms_type',
        }, {
            'type': 'text',
            'label': '发送人',
            'prop': 'sms_type',
        },
        {
            'type': 'datetimeMinute',
            'label': '发送时间',
            'prop': 'createtime',
        }, {
            'type': 'getButtongroupText',
            'label': '状态',
            'color': 'gray',
            'prop': 'status',
            'othertype': [{
                'value': '0',
                'text': '已发送'
            }, {
                'value': '1',
                'text': '未发送'
            }]
        }
    ],
    'pageTable': 'smssend',//smssend
    'pageTemplate': 'table1',
    'pagePath': ''
}