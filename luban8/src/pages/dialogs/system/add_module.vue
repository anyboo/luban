<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag-checkered"></i>{{title}}功能模块</h3>
            </div>
            <div class="modal-body">
                <el-form :model="localdata.form" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="localdata.form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="功能选择" prop="chargemodule">
                        <el-tree :data="authoritymenu" :default-checked-keys="rote.authority" show-checkbox ref="tree" node-key="id" :props="defaultProps" v-model="localdata.form.chargemodule">
                        </el-tree>
                    </el-form-item>
                    <el-form-item label="描述" prop="description">
                        <el-input v-model="localdata.form.description"></el-input>
                    </el-form-item>
                    <!--收费方式-->
                    <el-form :model="localdata.form" label-width="100px" ref="ruleForm">
                        <el-form-item prop="chargr_type" label="收费方式">
                              <span class="wrapper">
                                <a @click="localdata.form.relations.push({relation:'',priced:'',index:''})">
                                    <i class="fa fa-plus-square-o"></i>增加收费方式
                                </a>
                            </span>
                        </el-form-item>
                        <template v-for="(item,index) in localdata.form.relations">
                            <el-form-item>
                                <el-select v-model="item.relation" placeholder="方式" style="width:100px;">
                                    <el-option v-for="subitem in options" :key="subitem.label" :label="subitem.label" :value="subitem.label">
                                    </el-option>
                                </el-select>
                                 <lb-numberinput v-model="item.priced" style="width:100px;height:34px;"placeholder="价格"></lb-numberinput>
                                <a @click="localdata.form.relations.splice(index, 1)">
                                    <i class="fa fa-minus-square-o"></i>
                                </a>
                            </el-form-item>
                        </template>
                    </el-form>
                    <!--收费方式-->
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
                'chargemodule': '',
                'relations': [],
                'relationsIndex':0,
                'priced':0
               
            }
        }
        return {
            localdata,
            model: 'charge',
            priced:'',
            title: '创建',
             rote: {},
            options: [{
                value: '0',
                label: '1月'
            }, {
                value: '1',
                label: '3月'
            }, {
                value: '2',
                label: '6月'
            }, {
                value: '3',
                label: '12月'
            }],
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
                description:[
                    { required: true, message: '请输入描述内容', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
                // chargemodule:[
                //     { required: true, message: '请输入至少一个以上', trigger: 'blur' },
                //     { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                // ],
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
        },
        gettype() {
            let options = []
            for (var i = 0; i < options.length; i++) {
                var relationes = options[i]
                return relationes
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
    watch: {},
    methods: {
        handleClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.handleSave().then(() => {
                        this.$message({
                            message: '操作成功',
                            type: 'success',
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
        },
        getCheckedNodes() {
            let auth = this.$refs.tree.getCheckedNodes()
            for (var i = 0; i < auth.length; i++) {
                var stud = auth[i].label
                console.log(stud)
            }
        },
    
    }
}
</script>
