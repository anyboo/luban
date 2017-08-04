export default {
    menuTitle: '课时',
    menuIcon: 'fa-battery',
    // menuShow: 0,
    menu: [{
        menuTitle: '排课',
        to: '/hours/arrange',
        menuIcon: 'fa fa-file',
    }, {
        menuTitle: '考勤',
        to: '/hours/attendance',
        menuIcon: 'fa fa-file-sound-o',
        action: [{
            'text': '考勤',
            'action': 'hoursattendance'
        }]
    }, {
        menuTitle: '教师课耗',
        to: '/hours/teacher',
        menuIcon: 'fa fa-file-zip-o',
        menuShow: 0,
    }, {
        menuTitle: '学员课耗',
        to: '/hours/student',
        menuIcon: 'fa fa-vcard',
        menuShow: 0,
    }, {
        menuTitle: '课时预警',
        to: '/hours/warning',
        menuIcon: 'fa fa-heartbeat',
        menuShow: 0,
    }, {
        menuTitle: '缺课记录',
        to: '/hours/absences',
        menuIcon: 'fa fa-book',
        menuShow: 0,
    }, {
        menuTitle: '请假管理',
        to: '/hours/leaves',
        menuIcon: 'fa fa-briefcase',
        action: [{
            'text': '请假登记',
            'action': 'hoursleaves'
        }],
        dropDownMenu: [{
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }]
    }, {
        menuTitle: '停课管理',
        to: '/hours/suspends',
        menuIcon: 'fa fa-minus-square',
        action: [{
            'text': '停课管理',
            'action': 'hourssuspends'
        }],
        dropDownMenu: [{
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }]
    }]
}