<template>
    <div class="modal-dialog modal-sm" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="set_odi" class="wrapper ng-scope">
                <!-- ngIf: vm.input.type == '0' -->
                <div ng-if="vm.input.type == '0'" class="ng-scope">
                    <p>支出分类</p>
                    <div class="w-sm">
                        <select class="form-control ng-pristine ng-untouched ng-valid" ui-jq="chosen" ng-model="info.odi_id" ng-options="item.odi_id as item.text for item in $gv.dicts[8]" style="display: none;">
                            <option value="" class="">请选择</option>
                            <option value="0" selected="selected">日常支出</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 120px;" title=""><a class="chosen-single" tabindex="-1"><span>日常支出</span><div><b></b></div></a>
                            <div class="chosen-drop">
                                <div class="chosen-search">
                                    <input type="text" autocomplete="off">
                                </div>
                                <ul class="chosen-results"></ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end ngIf: vm.input.type == '0' -->
                <!-- ngIf: vm.input.type == '1' -->
                <p class="m-t">
                    <button class="btn btn-primary" ng-disabled="saving" ng-click="do_ok()">
                        <!-- ngIf: saving -->确定</button>
                    <button class="btn btn-warning" ng-click="vm.dismiss()">关闭</button>
                </p>
            </div>
          
        </div>
    </div>
</template>
<script>
export default {
    name: 'set_odi.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
