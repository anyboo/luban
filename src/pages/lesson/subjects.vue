<template>
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
                                    <input class="form-control input-sm ng-pristine ng-invalid ng-invalid-required ng-valid-parse ng-touched" type="text" placeholder="科目名称" v-model="localdata.form.new_subject_subject_name" required="">
                                </td>
                                <td>
                                    <input type="number" class="form-control input-sm ng-pristine ng-untouched ng-valid ng-valid-required" v-model="localdata.form.new_subject_sort" required="">
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-xs" ng-click="add()" ng-disabled="saving">添加</button>
                                </td>
                            </tr>
                            <tr ng-dblclick="edit(item)" ng-repeat="item in subject_rest.$list" class="ng-scope">
                                <td>
                                    <span class="ng-binding">d'd</span>
                                    <span class="ng-hide">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid" >
                                    </span>
                                </td>
                                <td><span class="ng-binding">2</span>
                                    <span class="ng-hide">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid" >
                                    </span>
                                </td>
                                <td>
                                    <a class="btn btn-info btn-xs">编辑</a>
                                    <a class="btn btn-danger btn-xs m-l-xs ng-isolate-scope">删除</a>
                                    <a ng-show="!item.$$edit" class="btn btn-default btn-xs m-l-xs" tooltip="设置科目级别" ng-click="set_level(item)">
                                        <i class="fa fa-list-ol"></i></a>
                                    <a ng-show="!item.$$edit" class="btn btn-default btn-xs m-l-xs" tooltip="设置刷卡考勤" ng-click="set_attendance(item)"><i class="fa fa-clock-o"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'subjects',
    data() {
        let localdata = {
            'form': {
                'new_subject_subject_name': '',
                'new_subject_sort': ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
