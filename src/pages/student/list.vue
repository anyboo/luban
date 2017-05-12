<template>
    <div class="row wrapper">
        <div class="col-xs-12 col-md-4 m-t">
            <div class="padder">
                <div class="input-group w-full">
                    <div class="input-group">
                        <div class="input-group-btn" ng-init="
                filter.fields = [
                  {name:'student_name',value:'姓名'},
                  {name:'first_tel',value:'手机号'},
                  {name:'home_address',value:'住址'},
                  {name:'nickname',value:'英文名'},
                  {name:'card_no',value:'学员卡号'}
                ];
                grid.search_key = 'student_name';
                grid.search_value = '';
                ">
                            <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">姓名&nbsp;<span class="caret"></span></button>
                        </div>
                        <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" ng-model="grid.search_value" ui-keyup="{enter:'search()'}" placeholder="关键字"> <span class="input-group-btn"><button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button></span></div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-8 m-t">
            <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>
            <div class="btn-group m-l">
                <label btn-radio="" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                <label btn-radio="'0'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">未报读学员</label>
                <label btn-radio="'1'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已报读学员</label>
            </div>
            <div class="btn-group m-l-xs">
                <label btn-radio="'image'" ng-model="view_mode" class="btn btn-default ng-pristine ng-untouched ng-valid active"><i class="fa fa-image"></i> 头像</label>
                <label btn-radio="'list'" ng-model="view_mode" class="btn btn-default ng-pristine ng-untouched ng-valid"><i class="fa fa-list"></i> 列表</label>
            </div>
            <button class="btn btn-default ng-isolate-scope" ui-per="student.export" export="students" export-params="params"><i class="glyphicon glyphicon-export"></i>导出Excel</button>
            <div id="fct-students" style="display:none;">
                <form name="export_form_students" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                    <input type="hidden" name="X-XSRF-TOKEN" value="1f4158897bff2442142cd9ad69c92519">
                    <input type="hidden" name="resource" value="students">
                    <!-- ngRepeat: (key,value) in params -->
                    <input type="hidden" name="ob_id" value="11158" ng-repeat="(key,value) in params" class="ng-scope">
                    <!-- end ngRepeat: (key,value) in params -->
                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                    <!-- end ngRepeat: (key,value) in params -->
                    <input type="hidden" name="pagesize" value="12" ng-repeat="(key,value) in params" class="ng-scope">
                    <!-- end ngRepeat: (key,value) in params -->
                </form>
            </div> <a class="link m-l-xs" ui-per="student.trash" ng-click="$util.open('tpl/app/student/trash.html','md',{})"><i class="icon-lock"></i> 已封存档案</a></div>
    </div>
</template>
<script>
export default {
    name: 'list',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
