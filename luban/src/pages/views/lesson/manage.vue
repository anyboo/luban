 <template>
    <div ui-view class="wrapper ">
        <div class="panel panel-default">
            <div class="row wrapper" :class="{result:getlessonchange}">
                <div class="col-xs-12 col-md-4">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <el-dropdown menu-align="start" @command="handleMenuCommand">
                                        <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                            {{localdata.search.search_value}}
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                        <el-dropdown-menu slot="dropdown" style="z-index:3000;">
                                            <template v-for="item in localdata.search.fields">
                                                <el-dropdown-item :command="item.name">{{item.value}}</el-dropdown-item>
                                            </template>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8">
                    <lb-buttongroup class="btn-group m-l"></lb-buttongroup>
                    <button class="btn btn-default pull-right" @click="lbShowdialog($event,'lb-cate')">
                        <i class="fa fa-list"></i>课程分类
                    </button>
                    <button class="btn btn-primary pull-right" @click="lbShowdialog($event,'lb-newlessonmodal')">
                        <i class="fa fa-plus"></i>添加课程
                    </button>
                </div>
            </div>
            <div class="table-responsive m-t m-t-t">
                <el-table :data="getTablesData()" stripe>
                    <el-table-column prop="data" label="操作" width="100">
                        <template scope="scope">
                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row" @command="handleCommand">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="localdata.dropDownMenu">
                                    <i class="fa fa-cog"></i>操作
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                    </el-table-column>
                    <el-table-column  prop="data" label="课程" width="250">
                        <template scope="scope">
                            <p>
                                <span class="label bg-danger">{{getButtongroupText(localdata.lesson_type,scope.row.lesson_type)}}</span>{{scope.row.lesson_name}}
                                <small class="label bg-info m-l">{{scope.row.lesson_no}}</small>
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="定价" width="180"> 
                        <template scope="scope">
                            <p>
                                课程单价:{{parseFloat(scope.row.unit_price).toFixed(2)}}元/次
                            </p>
                            <p>
                                <label>课程售价:</label>
                                <span class="label bg-info">{{parseFloat(scope.row.price).toFixed(2)}}</span>元
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="内容">
                        <template scope="scope">
                            <p>
                                <label>单次课时长:</label>
                                <span class="label bg-info">{{scope.row.unit_hours}}</span>时
                            </p>
                            <p>
                                <label>课程包含:</label>
                                <template v-if="scope.row.lesson_type=='0'&&scope.row.price_model=='0'">
                                    <span class="label bg-info">{{scope.row.inc_times}} </span>次
                                </template>
                                <span class="label bg-info">{{scope.row.inc_hours}}</span>课时
                            </p>
                        </template>
                    </el-table-column>
                </el-table>
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
    name: 'manage',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': ''
            },
            'dropDownMenu': [{
                'url': 'lb-newlessonmodal',
                'icon': 'fa fa-pencil',
                'text': '编辑'
            }, {
                'action': 'delete',
                'icon': 'fa fa-times',
                'text': '删除'
            }],
            'search': {
                'fields': [{
                    'name': 'lesson_name',
                    'value': '课程名'
                }, {
                    'name': 'lesson_no',
                    'value': '课程编号'
                }],
                'search_key': 'lesson_name',
                'search_value': '课程名'
            },
            'lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '2',
                'text': '课时包'
            }],
        }
        return {
            localdata,
            tables: ['course']
        }
    },
    computed: {
        getlessonchange() {
            if (this.$store.state.envs.currDialog == 'lb-lesson') {
                this.handleSearch()
            }
            return true
        }
    },
    watch: {},
    methods: {
        handleMenuCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.localdata.form.search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
        handleCommand({
            action,
            data
        }) {
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
        }
    }
}
</script>
