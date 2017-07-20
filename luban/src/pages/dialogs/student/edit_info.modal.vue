<template>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>编辑
                        <span class="badge bg-info ng-binding">{{localdata.form.student_name }}</span>的基本资料
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-valid ng-valid-required">
                        <div class="form-group ng-scope">
                            <label class="col-xs-12 col-md-2 control-label">
                                <span class="text-danger">*</span>姓名:
                            </label>
                            <div class="col-xs-12 col-md-10">
                                <div class="inline va-m w-sm">
                                    <input type="text" name="student_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.student_name.errorStatus}" placeholder="输入学员姓名" v-model.trim.lazy="localdata.form.student_name" @change="validate('student_name')">
                                </div>
                                <lb-buttongroup :group-data="localdata.sex" v-model="localdata.form.sex"></lb-buttongroup>
                                <div class="error ng-hide" v-if="localdata.validator.fields.student_name.errorStatus">
                                    <span class="text-warning">学员姓名必须填写</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-md-2 control-label">昵称:</label>
                            <div class="col-xs-12 col-md-5">
                                <div class="inline w-sm">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="小名或英文名" v-model="localdata.form.nickname">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">出生日期:</label>
                            <div class="col-md-5 col-xs-12">
                                <div class="w-sm">
                                    <el-date-picker type="date" name="birth_date" v-model="localdata.form.birth"></el-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="info.inited">
                            <label class="control-label col-md-2 col-xs-12">学员归属:</label>
                            <div class="col-md-5 col-xs-12">
                                <el-select v-model="localdata.form.region_oe_id" placeholder="请选择">
                                    <el-option v-for="item in getEmployeeData" :key="item._id" :label="item.name" :value="item._id">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="have_field('home_address')">
                            <label class="control-label col-md-2 col-xs-12">家庭住址:</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="home_address" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.home_address">
                            </div>
                        </div>
                        <div class="form-group ng-scope">
                            <label class="control-label col-md-2 col-xs-12">就读学校:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="inline va-m w ng-scope" ng-if="have_field('school')">
                                    <input type="text" name="school" class="form-control ng-pristine ng-untouched ng-valid" placeholder="学校" v-model="localdata.form.school">
                                </div>
                                <div class="inline va-m w-xs m-l-xs ng-scope">
                                    <select class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.grade">
                                        <option value class>年级</option>
                                        <option value="0">不确定</option>
                                        <option value="1">一年级</option>
                                        <option value="2">二年级</option>
                                        <option value="3">三年级</option>
                                        <option value="4">四年级</option>
                                        <option value="5">五年级</option>
                                        <option value="6">六年级</option>
                                        <option value="7">初一</option>
                                        <option value="8">初二</option>
                                        <option value="9">初三</option>
                                        <option value="10">高一</option>
                                        <option value="11">高二</option>
                                        <option value="12">高三</option>
                                    </select>
                                </div>
                                <div class="inline va-m w-xs m-l-xs ng-scope">
                                    <select class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.class">
                                        <option value class>班级</option>
                                        <option value="0">1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                        <option value="4">5</option>
                                        <option value="5">6</option>
                                        <option value="6">7</option>
                                        <option value="7">8</option>
                                        <option value="8">9</option>
                                        <option value="9">10</option>
                                        <option value="10">11</option>
                                        <option value="11">12</option>
                                        <option value="12">13</option>
                                    </select>
                                </div>
                                <span class="padder">班</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">备注:</label>
                            <div class="col-md-5 col-xs-12">
                                <textarea name="note" v-model="localdata.form.note" rows="2" class="form-control ng-pristine ng-untouched ng-valid"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok();" @click="handleClick">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'edit_info',
    data() {
        let localdata = {
            'form': {
                'student_name': '',
                'sex': '',
                'nickname': '',
                'birth': '',
                'home_address': '',
                'school': '',
                'grade': '',
                'class': '',
                'note': '',
                'region_oe_id':'0'
            },
            'sex': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }, {
                'value': '0',
                'iclass': 'fa fa-question-circle',
                'text': '待确定'
            }],
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'student_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'birth': {
                        'type': 'date',
                    }
                }
            },
        }
        return {
            localdata,
            model: 'student'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        this.getTableApidata('employee')
    },
    computed: {
        getEmployeeData() {
            let employeeData = [{ name: '请选择', _id: '0' }]

            for (var item of this.$store.state.models.models.employee.data) {
                employeeData.push({ name: item.name, _id: item._id })
            }
            return employeeData
        },
    },
    watch: {},
    methods: {
        handleClick() {
            let vm = this
            vm.localdata.form.birthstr = vm.getDateNumFormat(vm.localdata.form.birth)
            vm.handleSave().then(() => {
                vm.$store.state.dialogs.dailogdata = vm.lodash.assign(vm.$store.state.dialogs.dailogdata, vm.localdata.form)
                vm.lbClosedialog()
            })
        }
    }
}
</script>
