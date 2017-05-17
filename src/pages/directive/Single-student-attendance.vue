<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/widget/attendance.js']" class="ng-scope"></div>
            <div ng-controller="wAttendanceCtrl" class="ng-scope">
                <div class="modal-header">
                    <button ng-click="$dismiss()" class="close" type="button" @click="lbCloseDailog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>考勤
                    </h3>
                </div>
                <div class="modal-body" ng-switch="$action">
                    <div ng-switch-when="att_by_student" class="ng-scope">
                        <div class="padder-v bg-light text-center">
                            <a class="btn btn-default btn-xs pull-left m-l-xs" ng-click="back_menu()">
                                <i class="fa fa-chevron-left"></i>返回
                            </a>
                            <strong>按单个学员考勤</strong>
                        </div>
                        <div class="wrapper text-center m-t">
                            <p class="text-center">请选择学员进行考勤登记!</p>
                            <p class="text-center m-t">
                                <button class="btn btn-info" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_attendance" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行考勤登记" @click="lbShowDailog($event,'lb-selectstudenttpl')">
                                    <i class="fa fa-user"></i>选择学员
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//考勤
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