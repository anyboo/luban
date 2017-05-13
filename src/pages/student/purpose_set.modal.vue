<template>
    <div class="modal-dialog modal-sm" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="wrapper ng-scope" page-controller="purpose_set">
                <p class="ng-binding">请设置学员 III 的意向程度</p>
                <div class="w-sm">
                    <select class="form-control ng-untouched ng-valid ng-valid-required ng-dirty ng-valid-parse" ui-jq="chosen" ng-model="purpose" ng-options="item.odi_id as item.text for item in $gv.dicts[6]" required="" style="display: none;">
                        <option value="" class="">请选择</option>
                        <option value="0">没有意向</option>
                        <option value="1">初步意向</option>
                        <option value="2">意向强烈</option>
                    </select>
                    <div class="chosen-container chosen-container-single" style="width: 120px;" title=""><a class="chosen-single" tabindex="-1"><span>没有意向</span><div><b></b></div></a>
                        <div class="chosen-drop">
                            <div class="chosen-search">
                                <input type="text" autocomplete="off">
                            </div>
                            <ul class="chosen-results">
                                <li class="active-result" data-option-array-index="0">请选择</li>
                                <li class="active-result result-selected" data-option-array-index="1">没有意向</li>
                                <li class="active-result" data-option-array-index="2">初步意向</li>
                                <li class="active-result" data-option-array-index="3">意向强烈</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p class="m-t">
                    <button class="btn btn-primary" ng-disabled="saving" ng-click="do_ok()">
                        <!-- ngIf: saving -->确定</button> <a class="btn btn-danger m-l-xs" ng-disabled="saving" ng-click="vm.dismiss()">取消</a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'purpose_set.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
