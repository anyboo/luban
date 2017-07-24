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
                            <span > 操作</span>
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
                                <span >
                                    <i class="fa" :class="{'fa-female':student.sex=='0','fa-male':student.sex!='0'}"></i>
                                </span>
                            </p>
                            <ul class="list-unstyled">
                                <li>
                                    <label class="field">昵称/英文名:</label>
                                    <span >{{ student.nickname }}</span>
                                </li>
                                <li class="m-t-xs">
                                    <label class="field">学员归属:</label>
                                    <span class="label bg-info">{{getEmployeeName}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <i class="icon-info"></i> 基础信息</div>
                                <div class="panel-body">
                                    <div class="row no-gutter">
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">住址:</label>
                                            <span >{{ student.home_address }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">备注:</label>
                                            <span >{{ student.note }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">学校:</label>
                                            <span >{{ student.school }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">年级:</label>
                                            <span >{{ student.grade }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">班级:</label>
                                            <span >{{ student.class }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">建档日期:</label>
                                            <span >{{ getDateFormat(student.creattime) }}</span>
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer',
    data() {
        let localdata = {
            'form': {
                'student_id': '',
            },
           
            'lookup': {
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
        }
        return {
            localdata,
            student: {},
            tables: ['student'],
            uid: ''
        }
    },
    mounted() {
        console.log(this.$store.state.envs.currStudent)
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
            if (this.uid&&this.uid.length > 0) {
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
                })
            }
        },
    }
}
</script>
