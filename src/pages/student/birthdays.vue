<template>
    <div class="panel panel-default ng-scope" xo-rest="birthday_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="birthday_students">
        <div class="row wrapper">
            <div class="col-xs-12 col-md-4 m-t">
                <div class="inline">
                    <lb-date-picker v-model="localdata.form.daterange" type="daterange"></lb-date-picker>
                </div>
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration"></lb-buttongroup>
                <button class="btn btn-default ng-isolate-scope" export="birthday_students" export-params="params">
                    <i class="glyphicon glyphicon-export"></i>导出
                </button>
                <div id="fct-birthday_students" style="display:none;">
                    <form name="export_form_birthday_students" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                        <input type="hidden" name="X-XSRF-TOKEN" value="eab0907a6f266d9e9fdd12fb1d6f54c6">
                        <input type="hidden" name="resource" value="birthday_students">
                        <input type="hidden" name="date_end" value="2017-05-17" ng-repeat="(key,value) in params" class="ng-scope">
                        <input type="hidden" name="date_start" value="2017-05-01" ng-repeat="(key,value) in params" class="ng-scope">
                        <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                        <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                        <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                    </form>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <lb-table :data="getTablesData()" stripe>
                <lb-table-column prop="data" label="学员">
                    <template scope="scope">{{ scope.row.student_name }}</template>
                </lb-table-column>
                <lb-table-column prop="data" label="联系电话">
                    <template scope="scope">{{ scope.row.first_tel }}</template>
                </lb-table-column>
                <lb-table-column prop="data" label="出生日期">
                    <template scope="scope">1970-5-13</template>
                </lb-table-column>
                <lb-table-column prop="data" label="年龄">
                    <template scope="scope">
                        <span class="badge bg-info ng-binding">47</span>
                    </template>
                </lb-table-column>
                <lb-table-column prop="data" label="建档日期">
                    <template scope="scope">2017-05-13</template>
                </lb-table-column>
                <lb-table-column prop="data" label="在读课程数">
                    <template scope="scope">2</template>
                </lb-table-column>
            </lb-table>
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
</template>
<script>
export default {
    name: 'birthdays',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': ''
            },
            'duration': [{
                'value': 'day',
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
            localdata,
            tables: ['student']
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
