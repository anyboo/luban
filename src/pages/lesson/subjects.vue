<template>
    <div>
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
                            <lb-table :data="getTableData" stripe>
                                <lb-table-column prop="data" label="科目名称">
                                    <template scope="scope">
                                        <input class="form-control input-sm ng-dirty ng-touched ng-invalid ng-invalid-required" type="text" placeholder="科目名称" required v-model="lb_localdata.form.lb_new_subject_subject_name">
                                    </template>
                                </lb-table-column>
                                <lb-table-column width="100" prop="data" label="序号">
                                    <template scope="scope">
                                        <input type="number" class="form-control input-sm ng-valid ng-valid-required ng-dirty ng-touched ng-valid-number" required v-model="lb_localdata.form.lb_new_subject_sort">
                                    </template>
                                </lb-table-column>
                                <lb-table-column width="180" prop="data" label="操作">
                                    <template scope="scope">
                                        <button class="btn btn-primary btn-xs" ng-click="add()" ng-disabled="saving">添加</button>
                                    </template>
                                </lb-table-column>
                            </lb-table>
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
        let lb_localdata = {
            'form': {
                'lb_new_subject_subject_name': '',
                'lb_new_subject_sort': ''
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