<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper bg-white ng-scope" page-controller="hours_warning_index">
            <div class="row no-gutter">
                <div class="col-xs-12 col-md-3">
                    <lb-buttongroup :group-data="lb_localdata.lb_lesson_type" v-model="lb_localdata.form.lb_lesson_type"></lb-buttongroup>
                </div>
            </div>
            <div class="m-t ng-scope" xo-rest="class_hours_warning" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" ng-if="lesson_type == 0" xo-rest-ctrl="hours_warning">
                <div class="table-responsive">
                    <table class="table table-striped b-t b-light">
                        <thead>
                            <tr>
                                <th>学生姓名</th>
                                <th>联系电话</th>
                                <th>学校</th>
                                <th>所在班级</th>
                                <th>校区</th>
                                <th>
                                    报名课次
                                    <span class="table-header-sort ng-isolate-scope" header-sort="lesson_times" params="params">
                                        <span class="icon">
                                            <i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i>
                                        </span>
                                    <span class="icon">
                                            <i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i>
                                        </span>
                                    </span>
                                </th>
                                <th>
                                    已上课次
                                    <span class="table-header-sort ng-isolate-scope" header-sort="use_times" params="params">
                                        <span class="icon">
                                            <i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i>
                                        </span>
                                    <span class="icon">
                                            <i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i>
                                        </span>
                                    </span>
                                </th>
                                <th>
                                    剩余课次
                                    <span class="table-header-sort ng-isolate-scope" header-sort="remain_times" params="params">
                                        <span class="icon">
                                            <i class="fa fa-sort-asc" ng-class="{'active':is_sort('ASC')}" ng-click="asc()"></i>
                                        </span>
                                    <span class="icon">
                                            <i class="fa fa-sort-desc" ng-class="{'active':is_sort('DESC')}" ng-click="desc()"></i>
                                        </span>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                <td class="ng-binding">
                                    <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                        <i class="fa fa-female"></i>
                                    </span>小兵
                                </td>
                                <td class="ng-binding">18952565452</td>
                                <td class="ng-binding">未登记</td>
                                <td>
                                    <a class="link ng-binding" ng-click="params.oc_id=item.oc_id" tooltip="点击班级名查看该班级所有告警">3期班</a>
                                </td>
                                <td ng-bind-html="item.class.ob_id|branch_name" class="ng-binding">
                                    <label class="badge bg-info badge-xm">福州布尔培训</label>
                                </td>
                                <td class="ng-binding">60</td>
                                <td class="ng-binding">1</td>
                                <td>
                                    <span class="badge bg-danger ng-binding">59</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="grid-data-result"></div>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12"></div>
                        <div class="col-sm-4 text-center">
                            <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 条记录">共 1 条记录</small>
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
    name: 'warning',
    data() {
        let lb_localdata = {
            'lb_lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '10',
                'text': '课时包'
            }],
            'form': {
                'lb_lesson_type': ''
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