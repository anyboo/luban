<template>
    <div ui-view="" class="ng-scope">
        <div xo-rest="task_sms" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="task_sms" class="panel panel-default wrapper ng-scope">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t"></div>
                <div class="col-xs-12 col-md-8 m-t"><a class="btn btn-success pull-right" ng-click="$util.open('tpl/app/has/sms_send.modal.html','md')"><i class="fa fa-plus"></i>发短信</a></div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <td>时间</td>
                            <td>接收对象</td>
                            <td>发送人</td>
                            <td>短信内容</td>
                            <td>发送情况</td>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">2017-06-15 17:19</td>
                            <td class="ng-binding">
                                <span class="label bg-info ng-scope" ng-if="item.to_type == '0'">班级</span> 班级名称
                            </td>
                            <td class="ng-binding">张英乙</td>
                            <td>
                                <div ng-bind-html="item.content" class="bg-success r-2x wrapper w-lg ng-binding">aa</div>
                            </td>
                            <td>
                                <div ng-if="item.status == '100'" class="ng-binding ng-scope">成功:0条
                                    <span ng-if="item.sms_failure_count != '0'" class="ng-binding ng-scope">,失败:1 条</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid-data-result">
                </div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-xs-12 col-sm-4"></div>
                    <div class="col-xs-12 col-sm-4 text-center"><small ng-bind-template="共 2 条记录" class="text-muted inline m-t-sm mb-sm ng-binding">共 2 条记录</small></div>
                    <div class="col-xs-12 col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" item-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sms',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
