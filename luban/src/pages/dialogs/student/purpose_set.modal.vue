<template>
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="wrapper">
                <p >请设置学员 {{getStudentName }} 的意向程度</p>
                <div class="w-sm">
                    <div class="chosen-container chosen-container-single" style="width: 120px;" title>
                        <div class="chosen-drop">
                            <el-select v-model="localdata.form.purpose" placeholder="请选择">
                                <el-option v-for="item in getDictData('6')" :key="item._id" :label="item.text" :value="item._id">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <p class="m-t">
                    <button class="btn btn-primary" @click="handleClick">确定</button>
                    <a class="btn btn-danger m-l-xs" @click="lbClosedialog($event)">取消</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'purpose_set',
    data() {
        let localdata = {
            'form': {
                'student_name': '',
                'purpose':''
            },
        }
        return {
            localdata,
            model: 'student'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.localdata.form.purpose = this.$store.state.dialogs.dailogdata.purpose
        if (this.getDictText('6',this.localdata.form.purpose)==''){
            this.localdata.form.purpose = this.getDictDefvalue('6')
        }
        this.localdata.form.student_name = this.$store.state.dialogs.dailogdata.student_name
    },
    computed: {
        getStudentName() {
            return this.localdata.form.student_name
        }
    },
    watch: {},
    methods: {
        handleClick() {
            let vm = this
            vm.handleSave().then((data) => {
                //this.$store.state.dialogs.dailogdata.purpose = data.purpose
                vm.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-changestudent'
            })
        }
    }
}
</script>
