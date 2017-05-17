<template>
    <div ui-view="" class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="suspends" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="suspends">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-6 m-t">
                    <a class="link ng-scope" ng-if="!show_time_filter" ng-click="show_filter()">
                        <i class="glyphicon glyphicon-calendar"></i>按时间过滤
                    </a>
                </div>
                <div class="col-xs-12 col-md-6 m-t">
                    <div class="btn-group m-l-xs">
                        <label btn-radio="''" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">所有</label>
                        <label btn-radio="'1'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid active">停课中</label>
                        <label btn-radio="'0'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">待停课</label>
                        <label btn-radio="'2'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已复课</label>
                    </div>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <button class="btn btn-primary pull-right" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="student_suspend" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行停课登记" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                        <i class="icon-plus"></i>停课登记
                    </button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover b-t b-light">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>停课学员</th>
                            <th>停课时间</th>
                            <th>复课时间</th>
                            <th>停课课程</th>
                            <th>停课原因</th>
                            <th>停课状态</th>
                            <th>
                                登记时间
                                <span class="table-header-sort ng-isolate-scope" header-sort="create_time" params="params">
                                    <span class="icon">
                                        <i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i>
                                    </span>
                                    <span class="icon">
                                        <i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i>
                                    </span>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div class="grid-data-result">
                    <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                        <i class="fa fa-frown-o"></i>无相关数据!
                    </p>
                </div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 条记录">共 0 条记录</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'suspends',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>