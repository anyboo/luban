<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-flag"></i>请选择课时包
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div xo-rest="lessons" xo-rest-grid="{maxsize:5,params:vm.params}" loading-container=".list-group" loading-text="正在加载课程..." empty-text="没有符合条件的课程!" xo-rest-ctrl="select_lesson_tpl" class="ng-scope">
                    <div class="row">
                        <div class="col-xs-12 col-md-7">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select>
                                            课程名
                                            <span class="caret"></span>
                                        </button>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model="lb_localdata.form.lb_grid_search_value">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <button ng-click="$util.open('tpl/app/lesson/lesson/new_lesson.modal.html','md',{})" @click="lbShowdialog($event,'lb-newlessonmodal')">
                                <i class="fa fa-plus"></i>添加课程
                            </button>
                        </div>
                    </div>
                    <ul class="list-group m-t">
                        <div class="grid-data-result">
                            <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                                <i class="fa fa-frown-o"></i>没有符合条件的课程!
                            </p>
                        </div>
                    </ul>
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" items-per-page="grid.params.pagesize" max-size="grid.maxsize" boundary-links="true" rotate="false"></ul>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" ng-disabled="vm.selected.length == 0" ng-click="vm.confirm();" disabled="disabled">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectLessonTpl',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': ''
            },
            'search': {
                'fields': [{
                    'name': 'lesson_name',
                    'value': '课程名'
                }, {
                    'name': 'lesson_no',
                    'value': '课程编号'
                }],
                'search_key': 'lesson_name',
                'search_value': ''
            }
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>