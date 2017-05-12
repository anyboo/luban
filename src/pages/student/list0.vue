<template>
    <div class="wrapper bg-white ng-scope" xo-rest="inquiry_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="inquiry_students">
        <div class="row no-gutter">
            <div class="col-xs-12 col-md-4 m-t">
                <div class="inline va-m">
                    <input type="text" id="ctl_date_start" ng-model="params.date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;">
                    <input type="text" id="ctl_date_end" ng-model="params.date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;">
                </div>
                <div class="inline w-sm va-m m-l-xs">
                    <div class="input-group">
                        <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员"><i class="icon-user"></i></button></span></div>
                </div>
                <button class="btn btn-default btn-sm m-l-xs" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <div class="btn-group">
                    <label btn-radio="'0'" ng-model="params.region_oe_id" class="btn btn-default ng-pristine ng-untouched ng-valid">未归属</label>
                </div>
                <!-- ngIf: params.region_oe_id == '0' -->
                <div class="btn-group m-l">
                    <label btn-radio="'today'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">今日</label>
                    <label btn-radio="'week'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本周</label>
                    <label btn-radio="'month'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本月</label>
                </div>
            </div>
        </div>
        <!--row-->
        <div class="table-responsive m-t">
            <table class="table table-striped b-t b-light">
                <thead>
                    <tr>
                        <th width="90">操作</th>
                        <th width="100">学员</th>
                        <th width="100">联系电话</th>
                        <th width="100">学员归属</th>
                        <th width="100">意向程度</th>
                        <th width="100">来源渠道</th>
                        <th width="150">建档日期</th>
                        <th>档案备注</th>
                        <th>最后跟踪</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- ngRepeat: item in grid.data -->
                </tbody>
            </table>
            <div class="wrapper" style="height:80px"></div>
            <div class="grid-data-result">
                <!-- ngIf: loading -->
                <!-- ngIf: !loading && grid.data.length==0 -->
                <p class="text-center ng-binding ng-scope" ng-if="!loading &amp;&amp; grid.data.length==0"><i class="fa fa-frown-o"></i>无相关数据!</p>
                <!-- end ngIf: !loading && grid.data.length==0 -->
            </div>
        </div>
        <!--table-responsive-->
        <div class="panel-footer">
            <div class="row">
                <div class="col-sm-4 col-xs-12"></div>
                <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 条记录">共 0 条记录</small></div>
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
    </div>
</template>
<script>
export default {
    name: 'list0',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
