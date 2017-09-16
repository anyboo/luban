export default {
    'pageName': 'smssenddialog',
    'pageLable': '短信发送',
    'localdata': {
        'form': {
            'status':'0'
        }
    },
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '全员发送',
                    'type': '',
                    'showdialog': 'allsmsform',
                    'actionoption': 'allsmsform'
                },
                {
                    'label': '班级群发',
                    'type': '',
                    'showdialog': 'classsmsdialog',
                    'actionoption': 'classsmsdialog'
                }
            ]
        },
    ],
    'dialogUrl': 'selectlessondialog',
    'pageTableField': [
        {
            'type': 'text',
            'label': '发送内容',
            'prop': 'content'
        },
        {
            'type': 'text',
            'label': '发送人',
            'prop': 'sms_type'
        },
        {
            'type': 'text',
            'label': '发送时间',
            'prop': 'creattime'
        },
        {
            'type': 'text',
            'label': '状态',
            'prop': 'unit_price'
        },
    ],
    'pageTable': 'smssend',
    'pageTemplate': 'table1',
    'pagePath': ''
}