<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="sms_send" class="ng-scope">
                <div class="modal-header">
                    <button ng-click="$dismiss()" class="close" type="button" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-comments"></i>短信发送
                        <span class="label bg-danger ng-binding">剩余条数:10</span>
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder">1.选择接收对象</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder">2.编写短信内容</h4>
                        </div>
                    </div>
                    <div class="m-t ng-scope" ng-if="step==1">
                        <lb-buttongroup :group-data="localdata.lb_send_to_type" v-model="localdata.form.lb_send_to_type"></lb-buttongroup>
                        <div class="m-t ng-scope" ng-if="send.to_type == 0">
                            <ul class="list-group"></ul>
                            <div class="wrapper ng-scope" ng-if="class_rest.$loaded && class_rest.$list.length == 0">
                                <p class="text-center text-muted">没有班级!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer text-center">
                    <a ng-show="step > 1" class="btn btn-link ng-hide" ng-click="go_step(1)">返回</a>
                    <button class="btn btn-primary" ng-show="step == 1" ng-disabled="not_select_object()" ng-click="go_step(2)" disabled="disabled">下一步</button>
                    <button class="btn btn-primary ng-hide" ng-disabled="form1.$invalid || saving" ng-click="do_ok()" ng-hide="step == 1">确认发送</button>
                    <button class="btn btn-danger" ng-click="vm.dismiss()" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sms_send',
    data() {
        let localdata = {
            'lb_send_to_type': [{
                'value': '0',
                'text': '班级群发'
            }, {
                'value': '1',
                'text': '指定学员'
            }, {
                'value': '2',
                'text': '内部员工'
            }],
            'form': {
                'lb_send_to_type': ''
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