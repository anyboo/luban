<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="bg-white wrapper ng-scope">
                <div class="wrapper text-success text-2x ng-binding">
                    <i class="icon-check"></i>张磊的档案录入成功!
                </div>
                <div class="panel-footer">
                    <p class="text-info">
                        您还可以继续对
                        <span class="label bg-info ng-binding">张磊</span>进行以下操作
                    </p>
                    <div class="clear">
                        <a ng-click="$util.open('tpl/app/student/edit_photo.modal.html','lg',student)" @click="lbShowdialog($event,'lb-editphotomodal')">设置图像</a>
                        <a ng-click="$util.open('tpl/app/student/order.modal.html','md',student)" @click="lbShowdialog($event,'lb-ordermodal')">报名</a>
                        <a ng-click="$util.open('tpl/app/student/add_track.modal.html','md',student)" @click="lbShowdialog($event,'lb-addtrackmodal')">登记咨询</a>
                        <a class="btn btn-success m-t pull-right" ng-click="reset_form();$dismiss()" @click="lbClosedialog($event)">关闭</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'feature.modal',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>