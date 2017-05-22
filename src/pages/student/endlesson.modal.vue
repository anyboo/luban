<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="endlesson" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>学员
                        <span class="label bg-info ng-binding">威锋</span>结课
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter step2" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==1}">
                            <h4 class="padder">1.选择已报课程</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==2}">
                            <h4 class="padder">2.办理结课</h4>
                        </div>
                    </div>
                    <div class="m-t ng-scope" ng-if="step==2">
                        <form name="form1" class="form-horizontal ng-pristine ng-valid">
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">结课课程:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <p class="form-control-static ng-binding">【1对1课】古典吉他初级</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">课程单价:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <p class="form-control-static ng-binding">100.00</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">报名次数:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <p class="form-control-static ng-binding">20</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">已耗课次:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <p class="form-control-static ng-binding">0</p>
                                </div>
                            </div>
                            <div class="form-group ng-scope" ng-if="lesson.unpay_amount > 0">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label text-danger">欠款:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <p class="form-control-static">
                                        <span class="label bg-danger ng-binding">￥2000.00</span>
                                    </p>
                                    <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                            欠费处理
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                    </lb-dropdown>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">剩余课次:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <p class="form-control-static ng-binding">20</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer" ng-hide="step == 1">
                    <a ng-show="step > 1" class="btn btn-link" ng-click="go_step(1)">返回</a>
                    <button class="btn btn-primary" ng-disabled="lesson.unpay_amount > 0 || saving" ng-click="do_ok()" disabled="disabled">确认结课</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'endlesson.modal',
    data() {
        let lb_localdata = {
            'dropDownMenu': [{
                'url': 'lb-ordersmodal',
                'icon': 'icon-plus',
                'text': '补交欠费'
            }, {
                'url': 'lb-orderunpayclearmodal',
                'icon': 'icon-ban',
                'text': '欠费清除'
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