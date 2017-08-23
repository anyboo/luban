<template>
    <el-form :model="localdata.form" :rules="getRules" label-width="100px" ref="ruleForm">
        <template v-for="item in module.formField">
            <template v-if="item.type=='input'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-input v-model="localdata.form[item.field]"></el-input>
                </el-form-item>
            </template>
            <template v-if="item.type=='numberinput'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <lb-numberinput v-model="localdata.form[item.field]" :text="item.text"></lb-numberinput>
                </el-form-item>
            </template>
            <template v-if="item.type=='datetime'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-date-picker :type="item.datetype" placeholder="选择日期" v-model="localdata.form[item.field]" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </template>
            <template v-if="item.type=='textarea'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-input type="textarea" v-model="localdata.form[item.field]" style="width: 100%;"></el-input>
                </el-form-item>
            </template>
            <template v-if="item.type=='radiogroup'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-radio-group v-model="localdata.form[item.field]">
                        <template v-for="(value,index) in item.labels">
                            <el-radio-button :label="index">{{value.label}}</el-radio-button>
                        </template>
                    </el-radio-group>
                </el-form-item>
            </template>
            <template v-if="item.type=='inputselect'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-input placeholder="请输入内容" v-model="localdata.form[item.field]">
                        <el-select v-model="localdata.form[item.field]" slot="prepend" placeholder="请选择">
                            <template v-for="dataitem in getSelectData(item)">
                                <el-option :label="dataitem.text" :value="dataitem.text">{{dataitem.text}}</el-option>
                            </template>
                        </el-select>
                    </el-input>
                </el-form-item>
            </template>
            <template v-if="item.type=='option'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-select v-model="localdata.form[item.field]" multiple placeholder="请选择" style="width: 100%;">
                        <el-option v-for="value in getroleData" :key="value._id" :label="value.name" :value="value._id">
                        </el-option>
                    </el-select>
                </el-form-item>
            </template>
            <template v-if="item.type=='switchdatetime'">
                <el-form-item :label="item.label">
                    <el-switch v-model="localdata.form[item.fieldActive]" on-text="" off-text="">
                    </el-switch>
                </el-form-item>
                <el-form-item v-if="localdata.form[item.fieldActive]">
                    <el-date-picker type="datetime" v-model="localdata.form[item.field]"></el-date-picker>
                </el-form-item>
            </template>
            <template v-if="item.type=='selectSearch'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <lb-selectesearch v-model="localdata.form[item.field]" :table="item.table" selected="" :default="item.text" :showdialog="item.showdialog" :searchfield="item.search"></lb-selectesearch>
                </el-form-item>
            </template>
            <template v-if="item.type=='select'">
                <el-form-item :label="item.label" :prop="item.prop">
                    <el-select v-model="localdata.form[item.field]" placeholder="请选择">
                        <el-option v-for="value in getDictData(getNum)" :key="value._id" :label="value.text" :value="value._id">
                        </el-option>
                    </el-select>
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
        if (this.module.mounted) {
            this.module.mounted(this)
        }
    },
    computed: {
        getNum() {
            let Num = ''
            if (this.localdata.form.type == '0') {
                Num = '7'
            } else {
                Num = '8'
            }
            return Num
        },
        getRules() {
            let rules = null
            if (this.module.rulesData) {
                rules = this.module.rulesData(this)
            } else {
                rules = this.module.rules
            }
            return rules
        },
        getroleData() {
            let role = this.$store.state.models.models.role.data
            if (this.title == '添加') {
                for (var item of role) {
                    if (item.defrole) {
                        if (this.localdata.form.roles_id.indexOf(item._id) == -1) {
                            this.localdata.form.roles_id.push(item._id)
                        }
                    }
                }
            }
            return role
        },
    },
    methods: {
        getSelectData(item) {
            let data = null
            if (item.data) {
                data = item.data(this)
            }
            return data
        },
        getform() {
            let localdata = {}
            if (this.form) {
                localdata.form = JSON.parse(JSON.stringify(this.form))
            } else if (this.module.form) {
                localdata.form = JSON.parse(JSON.stringify(this.module.form))
            }
            if (this.module.student) {
                localdata.form.student_id = this.getStudentId()
            }
            localdata.form.op_id = this.$store.state.system.id
            localdata.form.op_name = this.$store.state.system.name
            return localdata
        },

        edit(id) {
            this.setEditModle(id)
            this.append()
        },
        append() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let vm = this
                    for (var index in this.module.formField) {
                        let item = this.module.formField[index]
                        if (item.type == "datetime") {
                            vm.localdata.form[item.field] = vm.getDatetime(vm.localdata.form[item.field])
                        }
                    }
                    // = vm.getDateNumFormat(vm.localdata.form.birth)
                    vm.handleSave().then((response) => {
                        vm.lbClosedialog()
                        this.$store.state.dialogs.dailogdata = null
                        this.$store.state.envs.currDialog = 'moduleform'
                    }, (e) => {
                    })
                }
            })
        }
    }
}
</script>
