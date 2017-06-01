<template>
    <div>
        <div class="wrapper">
            <!-- stats-->
            <div ng-controller="homePublicStatCtrl" class="row no-gutter home-public-stat ng-scope" ui-per="widget.home_stat">
                <div class="col-xs-12 col-md-8">
                    <div class="row no-gutter bg-info lter">
                        <div class="col-xs-4 stat-box b-r"><a ui-sref="lesson.classes" ui-per="lesson.classes" ui-per-no-hide="true" href="#/lesson/classes"><h1 class="text-center"><i class="fa fa-flag-checkered"></i><span ng-bind-html="vm.$data.total.class" class="m-l-xs ng-binding">5</span></h1><p class="title text-center">正常开班数</p></a></div>
                        <div class="col-xs-4 stat-box b-r"><a ui-sref="student.list" ui-per="student.list" ui-per-no-hide="true" href="#/student/list"><h1 class="text-center"><i class="fa fa-users"></i><span ng-bind-html="vm.$data.total.student" class="m-l-xs ng-binding">1</span></h1><p class="title text-center">总学员数</p></a></div>
                        <div class="col-xs-4 stat-box text-center"><a ui-sref="student.list0" ui-per="student.list0" ui-per-no-hide="true" href="#/student/list0"><h1 class="text-center"><i class="fa fa-compass"></i><span ng-bind-html="vm.$data.total.inquiry" class="m-l-xs ng-binding">37</span></h1><p class="title text-center">总咨询名单</p></a></div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="stat-today-box bg-success lter">
                        <ul class="list-unstyled">
                            <li>
                                <label>今日学员数:</label><span ng-bind-html="vm.$data.today.student" class="ng-binding">0</span></li>
                            <li>
                                <label>今日咨询数:</label><span ng-bind-html="vm.$data.today.inquiry" class="ng-binding">0</span></li>
                            <li>
                                <label>今日出勤数:</label><span ng-bind-html="vm.$data.today.attendance" class="ng-binding">0</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row no-gutter bg-white home-widget m-t">
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-info" ui-per="widget.add_student" ng-click="$util.open('tpl/app/widget/add_student.modal.html','md',{})"><i class="icon-user-follow"></i> <span>档案录入</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-warning" ui-per="widget.order" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_order" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行报名操作"><i class="fa fa-shopping-cart"></i> <span>报名</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-danger" ui-per="widget.pay" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_pay" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行缴费操作"><i class="fa fa-money"></i> <span>缴费</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-success" ui-per="widget.attendance" ng-click="$util.open('tpl/app/widget/attendance.modal.html','lg',{})"><i class="fa fa-calendar"></i> <span>考勤</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-danger" ui-per="widget.change_cls" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_change_cls" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行转班操作"><i class="fa fa-exchange"></i> <span>转班</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-info" ui-per="widget.refund" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_refund" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行退费操作"><i class="fa fa-reply"></i> <span>退费</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-danger" ui-per="widget.end" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_end" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行结课操作"><i class="fa fa-stop"></i> <span>结课</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-info" ui-per="widget.track" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_track" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行跟踪回访"><i class="fa fa-phone-square"></i> <span>跟踪回访</span></button>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-4">
                    <button class="btn btn-app btn-success" ui-per="widget.comment" ng-click="$util.open('tpl/app/widget/comment.modal.html','lg',{})"><i class="fa fa-comment"></i> <span>点评</span></button>
                </div>
            </div>
            <div class="row home-personal-stat m-t">
                <div class="col-xs-12 col-sm-6">
                    <div ng-controller="homeNewsCtrl" class="panel panel-default home-box home-box-news ng-scope">
                        <div class="panel-heading">通知公告
                            <!-- ngIf: vm.$data.total > 5 -->
                            <!-- ngIf: vm.$data.total > 5 -->
                        </div>
                        <!-- ngIf: vm.$list.length > 0 -->
                        <!-- ngIf: vm.$loading -->
                        <!-- ngIf: vm.$loaded && vm.$list.length == 0 -->
                        <div ng-if="vm.$loaded &amp;&amp; vm.$list.length == 0" class="text-center empty muted ng-scope"><i class="fa fa-frown-o"></i>没有通知公告!</div>
                        <!-- end ngIf: vm.$loaded && vm.$list.length == 0 -->
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div ng-controller="homeBacklogCtrl" class="panel panel-default home-box home-box-backlog ng-scope">
                        <div class="panel-heading">待办提醒
                            <!-- ngIf: vm.$data.total > 5 -->
                            <!-- ngIf: vm.$data.total > 5 -->
                        </div>
                        <!-- ngIf: vm.$list.length > 0 -->
                        <!-- ngIf: vm.$loading -->
                        <!-- ngIf: vm.$loaded && vm.$list.length == 0 -->
                        <div ng-if="vm.$loaded &amp;&amp; vm.$list.length == 0" class="text-center empty muted ng-scope"><i class="fa fa-frown-o"></i>没有待办提醒!</div>
                        <!-- end ngIf: vm.$loaded && vm.$list.length == 0 -->
                    </div>
                </div>
            </div>
            <div class="row home-org-stat">
                <div class="col-xs-12 col-sm-6">
                    <div ng-controller="homePersonalStatCtrl" class="panel panel-default home-box ng-scope">
                        <div class="panel-heading">个人统计</div>
                        <div class="list-group bg-white"><a class="list-group-item"><i class="fa fa-weixin"></i> 微信发送 <span ng-bind-html="vm.$data.wechat_send_count" class="badge bg-info ng-binding">0</span></a> <a class="list-group-item"><i class="fa fa-phone"></i> 短信发送 <span ng-bind-html="vm.$data.sms_count" class="badge bg-info ng-binding">0</span></a> <a class="list-group-item" ui-sref="my.tracks" href="#/my/tracks"><i class="fa fa-comment"></i> 回访记录 <span ng-bind-html="vm.$data.track_count" class="badge bg-info ng-binding">8</span></a> <a class="list-group-item" ui-sref="my.courses" href="#/my/courses"><i class="fa fa-calendar"></i> 课次记录 <span ng-bind-html="vm.$data.teach_count" class="badge bg-info ng-binding">0</span></a> <a class="list-group-item" ui-sref="my.comments" href="#/my/comments"><i class="fa fa-comments"></i> 点评记录 <span ng-bind-html="vm.$data.comment_count" class="badge bg-info ng-binding">0</span></a></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div ng-controller="homeBirthCtrl" class="panel panel-default home-box ng-scope">
                        <div class="panel-heading"><a class="btn btn-xs btn-default pull-right" ui-sref="student.birthdays" href="#/student/birthdays">更多</a> 生日提醒</div>
                        <!-- ngIf: vm.$list.length > 0 -->
                        <!-- ngIf: vm.$loading -->
                        <!-- ngIf: vm.$loaded && vm.$list.length == 0 -->
                        <div ng-if="vm.$loaded &amp;&amp; vm.$list.length == 0" class="text-center empty muted ng-scope"><i class="fa fa-frown-o"></i>今天没有过生日的学员或同事!</div>
                        <!-- end ngIf: vm.$loaded && vm.$list.length == 0 -->
                    </div>
                </div>
            </div>
            <!-- / stats-->
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
