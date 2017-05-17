<template>
    <div class="wrapper-xs ng-scope" page-controller="lesson_subjects">
        <div ng-if="$action == 'subjects'" class="ng-scope">
            <ul class="breadcrumb bg-white b-a">
                <li>
                    <a ui-sref="lesson.packages" href="#/lesson/packages">
                        <i class="fa fa-suitcase"></i>课时包
                    </a>
                </li>
                <li class="active">科目设置</li>
            </ul>
            <div class="wrapper-xs bg-white">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-xs-12">
                        <div class="table-responsive m-t b-a">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>科目名称</th>
                                        <th width="100">序号</th>
                                        <th width="180">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input class="form-control input-sm ng-dirty ng-touched ng-invalid ng-invalid-required" type="text" placeholder="科目名称" required="" v-model="lb_localdata.form.lb_new_subject_subject_name">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control input-sm ng-valid ng-valid-required ng-dirty ng-touched ng-valid-number" required="" v-model="lb_localdata.form.lb_new_subject_sort">
                                        </td>
                                        <td>
                                            <button class="btn btn-primary btn-xs" ng-click="add()" ng-disabled="saving">添加</button>
                                        </td>
                                    </tr>
                                    <tr ng-dblclick="edit(item)" ng-repeat="item in subject_rest.$list" class="ng-scope">
                                        <td>
                                            <span ng-show="!item.$$edit" class="ng-binding">乔布斯</span>
                                            <span ng-show="item.$$edit" class="ng-hide">
                                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_item_subject_name">
                                            </span>
                                        </td>
                                        <td>
                                            <span ng-show="!item.$$edit" class="ng-binding">3</span>
                                            <span ng-show="item.$$edit" class="ng-hide">
                                                <input type="number" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_item_sort">
                                            </span>
                                        </td>
                                        <td>
                                            <a ng-show="!item.$$edit" class="btn btn-info btn-xs" ng-click="edit(item)">编辑</a>
                                            <a ng-show="item.$$edit" class="btn btn-primary btn-xs ng-hide" ng-disabled="saving" ng-click="save(item)">保存</a>
                                            <a ng-show="item.$$edit" class="btn btn-danger btn-xs m-l-xs ng-hide" ng-disabled="saving" ng-click="cancel(item)">取消</a>
                                            <a ng-show="!item.$$edit" class="btn btn-danger btn-xs m-l-xs ng-isolate-scope" tooltip="删除" confirm-text="确定要删除该科目吗?" confirm-action="del(item)">删除</a>
                                            <a ng-show="!item.$$edit" class="btn btn-default btn-xs m-l-xs" tooltip="设置科目级别" ng-click="set_level(item)">
                                                <i class="fa fa-list-ol"></i>
                                            </a>
                                            <a ng-show="!item.$$edit" class="btn btn-default btn-xs m-l-xs" tooltip="设置刷卡考勤" ng-click="set_attendance(item)">
                                                <i class="fa fa-clock-o"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr ng-dblclick="edit(item)" ng-repeat="item in subject_rest.$list" class="ng-scope">
                                        <td>
                                            <span ng-show="!item.$$edit" class="ng-binding">vfv</span>
                                            <span ng-show="item.$$edit" class="ng-hide">
                                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_item_subject_name">
                                            </span>
                                        </td>
                                        <td>
                                            <span ng-show="!item.$$edit" class="ng-binding">1</span>
                                            <span ng-show="item.$$edit" class="ng-hide">
                                                <input type="number" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_item_sort">
                                            </span>
                                        </td>
                                        <td>
                                            <a ng-show="!item.$$edit" class="btn btn-info btn-xs" ng-click="edit(item)">编辑</a>
                                            <a ng-show="item.$$edit" class="btn btn-primary btn-xs ng-hide" ng-disabled="saving" ng-click="save(item)">保存</a>
                                            <a ng-show="item.$$edit" class="btn btn-danger btn-xs m-l-xs ng-hide" ng-disabled="saving" ng-click="cancel(item)">取消</a>
                                            <a ng-show="!item.$$edit" class="btn btn-danger btn-xs m-l-xs ng-isolate-scope" tooltip="删除" confirm-text="确定要删除该科目吗?" confirm-action="del(item)">删除</a>
                                            <a ng-show="!item.$$edit" class="btn btn-default btn-xs m-l-xs" tooltip="设置科目级别" ng-click="set_level(item)">
                                                <i class="fa fa-list-ol"></i>
                                            </a>
                                            <a ng-show="!item.$$edit" class="btn btn-default btn-xs m-l-xs" tooltip="设置刷卡考勤" ng-click="set_attendance(item)">
                                                <i class="fa fa-clock-o"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'subjects',
    data() {
        let lb_localdata = {
            'form': {
                'lb_new_subject_subject_name': '',
                'lb_new_subject_sort': '',
                'lb_item_subject_name': '',
                'lb_item_sort': ''
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