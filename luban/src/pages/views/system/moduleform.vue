<template>
    <el-form :model="localdata.form" :rules="rules" label-width="100px" ref="ruleForm">

    </el-form>
</template>

<script>
import moduleform from '~/stores/moduleform.js'
export default {
    name: 'moduleform',
    props: ['module'],
    data() {
        var validateTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号码'))
            } else if (!(/^1\d{10}$/.test(value))) {
                callback(new Error('手机号码必须为数字1开头并为11位!已输入' + value.length + '位。'))
            } else {
                callback()
            }
        }
        return {
            moduledata: '',
            validateTel,
            rules:moduleform[module].rules,
            localdata:moduleform[module].localdata,
            expand: false,
            model: moduleform[module].pageTable,
        }
    },
    methods: {
        handleEdit() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
                    console.log(this.$store.state.dialogs.dailogdata['_id'])
                    let vm = this
                    //vm.localdata.form.birthstr = vm.getDateNumFormat(vm.localdata.form.birth)
                    vm.handleSave().then(() => {
                        //vm.$store.state.dialogs.dailogdata = vm.lodash.assign(vm.$store.state.dialogs.dailogdata, vm.localdata.form)
                        vm.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-moduleform'
                    })
                }
            })
        },
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let vm = this
                    //vm.localdata.form.birthstr = vm.getDateNumFormat(vm.localdata.form.birth)
                    vm.handleSave().then((response) => {
                        vm.$store.state.envs.currStudent = response
                        vm.handleShowDialog('lb-finishadd', response)
                    }, (e) => {
                    })
                }
            })
        }
    }
}
</script>
