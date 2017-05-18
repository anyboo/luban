<template>
    <div class="panel panel-default ng-scope" xo-rest="orders" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="orders" loading-text="正在加载订单..." empty-text="没有符合条件的订单!">
        <div class="row wrapper">
            <div class="col-xs-12 col-md-4 m-t">
                <div class="padder">
                    <div class="input-group w-full">
                        <div class="input-group">
                            <div class="input-group-btn" ng-init="
                filter.fields = [
                  {name:'oso_no',value:'订单号'}
                ];
                grid.search_key = 'oso_no';
                grid.search_value = '';
                ">
                                <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select="">订单号&nbsp;<span class="caret"></span></button>
                            </div>
                            <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" ng-model="grid.search_value" placeholder="关键字"> <span class="input-group-btn"><button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button></span></div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-8 m-t">
                <div class="inline w va-m">
                    <div class="input-group">
                        <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员"><i class="icon-user"></i></button></span></div>
                </div>
                <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});"><i class="fa fa-filter"></i>过滤</button>
                <div class="btn-group m-l">
                    <label btn-radio="" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                    <label btn-radio="'0'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">未付款订单</label>
                    <label btn-radio="'1'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">部分付款订单</label>
                    <label btn-radio="'2'" ng-model="params.pay_status" class="btn btn-default ng-pristine ng-untouched ng-valid">已付款订单</label>
                </div>
            </div>
        </div>
        <!--row-->
        <div class="table-responsive">
            <table class="table table-striped b-t b-light">
                <thead>
                    <tr>
                        <th>操作</th>
                        <th>学员</th>
                        <th>类型</th>
                        <th>订单号</th>
                        <th>订单金额</th>
                        <th>订单内容</th>
                        <th>下单日期</th>
                        <th>付款情况</th>
                        <th>备注</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">sdsgf</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28778">OY1167817180556111069332</a></td>
                        <td class="ng-binding">0.00</td>
                        <td class="ng-binding">预充值0.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-18</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">fdgdfg</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28750">OY1167817170545102070884</a></td>
                        <td class="ng-binding">111.00</td>
                        <td class="ng-binding">预充值111.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">fdgdfg</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28748">OY1167817170515101742509</a></td>
                        <td class="ng-binding">111.00</td>
                        <td class="ng-binding">预充值111.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding">2</td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">fdgdfg</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28747">OY1167817170517101593376</a></td>
                        <td class="ng-binding">3.00</td>
                        <td class="ng-binding">预充值3.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding">ss</td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">fdgdfg</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28746">OY1167817170516101450767</a></td>
                        <td class="ng-binding">111.00</td>
                        <td class="ng-binding">预充值111.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">fdgdfg</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28743">OY1167817170547100159016</a></td>
                        <td class="ng-binding">111.00</td>
                        <td class="ng-binding">预充值111.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">杂费
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28740">OT1167817170513094743585</a></td>
                        <td class="ng-binding">11.00</td>
                        <td class="ng-binding">杂费[]11.000000元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding">q</td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28739">OY1167817170535094456729</a></td>
                        <td class="ng-binding">111.00</td>
                        <td class="ng-binding">预充值111.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding">11</td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzz</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28738">OY1167817170522094483987</a></td>
                        <td class="ng-binding">111.00</td>
                        <td class="ng-binding">预充值111.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding">11</td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">杂费
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28734">OT1167817170547093802879</a></td>
                        <td class="ng-binding">1111.00</td>
                        <td class="ng-binding">杂费[]1111.000000元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-17</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28731">OY1167817160519073880720</a></td>
                        <td class="ng-binding">111.00</td>
                        <td class="ng-binding">预充值111.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-16</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_print.modal.html','lg',item)"><i class="icon-printer"></i> 打印收据</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_refund.modal.html','md',item)"><i class="fa fa-reply"></i> 办理退款</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">预充值
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28728">OY1167817160506072136605</a></td>
                        <td class="ng-binding">122.00</td>
                        <td class="ng-binding">预充值122.00元
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-16</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-success">已付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_now.modal.html','md',item)"><i class="icon-wallet"></i> 现场缴费</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <li ng-if="item.pay_status < 2" class="ng-scope"><a ng-click="$util.open('tpl/app/student/order/pay_reg.modal.html','md',item)"><i class="icon-note"></i> 缴费登记</a></li>
                                    <!-- end ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <li ng-if="item.pay_status == '0'" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_edit.modal.html','md',item)"><i class="fa fa-edit"></i> 修改订单</a></li>
                                    <!-- end ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">班课
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28718">OB1167817160510050719513</a></td>
                        <td class="ng-binding">44.00</td>
                        <td class="ng-binding">班课[11]2次
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-16</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-danger">未付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_print.modal.html','lg',item)"><i class="icon-printer"></i> 打印收据</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_refund.modal.html','md',item)"><i class="fa fa-reply"></i> 办理退款</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">班课
                            <!-- ngIf: item.is_renew == '1' --><span class="label bg-info ng-scope" ng-if="item.is_renew == '1'">续报</span>
                            <!-- end ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28479">OB1167817130502042611809</a></td>
                        <td class="ng-binding">0.00</td>
                        <td class="ng-binding">班课[11]1次
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-13</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-success">已付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_print.modal.html','lg',item)"><i class="icon-printer"></i> 打印收据</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_refund.modal.html','md',item)"><i class="fa fa-reply"></i> 办理退款</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">班课
                            <!-- ngIf: item.is_renew == '1' --><span class="label bg-info ng-scope" ng-if="item.is_renew == '1'">续报</span>
                            <!-- end ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28478">OB1167817130555041543344</a></td>
                        <td class="ng-binding">0.00</td>
                        <td class="ng-binding">班课[11]1次
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-13</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-success">已付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <!-- ngIf: !loading -->
                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                        <td>
                            <div class="btn-group dropdown" dropdown="">
                                <button class="btn btn-xs btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> 操作 <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status < 2 -->
                                    <!-- ngIf: item.pay_status == '0' -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_print.modal.html','lg',item)"><i class="icon-printer"></i> 打印收据</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <!-- ngIf: item.pay_status > 0 -->
                                    <li ng-if="item.pay_status > 0" class="ng-scope"><a ng-click="$util.open('tpl/app/lesson/order/order_refund.modal.html','md',item)"><i class="fa fa-reply"></i> 办理退款</a></li>
                                    <!-- end ngIf: item.pay_status > 0 -->
                                    <li><a ng-click="$util.open('tpl/app/lesson/order/order_delete.modal.html','md',item)"><i class="fa fa-times"></i> 删除订单</a></li>
                                </ul>
                            </div>
                        </td>
                        <td class="ng-binding">zzzsz</td>
                        <td class="ng-binding">班课
                            <!-- ngIf: item.is_renew == '1' -->
                        </td>
                        <td><a class="link ng-binding" ui-sref="lesson.order({oso_id:item.oso_id})" href="#/lesson/order/28476">OB1167817130552041102513</a></td>
                        <td class="ng-binding">44.00</td>
                        <td class="ng-binding">班课[11]2次
                            <!-- ngIf: item.order_amount == 0 && item.balance_times > 0 -->
                        </td>
                        <td class="ng-binding">2017-05-13</td>
                        <td><span ng-bind-html="item.pay_status|pay_status" class="ng-binding"><span class="badge bg-success">已付款</span></span>
                            <!-- ngIf: item.pay_status == '1' -->
                            <!-- ngIf: item.refund_status > 0 -->
                        </td>
                        <td class="ng-binding"></td>
                    </tr>
                    <!-- end ngIf: !loading -->
                    <!-- end ngRepeat: item in grid.data -->
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-right">金额小计:</td>
                        <td xo-data-count="grid.data" xo-data-field="order_amount" class="ng-isolate-scope"><span class="ng-binding">2112</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="grid-data-result">
                <!-- ngIf: loading -->
                <!-- ngIf: !loading && grid.data.length==0 -->
            </div>
        </div>
        <!--table-responsive-->
        <div class="panel-footer">
            <div class="row">
                <div class="col-sm-4 col-xs-12"></div>
                <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 16 条记录">共 16 条记录</small></div>
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
        <!--panel footer-->
    </div>
</template>
<script>
export default {
    name: 'orders',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_lesson_type': ''
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
