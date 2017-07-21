 <template>
    <div class="wrapper ">
        <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>机构基本信息</h4>
                    </div>
                    <div class="panel-body">
                        <el-form :model="localdata.form" :rules="rules" label-width="120px" ref="ruleForm">
                            <el-form-item label="机构全称:" prop="name">
                                <el-input v-model="localdata.form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="机构简称:" prop="short_name">
                                <el-input v-model="localdata.form.short_name"></el-input>
                            </el-form-item>
                            <el-form-item label="机构联系电话:" prop="tel">
                                <el-input v-model="localdata.form.tel"></el-input>
                            </el-form-item>
                            <el-form-item label="详细地址:" prop="address">
                                <el-input v-model="localdata.form.address"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="panel-footer" :class="getData">
                        <template v-if="getActionOption('systememorgsave')">
                            <button type="button" class="btn btn-primary" @click="rest_save()">保存</button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default ng-scope">
            <div class="panel-heading ">
                <template v-if="getActionOption('systememorgsavestudent')">
                    <a class="btn btn-sm btn-primary pull-right heights" @click="handleShowDialog('lb-addmodal')">
                        <i class="fa fa-plus"></i> 添加新校区</a>
                    <h4 class="manages">校区管理</h4>
                </template>
            </div>
            <div class="panel-body no-padder">
                <div class="table-responsive">
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column width="100" prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="scope.row" @command="handleCommand">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="getMenuOption">
                                        <i class="fa fa-cog"></i>操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="校区简称">
                            <template scope="scope">{{ scope.row.short_name }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="校区全称">
                            <template scope="scope">{{ scope.row.branch_name }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="所在地区">
                            <template scope="scope">{{ scope.row.short_name }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="地址">
                            <template scope="scope">{{scope.row.branch_address}}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="联系电话">
                            <template scope="scope">{{ scope.row.branch_tel }}</template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="panel-footer ">
                <div class="row ">
                    <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'groups',
    data() {
        let localdata = {
            'form': {
                'name': '',
                'short_name': '',
                'tel': '',
                'address': ''
            },
        }
        return {
            localdata,
            tables: ['campus'],
            model: 'org',
            rules: {
                name: [
                    { required: true, message: '请输入机构全称', trigger: 'blur' },
                    { min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        this.getTableApidata('org')
    },
    computed: {
        getData() {
            let org = this.$store.state.models.models.org.data
            if (org.length > 0) {
                this.localdata.form = org[0]
            }
            return true
        },
    },
    methods: {
        rest_save() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    if (this.localdata.form._id && this.localdata.form._id.length > 0) {
                        this.setEditModle(this.localdata.form._id)
                    }
                    this.handleSave().then((required) => {
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        })
                        this.getTableApidata('org')
                    }, () => {

                    })
                }
            })
        },
        handleCommand({ action, data }) {
            if (action == 'delete') {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.handleDelete(data._id).then(() => {
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
            }
        },


    }
}
</script>
