<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class=" wrapper panel panel-default bg-white ng-scope" xo-rest="lost_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,lost_marked:'0',ob_id:user.gv.ob_id}}" xo-rest-ctrl="lost_students">
                <div class="row no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline">
                            <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                            <lb-date-picker v-model="localdata.form.daterange" type="daterange"></lb-date-picker>
                            <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration"></lb-buttongroup>
                        <lb-buttongroup :group-data="localdata.lost_marked" v-model="localdata.form.lost_marked"></lb-buttongroup>
                    </div>
                </div>
                <div class="row m-t">
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
                <div class="panel-footer ">
                    <div class="row ">
                        <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </lb-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lost',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'lost_marked': '',
                'duration': ''
            },
            'lost_marked': [{
                'value': '0',
                'text': '准流失'
            }, {
                'value': '1',
                'text': '已确认流失'
            }],
            'duration': [{
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
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
