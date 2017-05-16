<template>
    <div ui-view="" class="ng-scope">
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
                                                <input class="form-control input-sm ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-parse" type="text" placeholder="科目名称" ng-model="new_subject.subject_name" required="">
                                            </td>
                                            <td>
                                                <input type="number" class="form-control input-sm ng-pristine ng-untouched ng-valid ng-valid-required" ng-model="new_subject.sort" required="">
                                            </td>
                                            <td>
                                                <button class="btn btn-primary btn-xs" ng-click="add()" ng-disabled="saving">添加</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="wrapper ng-scope" ng-if="subject_rest.$loaded && subject_rest.$list.length == 0">
                                    <p>还没有添加科目,请添加科目</p>
                                </div>
                            </div>
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
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>