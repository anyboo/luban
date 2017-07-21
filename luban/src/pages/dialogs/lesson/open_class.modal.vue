<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag-checkered"></i>{{title}}班级信息
                </h3>
            </div>
            <div class="modal-body" :class="{result:changeSelectTeacher}">
                <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="授课老师" prop="teacher_id">
                        <div class="input-group">
                            <el-input :disabled="true" :placeholder="teacher_name"></el-input>
                            <span class="input-group-btn">
                                <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectteachertpl')">
                                    <i class="fa fa-user"></i>选择
                                </button>
                            </span>
                        </div>
                    </el-form-item>
                    <el-form-item label="课程" prop="course_id">
                        <div class="input-group">
                            <el-input :disabled="true" :placeholder="lesson_name"></el-input>
                            <span class="input-group-btn">
                                <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectlessontpl')">
                                    <i class="fa fa-book"></i>选择
                                </button>
                            </span>
                        </div>
                    </el-form-item>
                    <el-form-item label="班级名称" prop="class_name">
                        <el-input v-model="localdata.form.class_name"></el-input>
                    </el-form-item>
                    <el-form-item label="开课日期">
                        <el-date-picker type="date" v-model="localdata.form.open_time" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="预计结课">
                        <el-date-picker type="date" v-model="localdata.form.close_time" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="额定人数">
                        <div class="input-group">
                            <lb-numberinput type="number" class="form-control" v-model="localdata.form.max_student_num">
                            </lb-numberinput>
                            <span class="input-group-addon">人</span>
                        </div>
                    </el-form-item>
                    <el-form-item label="额定人数">
                        <div class="input-group">
                            <lb-numberinput type="number" class="form-control" v-model="localdata.form.max_student_num">
                            </lb-numberinput>
                            <span class="input-group-addon">人</span>
                        </div>
                    </el-form-item>
                    <el-form-item label="授课次数">
                        <div class="input-group">
                            <lb-numberinput type="number" class="form-control" v-model="localdata.form.total_times">
                            </lb-numberinput>
                            <span class="input-group-addon">次</span>
                        </div>
                    </el-form-item>
                    <el-form-item label="单次课时">
                        <div class="input-group">
                            <lb-numberinput type="text" class="form-control" v-model="localdata.form.unit_hours">
                            </lb-numberinput>
                            <span class="input-group-addon">小时</span>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleClick">确定</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'open_class',
    data() {
        let localdata = {
            'form': {
                'class_name': '',
                'course_id': '',
                'open_time': '',
                'close_time': '',
                'max_student_num': 0,
                'total_times': 0,
                'unit_hours': 0,
                'teacher_id': ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'open_time': {
                        'type': 'date',
                    },
                    'close_time': {
                        'type': 'date',
                    }
                }
            },
        }
        return {
            localdata,
            model: 'classes',
            title: '创建',
            teacher_name: '请选择老师',
            lesson_name: '请选择课程',
            rules: {
                teacher_id: [
                    { required: true, message: '请选择授课老师', trigger: 'blur' }
                ],
                course_id: [
                    { required: true, message: '请输入课程', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
                class_name: [
                    { required: true, message: '请班级名称', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        let data = this.$store.state.dialogs.dailogdata
        if (data) {
            this.title = '编辑'
            this.setEditModle(data['_id'])
            this.teacher_name = this.getLookUp(data.employee, 'name')
            this.lesson_name = this.getLookUp(data.course, 'lesson_name')
            this.localdata.form = this.lodash.assign(this.localdata.form, data)
        } else {
            this.title = '创建'
        }
        this.getTableApidata('course')
    },
    computed: {
        changeSelectTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-selectteachertpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.teacher_name = this.$store.state.envs.currDialogResult.name
                    this.localdata.form.teacher_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.teacher_name = '请选择老师'
                    this.localdata.form.teacher_id = ''
                }
                result = true
            } else if (this.$store.state.envs.currDialog == 'lb-selectlessontpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.lesson_name = this.$store.state.envs.currDialogResult.lesson_name
                    this.localdata.form.course_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.lesson_name = '请选择课程'
                    this.localdata.form.course_id = ''
                }
                result = true
            }
            return result
        },
        getcourseData() {
            let course = this.$store.state.models.models.course.data
            return course
        }
    },
    watch: {},
    methods: {
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.handleSave().then(() => {
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        })
                        this.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-openclass'
                    }, (e) => {
                        console.log(e)
                    })
                } else {
                    return false;
                }
            })
        },

    }
}
</script>
