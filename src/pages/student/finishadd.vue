<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="bg-white wrapper ng-scope">
                <div class="wrapper text-success text-2x ng-binding">
                    <i class="icon-check"></i>  张磊的档案录入成功! 
                </div>
                <div class="panel-footer">
                    <p class="text-info">
  您还可以继续对 
                        <span class="label bg-info ng-binding">张磊</span>  进行以下操作 
                    </p>
                    <div class="clear">
                        <a class="btn btn-default m-t" ng-click="$util.open('tpl/app/student/edit_photo.modal.html','lg',student)">设置图像</a>
                        <a class="btn btn-info m-t" ng-click="$util.open('tpl/app/student/order.modal.html','md',student)">报名</a>
                        <a class="btn btn-info m-t" ng-click="$util.open('tpl/app/student/add_track.modal.html','md',student)">登记咨询</a>
                        <a class="btn btn-success m-t pull-right" ng-click="reset_form();$dismiss()">关闭</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'finishadd',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>