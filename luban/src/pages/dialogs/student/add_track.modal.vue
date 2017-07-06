<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="track" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-comment"></i>为学员
                        <span class="label bg-info ng-binding">{{getStudentName()}}</span>添加跟踪回访记录
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-invalid ng-invalid-required">
                        <div class="wrapper-xs">
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3">类型</label>
                                <div class="col-md-10 col-xs-9">
                                    <lb-buttongroup :group-data="localdata.track_type" v-model="localdata.form.track_type"></lb-buttongroup>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3">
                                    <span class="text-danger">*</span>沟通方式
                                </label>
                                <div class="col-md-5 col-xs-9">
                                    <div class="input-group">
                                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.track_way.errorStatus}" v-model.trim.lazy="localdata.form.track_way" @change="validate('track_way')">
                                        <div class="input-group-btn">
                                            <el-dropdown menu-align="start" @command="handleCommand">
                                                <lb-dropdown-button button-class="btn btn-default">
                                                    选择
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <el-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                    <el-dropdown-item command="其他">其他</el-dropdown-item>
                                                    <el-dropdown-item command="面谈">面谈</el-dropdown-item>
                                                    <el-dropdown-item command="网络">网络</el-dropdown-item>
                                                    <el-dropdown-item command="电话">电话</el-dropdown-item> 
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3">
                                    <span class="text-danger">*</span>沟通内容
                                </label>
                                <div class="col-md-10 col-xs-9">
                                    <textarea class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.detail.errorStatus}" v-model.trim.lazy="localdata.form.detail" @change="validate('detail')">></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-3 col-md-2 control-label">
                                    <span class="text-danger">*</span>接洽人
                                </label>
                                <div class="col-xs-9 col-md-5">
                                    <input type="text" name="op_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.op_name.errorStatus}" placeholder="请输入接洽人的名字" v-model.trim.lazy="localdata.form.op_name" @change="validate('op_name')">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3">
                                    <span class="text-danger"></span>沟通日期
                                </label>
                                <div class="col-md-10 col-xs-9">
                                    <div class="w-sm">
                                        <el-date-picker type="datetime" v-model="localdata.form.track_time"></el-date-picker>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-9 col-md-5 col-xs-offset-3 col-md-offset-2">
                                    <span class="text-info" ng-click="need_next_time = !need_next_time" @click="open()">
                                        <i class="fa " :class="{'fa-check-square-o':isActive,'fa-square-o':!isActive}"></i>下次回访提醒
                                    </span>
                                    <div class="w-sm ng-hide" ng-show="need_next_time" v-if="isActive">
                                        <el-date-picker type="datetime" v-model="localdata.form.next_time"></el-date-picker>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="save_track()" @click="handleClick">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add_track',
    data() {
        let localdata = {
            'form': {
                'track_type': '0',
                'track_way': '',
                'op_name': '',
                'track_time': '',
                'next_time': '',
                'detail': '',
                'student_id': this.getStudentId()
            },
            'track_type': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
            }],
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'detail': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'track_way': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'op_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'track_time': {
                        'type': 'date',

                    },
                    'next_time': {
                        'type': 'date',
                    }
                }
            },
        }
        return {
            localdata,
            model: 'inquiry',
            isActive: false,
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.$store.state.envs.currStudent = this.$store.state.dialogs.dailogdata
        }
    },
    methods: {
        handleCommand(value) {
            this.localdata.form.track_way = value
        },
        handleClick() {
            let vm = this
            vm.handleSave().then((data) => {
                vm.updateTeble('student', vm.$store.state.envs.currStudent._id, {
                    'inquiry_id': data._id
                }).then(() => {
                    vm.$message({
                        message: '操作成功',
                        type: 'success'
                    })
                    vm.lbClosedialog()
                    this.$store.state.envs.currDialog = 'lb-inquiry'
                })
            })
        },
        open() {
            this.isActive = !this.isActive
        }
    }
}
</script>
