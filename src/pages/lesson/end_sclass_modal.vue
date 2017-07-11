<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="end_sclass" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-calendar"></i>对 <span class="label bg-info ng-binding">玩儿翁若</span> 进行结课操作</h3></div>
                <div class="modal-body">
                    <div ng-if="in_end_process == 1" class="ng-scope">
                        <div class="alert alert-info">
                            <p>以下是本班级学员课时消耗情况.</p>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <td width="80">学员</td>
                                        <td width="80">分配课次</td>
                                        <td width="80">消耗课次</td>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" ng-hide="in_end_process == 0">
                    <button class="btn btn-primary" ng-disabled="saving" ng-click="do_ok()">
                        确定结课</button>
                    <button class="btn btn-warning"  @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'endSclass',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
