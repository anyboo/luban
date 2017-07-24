<template>
    <div class="wrapper">
        <div class=" wrapper panel panel-default">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <el-dropdown menu-align="start" @command="handleCommand">
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
                <div class="col-xs-12 col-md-8 m-t">
                    <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status" @input="handleSearch"></lb-buttongroup>
                    <lb-buttongroup :group-data="localdata.view_mode" v-model="localdata.form.view_mode"></lb-buttongroup>
                    <template v-if="getActionOption('studentlist')">
                        <a @click="lbShowdialog($event,'lb-trash')" :class="{result:refreshData}">
                            <i class="icon-lock"></i>已封存档案
                        </a>
                    </template>
                </div>
            </div>
            <div class=" list-student ">
                <div class="row" v-if="localdata.form.view_mode == 'image'">
                    <template v-for="item in getTablesData()">
                        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 m-b">
                            <div class="bg-white b-a r-2x list-student-item box-shadow">
                                <div class="face">
                                    <a @click="handleRouter($event,item)">
                                        <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px; ">
                                            <img :src="makeImage(item.student_name,80)" style="vertical-align:top;" width="100%" height="">
                                        </div>
                                    </a>
                                </div>
                                <div class="name m-t">
                                    <a class="link" @click="handleRouter($event,item)">
                                        <span >
                                            <i class="fa" :class="{'fa-female':item.sex=='0','fa-male':item.sex!='0'}"></i>
                                        </span>{{ item.student_name }}
                                        <span v-if="item.nickname != ''" >{{ item.nickname }}</span>
                                    </a>
                                </div>
                                <div class="tel m-t">
                                    <i class="fa fa-phone"></i>
                                    <span >{{ item.first_tel }}</span>
                                    <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="item" class="pull-right">
                                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                            <i class="fa fa-cog"></i>
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                    </lb-dropdown>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="row" v-if="localdata.form.view_mode == 'list'">
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="scope.row">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog"></i>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="学员">
                            <template scope="scope">
                                <a class="link" @click="handleRouter($event,scope.row)">
                                    <span >
                                        <i class="fa" :class="{'fa-female':scope.row.sex=='2','fa-male':scope.row.sex=='1'}"></i>
                                    </span>{{ scope.row.student_name }}
                                    <span v-if="scope.row.nickname != ''" >{{ scope.row.nickname }}</span>
                                </a>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="联系电话">
                            <template scope="scope">
                                <span >{{ scope.row.first_tel }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="年龄">
                            <template scope="scope">
                                <span >{{ fromNow(scope.row.birth) }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="住址">
                            <template scope="scope">{{ scope.row.home_address }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="学员归属">
                            <template scope="scope">
                                <span class="" :class="{'bg-info':getEmployeeName(scope.row)!='未设定','bg-gray':getEmployeeName(scope.row)=='未设定'}">{{ getEmployeeName(scope.row) }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="档案备注">
                            <template scope="scope">
                                <p >{{ scope.row.note }}</p>
                            </template>
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
<style >

.col-md-4 {
    width: 33.33333333%;
}
.col-md-12 {
    width: 33.33333333%;
}
</style>
<script>
export default {
    name: 'list',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': '',
                'view_mode': 'list'
            },
            'status': [{
                'value': '',
                'text': '所有学员'
            }, {
                'value': '0',
                'text': '未报读学员'
            }, {
                'value': '1',
                'text': '已报读学员'
            }],
            'view_mode': [{
                'value': 'image',
                'iclass': 'fa fa-image',
                'text': '头像'
            }, {
                'value': 'list',
                'iclass': 'fa fa-list',
                'text': '列表'
            }],
           
            'lookup': {
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
            'search': {
                'fields': [{
                    'name': 'student_name',
                    'value': '姓名'
                }, {
                    'name': 'first_tel',
                    'value': '手机号'
                }, {
                    'name': 'home_address',
                    'value': '住址'
                }, {
                    'name': 'nickname',
                    'value': '英文名'
                }, {
                    'name': 'card_no',
                    'value': '学员卡号'
                }],
                'search_key': 'student_name',
                'search_value': '姓名'
            }
        }
        return {
            localdata,
            tables: ['student'],
        }
    },
    computed: {
        refreshData() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-trash') {
                this.handleSearch()
                result = true
            }
            return result
        },
    },
    methods: {
        getEmployeeName(item) {
            let name = '未设定'
            if (item.employee && item.employee.length > 0) {
                name = this.getLookUp(item.employee, 'name')
            }
            return name
        },
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
                    'key': 'status',
                    'value': status,
                    'type': ''
                })
            }
            filterObj.push({
                'key': 'isdel',
                'value': false,
                'type': ''
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
        handleRouter(event, item) {
            this.$store.state.envs.currStudent = item
            this.$router.push('/student/info')
            event.stopPropagation()
        }
    }
}
</script>
