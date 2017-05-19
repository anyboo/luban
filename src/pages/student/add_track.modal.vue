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
                        <span class="label bg-info ng-binding">{{getStudentName}}</span>添加跟踪回访记录
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-invalid ng-invalid-required">
                        <div class="wrapper-xs">
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3">类型</label>
                                <div class="col-md-10 col-xs-9">
                                    <lb-buttongroup :group-data="lb_localdata.lb_inquiry_track_type" v-model="lb_localdata.form.lb_inquiry_track_type"></lb-buttongroup>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3">
                                    <span class="text-danger">*</span>沟通方式
                                </label>
                                <div class="col-md-5 col-xs-9">
                                    <div class="input-group">
                                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required v-model="lb_localdata.form.lb_inquiry_track_way">
                                        <div class="input-group-btn">
                                            <lb-dropdowns menu-align="start" @command="handleCommand">
                                                <lb-dropdown-button button-class="btn btn-default">
                                                    选择
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                    <lb-dropdown-item command="其他">其他</lb-dropdown-item>
                                                    <lb-dropdown-item command="面谈">面谈</lb-dropdown-item>
                                                    <lb-dropdown-item command="网络">网络</lb-dropdown-item>
                                                    <lb-dropdown-item command="电话">电话</lb-dropdown-item>
                                                </lb-dropdown-menu>
                                            </lb-dropdowns>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3">
                                    <span class="text-danger">*</span>沟通内容
                                </label>
                                <div class="col-md-10 col-xs-9">
                                    <textarea name="note" ng-model="inquiry.detail" rows="3" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-3 col-md-2 control-label">接待员</label>
                                <div class="col-xs-9 col-md-5">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" placeholder="输入接待员姓名" required v-model="lb_localdata.form.lb_inquiry_op_name">
                                </div>
                            </div>
                            <div class="form-group" ng-init="show_track_time=false">
                                <label class="control-label col-md-2 col-xs-3">
                                    <span class="text-danger">*</span>沟通日期
                                </label>
                                <div class="col-md-10 col-xs-9">
                                    <div class="w-sm">
                                        <lb-date-picker type="datetime" datetimepicker-option="{maxDate:max_date}" v-model="lb_localdata.form.lb_inquiry_track_time"></lb-date-picker>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" ng-init="need_next_time = false">
                                <div class="col-xs-9 col-md-5 col-xs-offset-3 col-md-offset-2">
                                    <span class="text-info" ng-click="need_next_time = !need_next_time" @click="open()">
                                        <i class="fa " :class="{'fa-check-square-o':isActive,'fa-square-o':!isActive}" ng-class="{'fa-square-o':!need_next_time,'fa-check-square-o':need_next_time}"></i>下次回访提醒
                                    </span>
                                    <div class="w-sm ng-hide" ng-show="need_next_time">
                                        <lb-date-picker type="datetime" datetimepicker-option="{minDate:max_date}" v-model="lb_localdata.form.lb_inquiry_next_time" v-if="isActive"></lb-date-picker>
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
        let lb_localdata = {
            'form': {
                'lb_inquiry_track_type': '',
                'lb_inquiry_track_way': '',
                'lb_inquiry_op_name': '',
                'lb_inquiry_track_time': '',
                'lb_inquiry_next_time': ''
            },
            'lb_inquiry_track_type': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
            }]
        }
        return {
            lb_localdata,
            model: 'track',
            isActive: false,
            // hides: false
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.lb_localdata.form.lb_inquiry_track_way = value
        },
        handleClick() {
            let vm = this
            this.handleSave().then(() => {
                this.$store.state.envs.currStudent = vm.lb_localdata.form
                alert('做完数据提交数据库了')
            })
        },
        open() {
            this.isActive = !this.isActive
         
        }

    }
}
</script>
