<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
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
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <td width="50">ID</td>
                                    <td>内容</td>
                                    <td width="80">排序</td>
                                    <td>
                                        <a class="m-l btn btn-info btn-xs" ng-click="add_dict_item()" ng-disabled="have_new_item">
                                            <i class="fa fa-plus"></i>新增
                                        </a>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">1</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_text">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_sort">
                                    </td>
                                    <td>
                                        <a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a>
                                        <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a>
                                    </td>
                                </tr>
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">2</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_text">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_sort">
                                    </td>
                                    <td>
                                        <a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a>
                                        <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a>
                                    </td>
                                </tr>
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">3</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_text">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_sort">
                                    </td>
                                    <td>
                                        <a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a>
                                        <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a>
                                    </td>
                                </tr>
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">4</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_text">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_sort">
                                    </td>
                                    <td>
                                        <a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a>
                                        <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a>
                                    </td>
                                </tr>
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">5</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_text">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_sort">
                                    </td>
                                    <td>
                                        <a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a>
                                        <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a>
                                    </td>
                                </tr>
                                <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                    <td class="ng-binding">10</td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_text">
                                    </td>
                                    <td>
                                        <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-change="item.$$dirty = true" ng-readonly="item.og_id == '0'" readonly="readonly" v-model="lb_localdata.form.lb_item_sort">
                                    </td>
                                    <td>
                                        <a class="btn btn-xs btn-primary" ng-disabled="!item.$$dirty || saving" ng-click="save_dict_item(item)" disabled="disabled">保存</a>
                                        <a class="btn btn-xs btn-danger" ng-click="del_dict_item(item,$index)" ng-disabled="item.og_id == '0' || saving" disabled="disabled">删除</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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