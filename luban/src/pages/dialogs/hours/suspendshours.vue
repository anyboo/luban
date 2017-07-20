<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" @click="lbClosedialog($event)" class="close  ">
                    <span class="text-right" style="float:right">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i>停课</i>
                </h3>
            </div>
            <div class="modal-body">
                <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="学员">
                        {{getStudentName()}}
                    </el-form-item>
                    <el-form-item label="停课开始" prop="daterange1" required>
                        <el-date-picker type="date" placeholder="选择日期" v-model="localdata.form.daterange1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="停课结束" prop="daterange2" required>
                        <el-date-picker type="date" placeholder="选择日期" v-model="localdata.form.daterange2" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="停课原因">
                        <el-input type="textarea" v-model="localdata.form.reason" style="width: 100%;"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="modal-footer">
                <button @click="save" class="btn btn-primary">确定</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'suspendshours',
    data() {
        let localdata = {
            'form': {
                reason: '',
                daterange1: '',
                daterange2: '',
                student_id: this.getStudentId()
            }
        }
        return {
            status: 0,
            model: 'suspend',
            localdata,
            rules: {
                daterange1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
                ],
                daterange2: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {},
    watch: {

    },
    methods: {
        save() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.localdata.form.daterange1 = this.getDatetime(this.localdata.form.daterange1)
                    this.localdata.form.daterange2 = this.getDatetime(this.localdata.form.daterange2)
                    this.handleSave().then(() => {
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        })
                        this.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-suspendshours'
                    })
                } else {
                    return false
                }
            })
        }
    }
}
</script>
