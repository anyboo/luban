export default {
    'pageName': 'buytextdialogs',
    'pageLable': '购买记录',
    'tableSearch': [],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '条数',
                    'defvalue': '',
                    'default': true,
                    'value': 'barnumbers'
                },
                {
                    'label': '金额',
                    'defvalue': '',
                    'default': true,
                    'value': 'fee'
                },
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'text',
            'label': '条数',
            'prop': 'sms_count'
        },
        {
            'type': 'text',
            'label': '金额',
            'prop': 'order_amount',
        }
    ],
    'pagedb': 'luban8',
    'pageTable': 'smsorder',
    'pageTemplate': 'table1',
    'pagePath': '',
}