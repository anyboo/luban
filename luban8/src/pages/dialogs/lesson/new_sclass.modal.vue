<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag-checkered"></i>{{title}}表单</h3>
            </div>
            <div class="modal-body">
                <div>
                    <el-form ref="form" :model="localdata.form" label-width="80px">
                        <el-form-item label="表单">
                            <el-input v-model="localdata.form.tabelname"></el-input>
                        </el-form-item>
                        <el-form-item label="表单名称">
                            <el-input v-model="localdata.form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="表单字段">
                            <el-input v-model="localdata.form.field"></el-input>
                        </el-form-item>
                        <el-form-item label="默认值">
                            <el-input v-model="localdata.form.defalvue"></el-input>
                        </el-form-item>
                        <el-form-item label="添加类型">
                            <el-select v-model="localdata.form.addtype" placeholder="请选择类型">
                                <el-option label="text" value="text"></el-option>
                                <el-option label="input" value="input"></el-option>
                                <el-option label="numberinput" value="numberinput"></el-option>
                                <el-option label="password" value="password"></el-option>
                                <el-option label="hidden" value="hidden"></el-option>
                                <el-option label="checkbox" value="checkbox"></el-option>
                                <el-option label="switch" value="switch"></el-option>
                                <el-option label="radio" value="radio"></el-option>
                                <el-option label="textarea" value="textarea"></el-option>
                                <el-option label="date" value="date"></el-option>
                                <el-option label="time" value="time"></el-option>
                                <el-option label="datetime" value="datetime"></el-option>
                                <el-option label="keyinput" value="keyinput"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="编辑类型">
                            <el-select v-model="localdata.form.edittype" placeholder="请选择类型">
                                <el-option label="text" value="text"></el-option>
                                <el-option label="input" value="input"></el-option>
                                <el-option label="numberinput" value="numberinput"></el-option>
                                <el-option label="password" value="password"></el-option>
                                <el-option label="hidden" value="hidden"></el-option>
                                <el-option label="checkbox" value="checkbox"></el-option>
                                <el-option label="switch" value="switch"></el-option>
                                <el-option label="radio" value="radio"></el-option>
                                <el-option label="textarea" value="textarea"></el-option>
                                <el-option label="date" value="date"></el-option>
                                <el-option label="time" value="time"></el-option>
                                <el-option label="datetime" value="datetime"></el-option>
                                <el-option label="keyinput" value="keyinput"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="列表类型">
                            <el-select v-model="localdata.form.listtype" placeholder="请选择类型">
                                <el-option label="text" value="text"></el-option>
                                <el-option label="input" value="input"></el-option>
                                <el-option label="numberinput" value="numberinput"></el-option>
                                <el-option label="password" value="password"></el-option>
                                <el-option label="hidden" value="hidden"></el-option>
                                <el-option label="checkbox" value="checkbox"></el-option>
                                <el-option label="switch" value="switch"></el-option>
                                <el-option label="radio" value="radio"></el-option>
                                <el-option label="textarea" value="textarea"></el-option>
                                <el-option label="date" value="date"></el-option>
                                <el-option label="time" value="time"></el-option>
                                <el-option label="datetime" value="datetime"></el-option>
                                <el-option label="keyinput" value="keyinput"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="关联表单">
                            <el-input v-model="localdata.form.linktabel"></el-input>
                        </el-form-item>
                        <el-form-item label="关联字段">
                            <el-input v-model="localdata.form.linkfield"></el-input>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="localdata.form.desc"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleClick">确定</button>
                <button class="btn btn-warning m-l-xs" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newsclass',
    data() {
        let localdata = {
            'form': {
                tabelname: '',
                name: '',
                field: '',
                linkfield: '',
                linktable: '',
                defvalue: false,
                addtype: '',
                edittype: '',
                listtype: '',
                resource: '',
                desc: ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'class_name': {
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
            model: 'lbtable',
            title: '创建',
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
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-newsclass'
            })
        }
    }
}
</script>
