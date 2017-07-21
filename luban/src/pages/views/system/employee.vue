<template>
    <div class="wrapper wrapper ">
        <div class="wrapper panel panel-default bg-white ng-scope">
            <div class="ng-scope">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-4">
                        <div class="padder">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <el-dropdown menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                {{localdata.search.search_value}}
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <el-dropdown-menu slot="dropdown">
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
                    <div class="col-xs-12 col-md-8" :class="{result:refreshData}">
                        <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status" @input="handleSearch"></lb-buttongroup>
                        <template v-if="getActionOption('systememployeeadd')">
                        <button @click="lbShowdialog($event,'lb-employeeaddmodal')" class="btn btn-primary pull-right">
                            <i class="fa fa-plus"></i>添加
                        </button>
                         </template>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="row list-employee ">
                        <template v-for="item in getTablesData()">
                            <div class="col-xs-12 col-md-6 ng-scope">
                                <div class="bg-white wrapper b-a m-t box-shadow">
                                    <div class="meida">
                                        <div class="media-left">
                                            <div class="w-xs ng-scope" ng-if="!item.avatar">
                                                <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px; ">
                                                    <img :src="makeImage(item.name,80)" style="vertical-align:top;" width="100%" height="">
                                                </div>
                                            </div>
                                            <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="item" @command="handleMenuCommand" class="text-center ">
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" button-tooltip="item.name">
                                                    <i class="fa fa-cog"></i>{{item.name}}
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                            </lb-dropdown>
                                        </div>
                                        <div class="media-body">
                                            <p>
                                                <label>账号:</label>
                                                <span class="m-l-xs ng-binding ng-scope">
                                                    <i class="fa fa-user ng-scope"></i>{{item.tel.length>0?item.tel:'未填写'}}
                                                </span>
                                            </p>
                                            <p>
                                                <label>类型:</label>
                                                <span class="label bg-info ng-scope">{{ item.is_part_time == '0' ? '全职':'兼职' }}</span>
                                            </p>
                                            <p>
                                                <label>生日:</label>
                                                <span class="ng-binding">{{ getDateFormat(item.birth)}}</span>
                                            </p>
                                            <p>
                                                <label>邮箱:</label>
                                                <span class="ng-binding">{{item.email.length>0?item.tel:'未填写'}}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
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
    </div>
</template>
<script>
export default {
    name: 'employee',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': '1'
            },
            'status': [{
                'value': '1',
                'text': '在职'
            }, {
                'value': '0',
                'text': '离职'
            }],
            'search': {
                'fields': [{
                    'name': 'name',
                    'value': '姓名'
                }, {
                    'name': 'mobile',
                    'value': '手机号'
                }],
                'search_key': 'name',
                'search_value': '姓名'
            }
        }
        return {
            localdata,
            tables: ['employee'],
        }
    },
    computed: {
        refreshData() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-employee') {
                this.handleSearch()
                result = true
            }
            return result
        },
    },
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
            let status = this.localdata.form.status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'lock',
                    'value': status == '0',
                    'type': ''
                })
            }

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
        handleMenuCommand({
            action,
            data
        }) {
            if (action == 'delete') {
                this.$confirm('此操作将永久删除员工, 是否继续?', '提示', {
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
            if (action == 'lock' || action == 'unlock') {
                let info = '离职封存适用于员工离职之后，封存之后该账号对应的历史记录保留在系统，但是不能再登陆系统, 是否继续?'
                let infomessage = '封存成功'
                let lock = true
                if (action == 'unlock') {
                    info = '您确定要解封 ' + data.name + ' 的资料吗?'
                    infomessage = '解封成功'
                    lock = false
                }

                this.$confirm(info, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.updateTeble('employee', data._id, {
                        'lock': lock
                    }).then(() => {
                        this.$message({
                            message: infomessage,
                            type: 'success'
                        })
                        this.handleSearch()
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
