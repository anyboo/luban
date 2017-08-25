<template>
    <div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div>
                    <div class="modal-header">
                        <button type="button" @click="handleDictSave(true)" class="close">
                            <span>×</span>
                            <span class="sr-only">关闭</span>
                        </button>
                        <h3 class="modal-title">字典
                            <span class="label bg-info">{{title}}</span>的字典项目</h3>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <td width="50">ID</td>
                                        <td>内容</td>
                                        <td width="60">排序</td>
                                        <td width="60">默认</td>
                                        <td width="100">
                                            <a class="m-l btn btn-info btn-xs" @click="handleDictSave(false)">
                                                <i class="fa fa-plus"></i> 新增</a>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(item, index) in dictionary">
                                        <tr>
                                            <td>{{index+1}}</td>
                                            <td>
                                                <input type="text" class="form-control input-sm" v-model.lazy="item.text" @change="item.change=true">
                                            </td>
                                            <td>
                                                <input type="number" class="form-control input-sm" v-model.lazy="item.sort" @change="item.change=true">
                                            </td>
                                            <td>
                                                <el-switch v-model="item.defvalue" style="" on-text="" off-text="" @change="item.change=true">
                                                </el-switch>
                                            </td>
                                            <td>
                                                <a :disabled="item.text.length>0&&!item.change" class="btn btn-xs btn-primary" @click="handleEditClick(item)">保存</a>
                                                <a class="btn btn-xs btn-danger" @click="handleDelClick(item._id)">删除</a>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" @click="handleDictSave(true)">关闭</button>
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
                'text': '默认',
                'sort': '100',
                'type': '0',
                'defvalue': false
            },
        }
        return {
            localdata,
            model: 'dictionary',
            tables: ['dictionary'],
            title: '',
            dictionary: []
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
                'text': '默认',
                'sort': '100',
                'type': this.localdata.form.type,
                'defvalue': false
            }
            this.modalsType = this.types.APPEND_API
        },
        handleEditClick(item) {
            this.setEditModle(item._id)
            this.localdata.form = this.lodash.assign(this.localdata.form, item)
            this.localdata.form.change = false
            this.handleDictSaveOpt()
        },
        handleDictSaveOpt() {
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
        handleopt(close) {
            if (close) {
                this.lbClosedialog()
            } else {
                this.handleDictSaveOpt()
            }
        },
        handleDictSave(close) {
            let save = false
            let confirm = false
            let find = this.lodash.find(this.dictionary, { change: true })
            if (find) {
                this.$confirm('数据有变动是否保存?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.dictionary.forEach((element)=> {
                        element.change = false
                    })
                    this.mx_db_bulkwrite('dictionary',this.dictionary).then(response => {
                        console.log(response)
                        this.handleopt(close)
                    })
                }).catch(() => {
                    this.handleopt(close)
                })
            } else {
                this.handleopt(close)
            }
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
                'type': '',
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then(obj => {
                this.dictionary = obj.data.data
            })
        }
    }
}
</script>
