<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>{{title}}员工
                    </h3>
                </div>
                <div class="modal-body">
                    <el-form :model="localdata.form" :rules="rules" label-width="95px" ref="ruleForm">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="localdata.form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="账号(手机)" prop="tel">
                            <el-input v-model="localdata.form.tel"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <lb-buttongroup :group-data="localdata.sex" v-model="localdata.form.sex"></lb-buttongroup>
                        </el-form-item>
                        <el-form-item label="类型" prop="is_part_time">
                            <lb-buttongroup :group-data="localdata.is_part_time" v-model="localdata.form.is_part_time"></lb-buttongroup>
                        </el-form-item>
                        <el-form-item label="角色" prop="roles_id">
                            <el-select v-model="localdata.form.roles_id" multiple placeholder="请选择">
                                <el-option v-for="item in getroleData" :key="item._id" :label="item.name" :value="item._id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期" prop="birth">
                            <el-date-picker type="date" name="birth" v-model="localdata.form.birth"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="Email" prop="email">
                            <el-input v-model="localdata.form.email"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="handleClick">确定</button>
                    <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'employee_add',
    data() {
        let localdata = {
            'form': {
                'name': '',
                'sex': '1',
                'roles_id': [],
                'is_part_time': '0',
                'tel': '',
                'email': '',
                'lock': false,
                'birth': ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'birth': {
                        'type': 'date',
                    }
                }
            },
            'sex': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }],
            'is_part_time': [{
                'value': '0',
                'text': '全职'
            }, {
                'value': '1',
                'text': '兼职'
            }]
        }
        var validateTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号码'))
            } else if (!(/^1\d{10}$/.test(value))){
                callback(new Error('手机号码必须1开头——请输入11个字符!已输入'+value.length+'字符'))
            } else {
                callback()
            }
        }
        return {
            localdata,
            model: 'employee',
            title: '添加',
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256个字符', trigger: 'blur' }
                ],
                tel: [
                    { validator: validateTel, required: true, trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        }
        this.getTableApidata('role')
    },
    computed: {
        getroleData() {
            let role = this.$store.state.models.models.role.data
            return role
        },
    },
    methods: {
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.handleSave().then(() => {
                        this.$message({
                            message: this.title + '成功',
                            type: 'success'
                        })
                        this.lbClosedialog()
                        this.$store.state.envs.currDialogResult = this.currentRow
                        this.$store.state.envs.currDialog = 'lb-employee'
                    }, (e) => {
                    })
                }
            })
        }
    }
}
</script>
