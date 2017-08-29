export default {
    'pageName': 'stepstudentdialog',
    'pageLable': '选择学员',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student',
    }, {
        'key': 'order_type',
        'value': 1,
        'type': ''
    }],
    'paginationhide':true,
    'pagesize': 500,
    'created': function (vm) {
        if (vm.$store.state.dialogs.dailogdata) {
            vm.selectsearchValue = vm.$store.state.dialogs.dailogdata._id
            vm.deffilterObj.push({
                'key': 'class_id',
                'value': vm.selectsearchValue,
                'type': ''
            })
        }
    },
    'tableChange': function (vm, data) {
        let filterObj = []
        return new Promise((resolve, reject) => {
            if (vm.stepsdata) {
                filterObj.push({
                    'key': 'coursescheduling_id',
                    'value': vm.stepsdata._id,
                    'type': ''
                })
                let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
                vm.handleGetFilterTableTable('attendance', filterTxt).then((obj) => {
                    for (let subitem in data) {
                        let studentarray = data[subitem].student
                        if (studentarray && studentarray.length > 0) {
                            let student = studentarray[0]
                            student.attence_flag = 0
                            for (let item in obj.data.data) {
                                let attenitem = obj.data.data[item]
                                if (student._id == attenitem.student_id) {
                                    student.attence_id = attenitem._id
                                    student.attence_flag = attenitem.attence_flag
                                }
                            }
                        }
                    }
                    resolve(data)
                })
            } else {
                resolve(data)
            }
        })
    },
    'stepok': function (vm) {

    },
    'pageSearch': [],
    'dialogUrl': 'selectstudentdialog',
    'pageTableField': [
        {
            'type': 'checkbox',
            'label': '',
        },
        {
            'type': 'studentRouter1',
            'label': '学员',
            'prop': 'student_name'
        },
        {
            'type': 'tabletext',
            'label': '英文名',
            'prop': 'nickname',
            'table': 'student'
        },
        {
            'type': 'tabletext',
            'label': '考勤状态',
            'prop': 'nickname',
            'table': 'attence_flag'
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}