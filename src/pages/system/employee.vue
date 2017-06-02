<template>
    <div class="wrapper bg-white ng-scope">
        <div class="ng-scope">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <lb-dropdowns menu-align="start" @command="handleCommand">
                                        <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                            {{lb_localdata.search.search_value}}
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                        <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                            <template v-for="item in lb_localdata.search.fields">
                                                <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                            </template>
                                        </lb-dropdown-menu>
                                    </lb-dropdowns>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="lb_localdata.form.lb_search_value" @change="handleSearch">
                                <span class="input-group-btn">
                                <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8">
                    <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status" @input="handleSearch"></lb-buttongroup>
                    <button @click="lbShowdialog($event,'lb-employeeaddmodal')" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i>添加
                    </button>
                </div>
            </div>
            <div class="wrapper">
                <div class="row list-employee">
                    <template v-for="item in getTablesData()">
                        <div class="col-xs-12 col-md-6 ng-scope">
                            <div class="bg-white wrapper b-a m-t box-shadow">
                                <div class="meida">
                                    <div class="media-left">
                                        <a @click="lbShowdialog($event,'lb-photomodal')">
                                            <div class="w-xs ng-scope" ng-if="!item.avatar">
                                                <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px; "><img :src="makeImage(item.name,80)" style="vertical-align:top;" width="100%" height=""></div>
                                            </div>
                                        </a>
                                        <h4 class="text-center ng-binding">{{item.name}}</h4>
                                        <ul class="list-unstyled">
                                            <li>
                                                <i class="fa fa-phone"></i>
                                                <span class="ng-binding">{{item.tel.length>0?item.tel:'未填写'}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="media-body">
                                        <p>
                                            <label>账号:</label>
                                            <span class="m-l-xs ng-binding ng-scope" ng-if="item.oa_id>0">
                                            <i class="fa fa-user ng-scope"></i>1360959837
                                        </span>
                                        </p>
                                        <p>
                                            <label>类型:</label>
                                            <span class="label bg-info ng-scope">{{ item.is_part_time == '0' ? '全职':'兼职' }}</span>
                                        </p>
                                        <p>
                                            <label>角色:</label>
                                            <span class="ng-binding">
                                            <label class="label bg-info m-l-xs">校长</label>
                                            <label class="label bg-info m-l-xs">教师</label>
                                            <label class="label bg-info m-l-xs">前台</label>
                                            <label class="label bg-info m-l-xs">管理员</label>
                                        </span>
                                        </p>
                                        <p></p>
                                        <p>
                                            <label>邮箱:</label>
                                            <span class="ng-binding">{{item.email.length>0?item.tel:'未填写'}}</span>
                                        </p>
                                        <p></p>
                                        <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu" :menu-data="item">
                                            <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" button-tooltip="操作">
                                                <i class="fa fa-cog"></i>操作
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                        </lb-dropdown>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="panel-footer ">
                <div class="row ">
                    <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                    </lb-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'employee',
    data() {
        let lb_localdata = {
            'form': {
                'lb_search_value': '',
                'lb_params_status': ''
            },
            'lb_params_status': [{
                'value': '1',
                'text': '在职'
            }, {
                'value': '0',
                'text': '离职'
            }],
            'dropDownMenu': [{
                'url': 'lb-employeeeditmodal',
                'icon': 'fa fa-pencil',
                'text': '编辑资料'
            }, {
                'url': 'lb-lockmodal',
                'icon': 'fa fa-lock',
                'text': '离职封存'
            }, {
                'url': 'lb-resetaccountmodal',
                'icon': 'fa fa-key',
                'text': '重置密码'
            }, {
                'url': 'lb-changeaccountmodal',
                'icon': 'fa fa-user-md',
                'text': '更换登录账号'
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
            lb_localdata,
            lb_tables: ['employee'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.lb_localdata.search.search_key = value
            this.lb_localdata.search.search_value = this.lodash.find(this.lb_localdata.search.fields, {
                'name': value
            }).value
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.lb_localdata.form.lb_search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.lb_localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            console.log(this.lb_localdata.form.lb_params_status)
            let status = this.lb_localdata.form.lb_params_status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'is_part_time',
                    'value': status,
                    'type': ''
                })
            }

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
