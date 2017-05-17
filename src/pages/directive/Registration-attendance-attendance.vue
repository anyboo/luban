<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="reg_student_attendance" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar">登记学员考勤</i>
                        <span class="label bg-info ng-binding">(zzzsz)</span>
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter step2" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==1}">
                            <h4 class="padder">1.选择已报课程</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==2}">
                            <h4 class="padder">2.登记考勤</h4>
                        </div>
                    </div>
                    <div class="m-t ng-scope" ng-if="step == 2">
                        <form name="form1" class="form-horizontal ng-pristine ng-valid">
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">课程:</label>
                                <div class="col-md-10 col-xs-12">
                                    <p class="form-control-static ng-binding">【班组课】11</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">剩余课次:</label>
                                <div class="col-md-10 col-xs-12">
                                    <p class="form-control-static ng-binding">3次</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">授课日期:</label>
                                <div class="col-md-5 col-xs-12">
                                    <div class="inline w-sm">
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" name="teach_date" ng-model="att.teach_day" datetimepicker="date">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">上课时间:</label>
                                <div class="col-md-5 col-xs-12">
                                    <div class="inline">
                                        <input type="text" ng-readonly="true" style="width:50px" datetimepicker="time" datetimepicker-option="{step:15}" class="form-control input-sm w-xs inline no-padder text-center ng-pristine ng-untouched ng-valid" ng-model="att.teach_start_hour" ng-change="att.teach_end_hour=fill_etime(att.teach_start_hour)" readonly="readonly">
                                        <span class="inline">~</span>
                                        <input type="text" ng-readonly="true" style="width:50px" datetimepicker="time" datetimepicker-option="{step:15}" class="form-control input-sm w-xs inline no-padder text-center ng-pristine ng-untouched ng-valid" ng-model="att.teach_end_hour" readonly="readonly">
                                        <lb-dropdown>
                                            <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-sm">
                                                选择时间段
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <lb-dropdown-menu slot="menuslot">
                                                <li ng-repeat="item in time_sections_rest.$list" class="ng-scope">
                                                    <a ng-click="att.teach_start_hour = item.int_start_hour;att.teach_end_hour=item.int_end_hour" class="ng-binding">士大夫 18:00 ~ 22:00</a>
                                                </li>
                                                <li ng-repeat="item in time_sections_rest.$list" class="ng-scope">
                                                    <a ng-click="att.teach_start_hour = item.int_start_hour;att.teach_end_hour=item.int_end_hour" class="ng-binding">12额 20:00 ~ 23:00</a>
                                                </li>
                                            </lb-dropdown-menu>
                                        </lb-dropdown>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">授课老师:</label>
                                <div class="col-md-5 col-xs-12">
                                    <div class="inline w">
                                        <div class="input-group ng-valid" ng-model="att.oe_id" value-field="oe_id" select-title="请选择授课老师" select-params="{ob_id:user.gv.ob_id,role_id:2}">
                                            <input type="text" name="name" ng-model="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="valueField != 'name'" readonly="readonly">
                                            <span class="input-group-btn">
                                                <button class="btn btn-default " select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" select-title="请选择授课老师" on-selected="set_user" select-params="selectParams" @click="lbShowdialog($event,'lb-selectteachertpl')">
                                                    <i class="fa fa-user"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">考勤备注:</label>
                                <div class="col-md-7 col-xs-12">
                                    <input type="text" name="lesson_content" ng-model="att.lesson_content" class="form-control ng-pristine ng-untouched ng-valid">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <a ng-show="step > 1" class="btn btn-link" ng-click="back_step()">返回</a>
                    <button ng-show="step == 2" class="btn btn-primary" ng-disabled="saving" ng-click="do_ok()">登记考勤</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//登记学员考勤
export default {
    name: 'Single-student-attendance',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>