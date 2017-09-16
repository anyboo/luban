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
            'prop': 'origin_amount',
        }
    ],
    'pageTable': 'rechargeorder',
    'pageTemplate': 'table1',
    'pagePath': '',
}