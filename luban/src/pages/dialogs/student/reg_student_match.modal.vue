<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    登记
                    <span class="label bg-info">{{getStudentName()}}</span>的赛事记录
                </h3>
            </div>
            <div class="modal-body">
                <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="赛事名称:" prop="match_name">
                        <el-input type="text" v-model="localdata.form.match_name"></el-input>
                    </el-form-item>
                    <el-form-item label="参赛日期" prop="join_date">
                        <el-date-picker type="date" v-model="localdata.form.join_date"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="赛事成绩:" prop="result">
                        <el-input type="text" v-model="localdata.form.result"></el-input>
                    </el-form-item>
                    <el-form-item label="赛事详情记录">
                        <el-input type="textarea" v-model="localdata.form.info"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleClick">登记</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reg_student_match',
    data() {
        let localdata = {
            'form': {
                'match_name': '',
                'join_date': '',
                'result': '',
                'info': '',
                'student_id': this.getStudentId()
            }
        }
        return {
            localdata,
            model: 'recording',
            rules: {
                match_name: [
                    { required: true, message: '请输入赛事名称', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
                join_date: [
                    {  type: 'date',required: true, message: '请输入日期', trigger: 'blur' }
                ],
                result: [
                    { required: true, message: '请输入赛事成绩', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.$store.state.envs.currStudent = this.$store.state.dialogs.dailogdata
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.localdata.form.join_date = this.getDatetime(this.localdata.form.join_date)
                    this.handleSave().then(() => {
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        })
                        this.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-recording'
                    })
                }
            })
        }
    }
}
</script>
