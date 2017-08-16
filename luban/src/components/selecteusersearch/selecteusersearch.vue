<template>
    <div class="input-group">
        <input type="text" :placeholder="getSelectStudentName" class="form-control" ng-readonly="true" readonly="readonly">
        <span class="input-group-btn">
            <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
            </button>
        </span>
    </div>
</template>
<script>
export default {
    name: 'LbSelecteusersearch',
    props: ['value'],
    data() {
        return {
            studentname: '学员'
        }
    },
    watch: {
        value:function() {
            this.studentname = ''
        }
    },
    methods: {
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.studentname = this.$store.state.envs.currDialogResult.student_name
                    this.student_id = this.$store.state.envs.currDialogResult._id
                    this.$emit('input', this.student_id)
                } else {
                    this.student_id = ''
                    this.studentname = '学员'
                    this.$emit('input', this.student_id)
                }
            }
            return this.studentname
        },
    }
}
</script>
