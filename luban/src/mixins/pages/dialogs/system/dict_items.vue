<template>
    <div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="ng-scope">
                    <div class="modal-header">
                        <button type="button" @click="lbClosedialog($event)" class="close"><span>×</span><span class="sr-only">关闭</span></button>
                        <h3 class="modal-title">字典<span class="label bg-info ng-binding">{{title}}</span>的字典项目</h3></div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr> 
                                        <td width="50">ID</td>
                                        <td>内容</td>
                                        <td width="80">排序</td>
                                        <td><a class="m-l btn btn-info btn-xs" @click="handleClick"><i class="fa fa-plus"></i> 新增</a></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(item, index) in getTablesData()">
                                        <tr class="ng-scope">
                                            <td class="ng-binding">{{index+1}}</td>
                                            <td>
                                                <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" v-model="item.text">
                                            </td>
                                            <td>
                                                <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" v-model="item.sort">
                                            </td>
                                            <td><a class="btn btn-xs btn-primary" @click="handleEditClick(item)">保存</a>
                                                <a class="btn btn-xs btn-danger" @click="handleDelClick(item._id)">删除</a></td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
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
        let localdata = {
            'form': {
                'text': '',
                'sort': '100',
                'type': '0'
            },
        }
        return {
            localdata,
            model: 'dictionary',
            tables: ['dictionary'],
            title: ''
        }
    },
    created() {
        this.localdata.form.type = this.$store.state.dialogs.dailogdata.type
        this.title = this.$store.state.dialogs.dailogdata.text
    },
    computed: {},
    watch: {},
    methods: {
        clearForm() {
            this.localdata.form = {
                'text': '',
                'sort': '100',
                'type': this.localdata.form.type
            }
            this.modalsType = this.types.APPEND_API
        },
        handleEditClick(item) {
            this.setEditModle(item._id)
            this.localdata.form = this.lodash.assign(this.localdata.form, item)
            this.handleClick()
        },
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.clearForm()
                this.handleSearch()
            }, (e) => {
            })
        },
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.handleSearch()
            })
        },
        handleSearch() {
            let filterObj = []
            filterObj.push({
                'key': 'type',
                'value': this.localdata.form.type,
                'type': ''
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
