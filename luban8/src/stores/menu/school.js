export default {
    menuTitle: '家校',
    menuIcon: 'fa-cog',
    menu: [ {
        menuTitle: '短信',
        to: 'systemsms',
        menuIcon: 'fa-address-book-o fa',
        action: [{
            'text': '发送学员',
            'action': 'studentsmsform'
        },
        {
            'text': '班级群发',
            'action': 'classsmsdialog'
        },
        {
            'text': '活动推广',
            'action': 'allsmsform'
        }
        ]
    }]
}