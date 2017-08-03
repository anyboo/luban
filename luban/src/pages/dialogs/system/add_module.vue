<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag-checkered"></i>创建功能模块</h3>
            </div>
            <div class="modal-body">
                <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="localdata.form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="功能选择">
                        <el-tree :data="authoritymenu" :default-checked-keys="rote.authority" show-checkbox ref="tree" node-key="id" :props="defaultProps"
                        v-model="localdata.form.chargemodule">
                        </el-tree>
                    </el-form-item>
                     <el-form-item label="收费方式" prop="class_name">
                        <el-input v-model="localdata.form.class_name"></el-input>
                    </el-form-item>
                     <el-form-item label="描述" prop="description">
                        <el-input v-model="localdata.form.description"></el-input>
                    </el-form-item>
                    
                </el-form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleClick">确定</button>
                <button class="btn btn-warning m-l-xs" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
import menus from '~/stores/menu'
export default {
    name: 'addmodule',
    data() {
        let localdata = {
            'form': {
                'name': '',
                'description': '',
                'chargemodule':''
            }
        }
        return {
            localdata, 
            model: 'charge',
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            rote: {},
            rules: {
                name: [
                    { required: true, message: '请输入模块名称', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
            }
        }
    },
   computed: {
        authoritymenu() {
            let treedata = []
            let menudata = {}
            menudata.id = 'menu'
            menudata.label = '功能模块'
            menudata.children = []
            treedata.push(menudata)
            this.gettreedata(menudata.children, menus)
            return treedata
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
                        this.lbClosedialog()
                        this.$store.state.envs.currDialog = 'lb-addmodule'
                    }, (e) => {
                        console.log(e)
                    })
                } else {
                    return false;
                }
            })
        },
        gettreedata(menudata, menus) {
            if (menus) {
                menus.forEach((element) => {
                    if (element.menuShow != 0) {
                        let obj = {}
                        obj.id = element.to
                        obj.label = element.menuTitle
                        obj.children = []
                        this.gettreedata(obj.children, element.menu)
                        menudata.push(obj)
                    }
                })
            }
        }
    }
}
</script>
