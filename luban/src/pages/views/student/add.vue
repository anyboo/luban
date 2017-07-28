<template>
    <div class="wrapper">
        <form name="form1" class="form form-horizontal form-validation  ng-invalid ng-invalid-required -pattern">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-user"></i>学员档案录入
                    <a @click="lbShowdialog($event,'lb-import')">
                    </a>
                </div>
                <div class="panel-body">
                    <div class="wrapper-xs">
                        <el-form :model="localdata.form" :rules="rules" label-width="100px" ref="ruleForm">
                            <el-form-item label="姓名" prop="student_name">
                                <el-input v-model="localdata.form.student_name" style="width:120px;" placeholder="请输入学员姓名"></el-input>
                                <lb-buttongroup :group-data="localdata.sex" v-model="localdata.form.sex"></lb-buttongroup>
                            </el-form-item>
                            <el-form-item label="联系方式" prop="first_tel">
                                <el-input v-model="localdata.form.first_tel" style="width:120px;" placeholder="请输入手机号"></el-input>
                                <el-select v-model="localdata.form.first_rel_rel" placeholder="关系" style="width:100px;">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-input v-model="localdata.form.first_rel_name" style="width:100px;" v-if="localdata.form.first_rel_rel!='0'"></el-input>
                            </el-form-item>
                            <el-form-item prop="first_tel" v-for="item,index in localdata.form.relations">
                                <el-input v-model="item.tel" style="width:120px;" placeholder="请输入手机号"></el-input>
                                                      
                                  <el-select v-model="item.relation"  placeholder="关系" style="width:100px;">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>                       
                                
                                  <el-input v-model="localdata.form.first_rel_name" style="width:100px;" v-if="item.relation!='0'"></el-input>
                            
                         <a @click="localdata.form.relations.splice(index, 1)">
                                    <i class="fa fa-minus-square-o"></i>
                                </a>
                            </el-form-item>
                            <span class="wrapper" style="position: relative; left:87px;top:-9px">
                                <a @click="localdata.form.relations.push({relation:'',name:'',tel:''})">
                                    <i class="fa fa-plus-square-o"></i>增加联系方式
                                </a>
                            </span>
                            <el-form-item label="来源渠道">
                                <lb-buttongroup :group-data="localdata.track_from" v-model="localdata.form.track_from"></lb-buttongroup>
                            </el-form-item>
                        </el-form>
                        <div class="m-t m-b b-t text-center">
                            <a v-if="!expand" @click="expand=true" class="inline w b-l b-r b-b r-b">
                                <i class="fa fa-arrow-down"></i>展开填写更多资料
                            </a>
                            <a v-if="expand" @click="expand=false" class="inline w b-l b-r b-b r-b">
                                <i class="fa fa-arrow-up"></i>关闭更多资料
                            </a>
                        </div>
                        <el-form label-width="95px">
                            <el-form-item label="昵称" prop="name">
                                <input type="text" class="form-control" placeholder="小名或英文名" v-model="localdata.form.nickname" style="width:120px;">
                            </el-form-item>
                            <el-form-item label="出生日期" prop="form.birth">
                                <el-date-picker type="date" name="birth" v-model="localdata.form.birth"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="家庭住址" prop="home_address">
                                <input type="text" name="home_address" class="form-control" v-model="localdata.form.home_address" style="width:320px;">
                            </el-form-item>
                            <el-form-item label="就读学校" prop="first_tel">
                                <el-input v-model="localdata.form.school" style="width:200px;"></el-input>
                                <el-select v-model="localdata.form.grade" placeholder="年级" style="width:100px">
                                    <el-option v-for="item in grade" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="localdata.form.class" placeholder="班级" style="width:100px">
                                    <el-option v-for="item in claes" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="备注" prop="form.note">
                                <textarea name="note" v-model="localdata.form.note" rows="2" class="form-control" style="width:285px;"></textarea>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <div class="m-t m-b panel-footer">
                    <div class="form-group">
                        <div class="col-xs-12 col-md-10 col-md-offset-2">
                            <button type="button" class="btn btn-primary w" @click="handleClick">确认</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<style>
.panel-footer {
    background-color: #fff;
    border-color: #edf1f2;
    border-radius: 0 0 1px 1px;
}

.panel-footer .btn {
    margin-left: 22%;
    margin-top: 10px;
}
</style>
<script>
export default {
    name: 'add',
    data() {
        let localdata = {
            'form': {
                'student_name': '',
                'sex': '0',
                'first_tel': '',
                'first_rel_rel': '',
                'first_rel_name': '',
                'relations': [],
                'track_from': '其他',
                'nickname': '',
                'birth': '',
                'home_address': '',
                'school': '',
                'grade': '',
                'class': '',
                'note': '',
                'region_oe_id': '0',
                'purpose': '0',
                'amount': 0,
                'isdel': false
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
            'track_from': [{
                'value': '上门',
                'text': '上门'
            }, {
                'value': '广告',
                'text': '广告'
            }, {
                'value': '介绍',
                'text': '介绍'
            }, {
                'value': '其他',
                'text': '其他'
            }]
        }
        var validateTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号码'))
            } else if (!(/^1\d{10}$/.test(value))) {
                callback(new Error('手机号码必须为数字1开头并为11位!已输入' + value.length + '位。'))
            } else {
                callback()
            }
        }
        return {
            localdata,
            expand: true,
            model: 'student',
            options: [{
                value: '0',
                label: '本人'
            }, {
                value: '1',
                label: '爸爸'
            }, {
                value: '2',
                label: '妈妈'
            }],
            claes: [{
                value: '0',
                label: '1'
            }, {
                value: '1',
                label: '2'
            }, {
                value: '2',
                label: '3'
            } , {
                value: '3',
                label: '4'
            },{
                value: '4',
                label: '5'
            }, {
                value: '5',
                label: '6'
            }, {
                value: '6',
                label: '7'
            } , {
                value: '7',
                label: '8'
            },{
                value: '8',
                label: '9'
            } , {
                value: '9',
                label: '10'
            },{
                value: '10',
                label: '11'
            }, {
                value: '11',
                label: '12'
            }, {
                value: '12',
                label: '13'
            } ],
             grade: [{
                value: '0',
                label: '不确定'
            }, {
                value: '1',
                label: '一年级'
            }, {
                value: '2',
                label: '二年级'
            } , {
                value: '3',
                label: '三年级'
            },{
                value: '4',
                label: '四年级'
            }, {
                value: '5',
                label: '五年级'
            }, {
                value: '6',
                label: '六年级'
            } , {
                value: '7',
                label: '初一'
            },{
                value: '8',
                label: '初二'
            } , {
                value: '9',
                label: '初三'
            },{
                value: '10',
                label: '高一'
            }, {
                value: '11',
                label: '高二'
            }, {
                value: '12',
                label: '高三'
            } ],
            rules: {
                student_name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256个字符', trigger: 'blur' }
                ],
                first_tel: [
                    { validator: validateTel, required: true, trigger: 'blur' }
                ],
            }
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let vm = this
                    vm.localdata.form.birthstr = vm.getDateNumFormat(vm.localdata.form.birth)
                    vm.handleSave().then((response) => {
                        vm.$store.state.envs.currStudent = response
                        vm.handleShowDialog('lb-finishadd', response)
                    }, (e) => {
                    })
                }
            })
        }
    }
}
</script>
