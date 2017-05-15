<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper-xs ng-scope" xo-rest="contracts" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="contract" loading-text="正在加载1对1合同..." empty-text="没有符合条件的1对1合同!">
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline w va-m">
                            <select class="form-control ng-pristine ng-untouched ng-valid" name="ol_id" ui-jq="chosen" ng-model="params.ol_id" ng-options="lesson.ol_id as lesson.lesson_name for lesson in $gv.lessons|filter:cur_branch|filter:filter_contract" style="display: none;">
                                <option value="" class="">选择课程</option>
                            </select>
                            <div class="chosen-container chosen-container-single" style="width: 200px;" title="">
                                <a class="chosen-single" tabindex="-1">
                                    <span>选择课程</span>
                                    <div>
                                        <b></b>
                                    </div>
                                </a>
                                <div class="chosen-drop">
                                    <div class="chosen-search">
                                        <input type="text" autocomplete="off">
                                    </div>
                                    <ul class="chosen-results"></ul>
                                </div>
                            </div>
                        </div>
                        <div class="inline w va-m">
                            <div class="input-group ng-valid" select-title="请选择学员" ng-model="params.os_id" select-params="{ob_id:user.gv.ob_id}">
                                <input type="text" placeholder="学员" ng-model="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly">
                                <span class="input-group-btn">
                                    <button class="btn btn-default " select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="selectParams" select-title="请选择学员" @click="lbShowDailog('lb-selectstudenttpl')">
                                        <i class="icon-user"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <div class="btn-group m-l">
                            <label btn-radio="'1'" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">已开课</label>
                            <label btn-radio="'0'" ng-model="params.status" class="btn btn-default ng-untouched ng-valid active ng-dirty ng-valid-parse">未开课</label>
                            <label btn-radio="'2'" ng-model="params.status" class="btn btn-default ng-untouched ng-valid ng-dirty">已结课</label>
                            <label btn-radio="" ng-model="params.status" class="btn btn-default ng-pristine ng-untouched ng-valid">所有</label>
                        </div>
                        <div class="btn-group m-l">
                            <label btn-radio="'2'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">已缴费</label>
                            <label btn-radio="'1'" ng-model="params.pay_status" class="btn btn-default ng-untouched ng-valid ng-dirty">部分缴费</label>
                            <label btn-radio="'0'" ng-model="params.pay_status" class="btn btn-default ng-untouched ng-valid active ng-dirty ng-valid-parse">未缴费</label>
                            <label btn-radio="" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">所有</label>
                        </div>
                        <a class="btn btn-default" ng-click="$util.open('tpl/app/lesson/contracts/add_performance.modal.html','md',grid.data)">
                            <i class="icon-plus"></i>  登记成绩 
                        </a>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped b-t b-light">
                        <thead>
                            <tr>
                                <th>学员</th>
                                <th>
                                    <span class="inline w-xs text-right">合同</span>
                                </th>
                                <th>
                                    <span class="inline w-xs text-right">课程</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <div class="grid-data-result">
                        <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                            <i class="fa fa-frown-o"></i>  没有符合条件的1对1合同! 
                        </p>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12"></div>
                        <div class="col-sm-4 text-center">
                            <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 份合同">共 0 份合同</small>
                        </div>
                        <div class="col-sm-4 text-right text-center-xs">
                            <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-header">
            <h3 class="modal-title">
  条件查询 
                <button class="btn btn-sm btn-default pull-right" ng-click="$dismiss()">关闭</button>
            </h3>
        </div>
        <div class="modal-body">
            <div ng-if="user.gv.branchs.length>1">
                <p class="m-t-xs">校区:</p>
                <select name="ob_id" ui-jq="chosen" ng-model="params.ob_id" ng-options="b.ob_id as b.branch_name for b in user.gv.branchs" required="">
                    <option value="">所有校区</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contracts',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>