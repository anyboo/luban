<template>
    <div class="wrapper">
        <div class="wrapper panel panel-default bg-white">
            <div class="row">
                <div class="col-xs-12 col-sm-7 col-md-8">
                    <div class="panel panel-default">
                        <div class="panel-heading">角色列表</div>
                        <ul class="list-group">
                            <template v-for="item in getTablesData()">
                                <li class="list-group-item">
                                    <label class="badge badge-sm bg-info pull-right" v-if="item.defrole">默认</label>
                                    <h4 class="list-group-item-head text-danger">{{item.name}}</h4>
                                    <p class="list-grpup-item-text text-muted">{{item.desc}}</p>
                                    <p class="list-group-item-text">
                                        <template v-if="getActionOptionDel">
                                            <a class="btn btn-xs btn-default ng-isolate-scope" tooltip-placement="top" tooltip="删除角色" confirm-text="确定要删除该角色吗?" @click="handleDelClick(item._id)">
                                                <i class="fa fa-times"></i>删除
                                            </a>
                                        </template>
                                        <template v-if="getActionOptionEdit">
                                            <a class="btn btn-xs btn-default" @click="handleEditClick(item)">编辑</a>
                                        </template>
                                        <template v-if="getActionOptionSet">
                                            <button class="btn btn-xs btn-default" @click="handleShowDialog('lb-authority',item)">权限设置</button>
                                        </template>
                                    </p>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-5 col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span ng-if="action!='edit'">{{modalsType==types.EDIT_API?'编辑':'添加'}}角色</span>
                            <template v-if="getActionOptionAdd">
                                <button class="btn btn-default btn-xs pull-right" @click="clearForm" v-if="modalsType==types.APPEND_API">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </template>
                        </div>
                        <div class="panel-body" v-if="getActionOptionSave">
                            <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-position="top" label-width="100px">
                                <el-form-item label="角色名称" prop="name">
                                    <el-input v-model.lazy="localdata.form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="角色描述" prop="desc">
                                    <el-input v-model.lazy="localdata.form.desc"></el-input>
                                </el-form-item>
                                <el-form-item label="默认角色">
                                    <el-switch v-model.lazy="localdata.form.defrole" on-text="" off-text="">
                                    </el-switch>
                                </el-form-item>
                                <template>
                                    <el-form-item label-width="100px">
                                        <el-button type="primary" @click="handleClick">保存</el-button>
                                        <el-button @click="clearForm">取消</el-button>
                                    </el-form-item>
                                </template>
                            </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'roles',
    data() {
        let localdata = {
            'form': {
                'og_id': '',
                'name': '',
                'desc': '',
                'authority': [],
                'defrole': false
            },
        }
        return {
            localdata,
            model: 'role',
            tables: ['role'],
            rules: {
                name: [
                    { required: true, message: '请输入角色名称', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    computed: {
        getActionOptionSave() {
            return this.getActionOption('systemrolessave')
        },
        getActionOptionAdd() {
            return this.getActionOption('systemrolesroles')
        },
        getActionOptionDel() {
            return this.getActionOption('systemrolesdelete')
        },
        getActionOptionEdit() {
            return this.getActionOption('systemrolesedit')
        },
        getActionOptionSet() {
            return this.getActionOption('systemrolesset')
        }
    },
    watch: {},
    methods: {
        clearForm() {
            this.localdata.form = {
                'og_id': '',
                'name': '',
                'desc': '',
                'defrole': false,
                'authority': []
            }
            this.$refs['ruleForm'].resetFields()
            this.modalsType = this.types.APPEND_API
        },
        handleEditClick(item) {
            this.setEditModle(item._id)
            this.localdata.form = this.lodash.assign(this.localdata.form, item)
        },
        handleDelClick(id) {
            this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleDelete(id).then(() => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.handleGetTable()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
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
                } else {
                    return false;
                }
            })
        }
    }
}
</script>
