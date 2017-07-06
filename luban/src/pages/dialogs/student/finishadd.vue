<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="bg-white wrapper ng-scope">
                <div class="wrapper text-success text-2x ng-binding">
                    <i class="icon-check"></i>{{getStudentName()}}的档案录入成功!
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                </div>
    
                <div class="panel-footer">
                    <p class="text-info">
                        您还可以继续对
                        <span class="label bg-info ng-binding">{{getStudentName()}}</span>进行以下操作
                    </p>
                    <br>
                    <div class="clears">
                        <a @click="handleShowDialog('lb-ordermodal',$store.state.envs.currStudent)" class="btn btn-info" style="position:relative;top:0px;">报名</a>
                        <a @click="handleShowDialog('lb-addtrackmodal',$store.state.envs.currStudent)" class="btn btn-info">登记咨询</a>
                        <a class="btn btn-success m-t pull-right closed" @click="lbClosedialog($event)">关闭</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.panel-footer .btn {
    margin-left: 0% !important;
    margin-top: 0px !important;
}
</style>
<script>
export default {
    name: 'finishadd',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.$store.state.envs.currStudent = this.$store.state.dialogs.dailogdata
        }
    }
}
</script>