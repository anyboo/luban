<template>
    <div class="panel panel-default ng-scope" xo-rest="orders" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="orders" loading-text="正在加载订单..." empty-text="没有符合条件的订单!">
        <div class="row wrapper">
            <div class="col-xs-12 col-md-4 m-t">
                <div class="padder">
                    <div class="input-group w-full">
                        <div class="input-group">
                            <div class="input-group-btn" ng-init=" filter.fields = [ {name:'oso_no',value:'订单号'} ]; grid.search_key = 'oso_no'; grid.search_value = ''; ">
                                <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select>
                                    订单号
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
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <div class="inline w va-m">
                    <div class="input-group">
                        <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="lb_localdata.form.lb_param_student_name">
                        <span class="input-group-btn">
                            <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                <i class="icon-user"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});">
                    <i class="fa fa-filter"></i>过滤
                </button>
                <lb-buttongroup :group-data="lb_localdata.lb_params_pay_status" v-model="lb_localdata.form.lb_params_pay_status"></lb-buttongroup>
            </div>
        </div>
        <div class="table-responsive">
            <lb-table :data="getTableData" stripe>
                <lb-table-column prop="data" label="操作">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="学员">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="类型">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="订单号">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="订单金额">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="订单内容">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="下单日期">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="付款情况">
                    <template scope="scope"></template>
                </lb-table-column>
                <lb-table-column prop="data" label="备注">
                    <template scope="scope"></template>
                </lb-table-column>
            </lb-table>
            <div class="grid-data-result"></div>
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-sm-4 col-xs-12"></div>
                <div class="col-sm-4 text-center">
                    <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 16 条记录">共 16 条记录</small>
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
    name: 'orders',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_param_student_name': '',
                'lb_params_pay_status': ''
            },
            'lb_params_lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '10',
                'text': '课时包'
            }],
            'dropDownMenu': [{
                'url': 'lb-editlessonmodal',
                'icon': 'fa fa-pencil-square',
                'text': '编辑'
            }],
            'lb_params_pay_status': [{
                'value': '0',
                'text': '未付款订单'
            }, {
                'value': '1',
                'text': '部分付款订单'
            }, {
                'value': '2',
                'text': '已付款订单'
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