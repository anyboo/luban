export default [{
    menuTitle: '学员',
    menuIcon: 'fa-users',
    menu: [{
        menuTitle: '档案录入',
        to: '/student/add',
        menuIcon: 'fa fa-user-plus',
    }, {
        menuTitle: '学员管理',
        to: '/student/list',
        menuIcon: 'fa fa-user-circle'
    }, {
        menuTitle: '学员信息',
        to: '/student/info',
        menuIcon: 'fa fa-user-circle',
        menuShow: 0
    }, {
        menuTitle: '在读学员',
        to: '/student/list1',
        menuIcon: 'fa fa-user',
        menuShow: 0,
    }, {
        menuTitle: '已结课学员',
        to: '/student/list2',
        menuIcon: 'fa-address-book-o fa',
        menuShow: 0,
    }, {
        menuTitle: '咨询管理',
        to: '/student/list0',
        menuIcon: 'glyphicon glyphicon-list',
    }, {
        menuTitle: '流失名单',
        to: '/student/lost',
        menuIcon: 'fa fa-address-card-o',
        menuShow: 0,
    }, {
        menuTitle: '跟踪回访记录',
        to: '/student/tracks',
        menuIcon: 'fa fa-drivers-license',
    }, {
        menuTitle: '生日学员',
        to: '/student/birthdays',
        menuIcon: 'fa fa-id-card-o',
    }, {
        menuTitle: '赛事记录',
        to: '/student/recording',
        menuIcon: 'fa fa-vcard-o',
    }]
}, {
    menuTitle: '课程',
    menuIcon: 'fa-book',
    menu: [{
        menuTitle: '教室设置',
        to: '/lesson/sclasses',
        menuIcon: 'fa fa-certificate',
    }, {
        menuTitle: '课程设置',
        to: '/lesson/manage',
        menuIcon: 'fa fa-gears',
    }, {
        menuTitle: '班级设置',
        to: '/lesson/classes',
        menuIcon: 'fa fa-gear',
    }, {
        menuTitle: '订单',
        to: '/lesson/orders',
        menuIcon: 'fa fa-envelope-o',
    }]
}, {
    menuTitle: '学费',
    menuIcon: 'fa-money',
    menu: [{
        menuTitle: '缴费明细',
        to: '/fee/list1',
        menuIcon: 'fa fa-battery',
    }, {
        menuTitle: '欠费明细',
        to: '/fee/list3',
        menuIcon: 'fa fa-battery-0',
    }, {
        menuTitle: '退费明细',
        to: '/fee/list4',
        menuIcon: 'fa fa-battery-half',
    }]
}, {
    menuTitle: '课时',
    menuIcon: 'fa-battery',
    menuShow: 0,
    menu: [{
        menuTitle: '排课',
        to: '/hours/arrange',
        menuIcon: 'fa fa-file',
    }, {
        menuTitle: '考勤',
        to: '/hours/attendance',
        menuIcon: 'fa fa-file-sound-o',
    }, {
        menuTitle: '教师课耗',
        to: '/hours/teacher',
        menuIcon: 'fa fa-file-zip-o',
    }, {
        menuTitle: '学员课耗',
        to: '/hours/student',
        menuIcon: 'fa fa-vcard',
    }, {
        menuTitle: '课时预警',
        to: '/hours/warning',
        menuIcon: 'fa fa-heartbeat',
    }, {
        menuTitle: '缺课记录',
        to: '/hours/absences',
        menuIcon: 'fa fa-book',
    }, {
        menuTitle: '请假管理',
        to: '/hours/leaves',
        menuIcon: 'fa fa-briefcase',
    }, {
        menuTitle: '停课管理',
        to: '/hours/suspends',
        menuIcon: 'fa fa-minus-square',
    }]
}, {
    menuTitle: '收支',
    menuIcon: 'fa-tachometer',
    menu: [{
        menuTitle: '流水',
        to: '/iae/flow',
        menuIcon: 'fa fa-google-wallet',
    }, {
        menuTitle: '收入明细',
        to: '/iae/income',
        menuIcon: 'fa fa-yen',
    }, {
        menuTitle: '支出明细',
        to: '/iae/expenses',
        menuIcon: 'fa fa-paypal',
    }]
}, {
    menuTitle: '家校',
    menuIcon: 'fa-university',
    menuShow: 0,
    menu: [{
        menuTitle: '短信通知',
        to: '/has/sms',
        menuIcon: 'fa fa-file-text-o',
    }, {
        menuTitle: '公告发布',
        to: '/has/news',
        menuIcon: 'fa fa-file',
    }]
}, {
    menuTitle: '设置',
    menuIcon: 'fa-cog',
    menu: [{
        menuTitle: '参数配置',
        to: '/system/config',
        menuIcon: 'fa fa-wrench',
        menuShow: 0,
    }, {
        menuTitle: '个人信息',
        to: '/system/personal_information',
        menuIcon: 'fa-address-book-o fa',
    }, {
        menuTitle: '角色权限',
        to: '/system/roles',
        menuIcon: 'fa fa-unlock',
        menuShow: 0,
    }, {
        menuTitle: '员工管理',
        to: '/system/employee',
        menuIcon: 'fa fa-tasks',
    }, {
        menuTitle: '数据字典管理',
        to: '/system/dict',
        menuIcon: 'fa fa-keyboard-o',
    }, {
        menuTitle: '机构校区设置',
        to: '/system/org',
        menuIcon: 'fa fa-institution',
    }, {
        menuTitle: '日志',
        menuIcon: 'fa fa-picture-o',
        menuShow: 0,

    }, {
        menuTitle: '系统状态',
        menuIcon: ' fa fa-th',
        menuShow: 0,
    }]
},]
