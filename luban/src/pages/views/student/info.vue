<template>
    <div>
        <div class="wrapper" page-controller="student">
            <div class="page-bar row m-b">
                <div class="col-xs-12 col-md-2">
                    <div class="btn-group dropdown" dropdown="">
                        <a class="btn btn-default" href="javascript:history.back();">返回</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-10 text-right">
                    <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="getStudentInfo">
                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-default m-b-xs" button-tooltip="操作">
                            <i class="fa fa-cog"></i>
                            <span> 操作</span>
                            </ng-transclude>
                            <span class="caret"></span>
                        </lb-dropdown-button>
                    </lb-dropdown>
                    <button class="btn btn-danger btn-danger m-b-xs ng-isolate-scope" @click="deleteStudent">
                        <i class="fa fa-trash-o"></i> 封存档案</button>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-user"></i> 学员信息</div>
                <div class="panel-body">
                    <div class="bg-white row no-gutter">
                        <div class="col-xs-12 col-md-4">
                            <div class="text-center clear">
                                <div class="face" style="width:120px;margin:0 auto">
                                    <a @click="handleShowDialog('lb-editphotomodal',student)">
                                        <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 120px; width:120px; height:120px;">
                                            <img :src="makeImage(student.student_name,80)" style="vertical-align:top;" width="100%" height="">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <p class="text-center">
                                <span class="text-2x">{{ student.student_name }}</span>
                                <span>
                                    <i class="fa" :class="{'fa-female ':student.sex=='2','fa-male':student.sex=='1'
                                                ,'mans':student.sex=='1','woman':student.sex=='2'}"></i>
                                </span>
                            </p>
                            <ul class="list-unstyled">
                                <li>
                                    <label class="field">昵称/英文名:</label>
                                    <span>{{ student.nickname }}</span>
                                </li>
                                <li class="m-t-xs">
                                    <label class="field">学员归属:</label>
                                    <span class="label bg-info">{{getEmployeeName}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8" style="padding:0;">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <i class="icon-info"></i> 基础信息</div>
                                <div class="panel-body">
                                    <div class="row no-gutter">
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">住址:</label>
                                            <span>{{ student.home_address }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">备注:</label>
                                            <span>{{ student.note }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">学校:</label>
                                            <span>{{ student.school }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">年级:</label>
                                            <span>{{ student.grade }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">班级:</label>
                                            <span>{{ student.class }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">建档日期:</label>
                                            <span>{{ getDateFormat(student.creattime) }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">生日:</label>
                                            <span class="text-info">{{ getDateFormat(student.birth) }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-8">
                        <div class="panel panel-default" style="margin-right:14px;">
                            <div class="panel-heading" style="margin-bottom:5px;">
                                <a class="btn btn-xs btn-default pull-right" @click="rest_save">
                                    <i></i> 保存</a>
                                <i class="icon-users"></i> 联系人</div>
                            <!--<table class="table table-striped m-b-none">
                                        <thead>
                                            <tr style="border-bottom: 1px solid #ccc;background-color:#f4f5f9;">
                                                <th>电话</th>
                                                <th class="hidden-xs">称呼</th>
                                                <th class="hidden-xs">姓名</th>
                                            </tr>
                                        </thead>
                                    </table>-->
                            <table class="table table-striped m-b-none">
                                <el-form :model="localdata.form" :rules="rules" label-width="100px" ref="ruleForm">
                                    <el-form-item prop="first_tel">
                                        <el-input v-model="localdata.form.first_tel" style="width:120px;" placeholder="请输入手机号"></el-input>
                                        <el-select v-model="localdata.form.first_rel_rel" placeholder="关系" style="width:100px;">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <el-input v-model="localdata.form.first_rel_name" style="width:100px;" v-if="localdata.form.first_rel_rel!='0'"></el-input>
                                        <span class="wrapper">
                                            <a @click="localdata.form.relations.push({relation:'',name:'',tel:''})">
                                                <i class="fa fa-plus-square-o"></i>增加联系方式
                                            </a>
                                        </span>
                                    </el-form-item>
                                    <template v-for="(item,index) in localdata.form.relations">
                                        <el-form-item>
                                            <el-input v-model="item.tel" style="width:120px;" placeholder="请输入手机号"></el-input>
                                            <el-select v-model="item.relation" placeholder="关系" style="width:100px;">
                                                <el-option v-for="subitem in options" :key="subitem.value" :label="subitem.label" :value="subitem.value">
                                                </el-option>
                                            </el-select>
                                            <el-input v-model="localdata.form.first_rel_name" style="width:100px;" v-if="item.relation!='0'"></el-input>
                                            <a @click="localdata.form.relations.splice(index, 1)">
                                                <i class="fa fa-minus-square-o"></i>
                                            </a>
                                        </el-form-item>
                                    </template>
                                </el-form>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!--学员动态记录-->
            <div class="panel panel-default">
                <div class="panel-heading" tab-link="student.list">
                    <span class="tab-title">
                        <i class="fa fa-list"></i> 学员动态记录</span>
    
                </div>
                <div class="panel-body ng-scope">
                    <div class="wrapper" tab-nav-link="student.list">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item title="课程记录" name="1">
                                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                            </el-collapse-item>
                            <el-collapse-item title="缴费记录" name="2">
                                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                            </el-collapse-item>
                            <el-collapse-item title="跟踪回访记录" name="3">
                                <div>简化流程：设计简洁直观的操作流程；</div>
                                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                            </el-collapse-item>
                            <el-collapse-item title="排课记录" name="4">
                                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                            </el-collapse-item>
                              <el-collapse-item title="考勤记录" name="5">
                                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                            </el-collapse-item>
                              <el-collapse-item title="请假记录" name="6">
                                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                            </el-collapse-item>
                              <el-collapse-item title="点评记录" name="7">
                                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                            </el-collapse-item>
                              <el-collapse-item title="成绩记录" name="8">
                                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                            </el-collapse-item>
                             <el-collapse-item title="赛事记录" name="9">
                                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                            </el-collapse-item>
                        </el-collapse>
                        <!--<ul class="list-group">
                                <li class="list-group-item ng-scope" style="display: none;">
                                    <a class="ng-binding" >
                                        <i class="icon-chemistry"></i> 试课记录</a>
                                </li>
                                <li class="list-group-item ng-scope" style="display: none;">
                                    <a class="ng-binding">
                                        <i class="fa fa-user-md"></i> 评估记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding">
                                        <i class="fa fa-book"></i> 课程记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding" >
                                        <i class="fa fa-money"></i> 缴费记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding">
                                        <i class="fa fa-comments"></i> 跟踪回访记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding">
                                        <i class="fa fa-calendar"></i> 排课记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding" >
                                        <i class="fa fa-calendar-o"></i> 考勤记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding" >
                                        <i class="fa fa-bell-o"></i> 请假记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding" >
                                        <i class="fa fa-comments"></i> 点评记录</a>
                                </li>
                                <li class="list-group-item ng-scope">
                                    <a class="ng-binding" >
                                        <i class="fa fa-star"></i> 成绩记录</a>
                                </li>
                                <li class="list-group-item ng-scope" >
                                    <a class="ng-binding" >
                                        <i class="fa fa-flag-o"></i> 赛事记录</a>
                                </li>
                            </ul>-->
                    </div>
                </div>
            </div>
        </div>
    
        <!--学员动态记录-->
    </div>
</template>
<style>
.col-md-8 {
    width: 66.66666667%;
    padding-left: 11px;
}
</style>
<script>
export default {
    name: 'footer',
    data() {
        let localdata = {
            'form': {
                'student_id': '',
                'relations': [],
                'first_rel_rel': '',
                'first_tel': '',
                'first_rel_name': '',
            },
            'lookup': {
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
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
            activeName: '1',
            student: {},
            tables: ['student'],
            uid: '',
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
            rules: {
                first_tel: [
                    { validator: validateTel, required: true, trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        if (this.$store.state.envs.currStudent) {
            this.uid = this.$store.state.envs.currStudent._id
            this.handleSearch()
        }
    },
    computed: {
        getEmployeeName() {
            let name = '未设定'
            if (this.student.employee && this.student.employee.length > 0) {
                name = this.getLookUp(this.student.employee, 'name')
            }
            return name
        },
        getStudentInfo() {
            return this.student
        },
    },
    watch: {},
    methods: {
        deleteStudent() {
            let vm = this
            this.$confirm('确定要封存该学员档案吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vm.updateTeble('student', vm.student._id, {
                    'isdel': true
                }).then(() => {
                    vm.$message({
                        message: '操作成功',
                        type: 'success'
                    })
                    history.back()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })

        },
        handleSearch() {
            if (this.uid && this.uid.length > 0) {
                let filterObj = []
                let student_id = this.uid
                if (student_id.length > 0) {
                    filterObj.push({
                        'key': '_id',
                        'value': student_id,
                        'type': ''
                    })
                }
                filterObj.push({
                    'key': 'lookup',
                    'value': this.localdata.lookup,
                    'type': 'lookup'
                })
                let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                this.handleGetFilterTable(filterTxt).then(() => {
                    this.student = this.$store.state.models.models.student.data[0]
                    this.localdata.form = this.lodash.assign(this.localdata.form, this.student)
                })
            }
        },
        rest_save() {
            let student_id = this.uid
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.updateTeble('student', student_id, {
                        'first_rel_rel': this.localdata.form.first_rel_rel,
                        'first_tel': this.localdata.form.first_tel,
                        'first_rel_name': this.localdata.form.first_rel_name,
                        'relations': this.localdata.form.relations
                    }).then(() => {
                        this.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-paynow'
                        this.dopay = true
                    })
                }
            })
        },
    }
}
</script>


