<template>
    <div class="input-group">
        <input type="text" :placeholder="getSelectStudentName" class="form-control" ng-readonly="true" readonly="readonly" v-model="studentname">
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
    data() {
        return {
            studentname:''
        }
    },
    watch: {
    },
    methods: {
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.student_name = this.$store.state.envs.currDialogResult.student_name
                    this.student_id = this.$store.state.envs.currDialogResult._id
                    this.$emit('search')
                } else {
                    this.student_id = ''
                    this.student_name = '学员'
                    this.$emit('search')
                }
            }
            return this.student_name
        },
    }
}
</script>
