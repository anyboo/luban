<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        老师
                        <span class="label bg-info ng-binding">张英乙</span>的排课记录
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="table-responsive m-t">
                        <lb-table :data="getTableData" stripe>
                            <lb-table-column prop="data" label="日期">
                                <template scope="scope"></template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="上课时间">
                                <template scope="scope"></template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="上课对象">
                                <template scope="scope"></template>
                            </lb-table-column>
                        </lb-table>
                        <div style="height:400px;position: relative" ui-jq="perfectScrollbar" class="ps-container ps-theme-default" data-ps-id="5c7c4b02-343c-b4cc-fa5f-2b3c97329446">
                            <lb-table :data="getTableData" stripe></lb-table>
                            <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                                <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                            </div>
                            <div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                                <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'teacher_arranges.modal',
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