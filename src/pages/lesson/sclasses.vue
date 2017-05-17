<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper-xs ng-scope" xo-rest="sclasses" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="sclasses" loading-text="正在加载班级..." empty-text="没有符合条件的班级!">
            <ul class="breadcrumb bg-white b-a">
                <li>
                    <a ui-sref="lesson.packages" href="#/lesson/packages">
                        <i class="fa fa-suitcase"></i>课时包
                    </a>
                </li>
                <li class="active">班级设置</li>
            </ul>
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="padder">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn" ng-init=" filter.fields = [ {name:'class_name',value:'班级名'}, {name:'short_name',value:'班级简称'} ]; grid.search_key = 'class_name'; grid.search_value = ''; ">
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
                            <i class="fa fa-filter"></i>过滤
                        </button>
                        <div class="btn-group m-l">
                            <label btn-radio="'0'" ng-model="params.is_end" class="btn btn-default ng-pristine ng-untouched ng-valid">未结课</label>
                            <label btn-radio="'1'" ng-model="params.is_end" class="btn btn-default ng-pristine ng-untouched ng-valid">已结课</label>
                        </div>
                        <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                            <select ng-model="params.oe_id" class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;">
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
                        <a ng-click="$util.open('tpl/app/lesson/sclasses/new_sclass.modal.html','md')" @click="lbShowdialog($event,'lb-newsclassmodal')">
                            <i class="fa fa-plus"></i>新建班级
                        </a>
                    </div>
                </div>
                <div class="table-responsive m-t" style="min-height:400px">
                    <table class="table table-striped b-t b-light">
                        <thead>
                            <tr>
                                <th width="80"></th>
                                <th>简称</th>
                                <th>名称</th>
                                <th>科目</th>
                                <th>级别</th>
                                <th>已排课次数</th>
                                <th>已考勤次数</th>
                                <th>教师</th>
                                <th>开课日期</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <div class="grid-data-result">
                        <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                            <i class="fa fa-frown-o"></i>没有符合条件的班级!
                        </p>
                    </div>
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
    </div>
</template>
<script>
export default {
    name: 'sclasses',
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