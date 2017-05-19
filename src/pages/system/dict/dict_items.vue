<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="edit_items" class="ng-scope">
                <div class="modal-header">
                    <button type="button" ng-click="$dismiss()" class="close" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        字典
                        <span class="label bg-info ng-binding">收款方式</span>的字典项目
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <lb-table :data="getTableData" stripe>
                            <lb-table-column width="50" prop="data" label="ID">
                                <template scope="scope">1</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="内容">
                                <template scope="scope">
                                    <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_text">
                                </template>
                            </lb-table-column>
                            <lb-table-column width="80" prop="data" label="排序">
                                <template scope="scope">
                                    <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_sort">
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label>
                                <template scope="scope">
                                    <a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a>
                                    <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a>
                                </template>
                            </lb-table-column>
                        </lb-table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button ng-click="$dismiss()" class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dict_items',
    data() {
        let lb_localdata = {
            'form': {
                'lb_item_text': '',
                'lb_item_sort': ''
            }
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