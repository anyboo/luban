<template>
    <div>
        <div class="row wrapper">
            <div class="col-xs-12 col-md-4">
                <div class="padder">
                    <div class="input-group w-full">
                        <div class="input-group">
                            <div class="input-group-btn" ng-init=" filter.fields = [ {name:'lesson_name',value:'课程名'}, {na me:'lesson_no',value:'课程编号'} ]; grid.search_key = 'lesson_name'; grid.search_value = ''; ">
                                <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">
                                    课程名
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
            <div class="col-xs-12 col-md-8">
                <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});">
                    <i class="fa fa-filter"></i>过滤
                </button>
                <div class="btn-group m-l">
                    <label btn-radio="'0'" ng-model="params.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">班课</label>
                    <label btn-radio="'1'" ng-model="params.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">1对1</label>
                    <label btn-radio="'10'" ng-model="params.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">课时包</label>
                </div>
                <button ng-click="$util.open('tpl/app/lesson/lesson/cate.html','lg',{})" @click="lbShowdialog($event,'lb-cate')">
                    <i class="fa fa-list"></i>课程分类
                </button>
                <button ng-click="$util.open('tpl/app/lesson/lesson/new_lesson.modal.html','md',{})" @click="lbShowdialog($event,'lb-newlessonmodal')">
                    <i class="fa fa-plus"></i>添加课程
                </button>
            </div>
        </div>
        <div class="table-responsive m-t ng-scope" ng-if="view_mode == 'list'">
            <table class="table table-hover b-t b-light">
                <thead>
                    <tr>
                        <th>操作</th>
                        <th width="300">课程</th>
                        <th>定价</th>
                        <th>内容</th>
                        <th>适用校区</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <lb-dropdown>
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                    <i class="fa fa-cog"></i>操作
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                                <lb-dropdown-menu slot="menuslot">
                                    <li>
                                        <a ng-click="$util.open('tpl/app/lesson/lesson/edit_lesson.modal.html','md',item)" @click="lbShowdialog($event,'lb-editlessonmodal')">
                                            <i class="fa fa-pencil-square"></i>编辑
                                        </a>
                                    </li>
                                    <li>
                                        <a confirm-text="确定要删除该课程吗?" confirm-action="rest_remove(item,'ol_id','lessons',remove_callback);" class="ng-isolate-scope">
                                            <i class="fa fa-times"></i>删除
                                        </a>
                                    </li>
                                </lb-dropdown-menu>
                            </lb-dropdown>
                        </td>
                        <td>
                            <p class="ng-binding">
                                <span class="label bg-danger ng-binding ng-scope" ng-if="item.lesson_type=='0'">班课</span>默认课程
                                <small class="label bg-info m-l ng-binding">DL</small>
                            </p>
                        </td>
                        <td>
                            <p class="ng-binding">
                                <span ng-if="item.price_model=='0'" class="ng-scope">按期收费</span>,课程单价:0.00元/次
                            </p>
                            <p>
                                <label>课程售价:</label>
                                <span class="label bg-info ng-binding" ng-bind="item.price">1888.00</span>元
                            </p>
                        </td>
                        <td>
                            <p>
                                <label>单次课时长:</label>
                                <span class="label bg-info ng-binding" ng-bind="item.unit_hours">1.00</span>时
                            </p>
                            <p>
                                <label>课程包含:</label>
                                <span class="label bg-info ng-binding ng-scope" ng-if="item.price_model=='0'">1期,</span>
                                <span class="label bg-info ng-binding" ng-bind="item.inc_hours|empty_replace">10.00</span>课时
                            </p>
                        </td>
                        <td>
                            <p>
                                <span ng-bind-html="item|branchs" class="ng-binding">
                                    <label class="xlabel">小雪</label>
                                </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'orders',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>