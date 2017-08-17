<template>
    <div class="input-group">
        <el-input :disabled="true" :placeholder="getSelectLessonName"></el-input>
        <span class="input-group-btn">
            <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectlessontpl')">
                <i class="fa fa-book"></i>选择
            </button>
        </span>
    </div>
</template>
<script>
export default {
    name: 'LbSelectelessonsearch',
    props: ['value'],
    data() {
        return {
            lesson_name: '请选择课程',
            course_id: ''
        }
    },
    watch: {
        value: function (val) {
            if (val == '') {
                this.lesson_name = '请选择课程'
            }
            this.student_id = val
        }
    },
    methods: {
    },
    computed: {
        getSelectLessonName() {
            if (this.$store.state.envs.currDialog == 'lb-selectlessontpl') {
                let courseId = ''
                if (this.$store.state.envs.currDialogResult) {
                    this.lesson_name = this.$store.state.envs.currDialogResult.lesson_name
                    courseId = this.$store.state.envs.currDialogResult._id
                } else {
                    courseId = ''
                    this.lesson_name = '请选择课程'
                }
                this.$store.state.envs.currDialog = ''
                if (this.course_id != courseId) {
                    this.course_id = courseId
                    this.$emit('input', courseId)
                }
            }
            return this.lesson_name
        },
    }
}
</script>
