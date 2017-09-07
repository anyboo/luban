export default {
    'pageName': 'allsmsform',
    'pageLable': '短信发送',
    'form': {
        'tel': [],
        'content': '',
        'title':'',
        'status': '0',
        'active': false,
        'telActive': false,
        'fixed_time': '',
        'student_id': '',
        'new_tel': '',
        'new_name': '',
    },
    'handleSave':function(vm){
        return vm.smsSend()
    },
    'append':true,
    'telshow': 10,
    'created': function (vm) {
        vm.getTableApidata('org').then(obj=>{
            let org = obj.data.data
            if (org.length > 0) {
                vm.localdata.form.title = org[0].name
            }else{
                vm.localdata.form.title = '鲁班'
            }
        })
        if (vm.$store.state.dialogs.currdialg=='classsmsdialog'){
            vm.module.pageLable = '班级群发'
            for (let item of vm.stepsdata) {
                let telitem = {}
                telitem.tel = item.first_tel
                telitem.student_id = item._id
                telitem.name = item.student_name
                vm.localdata.form.tel.push(telitem)
            }
            let len = vm.localdata.form.tel.length
            if (len>10){
                vm.module.telshow = 10
            }else{
                vm.module.telshow = len
            }
            vm.formdata = vm.localdata.form.tel.slice(0, 10)
            vm.changetel( vm.module.telshow)
        }else if (vm.$store.state.dialogs.currdialg=='studentsmsform'){
            let currStudent = vm.$store.state.envs.currStudent
            let telitem = {}
            telitem.tel = currStudent.first_tel
            telitem.student_id = currStudent._id
            telitem.name = currStudent.student_name
            vm.localdata.form.tel.push(telitem)
            vm.module.pageLable = '发送学员'
            vm.module.telshow = 1
            let len = vm.localdata.form.tel.length
            if (len>10){
                vm.module.telshow = 10
            }else{
                vm.module.telshow = len
            }
            vm.formdata = vm.localdata.form.tel.slice(0, 10)
            vm.changetel( vm.module.telshow)
        }else{
            let filterObj = []
            let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
            vm.pagination.pagesize = 1000
            vm.handleGetFilterTableTable('student', filterTxt).then((obj) => {
                let objData = obj.data.data
                for (let index in objData) {
                    let telitem = {}
                    telitem.tel = objData[index].first_tel
                    telitem.student_id = objData[index]._id
                    telitem.name = objData[index].student_name
                    vm.localdata.form.tel.push(telitem)
                }
                vm.module.pageLable = '活动推广'
                let len = vm.localdata.form.tel.length
                if (len>10){
                    vm.module.telshow = 10
                }else{
                    vm.module.telshow = len
                }
                vm.formdata = vm.localdata.form.tel.slice(0, 10)
                vm.changetel( vm.module.telshow)
            })
        }      
    },
    'formField': [
        {
            'type': 'phoneInput',
            'label': '发送号码',
            'prop': 'first_tel',
            'field': 'first_tel'
        },
        {
            'type': 'addphone',
            'switchlabel': '添加新号码',
            'fieldActive': 'telActive',
            'prop1': 'new_name',
            'prop2': 'new_tel'
        },
        {
            'type': 'textarea',
            'label': '发送内容',
            'prop': 'content',
            'field': 'content'
        },
        {
            'type': 'switchdatetime',
            'label': '定时发送',
            'prop': '',
            'field': 'fixed_time',
            'fieldActive': 'active',
            'datetype': 'datetime',
        }
    ],
    'pageTable': 'smssend',
    'pageTemplate': 'form',
    'pagePath': '',
    rulesData(vm) {
        return {
            'content': [
                { required: true, message: '请输入发送内容', trigger: 'blur' },
                { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
            ],
            'new_name': [
                { required: true, message: '请输入名字', trigger: 'blur' },
                { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
            ],
            'new_tel': [
                { required: true,validator: vm.validatePhone, trigger: 'blur' }
            ]
        }
    }
}