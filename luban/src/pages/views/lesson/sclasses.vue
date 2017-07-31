<template>
    <div ui-view class="wrapper">
        <div class="wrapper-xs">
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="padder">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <el-dropdown menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button class="btn btn-default btn-sm   ng-touched">
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
                                    <input type="text" class="input-sm form-control" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <div class="inline w-md m-l-xs" ng-if="teacher_rest">
                        </div>
                        <template v-if="getActionOption('lessonsclasses')">
                            <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                                <i class="fa fa-plus"></i>新建教室
                            </a>
                        </template>
                    </div>
                </div>
                <div class="table-responsive m-t m-t-t" style="min-height:400px" :class='{result:changeTeacher}'>
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column width="80" prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="scope.row" @command="handleCommand">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" :drop-menu-data="getMenuOption" class="btn btn-info btn-xs">
                                        <i class="fa fa-cog"></i>操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="教室名称">
                            <template scope="scope">{{ scope.row.class_name }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="最大人数">
                            <template scope="scope">{{ scope.row.max_student_num }}</template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sclasses',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': ''
            },
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '教室名'
                }],
                'search_key': 'class_name',
                'search_value': '教室名'
            },
            'sclesseslookup': {
                'localField': '_id',
                'from': 'arrange',
                'foreignField': 'sclasses_id',
                'as': 'sclesses'
            }
        }
        return {
            localdata,
            tables: ['sclasses'],
        }
    },
    computed: {
        changeTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-newsclass') {
                this.handleSearch()
            }
            return result
        },
    },
    watch: {},
    methods: {
        handleCommand(value) {
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
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.sclesseslookup,
                'type': 'lookup'
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then((obj) => {
                console.log(obj)
            })
        },
        handleCommand({
            action,
            data
        }) {
            if (action == 'delete') {
                if (data.sclesses.length > 0) {
                    this.$message({
                        type: 'info',
                        message: '该教室已有排课，请先删除排课教室再进行此操作'
                    })
                } else {
                    this.$confirm('此操作将永久删除该教室, 是否继续?', '提示', {
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
}
</script>
