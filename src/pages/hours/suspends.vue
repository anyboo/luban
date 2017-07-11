<template>
<div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
    <div ui-view class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="suspends" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="suspends">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-6 m-t">
                    <a class="link ng-scope" ng-if="!show_time_filter" ng-click="show_filter()">
                        <i class="glyphicon glyphicon-calendar"></i>按时间过滤
                    </a>
                </div>
                <div class="col-xs-12 col-md-6 m-t">
                    <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status"></lb-buttongroup>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.student_name">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                
                </div>
            </div>
            <div class="table-responsive">
                <lb-table :data="getTableData" stripe>
                    <lb-table-column prop="data" label="操作">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="停课学员">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="停课时间">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="复课时间">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="停课课程">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="停课原因">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="停课状态">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="登记时间">
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
    </div>
</template>
<script>
export default {
    name: 'suspends',
    data() {
        let localdata = {
            'status': [{
                'value': '',
                'text': '所有'
            }, {
                'value': '1',
                'text': '停课中'
            }, {
                'value': '0',
                'text': '待停课'
            }, {
                'value': '2',
                'text': '已复课'
            }],
            'form': {
                'status': '',
                'student_name': ''
            }
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
