<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="edit_items" class="ng-scope">
                <div class="modal-header">
                    <button type="button" ng-click="$dismiss()" class="close"><span>×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title">字典<span class="label bg-info ng-binding">收款方式</span>的字典项目</h3></div>
                <div class="modal-body">
                    <!-- ngIf: dict.od_id != 2 -->
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <td width="50">ID</td>
                                    <td>内容</td>
                                    <td width="80">排序</td>
                                    <td><a class="m-l btn btn-info btn-xs" ng-click="add_dict_item()" ng-disabled="have_new_item"><i class="fa fa-plus"></i> 新增</a></td>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- ngRepeat: item in dict_item_rest.$list -->
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">1</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.text" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.sort" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td><a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a> <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a></td>
                                </tr>
                                <!-- end ngRepeat: item in dict_item_rest.$list -->
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">2</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.text" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.sort" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td><a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a> <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a></td>
                                </tr>
                                <!-- end ngRepeat: item in dict_item_rest.$list -->
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">3</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.text" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.sort" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td><a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a> <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a></td>
                                </tr>
                                <!-- end ngRepeat: item in dict_item_rest.$list -->
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">4</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.text" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.sort" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td><a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a> <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a></td>
                                </tr>
                                <!-- end ngRepeat: item in dict_item_rest.$list -->
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">5</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.text" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.sort" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td><a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a> <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a></td>
                                </tr>
                                <!-- end ngRepeat: item in dict_item_rest.$list -->
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">10</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.text" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="item.sort" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly">
                                    </td>
                                    <td><a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a> <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a></td>
                                </tr>
                                <!-- end ngRepeat: item in dict_item_rest.$list -->
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button ng-click="$dismiss()" class="btn btn-warning">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dict_items',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
