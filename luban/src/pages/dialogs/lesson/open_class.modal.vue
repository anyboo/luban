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
                        <i class="fa fa-flag-checkered"></i>{{title}}班级信息
                    </h3>
                </div>
                <div class="modal-body" :class="{result:changeSelectTeacher}">
                    <form name="form1" class="form-validation form-horizontal m-t ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-pattern">
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">授课老师:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="input-group">
                                    <input type="text" class="form-control ng-pristine ng-valid ng-touched" readonly="true" :placeholder="teacher_name">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectteachertpl')">
                                            <i class="fa fa-user"></i>选择
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">课程:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="input-group">
                                    <input type="text" :placeholder="lesson_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" ng-readonly="true" required readonly="readonly">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectlessontpl')">
                                            <i class="fa fa-book"></i>选择
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">班级名称:</label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="class_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" :class="{'ng-dirty':localdata.validator.fields.class_name.errorStatus}" v-model="localdata.form.class_name" @change="validate('class_name')">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">开课日期:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="inline w-sm">
                                    <el-date-picker type="date" ng-disabled="info.master_oe_id == 0" name="open_time" v-model="localdata.form.open_time"></el-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">预计结课:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="inline w-sm">
                                    <el-date-picker type="date" ng-disabled="info.master_oe_id == 0" name="close_time" v-model="localdata.form.close_time"></el-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">额定人数:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group w-sm">
                                    <lb-numberinput type="number" ng-disabled="info.master_oe_id == 0" name="max_student_num" ng-pattern="/^[0-9]+$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.max_student_num">
                                    </lb-numberinput>
                                    <span class="input-group-addon">人</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">授课次数:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group w-sm">
                                    <lb-numberinput type="number" min="0" step="1" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.total_times">
                                    </lb-numberinput>
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">单次课时:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group">
                                    <lb-numberinput type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-change="auto_etime()" v-model="localdata.form.unit_hours">
                                    </lb-numberinput>
                                    <span class="input-group-addon">小时</span>
                                </div>
                            </div>
                        </div>
                    </form>
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
    name: 'open_class',
    data() {
        let localdata = {
            'form': {
                'class_name': '',
                'course_id': '',
                'open_time': '',
                'close_time': '',
                'max_student_num': '',
                'total_times': '',
                'unit_hours': '',
                'teacher_id': ''
            },
            'fields': {
                'detail': {
                    'type': 'string',
                    'required': true,
                    'min': 1,
                    'max': 256,
                    'errorStatus': false
                },
                'birth': {
                    'type': 'date',
                }
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'class_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
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
            lesson_name: '请选择课程'
        }
    },
    mounted() {
        let data = this.$store.state.dialogs.dailogdata
        if (data) {
            this.title = '编辑'
            this.setEditModle(data,['_id'])
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
                    this.lesson_name = '请选择老师'
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
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-openclass'
            })
        },

    }
}
</script>
