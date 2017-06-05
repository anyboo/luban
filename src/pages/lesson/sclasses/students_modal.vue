<template>
    <div>
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude="">
                <div oc-lazy-load="['js/modules/sclasses.js']" class="ng-scope"></div>
                <div ng-controller="SclassStudentsCtl" class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" @click="lbClosedialog($event)"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                        <h3 class="modal-title ng-binding"><i class="icon-user"></i>高中五班 学员管理</h3></div>
                    <div class="modal-body ng-scope" ng-include="'tpl/app/lesson/sclasses/students_'+$action+'.block.html'">
                        <div xo-rest="sclasses" xo-rest-url-param="[sclass.osc_id,'students']" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="sclass_students" class="table-responsive ng-scope">
                            <p class="text-right" ng-hide="sclass.is_end == '1'"><a class="btn btn-primary btn-xs" ng-click="assign_students()"><i class="fa fa-plus"></i>分配学员</a></p>
                            <div class="table-responsive">
                                <table class="table table-striped b-t b-light">
                                    <thead>
                                        <tr>
                                            <th ng-if="sclass.is_end == '0'" class="ng-scope"></th>
                                            <th>学员</th>
                                            <th>分配课次</th>
                                            <th>已上课次</th>
                                            <th>入班日期</th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                    </tbody>
                                </table>
                                <div class="grid-data-result">
                                    <p class="text-center ng-binding ng-scope" ng-if="!loading &amp;&amp; grid.data.length==0"><i class="fa fa-frown-o"></i>无相关数据!</p>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-sm-4 col-xs-12"></div>
                                    <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 名学员">共 0 名学员</small></div>
                                    <div class="col-sm-4 text-right text-center-xs">
                                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                                        </ul>
                                    </div>
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
    name: 'students_modal',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
