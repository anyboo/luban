<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag-checkered"></i>{{title}}视图</h3>
            </div>
            <div class="modal-body">
                <div>
                    <el-form ref="form" :model="localdata.form" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="表名称">
                            <el-input v-model.lazy="localdata.tablename" @change="changeTable"></el-input>
                        </el-form-item>
                        <template v-for="item in fields">
                            <el-form-item :label="item.name">
                                <el-input v-model="localdata.form[item.field]"></el-input>
                            </el-form-item>
                        </template>
                    </el-form>
                    <el-table :data="this.lbtabledata" stripe>
                        <el-table-column width="90" prop="data" label="操作">
                            <template scope="scope">
                                <span @click="handleEdit(scope.row)">编辑</span>
                                <span>删除</span>
                            </template>
                        </el-table-column>
                        <template v-for="item in fields">
                            <el-table-column width="90" prop="data" :label="item.name">
                                <template scope="scope">
                                    {{ scope.row[item.field] }}
                                </template>
                            </el-table-column>
                        </template>
                    </el-table>
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
            },
        }
        return {
            localdata,
            tablename: '',
            model: 'lbview',
            title: '创建',
            fields: [],
            lbtable: [],
            lbtabledata: []
        }
    },
    mounted() {
        this.getTableApidata('lbtable').then((obj) => {
            this.lbtable = obj.data.data
            console.log(obj.data.data)
        })
    },
    computed: {},
    watch: {},
    methods: {
        handleEdit(row) {
            this.title = '编辑'
            this.setEditModle(row._id)
            this.localdata.form = row
        },
        changeTable(val) {
            this.fields = []
            this.localdata.form = {
            }
            let findtable = false
            for (var item of this.lbtable) {
                if (item.tablename == val) {
                    this.fields.push(item)
                    findtable = true
                    this.localdata.form.field = item.field
                }
            }
            if (findtable) {
                this.model = val
                this.getTableApidata(val).then((obj) => {
                    this.lbtabledata = obj.data.data
                    console.log(obj.data.data)
                })
            }

        },
        handleClick() {
            console.log(this.localdata.form)
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
