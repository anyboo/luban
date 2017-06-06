<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading" tab-link="student.list"><span class="tab-title"><i class="fa fa-flag-o"></i> 赛事记录</span>
                <div class="dropdown pull-right" dropdown=""><span tooltip="更多" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="glyphicon glyphicon-align-justify"></i></span>
                    <ul class="dropdown-menu">
                        <li ui-per="student.trials.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope" style="display: none;"><a ui-sref="student.view.trials({os_id:os_id})" class="ng-binding" href="#/student/65144/trials"><i class="icon-chemistry"></i> 试课记录</a></li>
                        <li ui-per="student.evaluates.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope" style="display: none;"><a ui-sref="student.view.evaluates({os_id:os_id})" class="ng-binding" href="#/student/65144/evaluates"><i class="fa fa-user-md"></i> 评估记录</a></li>
                        <li ui-per="student.lessons" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.lessons({os_id:os_id})" class="ng-binding" href="#/student/65144/lessons"><i class="fa fa-book"></i> 课程记录</a></li>
                        <li ui-per="student.pays.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.pays({os_id:os_id})" class="ng-binding" href="#/student/65144/pays"><i class="fa fa-money"></i> 缴费记录</a></li>
                        <li ui-per="student.tracks.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.tracks({os_id:os_id})" class="ng-binding" href="#/student/65144/tracks"><i class="fa fa-comments"></i> 跟踪回访记录</a></li>
                        <li ui-per="student.arranges.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.arranges({os_id:os_id})" class="ng-binding" href="#/student/65144/arranges"><i class="fa fa-calendar"></i> 排课记录</a></li>
                        <li ui-per="student.attendances.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.attendances({os_id:os_id})" class="ng-binding" href="#/student/65144/attendances"><i class="fa fa-calendar-o"></i> 考勤记录</a></li>
                        <li ui-per="student.leaves.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.leaves({os_id:os_id})" class="ng-binding" href="#/student/65144/leaves"><i class="fa fa-bell-o"></i> 请假记录</a></li>
                        <li ui-per="student.comments.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.comments({os_id:os_id})" class="ng-binding" href="#/student/65144/comments"><i class="fa fa-comments"></i> 点评记录</a></li>
                        <li ui-per="student.performance.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.performance({os_id:os_id})" class="ng-binding" href="#/student/65144/performance"><i class="fa fa-star"></i> 成绩记录</a></li>
                        <li ui-per="student.match.list" ng-repeat="item in $const.student_view_tabs" class="ng-scope"><a ui-sref="student.view.matchs({os_id:os_id})" class="ng-binding" href="#/student/65144/matchs"><i class="fa fa-flag-o"></i> 赛事记录</a></li>
                    </ul>
                </div>
            </div>
            <div class="panel-body ng-scope" ui-view="">
                <div xo-rest="students" xo-rest-url-param="[$stateParams.os_id,'match']" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="student_matches" loading-container=".table-responsive" loading-text="正在加载赛事记录..." empty-text="没有赛事记录!" class="ng-scope">
                    <a class="btn btn-default m-b" @click="handleShowDialog('lb-regstudentmatchmodal')"><i class="fa fa-plus">
                    
                </i> 添加赛事记录</a>
                    <div class="table-responsive">
                        <table class="table table-striped b-t b-light">
                            <thead>
                                <tr>
                                    <th>日期</th>
                                    <th>赛事名称</th>
                                    <th>比赛成绩</th>
                                    <th>录入时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="item in getTablesData()">
                                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                        <td class="ng-binding">{{item.join_date}}</td>
                                        <td class="ng-binding">{{item.match_name}}</td>
                                        <td class="ng-binding">{{item.result}}</td>
                                        <td class="ng-binding">2017-06-06</td>
                                        <td><a class="btn btn-default btn-xs" @click="handleShowDialog('lb-details')">查看详情</a> <a class="btn btn-danger btn-xs ng-isolate-scope" @click="handleDelClick(item._id)">删除</a></td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-sm-6 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 5 条赛事记录">共 5 条赛事记录</small></div>
                                <div class="col-sm-6 text-right text-center-xs">
                                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="grid-data-result">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'recording',
    data() {
        let localdata = {}
        return {
            localdata,
            lb_tables: ['recording'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.handleGetTable()
            })
        },
    }
}
</script>
