export default {
    'pageName': 'classsmsdialog',
    'pageLable': '班级群发短信',
    'stepsInfo': [{
        'label': '选择班级',
        'module': 'selectclassesdialog'
    }, {
        'label': ' 班级学员',
        'module': 'stepstudentsmsdialog',
        'buttons': [{
            'text': '发送',
            'exec': function (vm) {
                let eve = []
                let multipleSelection = vm.$refs['table'].multipleSelection
                for (let tableitem of multipleSelection) {
                    if (tableitem.student && tableitem.student.length > 0) {
                        eve.push(tableitem.student[0])
                    }
                }
                if (eve.length > 0) {
                    vm.currobj[vm.steps] = eve
                    vm.next()
                } else {
                    vm.$message({
                        message: '请选择一个学员',
                        type: 'success'
                    })
                }
            }
        }]
    }, {
        'label': '群发内容',
        'module': 'allsmsform'
    }],
    'pageTable': 'attendance',
    'pagePath': ''
}
