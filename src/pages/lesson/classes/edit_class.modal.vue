<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="edit_class" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">编辑班级信息</h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-valid ng-valid-required ng-valid-minlength ng-valid-parse ng-valid-pattern">
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">课程</label>
                            <div class="col-sm-9 col-md-5 ng-binding">22</div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">班级名称</label>
                            <div class="col-sm-9 col-md-5">
                                <input type="text" name="class_name" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-minlength ng-valid-parse" ng-model="info.class_name" ng-minlength="1" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">开课日期</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="inline w-sm">
                                    <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" name="open_time" ng-model="info.open_time" datetimepicker="date">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">预计结课日期:</label>
                            <div class="col-md-5 col-xs-12">
                                <div class="inline w-sm">
                                    <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" name="close_time" ng-model="info.close_time" datetimepicker="date">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">额定人数</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="input-group w">
                                    <input type="number" name="max_student_num" ng-pattern="/^[0-9]+$/" ng-model="info.max_student_num" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern">
                                    <span class="input-group-addon">人</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">授课次数:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group w-sm">
                                    <input type="number" name="total_times" ng-pattern="/^[0-9]+$/" ng-model="info.total_times" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern">
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">负责老师</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="text" name="master" ng-model="info.master" class="form-control ng-pristine ng-untouched ng-valid" readonly="true">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" select-title="请选择老师" on-selected="select_teacher" select-params="{ob_id:user.gv.ob_id,role_id:2}" @click="lbShowDailog('lb-selectteachertpl')">
                                            <i class="fa fa-user"></i>选择
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok()">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbCloseDailog()">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'edit_class.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>