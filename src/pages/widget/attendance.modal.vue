<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/widget/attendance.js']" class="ng-scope"></div>
            <div ng-controller="wAttendanceCtrl" class="ng-scope">
                <div class="modal-header">
                    <button ng-click="$dismiss()" class="close" type="button" @click="lbCloseDailog()">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>  考勤 
                    </h3>
                </div>
                <div class="modal-body" ng-switch="$action">
                    <div ng-switch-when="menu" class="ng-scope">
                        <ul class="list-group">
                            <li class="list-group-item" ng-click="att_by_today()" ui-per="widget.now_attendance">
                                <i class="fa fa-chevron-right"></i>
                                <h4 class="list-group-item-heading">
                                    <i class="fa fa-calendar"></i>  现场考勤 
                                </h4>
                                <p class="list-group-item-text text-muted">按我今天的排课进行现场考勤(老师考勤)</p>
                            </li>
                            <li class="list-group-item" ng-click="att_by_reg()">
                                <i class="fa fa-chevron-right"></i>
                                <h4 class="list-group-item-heading">
                                    <i class="fa fa-calendar-o"></i>  批量登记考勤 
                                </h4>
                                <p class="list-group-item-text text-muted">对已经上过课的出勤情况进行登记(可按排课或自由登记)</p>
                            </li>
                            <li class="list-group-item" ng-click="att_by_student()">
                                <i class="fa fa-chevron-right"></i>
                                <h4 class="list-group-item-heading">
                                    <i class="fa fa-user"></i>  单个学员登记考勤 
                                </h4>
                                <p class="list-group-item-text text-muted">对单个学员的出勤情况进行登记(可用于补课、漏补考勤)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'attendance.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>