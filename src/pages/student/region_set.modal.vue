<template>
    <div class="modal-dialog modal-sm" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="wrapper ng-scope" page-controller="region_set">
                <p class="ng-binding">请选择学员 录好 的归属</p>
                <div class="w-sm">
                    <select class="form-control ng-untouched ng-valid ng-dirty ng-valid-parse" ui-jq="chosen" ng-model="region_oe_id" ng-options="item.oe_id as item.name for (key,item) in $gv.employees" style="display: none;">
                        <option value="" class="">没有归属</option>
                        <option value="12494">陈佳木</option>
                    </select>
                    <div class="chosen-container chosen-container-single" style="width: 120px;" title="">
                        <a class="chosen-single" tabindex="-1">
                            <span>陈佳木</span>
                            <div>
                                <b></b>
                            </div>
                        </a>
                        <div class="chosen-drop">
                            <div class="chosen-search">
                                <input type="text" autocomplete="off">
                            </div>
                            <ul class="chosen-results">
                                <li class="active-result result-selected" data-option-array-index="0">没有归属</li>
                                <li class="active-result" data-option-array-index="1">陈佳木</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p class="m-t">
                    <button class="btn btn-primary" ng-disabled="saving" ng-click="do_ok()">确定</button>
                    <a class="btn btn-danger m-l-xs" ng-disabled="saving" ng-click="vm.dismiss()" @click="lbClosedialog($event)">取消</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'region_set.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>