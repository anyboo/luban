<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper-xs ng-scope" xo-rest="lessons" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="lesson" loading-container=".list-lesson" loading-text="正在加载课程列表..." empty-text="没有符合条件的课程!">
            <div class="panel panel-default">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-4">
                        <div class="padder">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn" ng-init="
                filter.fields = [
                  {name:'lesson_name',value:'课程名'},
                  {name:'lesson_no',value:'课程编号'}
                ];
                grid.search_key = 'lesson_name';
                grid.search_value = '';
                ">
                                        <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">课程名&nbsp;<span class="caret"></span></button>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" ng-model="grid.search_value" placeholder="关键字"> <span class="input-group-btn"><button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8">
                        <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>
                        <div class="btn-group m-l">
                            <label btn-radio="'0'" ng-model="params.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">班课</label>
                            <label btn-radio="'1'" ng-model="params.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">1对1</label>
                            <label btn-radio="'10'" ng-model="params.lesson_type" class="btn btn-default ng-pristine ng-untouched ng-valid">课时包</label>
                        </div>
                        <button class="btn btn-default pull-right" ng-click="$util.open('tpl/app/lesson/lesson/cate.html','lg',{})"><i class="fa fa-list"></i> 课程分类</button>
                        <button ui-per="lesson.add" class="btn btn-primary pull-right" ng-click="$util.open('tpl/app/lesson/lesson/new_lesson.modal.html','md',{})"><i class="fa fa-plus"></i>添加课程</button>
                    </div>
                </div>
                <!-- ngIf: view_mode == 'list' -->
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
                            <!-- ngRepeat: item in grid.data -->
                            <!-- ngIf: !loading -->
                            <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                <td>
                                    <div class="btn-group dropdown" dropdown="">
                                        <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                        <ul class="dropdown-menu">
                                            <li><a ng-click="$util.open('tpl/app/lesson/lesson/edit_lesson.modal.html','md',item)"><i class="fa fa-pencil-square"></i> 编辑</a></li>
                                            <li><a confirm-text="确定要删除该课程吗?" confirm-action="rest_remove(item,'ol_id','lessons',remove_callback);" class="ng-isolate-scope"><i class="fa fa-times"></i> 删除</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <p class="ng-binding">
                                        <!-- ngIf: item.lesson_type=='0' --><span class="label bg-danger ng-binding ng-scope" ng-if="item.lesson_type=='0'">班课</span>
                                        <!-- end ngIf: item.lesson_type=='0' -->
                                        <!-- ngIf: item.lesson_type == '1' -->
                                        <!-- ngIf: item.lesson_type == '10' -->默认课程 <small class="label bg-info m-l ng-binding">DL</small></p>
                                    <!-- ngIf: item.lesson_type == '10' -->
                                </td>
                                <td>
                                    <p class="ng-binding">
                                        <!-- ngIf: item.price_model=='0' --><span ng-if="item.price_model=='0'" class="ng-scope">按期收费</span>
                                        <!-- end ngIf: item.price_model=='0' -->
                                        <!-- ngIf: item.price_model=='1' -->,课程单价:0.00元/次</p>
                                    <p>
                                        <label>课程售价:</label><span class="label bg-info ng-binding" ng-bind="item.price">1888.00</span>元</p>
                                </td>
                                <td>
                                    <p>
                                        <label>单次课时长:</label><span class="label bg-info ng-binding" ng-bind="item.unit_hours">1.00</span>时</p>
                                    <p>
                                        <label>课程包含:</label>
                                        <!-- ngIf: item.price_model=='0' --><span class="label bg-info ng-binding ng-scope" ng-if="item.price_model=='0'">1期,</span>
                                        <!-- end ngIf: item.price_model=='0' -->
                                        <!-- ngIf: item.price_model=='1' --><span class="label bg-info ng-binding" ng-bind="item.inc_hours|empty_replace">10.00</span>课时</p>
                                </td>
                                <td>
                                    <p><span ng-bind-html="item|branchs" class="ng-binding"><label class="xlabel">小雪</label></span></p>
                                </td>
                            </tr>
                            <!-- end ngIf: !loading -->
                            <!-- end ngRepeat: item in grid.data -->
                        </tbody>
                    </table>
                </div>
                <!-- end ngIf: view_mode == 'list' -->
                <!-- ngIf: view_mode == 'grid' -->
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12"></div>
                        <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 门课程">共 1 门课程</small></div>
                        <div class="col-sm-4 text-right text-center-xs">
                            <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                                <!-- ngIf: boundaryLinks && totalPages > 1 -->
                                <!-- ngIf: directionLinks && totalPages > 1 -->
                                <!-- ngRepeat: page in pages track by $index -->
                                <!-- ngIf: totalPages > 1 -->
                                <!-- end ngRepeat: page in pages track by $index -->
                                <!-- ngIf: directionLinks && totalPages > 1 -->
                                <!-- ngIf: boundaryLinks && totalPages > 1 -->
                            </ul>
                        </div>
                    </div>
                </div>
                <!--panel footer-->
            </div>
            <!--panel-->
        </div>
        <!--wrapper-->
        <script type="text/ng-template" id="search.html" class="ng-scope">
            <div class="modal-header">
                <h3 class="modal-title">条件查询<button class="btn btn-sm btn-default pull-right" ng-click="$dismiss()">关闭</button></h3>
            </div>
            <div class="modal-body">
                <p class="m-t-xs">课程类别</p>
                <combo-select-tree input-data-store="lesson_cates" input-data-struct="plain" multi-select="false" output-model="params.olcg_id" output-key="olcg_id" name-key="cate_name" id-key="olcg_id" pid-key="parent_id" data-default-label="请选择..."></combo-select-tree>
                <div>
                    <p class="m-t-xs">校区:</p>
                    <select name="ob_id" ui-jq="chosen" ng-model="params.ob_id" ng-options="b.ob_id as b.branch_name for b in user.gv.branchs" required>
                        <option value="">所有校区</option>
                    </select>
                </div>
                <p class="m-t-xs">收费模式</p>
                <div class="btn-group">
                    <label btn-radio="'0'" ng-model="params.price_model" class="btn btn-default">按期收费</label>
                    <label btn-radio="'1'" ng-model="params.price_model" class="btn btn-default">按次收费</label>
                </div>
            </div>
</template>
<script>
export default {
    name: 'manage',
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
