<template>
    <div class="wrapper bg-white ng-scope" xo-rest="lost_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,lost_marked:'0',ob_id:user.gv.ob_id}}" xo-rest-ctrl="lost_students">
        <div class="row no-gutter">
            <div class="col-xs-12 col-md-4 m-t">
                <div class="inline">
                    <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="lb_localdata.form.lb_params_date_start">
                    <lb-date-picker v-model="lb_localdata.form.lb_daterange" type="daterange"></lb-date-picker>
                    <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="lb_localdata.form.lb_params_date_end">
                </div>
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <lb-buttongroup :group-data="lb_localdata.lb_params_lost_marked" v-model="lb_localdata.form.lb_params_lost_marked"></lb-buttongroup>
                <lb-buttongroup :group-data="lb_localdata.lb_duration" v-model="lb_localdata.form.lb_duration"></lb-buttongroup>
            </div>
        </div>
        <div class="table-responsive m-t">
            <lb-table :data="getTableData" stripe>
                <lb-table-column prop="data" label="学生姓名">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="联系电话">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="学校">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="校区">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="来源渠道">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="建档日期">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="最后课程">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="流失时间">
                    <template scope="scope"></template>
                </lb-table-column>
            </lb-table>
            <div class="grid-data-result">
                <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                    <i class="fa fa-frown-o"></i>无相关数据!
                </p>
            </div>
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-sm-4 col-xs-12"></div>
                <div class="col-sm-4 text-center">
                    <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 条记录">共 0 条记录</small>
                </div>
                <div class="col-sm-4 text-right text-center-xs">
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lost',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_daterange': '',
                'lb_params_date_end': '',
                'lb_params_lost_marked': '',
                'lb_duration': ''
            },
            'lb_params_lost_marked': [{
                'value': '0',
                'text': '准流失'
            }, {
                'value': '1',
                'text': '已确认流失'
            }],
            'lb_duration': [{
                'value': 'today',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }]
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