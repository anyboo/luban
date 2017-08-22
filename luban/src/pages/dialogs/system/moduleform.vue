<template>
    <el-form :model="localdata.form" :rules="module.rules" label-width="100px" ref="ruleForm">
        <template v-for="item in module.formField">
            <template v-if="item.type=='input'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-input v-model="localdata.form[item.field]"></el-input>
                </el-form-item>
            </template>
            <template v-if="item.type=='numberinput'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <lb-numberinput v-model="localdata.form.max_student_num" :text="item.text"></lb-numberinput>
                </el-form-item>
            </template>
        </template>
    </el-form>
</template>

<script>
import moduleform from '~/stores/moduleform.js'
export default {
    name: 'moduleform',
    props: ['module', 'form'],
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
            localdata: this.getform(),
            expand: false,
            model: this.module.pageTable
        }
    },
    mounted() {
        //console.log(this.module.formField, this.formType)
    },
    methods: {
        getform() {
            let localdata = {}
            if (this.form) {
                localdata.form = JSON.parse(JSON.stringify(this.form))
            } else if (this.module.form) {
                localdata.form = JSON.parse(JSON.stringify(this.module.form))
            }
            return localdata
        },
        edit(id) {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.setEditModle(id)
                    let vm = this
                    //vm.localdata.form.birthstr = vm.getDateNumFormat(vm.localdata.form.birth)
                    vm.handleSave().then(() => {
                        vm.lbClosedialog()
                        this.$store.state.envs.currDialog = 'moduleform'
                    })
                }
            })
        },
        append() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let vm = this
                    //vm.localdata.form.birthstr = vm.getDateNumFormat(vm.localdata.form.birth)
                    vm.handleSave().then((response) => {
                        vm.lbClosedialog()
                        this.$store.state.envs.currDialog = 'moduleform'
                    }, (e) => {
                    })
                }
            })
        }
    }
}
</script>
