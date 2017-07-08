<template>
    <div class="modal-dialog modal-sm" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="wrapper ng-scope" page-controller="region_set">
                <p class="ng-binding">请选择学员 {{getStudentName }} 的归属</p>
                <div class="w-sm">
                    <div class="chosen-container chosen-container-single" style="width: 120px;" title>
                        <div class="chosen-drop">
                            <el-select v-model="localdata.form.region_oe_id" placeholder="请选择">
                                <el-option v-for="item in getEmployeeData" :key="item._id" :label="item.name" :value="item._id">
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
    name: 'region_set',
    data() {
        let localdata = {
            'form': {
                'region_oe_id': '',
                'student_name': '',
            }
        }
        return {
            localdata,
            model: 'student'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.localdata.form.region_oe_id = this.$store.state.dialogs.dailogdata.region_oe_id
        this.localdata.form.student_name = this.$store.state.dialogs.dailogdata.student_name

        this.getTableApidata('employee')
    },
    computed: {
        getEmployeeData() {
            let employeeData = this.$store.state.models.models.employee.data
            return employeeData
        },
        getStudentName(){
            return this.localdata.form.student_name
        }
    },
    watch: {},
    methods: {
        handleClick() {
            let vm = this
            vm.handleSave().then((data) => {
                this.$store.state.dialogs.dailogdata.region_oe_id = data.region_oe_id
                vm.lbClosedialog()
            })
        },
    }
}
</script>
