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
    props: ['value', 'selected'],
    data() {
        return {
            studentname: '学员',
            student_id: ''
        }
    },
    watch: {
        value: function (val) {
            if (val == '') {
                this.studentname = '学员'
            }
            this.student_id = val
        }
    },
    methods: {
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.selected == '') {
                    let student_tempid = ''
                    if (this.$store.state.envs.currDialogResult) {
                        this.studentname = this.$store.state.envs.currDialogResult.student_name
                        student_tempid = this.$store.state.envs.currDialogResult._id
                    } else {
                        student_tempid = ''
                        this.studentname = '学员'
                    }
                    this.$store.state.envs.currDialog = ''
                    if (this.student_id != student_tempid) {
                        this.student_id = student_tempid
                        this.$emit('input', student_tempid)
                    }
                }
            }
            return this.studentname
        },
    }
}
</script>
