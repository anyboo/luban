<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div>
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-comment"></i>为学员
                        <span class="label bg-info">{{getStudentName()}}</span>添加跟踪回访记录
                    </h3>
                </div>
                <div class="modal-body">
                    <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                        <el-form-item label="类型" prop="track_type">
                            <lb-buttongroup :group-data="localdata.track_type" v-model="localdata.form.track_type"></lb-buttongroup>
                        </el-form-item>
                        <el-form-item label="沟通方式" prop="track_way">
                            <div class="input-group">
                                <el-input type="text" v-model.trim.lazy="localdata.form.track_way"></el-input>
                                <div class="input-group-btn">
                                    <el-dropdown menu-align="start" @command="handleCommand">
                                        <lb-dropdown-button button-class="btn btn-default">
                                            选择
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                        <el-dropdown-menu slot="dropdown">
                                            <template v-for="item in getDictData('4')">
                                                <el-dropdown-item :command="item._id">{{item.text}}</el-dropdown-item>
                                            </template>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item label="沟通内容" prop="detail">
                            <el-input type="textarea" v-model.trim.lazy="localdata.form.detail"></el-input>
                        </el-form-item>
                        <el-form-item label="接洽人" prop="op_name">
                            <el-input type="text" placeholder="请输入接洽人的名字" v-model.trim.lazy="localdata.form.op_name"></el-input>
                        </el-form-item>
                        <el-form-item label="沟通日期" prop="track_time">
                            <el-date-picker type="datetime" v-model="localdata.form.track_time"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="下次回访提醒">
                            <el-switch v-model="isActive" on-text="" off-text="">
                            </el-switch>
                        </el-form-item>
                        <el-form-item v-if="isActive">
                            <el-date-picker type="datetime" v-model="localdata.form.next_time"></el-date-picker>
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
    name: 'add_track',
    data() {
        let localdata = {
            'form': {
                'track_type': '0',
                'track_way': '',
                'op_name': this.$store.state.system.name,
                'track_time': '',
                'next_time': '',
                'detail': '',
                'student_id': ''
            },
            'track_type': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
            }],
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'track_time': {
                        'type': 'date',
                    },
                    'next_time': {
                        'type': 'date',
                    }
                }
            },
        }
        return {
            localdata,
            model: 'inquiry',
            isActive: false,
            rules: {
                track_way: [
                    { required: true, message: '请选择沟通方式', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
                detail: [
                    { required: true, message: '请输入沟通内容', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
                op_name: [
                    { required: true, message: '请输入接洽人名字', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
                track_time: [
                    { type: 'date', required: true, message: '请输入日期', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.$store.state.envs.currStudent = this.$store.state.dialogs.dailogdata
            this.localdata.form.student_id = this.$store.state.dialogs.dailogdata._id
        }
    },
    methods: {
        handleCommand(value) {
            this.localdata.form.track_way = this.getDictText('4', value)
            this.$refs['ruleForm'].validateField('track_way')
        },
        handleClick() {
            let vm = this
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    vm.handleSave().then((data) => {
                        vm.updateTeble('student', vm.$store.state.envs.currStudent._id, {
                            'inquiry_id': data._id
                        }).then(() => {
                            vm.$message({
                                message: '操作成功',
                                type: 'success'
                            })
                            vm.lbClosedialog()
                            this.$store.state.envs.currDialog = 'lb-inquiry'
                        })
                    })
                }
            })
        }
    }
}
</script>
