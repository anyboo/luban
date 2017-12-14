 <template>
    <div class="panel panel-default">
        <div class="panel-heading">
            机构基本信息
        </div>
        <div class="panel-body">
            <el-form :model="localdata.form" :rules="rules" label-width="120px" ref="ruleForm">
                <el-form-item label="机构全称" prop="name">
                    <el-input v-model="localdata.form.name"></el-input>
                </el-form-item>
                <el-form-item label="机构简称" prop="short_name">
                    <el-input v-model="localdata.form.short_name"></el-input>
                </el-form-item>
                <el-form-item label="机构联系电话" prop="tel">
                    <el-input v-model="localdata.form.tel"></el-input>
                </el-form-item>
                <el-form-item label="详细地址" prop="address">
                    <el-input v-model="localdata.form.address"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="panel-footer" :class="getData" style='text-align:center'>
            <template v-if="getActionOption('systememorgsave')">
                <button type="button" class="btn btn-primary" @click="rest_save()">保存</button>
            </template>
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
                short_name: [
                    { required: true, message: '请输入机构简称', trigger: 'blur' },
                    { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        let filterObj = []
        filterObj.push({
            'key': '_id',
            'value': this.$store.state.system.org_id,
            'type': ''
        })
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        Vue.http.get('http://api.luban8.cn:8888/luban8/api/org?filter=' + filterTxt).then(obj => {
            if (obj.data.count > 0) {
                this.localdata.form = obj.data.data[0]
            } else {
            }
        }).catch(() => {
        })
    },
    methods: {
        rest_save() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    Vue.http.put('http://api.luban8.cn:8888/luban8/api/org/' + this.$store.state.system.org_id, this.localdata.form).then(obj => {
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        })
                    }).catch(() => {
                    })
                }
            })
        }
    }
}
</script>
