<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="track" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-comment"></i>为学员 <span class="label bg-info ng-binding">LLL</span> 添加跟踪回访记录</h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-invalid ng-invalid-required">
                        <div class="wrapper-xs">
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3"><span class="text-danger">*</span>沟通方式</label>
                                <div class="col-md-5 col-xs-9">
                                    <div class="input-group">
                                        <input type="text" ng-model="inquiry.track_way" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required="">
                                        <div dropdown="" class="input-group-btn dropdown">
                                            <button dropdown-toggle="" class="btn btn-default" type="button" aria-haspopup="true" aria-expanded="false">选择 <span class="caret"></span></button>
                                            <ul class="dropdown-menu pull-right">
                                                <!-- ngRepeat: item in $gv.dicts[4] -->
                                                <li ng-repeat="item in $gv.dicts[4]" class="ng-scope"><a ng-click="inquiry.track_way=item.text" class="ng-binding">其他</a></li>
                                                <!-- end ngRepeat: item in $gv.dicts[4] -->
                                                <li ng-repeat="item in $gv.dicts[4]" class="ng-scope"><a ng-click="inquiry.track_way=item.text" class="ng-binding">面谈</a></li>
                                                <!-- end ngRepeat: item in $gv.dicts[4] -->
                                                <li ng-repeat="item in $gv.dicts[4]" class="ng-scope"><a ng-click="inquiry.track_way=item.text" class="ng-binding">网络</a></li>
                                                <!-- end ngRepeat: item in $gv.dicts[4] -->
                                                <li ng-repeat="item in $gv.dicts[4]" class="ng-scope"><a ng-click="inquiry.track_way=item.text" class="ng-binding">电话</a></li>
                                                <!-- end ngRepeat: item in $gv.dicts[4] -->
                                            </ul>
                                        </div>
                                        <!-- /btn-group -->
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-3"><span class="text-danger">*</span>沟通内容</label>
                                <div class="col-md-10 col-xs-9">
                                    <textarea name="note" ng-model="inquiry.detail" rows="3" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required=""></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-3 col-md-2 control-label">接待员</label>
                                <div class="col-xs-9 col-md-5">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" placeholder="输入接待员姓名" ng-model="inquiry.op_name" required="">
                                </div>
                            </div>
                            <div class="form-group" ng-init="show_track_time=false">
                                <label class="control-label col-md-2 col-xs-3"><span class="text-danger">*</span>沟通日期</label>
                                <div class="col-md-10 col-xs-9">
                                    <div class="w-sm">
                                        <input type="text" class="form-control no-padder input-sm text-center ng-pristine ng-untouched ng-valid" datetimepicker="datetime" ng-model="inquiry.track_time" datetimepicker-option="{maxDate:max_date}">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" ng-init="need_next_time = false">
                                <div class="col-xs-9 col-md-5 col-xs-offset-3 col-md-offset-2"><span class="text-info" ng-click="need_next_time = !need_next_time"><i class="fa fa-square-o" ng-class="{'fa-square-o':!need_next_time,'fa-check-square-o':need_next_time}"></i> 下次回访提醒</span>
                                    <div class="w-sm ng-hide" ng-show="need_next_time">
                                        <input type="text" class="form-control no-padder input-sm text-center ng-pristine ng-untouched ng-valid" datetimepicker="datetime" ng-model="inquiry.next_time" datetimepicker-option="{minDate:max_date}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="save_track()" disabled="disabled">
                        <!-- ngIf: saving -->确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add_track.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
