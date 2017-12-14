<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <el-button-group>
                    <el-button @click="handleBack" type="info" size="small">返回</el-button>
                    <el-button @click="deleteStudent" type="danger" size="small">封存档案</el-button>
                    <el-popover ref="popover" placement="right" trigger="click">
                        <img :src="qrcodeimg">
                    </el-popover>
                    <el-button size="small" @click="handleQrcode()" type='success' v-popover:popover>我的二维码</el-button>
                </el-button-group>
                <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="getStudentInfo">
                    <el-button type="success" size="small" slot="buttonslot">
                        <i class="fa fa-user"></i> 操作
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                </lb-dropdown>
            </div>
            <div class="panel-body">
                <div class="bg-white row no-gutter">
                    <div class="col-xs-12 col-md-4">
                        <div class="text-center clear">
                            <div class="face" style="width:80px;margin:0 auto">
                                <div class="avatar-wrapper adres-css " style="border-radius:0; display:block; overflow:hidden;border-radius: 120px; width:80px; height:80px;">
                                    <img :src="makeImage(student.student_name,50)" class='canvasimg' style="vertical-align:top;" width="80" height="">
                                </div>
                            </div>
                        </div>
                        <p class="text-center namediv">
                            <template v-if="loadstudent">
                                <h2>{{ student.student_name }}</h2>
                            </template>
                            <span>
                                <i class="fa" :class="{'fa-female ':student.sex=='2','fa-male':student.sex=='1','mans':student.sex=='1','woman':student.sex=='2'}"></i>
                            </span>
                        </p>
                        <ul class="list-unstyled ">
                            <li>
                                <label class="field">昵称/英文名:</label>
                                <span>{{ student.nickname }}</span>
                            </li>
                            <li>
                                <label class="field">账号余额:</label>
                                <span>{{ student.amount }}元</span>
                            </li>
                            <li class="m-t-xs">
                                <label class="field">学员归属:</label>
                                <el-tag :type="getEmployeeName!='未设定'?'success':'gray'">{{getEmployeeName}}</el-tag>
                            </li>
                            <li>
                                <label class="field">微信绑定:</label>
                                <el-tag type="gray" v-if="wxinstall === '0'">未绑定</el-tag>
                                <el-button v-else-if="wxinstall === '1'" @click="handleUnopenid()" style="color:red;" type="text">解除绑定</el-button>
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
                                        <span>{{ getDateFormat(student.createtime) }}</span>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <label class="inline w-xs text-right">生日:</label>
                                        <span class="text-info">{{ getDateFormat(student.birth) }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-table :data="relation" stripe>
                            <el-table-column prop="tel" label="电话">
                            </el-table-column>
                            <el-table-column prop="rel" width="100" label="关系">
                            </el-table-column>
                            <el-table-column prop="name" label="名字">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        <el-tabs type="border-card" @tab-click="showTab">
            <template v-for="(item,index) in moduledata">
                <el-tab-pane :label="item.pageLable">
                    <template v-if="index==tabIndex">
                        <lb-moduletable :module="item" :info="true" :search-value="uid"></lb-moduletable>
                    </template>
                </el-tab-pane>
            </template>
        </el-tabs>
    </div>
</template>
<script>
import pagesmodule from '~/stores/modulestudentinfo.js'
import getUrl from '~/api/restfulapi.js'
export default {
    name: 'footer',
    data() {
        let localdata = {
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
            moduledata: pagesmodule,
            localdata,
            activeName: '1',
            tabIndex: '',
            tables: ['student'],
            uid: '',
            qrcodeimg: '',
            student:{}
        }
    },
    created() {
        let currStudent = this.$store.state.envs.currStudent
        if (currStudent && currStudent._id && currStudent._id.length > 0) {
            this.uid = currStudent._id
            this.$store.commit('student', this.uid)
            this.handleSearch()
        } else {
            this.uid = this.$store.state.system.currStudentID
            if (this.uid) {
                this.handleSearch()
            }
        }
    },
    computed: {
        getEmployeeName() {
            let name = '未设定'
            if (this.student.employee && this.student.employee.length > 0) {
                name = this.getLookUp(this.student.employee, 'name')
            }
            if (this.$store.state.envs.currDialog == 'lb-editstudentinfo') {
                this.handleSearch()
                this.$store.state.envs.currDialog = ''
            }
            return name
        },
        getStudentInfo() {
            return this.student
        },
        wxinstall() {
            let stand = ''
            if (this.student.openid) {
                return stand = '1';
            } else {
                return stand = '0';
            }
        }
    },
    watch: {},
    methods: {
        handleUnopenid() {
            this.updateTeble('student', this.uid, {
                'openid': ''
            }).then(() => {
                this.$message({
                    message: '解绑成功！',
                    type: 'success'
                })
            })
        },
        showTab(tab, event) {
            this.tabIndex = tab.index
        },
        handleQrcode() {
            console.log(this.uid)
            getUrl.httpGetUrlQccode(this.uid).then(obj => {
                console.log(obj)
                console.log(obj.data.ticket)
                this.qrcodeimg = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + obj.data.ticket
            })
            /*     Vue.http.get('http://api.luban8.cn:8888/wxqrcode/'+this.uid).then(obj=>{
                     console.log(obj)
                 })  */
        },
        handleBack() {
            this.$store.commit('router', this.$store.state.system.routerback)
        },
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
                    this.$store.commit('router', this.$store.state.system.routerback)
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消封存'
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
                this.handleGetFilterTable(filterTxt).then((objstudent) => {
                    console.log(objstudent)
                    this.student = objstudent.data.data[0]
                    this.localdata.form = this.lodash.assign(this.localdata.form, this.student)
                    let obj = {}
                    this.relation = []
                    obj.tel = this.student.first_tel
                    obj.rel = this.getDictText(this.student.first_rel_rel)
                    obj.name = this.student.first_rel_name
                    this.relation.push(obj)
                    this.student.relations.forEach(relobj => {
                        let objitem = {}
                        objitem.tel = relobj.tel
                        objitem.rel = this.getDictText(relobj.relation)
                        objitem.name = relobj.name
                        this.relation.push(objitem)
                    })
                    this.$store.state.envs.currStudent = this.student
                    this.loadstudent = true
                    console.log(this.student, this.relation)
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


