<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="open_class" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-flag-checkered"></i>开新班
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal m-t ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-pattern">
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">授课老师:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="input-group">
                                    <input type="text" name="master" class="form-control ng-pristine ng-untouched ng-valid" readonly="true" v-model="localdata.form.lb_info_master">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" select-title="请选择老师" on-selected="select_teacher" select-params="{ob_id:user.gv.ob_id,role_id:2}" @click="lbShowdialog($event,'lb-selectteachertpl')">
                                            <i class="fa fa-user"></i>选择
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">课程:</label>
                            <div class="col-md-10 col-xs-12">
                                <select class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" name="ol_id" ng-change="lesson_change()" ui-jq="chosen" ng-options="lesson.ol_id as lesson.lesson_name for lesson in lessons|filter:cur_branch|filter:filter_class" required style="display: none;" v-model="localdata.form.lb_info_ol_id">
                                    <option value class>选择课程</option>
                                    <option value="0">吉他高级班</option>
                                    <option value="1">印度舞初级</option>
                                    <option value="2">默认课程</option>
                                </select>
                                <div class="chosen-container chosen-container-single" style="width: 485px;" title>
                                    <a class="chosen-single" tabindex="-1">
                                        <span>选择课程</span>
                                        <div>
                                            <b></b>
                                        </div>
                                    </a>
                                    <div class="chosen-drop">
                                        <div class="chosen-search">
                                            <input type="text" autocomplete="off">
                                        </div>
                                        <ul class="chosen-results"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">班级名称:</label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" placeholder="请给班级命名" ng-disabled="info.master_oe_id == 0" name="class_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" ng-minlength="1" required disabled="disabled" v-model="localdata.form.lb_info_class_name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">开课日期:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="inline w-sm">
                                    <lb-date-picker type="date" ng-disabled="info.master_oe_id == 0" name="open_time" disabled="disabled" v-model="localdata.form.lb_info_open_time"></lb-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">预计结课:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="inline w-sm">
                                    <lb-date-picker type="date" ng-disabled="info.master_oe_id == 0" name="close_time" disabled="disabled" v-model="localdata.form.lb_info_close_time"></lb-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">额定人数:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group w-sm">
                                    <input type="number" ng-disabled="info.master_oe_id == 0" name="max_student_num" ng-pattern="/^[0-9]+$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" disabled="disabled" v-model="localdata.form.lb_info_max_student_num">
                                    <span class="input-group-addon">人</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">授课次数:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group w-sm">
                                    <input type="number" ng-disabled="info.master_oe_id == 0" name="total_times" ng-pattern="/^[0-9]+$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" disabled="disabled" v-model="localdata.form.lb_info_total_times">
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">单次课时:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group">
                                    <input type="text" ng-disabled="info.master_oe_id == 0" name="unit_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-change="auto_etime()" disabled="disabled" v-model="localdata.form.lb_info_unit_hours">
                                    <span class="input-group-addon">小时</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok()" disabled="disabled">确定</button>
                    <button class="btn btn-warning" ng-click="vm.dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'open_class.modal',
    data() {
        let localdata = {
            'form': {
                'lb_info_master': '',
                'lb_info_ol_id': '',
                'lb_info_class_name': '',
                'lb_info_open_time': '',
                'lb_info_close_time': '',
                'lb_info_max_student_num': '',
                'lb_info_total_times': '',
                'lb_info_unit_hours': ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>