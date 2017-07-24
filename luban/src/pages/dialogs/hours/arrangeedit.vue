<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" @click="lbClosedialog($event)" class="close ">
                    <span class="text-right" style="float:right">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i>排课</i>
                </h3>
            </div>
            <div class="modal-body">
                <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="班级" prop="classes_id" required>
                        <el-select v-model="localdata.form.classes_id" filterable placeholder="请选择" @change="getTechName" style="width: 100%;">
                            <el-option v-for="item in getClassesData" :key="item._id" :label="item.class_name" :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="老师" v-if="localdata.form.classes_id.length>0">
                        {{techName}}
                    </el-form-item>
                    <el-form-item label="上课教室" prop="sclasses_id" required>
                        <el-select v-model="localdata.form.sclasses_id" filterable placeholder="请选择" style="width: 100%;">
                            <el-option v-for="item in getsClassesData" :key="item._id" :label="item.class_name" :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开始日期" prop="daterange1" required>
                        <el-date-picker @change="date1change" type="date" placeholder="选择日期" v-model="localdata.form.daterange1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="上课时间" prop="timerange" required>
                        <el-time-picker v-model="localdata.form.timerange" placeholder="选择时间" is-range style="width: 100%;">
                        </el-time-picker>
                    </el-form-item>
                    <el-form-item label="结束日期" prop="daterange2" :required="localdata.form.dayloop">
                        <el-date-picker type="date" placeholder="选择日期" v-model="localdata.form.daterange2" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="周期">
                        <el-switch on-text="" off-text="" v-model="localdata.form.dayloop"></el-switch>
                    </el-form-item>
                    <el-form-item label="上课周期" v-if="localdata.form.dayloop">
                        <el-col :span="15">
                            <label>
                                <input type="checkbox" v-model="localdata.form.day_1" @click="daychange">
                                <span>星期一</span>
                            </label>
                            <label>
                                <input type="checkbox" v-model="localdata.form.day_2" @click="daychange">
                                <span>星期二</span>
                            </label>
                            <label>
                                <input type="checkbox" v-model="localdata.form.day_3" @click="daychange">
                                <span>星期三</span>
                            </label>
                            <label>
                                <input type="checkbox" v-model="localdata.form.day_4" @click="daychange">
                                <span>星期四</span>
                            </label>
                            <label>
                                <input type="checkbox" v-model="localdata.form.day_5" @click="daychange">
                                <span>星期五</span>
                            </label>
                            <label>
                                <input type="checkbox" @click="daychange" v-model="localdata.form.day_6">
                                <span>星期六</span>
                            </label>
                            <label>
                                <input type="checkbox" @click="daychange" v-model="localdata.form.day_0">
                                <span>星期日</span>
                            </label>
                        </el-col>
                        <el-col :span="3">
                            <label>
                                <input type="checkbox" @click="workchange" v-model="workday">
                                <span>工作日</span>
                            </label>
                            <label>
                                <input type="checkbox" @click="workchange" v-model="weekday">
                                <span>周末</span>
                            </label>
                        </el-col>
                    </el-form-item>
                </el-form>
            </div>
            <div class="modal-footer">
                <button @click="save" class="btn btn-primary">确定</button>
                <button @click="del" class="btn btn-primary" v-if="hasDel">删除</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<style>
.modal-header {
    cursor: grab;
    cursor: -webkit-grab;
    border-bottom: 1px solid #eee;
    color: #fff;
    position: relative;
    background: #1892d1;
    border-radius: 6px 6px 0 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    min-height: 42px;
}

