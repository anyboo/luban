<template>
    <div>
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude="">
                <div page-controller="edit_items" class="ng-scope">
                    <div class="modal-header">
                        <button type="button" ng-click="$dismiss()" class="close"><span>×</span><span class="sr-only">关闭</span></button>
                        <h3 class="modal-title">字典<span class="label bg-info ng-binding">联系人关系</span>的字典项目</h3></div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <td width="50">ID</td>
                                        <td>内容</td>
                                        <td width="80">排序</td>
                                        <td><a class="m-l btn btn-info btn-xs" ng-click="add_dict_item()" ng-disabled="have_new_item" @click="handleClick"><i class="fa fa-plus"></i> 新增</a></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(item, index) in getTablesData()">
                                        <tr ng-repeat="item in dict_item_rest.$list" class="ng-scope">
                                            <td class="ng-binding">{{index}}</td>
                                            <td>
                                                <input type="text" name="lb_item" class="form-control input-sm ng-pristine ng-untouched ng-valid" v-model="item.lb_item_text">
                                            </td>
                                            <td>
                                                <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" v-model="item.lb_item_sort">
                                                
                                            </td>
                                            <td><a class="btn btn-xs btn-primary" @click="handleEditClick(item)">保存</a>
                                                <a class="btn btn-xs btn-danger" @click="handleDelClick(item._id)">>删除</a></td>
                                        </tr>
                                    </template>
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
    </div>
</template>
<script>
export default {
    name: 'dict_items',
    data() {
        let lb_localdata = {
            'form': {
                'text': '',
                'sort': '100'
            }
        }
        return {
            lb_localdata,
            model: 'dictionary',
            lb_tables: ['dictionary'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        clearForm() {
            this.lb_localdata.form = {
                'text': '',
                'sort': '100'
            }
            this.modalsType = this.types.APPEND_API
        },
        handleEditClick(item) {
            this.setEditModle(item._id)
            this.lb_localdata.form = this.lodash.assign(this.lb_localdata.form, item)
            this.handleClick()
        },
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.clearForm()
                this.handleGetTable()
            }, (e) => {
                console.log(e)
            })
        },
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.handleGetTable()
            })
        }
    }
}
</script>
