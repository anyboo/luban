<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div page-controller="branch_add" >
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="icon-plus"></i> {{title}}新校区</h3></div>
                <div class="modal-body">
                     <el-form :model="localdata.form" :rules="rules" label-width="95px" ref="ruleForm">
                            <el-form-item label="校区名" prop="branch_name">
                                <el-input v-model="localdata.form.branch_name"></el-input>
                            </el-form-item>
                            <el-form-item label="校区简称" prop="short_name">
                                <el-input v-model="localdata.form.short_name"></el-input>
                            </el-form-item>
                            <el-form-item label="联系电话" prop="branch_tel">
                                <el-input v-model="localdata.form.branch_tel"></el-input>
                            </el-form-item>
                            <el-form-item label="所在地区" prop="group_name">
                                <el-input v-model="localdata.form.group_name"></el-input>
                            </el-form-item>
                              <el-form-item label="详细地址" prop="address">
                                <el-input v-model="localdata.form.branch_address"></el-input>
                            </el-form-item>
                        </el-form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" @click="handleClick">
                        确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add_modal',
    data() {
        let localdata = {
            'form': {
                'group_name': '',
                'branch_name': '',
                'short_name': '',
                'branch_tel': '',
                'city': '',
                'branch_address': ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'branch_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    }
                }
            },
        }
        return {
            localdata,
            model: 'campus',
            title: '创建',
             rules: {
                branch_name: [
                    { required: true, message: '请输入校区名', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
    },
    computed: {
        getreeData() {
            let cateData = this.$store.state.models.models.cate.data
            let treeData = []
            let treemap = {}
            for (var item of cateData) {
                treemap[item._id] = {
                    value: item._id, 
                    label: item.name
                }
            }
            for (var subitem of cateData) {
                if (subitem.pid == '') {
                    treeData.push(treemap[subitem._id])
                } else {
                    if (typeof treemap[subitem.pid] == 'object') {
                        if (typeof treemap[subitem.pid].children !== 'object') {
                            treemap[subitem.pid].children = []
                        }
                        treemap[subitem.pid].children.push(treemap[subitem._id])
                    }
                }
            }
            return treeData
        }
    },
    watch: {},
    methods: {
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
            })
                }
             })
        }
    }
}
</script>
