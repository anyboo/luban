<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="icon-lock"></i>已封存学员档案列表
                </h3>
            </div>
            <div class="wrapper bg-white ng-scope" xo-rest="students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,isdelete:1}}" xo-rest-ctrl="trash">
                <div ng-if="$action == 'list'" class="ng-scope">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn" ng-init=" filter.fields = [ {name:'student_name',value:'姓名'}, {name:'first_tel',value:'手机号'}, {name:'home_address',value:'住址'}, {name:'nickname',value:'英文名'} ]; grid.search_key = 'student_name'; grid.search_value = ''; ">
                                    <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">
                                        姓名
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
                    <div class="table-responsive m-t">
                        <table class="table table-striped b-t b-light">
                            <thead>
                                <tr>
                                    <th>学生姓名</th>
                                    <th>联系电话</th>
                                    <th>建档日期</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                    <td class="ng-binding">
                                        <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                            <i class="fa fa-male"></i>
                                        </span>照理
                                    </td>
                                    <td class="ng-binding">12368454877</td>
                                    <td class="ng-binding">2017-05-13</td>
                                    <td>
                                        <a class="link" ng-click="do_recover(item)">
                                            <i class="icon-lock-open"></i>恢复
                                        </a>
                                        <a class="link" ng-click="confirm_delete(item)" ui-per="student.delete">
                                            <i class="fa fa-times"></i>删除
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-4 text-center">
                                <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 条记录">共 1 条记录</small>
                            </div>
                            <div class="col-sm-8 text-right text-center-xs">
                                <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
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
    name: 'trash',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': ''
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