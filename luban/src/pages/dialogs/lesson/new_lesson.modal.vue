<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag"></i>{{title}}课程
                </h3>
            </div>
            <div class="modal-body">
                <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-collapse value="1">
                        <el-collapse-item title="基本信息" name="1">
                            <el-form-item label="课程类型">
                                <lb-buttongroup :group-data="localdata.lesson_type" v-model="localdata.form.lesson_type" @input="handleTypeCommand"></lb-buttongroup>
                            </el-form-item>
                            <el-form-item label="课程分类">
                                <el-cascader placeholder="课程分类" :options="getreeData" v-model="localdata.form.cate_array" filterable change-on-select></el-cascader>
                            </el-form-item>
                            <el-form-item label="课程名" prop="lesson_name">
                                <el-input v-model.trim.lazy="localdata.form.lesson_name"></el-input>
                            </el-form-item>
                            <el-form-item label="课程编号" prop="lesson_no">
                                <el-input v-model="localdata.form.lesson_no"></el-input>
                            </el-form-item>
                            <el-form-item label="课程时间跨度" v-if="localdata.form.lesson_type=='0'">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <el-dropdown menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button button-class="btn btn-default">
                                                选择
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <el-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                <el-dropdown-item command="30">1个月</el-dropdown-item>
                                                <el-dropdown-item command="90">1个季度</el-dropdown-item>
                                                <el-dropdown-item command="180">半年</el-dropdown-item>
                                                <el-dropdown-item command="365">1年</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                    <lb-numberinput type="text" class="form-control" v-model="localdata.form.lesson_days">
                                    </lb-numberinput>
                                    <span class="input-group-addon">天</span>
                                </div>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="定价" name="2">
                            <el-form-item label="收费模式" v-if="this.localdata.form.lesson_type=='0'">
                                <lb-buttongroup :group-data="localdata.price_model" v-model="localdata.form.price_model" @input="handleHoursCommand"></lb-buttongroup>
                            </el-form-item>
                            <el-form-item label="单价">
                                <div class="input-group">
                                    <span class="input-group-addon">￥</span>
                                    <lb-numberinput type="text" class="form-control" @change="changeTimePrice" v-model="localdata.form.unit_price">
                                    </lb-numberinput>
                                    <span v-if="localdata.form.price_model=='1'" class="input-group-addon">元/次</span>
                                    <span v-if="localdata.form.price_model=='0'" class="input-group-addon">期/次</span>
                                </div>
                            </el-form-item>
                            <el-form-item label="总共">
                                <div class="input-group" v-if="localdata.form.price_model=='1'">
                                    <lb-numberinput type="number" class="form-control" v-model="localdata.form.inc_timesprice" @change="changeTimePrice">
                                    </lb-numberinput>
                                    <span class="input-group-addon">次</span>
                                </div>
                                <div class="input-group" v-if="localdata.form.price_model=='0'">
                                    <lb-numberinput type="number" class="form-control" v-model="localdata.form.inc_period" @change="changeTimePrice">
                                    </lb-numberinput>
                                    <span class="input-group-addon">期</span>
                                </div>
                            </el-form-item>
                            <el-form-item label="售价">
                                <div class="input-group">
                                    <lb-numberinput type="number" class="form-control" v-model="localdata.form.price">
                                    </lb-numberinput>
                                    <span class="input-group-addon">元</span>
                                </div>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="内容" name="3">
                            <el-form-item label="授课次数" v-if="localdata.form.price_model == '0'">
                                <div class="input-group">
                                    <lb-numberinput type="number" v-model="localdata.form.inc_times" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern ng-valid-parse" @change="changeTimeInc">
                                    </lb-numberinput>
                                    <span class="input-group-addon">次</span>
                                </div>
                            </el-form-item>
                            <el-form-item label="单次课时长">
                                <div class="form-group">
                                    <div class="input-group m-b">
                                        <div class="input-group-btn">
                                            <el-dropdown menu-align="start" @command="handleTimeCommand">
                                                <lb-dropdown-button button-class="btn btn-default">
                                                    选择
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <el-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                    <el-dropdown-item command="0.75">45分钟</el-dropdown-item>
                                                    <el-dropdown-item command="1.00">1个小时</el-dropdown-item>
                                                    <el-dropdown-item command="1.50">1个半小时</el-dropdown-item>
                                                    <el-dropdown-item command="2.00">2小时</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </div>
                                        <lb-numberinput type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.unit_hours" @change="changeTimeInc">
                                        </lb-numberinput>
                                        <span class="input-group-addon">小时</span>
                                    </div>
                                </div>
                            </el-form-item>
                            <el-form-item label="课程总时长:">
                                <div class="form-group">
                                    <div class="input-group">
                                        <lb-numberinput type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.inc_hours">
                                        </lb-numberinput>
                                        <span class="input-group-addon">小时</span>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-collapse-item>
                    </el-collapse>
                </el-form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleClick">确定</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newLesson',
    data() {
        let localdata = {
            'lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '2',
                'text': '课时包'
            }],
            'form': {
                'lesson_type': '0',
                'cate_array': [],
                'lesson_name': '',
                'lesson_no': '',
                'lesson_days': 0,
                'price_model': '0',
                'unit_price': 0,
                'inc_times': 0,
                'inc_period': 0,
                'inc_timesprice': 0,
                'price': 0,
                'unit_hours': 0,
                'inc_hours': 0
            },
            'price_model': [{
                'value': '0',
                'text': '按期收费'
            }, {
                'value': '1',
                'text': '按次收费'
            }]
        }
        return {
            localdata,
            model: 'course',
            title: '创建',
            rules: {
                lesson_name: [
                    { required: true, message: '请输入课程名', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
                lesson_no: [
                    { required: true, message: '请输入课程编号', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
        this.getTableApidata('cate')
    },
    computed: {
        getreeData() {
            let cateData = this.$store.state.models.models.cate.data
            let treeData = []
            let treemap = {}
            for (var item of cateData) {
                treemap[item._id] = {
                    value: item._id,
                    label: item.name
                }
            }
            for (var subitem of cateData) {
                if (subitem.pid == '') {
                    treeData.push(treemap[subitem._id])
                } else {
                    if (typeof treemap[subitem.pid] == 'object') {
                        if (typeof treemap[subitem.pid].children !== 'object') {
                            treemap[subitem.pid].children = []
                        }
                        treemap[subitem.pid].children.push(treemap[subitem._id])
                    }
                }
            }
            return treeData
        }
    },
    watch: {},
    methods: {
        changeTimePrice() {
            if (this.localdata.form.price_model == '1') {
                this.localdata.form.price = this.localdata.form.unit_price * this.localdata.form.inc_timesprice
            } else {
                this.localdata.form.price = this.localdata.form.unit_price * this.localdata.form.inc_period
            }
        },
        changeTimeInc() {
            this.localdata.form.inc_hours = this.localdata.form.unit_hours * this.localdata.form.inc_times
        },
        handleTypeCommand() {
            if (this.localdata.form.lesson_type == '0') {
                this.localdata.form.price_model = '0'
            } else {
                this.localdata.form.price_model = '1'
            }
        },
        handleTimeCommand(value) {
            this.localdata.form.unit_hours = value
            this.changeTimeInc()
        },
        handleHoursCommand() {
            this.changeTimePrice()
        },
        handleCommand(value) {
            this.localdata.form.lesson_days = value
        },
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.handleSave().then(() => {
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        })
                        this.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-lesson'
                    }, (e) => {
                        console.log(e)
                    })
                } else {
                    return false;
                }
            })
        }
    }
}
</script>
