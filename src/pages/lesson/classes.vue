<template>
    <div class="wrapper-xs ng-scope" xo-rest="classes" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="classes" loading-container=".list-class" loading-text="正在加载班级..." empty-text="没有符合条件的班级!">
        <div class="panel panel-default">
            <div class="row wrapper no-gutter">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn" ng-init=" filter.fields = [ {name:'class_name',value:'班级名'}, {name:'master',value:'老师姓名'} ]; grid.search_key = 'class_name'; grid.search_value = ''; ">
                                    <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">
  班级名 
                                        <span class="caret"></span>
                                    </button>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" ng-model="grid.search_value" placeholder="关键字">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});">
                        <i class="fa fa-filter"></i>  过滤 
                    </button>
                    <div class="btn-group m-l">
                        <label btn-radio="'1'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已开课</label>
                        <label btn-radio="'0'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">未开课</label>
                        <label btn-radio="'2'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已结课</label>
                        <label btn-radio="" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                    </div>
                    <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                        <select ng-model="params.master_oe_id" class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;">
                            <option value="" class="">选择老师</option>
                            <option value="0">纪岚雪</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 240px;" title="">
                            <a class="chosen-single" tabindex="-1">
                                <span>选择老师</span>
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
                    <div class="btn-group m-l-xs" ng-hide="app.isWeiXin">
                        <label btn-radio="'image'" ng-model="view_mode" class="btn btn-default ng-pristine ng-untouched ng-valid">
                            <i class="fa fa-image"></i>  区块 
                        </label>
                        <label btn-radio="'list'" ng-model="view_mode" class="btn btn-default ng-pristine ng-untouched ng-valid active">
                            <i class="fa fa-list"></i>  列表 
                        </label>
                    </div>
                    <a class="btn btn-success m-l-xs ng-hide" ng-click="bat_class_dispatch()" ng-hide="no_class_selected()">批量调课</a>
                    <a ui-per="class.add" class="btn btn-primary pull-right" ng-click="$util.open('tpl/app/lesson/classes/open_class.modal.html','md')">
                        <i class="fa fa-plus"></i>  开班 
                    </a>
                </div>
            </div>
            <div class="table-responsive ng-scope" ng-if="view_mode == 'list'">
                <table class="table table-striped table-hover vline">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>
  班级名 
                                <span class="table-header-sort ng-isolate-scope" header-sort="class_name" params="params">
                                    <span class="icon">
                                        <i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i>
                                    </span>
                                    <span class="icon">
                                        <i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i>
                                    </span>
                                </span>
                            </th>
                            <th>老师</th>
                            <th>课程名</th>
                            <th>开课日期</th>
                            <th>最后考勤</th>
                            <th>所在校区</th>
                            <th>招生情况</th>
                            <th>排课情况</th>
                            <th>考勤情况</th>
                            <th>缴费情况</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 个班级">共 0 个班级</small>
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
    name: 'classes',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>