.timeSelect {
    width: 160px;
    height: 30px
}
</style>
<script>
export default {
    name: 'footer',
    data() {
        let localdata = {
            form: {
                day_1: false,
                day_2: false,
                day_3: false,
                day_4: false,
                day_5: false,
                day_6: false,
                day_0: false,
                dayloop: false,
                daterange1: '',
                daterange2: '',
                classes_id: '',
                sclasses_id: '',
                teacher_id: '',
                timerange1: '',
                timerange2: '',
                timerange: ''
            }
        }
        var validateDatatime = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(rule.message))
            } else {
                if (value.length != 2) {
                    callback(new Error(rule.message))
                } else {
                    callback()
                }
            }
        }
        var validateDate = (rule, value, callback) => {
            if (value === '') {
                if (this.localdata.form.dayloop) {
                    callback(new Error('请选择日期'))
                } else {
                    callback()
                }
            } else {
                if (this.localdata.form.dayloop) {
                    if (this.getDatetime(this.localdata.form.daterange1) > this.getDatetime(this.localdata.form.daterange2)) {
                        callback(new Error('结束日期要大于开始日期'))
                    } else {
                        callback()
                    }
                } else {
                    callback()
                }
            }
        }
        return {
            localdata,
            rules: {
                classes_id: [
                    { required: true, message: '请选择班级', trigger: 'change' }
                ],
                sclasses_id: [
                    { required: true, message: '请选择教室', trigger: 'change' }
                ],
                daterange1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
                ],
                daterange2: [
                    { validator: validateDate, trigger: 'blur' }
                ],
                timerange: [
                    { validator: validateDatatime, message: '请选择时间', trigger: 'blur' }
                ]
            },
            model: 'arrange',
            tables: ['arrange'],
            workday: false,
            weekday: false,
            classes: [],
            sclasses: [],
            hasDel: false,
            techName: '',
            'lookuptech': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            }
        }
    },
    mounted() {
        let filterObj = []
        filterObj.push({
            'key': 'lookup',
            'value': this.lookuptech,
            'type': 'lookup'
        })
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        this.handleGetFilterTableTable('classes', filterTxt)
        this.getTableApidata('sclasses')
        if (this.$store.state.dialogs.dailogdata) {
            this.handleGetTableID('arrange', this.$store.state.dialogs.dailogdata['id']).then((obj) => {
                if (obj.data && obj.data.length > 0) {
                    this.hasDel = true
                    this.setEditModle(obj.data[0]._id)
                    this.localdata.form = this.lodash.assign(this.localdata.form, obj.data[0])
                    this.daychange()
                }
            })
        }
    },
    computed: {
        getClassesData() {
            this.classes = this.$store.state.models.models.classes.data
            return this.classes
        },
        getsClassesData() {
            this.sclasses = this.$store.state.models.models.sclasses.data
            return this.sclasses
        }
    },
    watch: {},
    methods: {
        date1change(){
            if (!this.localdata.form.dayloop){
                this.localdata.form.daterange2 = this.localdata.form.daterange1
            }
        },
        getTechName() {
            let vm = this
            let teach = _.find(vm.classes, { _id: vm.localdata.form.classes_id })
            if (teach) {
                if (teach.employee && teach.employee.length > 0) {
                    vm.techName = teach.employee[0].name
                }
            }
        },
        handleSearch() {
        },
        workchange() {
            this.localdata.form.day_1 = this.workday
            this.localdata.form.day_2 = this.workday
            this.localdata.form.day_3 = this.workday
            this.localdata.form.day_4 = this.workday
            this.localdata.form.day_5 = this.workday
            this.localdata.form.day_6 = this.weekday
            this.localdata.form.day_0 = this.weekday
        },
        del() {
            this.$confirm('此操作删除该排课, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleDelete(this._id).then(() => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.lbClosedialog()
                    this.$store.state.envs.currDialog = 'lb-arrange'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        save() {
            let vm = this
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let teach = _.find(vm.classes, { _id: vm.localdata.form.classes_id })
                    if (teach) {
                        vm.localdata.form.teacher_id = teach.teacher_id
                    }
                    vm.localdata.form.daterange1 = vm.getDatetime(vm.localdata.form.daterange1)
                    vm.localdata.form.daterange2 = vm.getDatetime(vm.localdata.form.daterange2)
                    vm.localdata.form.timerange1 = vm.getDatetime(vm.localdata.form.timerange[0])
                    vm.localdata.form.timerange2 = vm.getDatetime(vm.localdata.form.timerange[1])
                    vm.localdata.form.timerange[0] = vm.getDatetime(vm.localdata.form.timerange[0])
                    vm.localdata.form.timerange[1] = vm.getDatetime(vm.localdata.form.timerange[1])
                    vm.handleSave().then(() => {
                        vm.$message({
                            message: '操作成功',
                            type: 'success'
                        })
                        vm.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-arrange'
                    }, (e) => {
                        console.log(e)
                    })
                } else {
                    return false
                }
            })

        },
        daychange() {
            let form = this.localdata.form
            this.workday = form.day_1 && form.day_2 && form.day_3 && form.day_4 && form.day_5
            this.weekday = form.day_6 && form.day_0
        }
    }
}
</script>
