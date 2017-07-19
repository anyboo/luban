<template>
    <div class="wrapper ng-scope">
        <div class="panel panel-default">
            <div class="row wrapper no-gutter">
                <div class="col-xs-12 col-md-4 m-t" :class='{result:changeTeacher}'>
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
                <div class="col-xs-12 col-md-8 m-t">
                    <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status" @input="handleSearch"></lb-buttongroup>
                    <lb-buttongroup :group-data="localdata.view_mode" v-model="localdata.form.view_mode"></lb-buttongroup>
                    <a @click="lbShowdialog($event,'lb-openclassmodal')" class="btn btn-success">
                        <i class="fa fa-plus "></i>开班
                    </a>
                </div>
            </div>
            <div class="row ng-scope " v-if="localdata.form.view_mode == 'image'">
                <template v-for="item in getTablesData()">
                    <div class="col-xs-12 col-sm-6 col-md-4 ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="ng-binding">{{item.class_name}}
                                    <small class="label bg-success m-l ng-scope" v-if="getOpen(item,'open')">已开课</small>
                                    <small class="label bg-red m-l ng-scope" v-if="getOpen(item,'')">未开课</small>
                                    <small class="label bg-blue m-l ng-scope" v-if="getOpen(item,'close')">已结课</small>
    
                                </h4>
                            </div>
                            <div class="panel-body">
                                <ul class="list-unstyled">
                                    <li>
                                        <label class="inline w-xs text-right">老师:</label>
                                        <span class="ng-binding">{{getLookUp(item.employee, 'name')}}</span>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs text-right">课程名称:</label>
                                        <span class="ng-binding">{{getLookUp(item.course, 'lesson_name')}}</span>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs text-right">开课日期:</label>
                                        <span class="ng-binding">{{getDateFormat(item.open_time)}}</span>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs text-right">招生情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.max_student_num" value="item.student_count" type="info">
                                                <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="6" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude="" style="width: 0%;">
                                                     <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">{{item.order.length}}/{{item.max_student_num}}</span> 
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs text-right">缴费情况:</label>
                                        <div class="inline w va-m">
                                            <div class="progress ng-isolate-scope" style="margin:0" max="item.total_amount" value="item.pay_amount" type="danger">
                                                <div class="progress-bar progress-bar-danger" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="0.00" ng-style="{width: percent + '%'}" aria-valuetext="%" ng-transclude="">
                                                    <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">￥{{getPayAmout(item.order)}} / ￥{{getTotalAmout(item.order)}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="m-t-xs">
                                        <label class="inline w-xs text-right">操作:</label>
                                        <span class="label bg-info ng-binding">
                                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="item" @command="handleCommand">
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                                    <i class="fa fa-cog ng-scope"></i>
                                                    <span class="ng-scope">操作</span>
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                            </lb-dropdown>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <!-- hhhhh -->
            <div class="table-responsive ng-scope" style="min-height:450px" v-if="localdata.form.view_mode == 'list'">
                <el-table :data="getTablesData()" stripe>
                    <el-table-column prop="data" label="操作">
                        <template scope="scope">
                            <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row" @command="handleCommand">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                    <i class="fa fa-cog ng-scope"></i>
                                    <span class="ng-scope">操作</span>
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="班级名">
                        <template scope="scope">{{scope.row.class_name}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="老师">
                        <template scope="scope">
                            <span class="ng-binding">{{getLookUp(scope.row.employee, 'name')}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="课程名">
                        <template scope="scope">{{getLookUp(scope.row.course, 'lesson_name')}}</template>
                    </el-table-column>
                    <el-table-column prop="data" label="开课日期">
                        <template scope="scope">
                            <span class="ng-binding">{{getDateFormat(scope.row.open_time)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态">
                        <template scope="scope">
                            <small class="label bg-success" v-if="getOpen(scope.row,'open')">已开课</small>
                            <small class="label bg-red" v-if="getOpen(scope.row,'')">未开课</small>
                            <small class="label bg-blue" v-if="getOpen(scope.row,'close')">已结课</small>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="招生情况">
                        <template scope="scope">
                             <lb-progress :text-inside="true" :stroke-width="18" :percentage="getPercentage(scope.row.order.length,scope.row.max_student_num)" :text="scope.row.order.length+'/'+scope.row.max_student_num"></lb-progress>
                        </template>
                    </el-table-column>
                    <el-table-column prop="data" label="缴费情况">
                        <template scope="scope">
                            <div class="progress ng-isolate-scope" style="margin:0" >
                                <div class="progress-bar progress-bar-danger">
                                    <span style="white-space:nowrap;padding-left:20px">￥ {{getPayAmout(scope.row.order)}}/￥ {{getTotalAmout(scope.row.order)}}</span>
                                </div>
                            </div>
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
    name: 'classes',
    data() {
        let localdata = {
            'form': {
                'status': '',
                'master_oe_id': '',
                'view_mode': 'list',
                'search_value': ''
            },
            'status': [{
                'value': '1',
                'text': '已开课'
            }, {
                'value': '0',
                'text': '未开课'
            }, {
                'value': '2',
                'text': '已结课'
            }],
            'view_mode': [{
                'value': 'image',
                'iclass': 'fa fa-image',
                'text': '区块'
            }, {
                'value': 'list',
                'iclass': 'fa fa-list',
                'text': '列表'
            }],
            'dropDownMenu': [{
                'url': 'lb-openclassmodal',
                'icon': 'fa fa-pencil',
                'text': '编辑'
            }, {
                'action': 'delete',
                'icon': 'fa fa-times',
                'text': '删除'
            }],
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '班级名'
                }, {
                    'name': 'employee.name',
                    'value': '老师姓名'
                }],
                'search_key': 'class_name',
                'search_value': '班级名'
            },
            'lookup': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
            'teachlookup': {
                'localField': 'course_id',
                'from': 'course',
                'foreignField': '_id',
                'as': 'course'
            },
            'orderlookup': {
                'localField': '_id',
                'from': 'order',
                'foreignField': 'class_id',
                'as': 'order'
            }
            
        }
        return {
            localdata,
            totalAmount:'',
            tables: ['classes']
        }
    },
    computed: {
        changeTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-openclass') {
                this.handleSearch()
            }
            return result
        },
        
        
    },
    watch: {},
    methods: {
        getTotalAmout(orders){
            var totalamount=0
            for(var item of orders){
                totalamount+=Number(item.order_amount)
            }
            return totalamount
        },
        getPayAmout(orders){
            var payamount=0
            var totalamount=0
            for(var item of orders){
                totalamount+=Number(item.order_amount)
            }
            for(var item of orders){
                payamount+=Number(item.unpay_amount)
            }
            return totalamount-payamount
        },
        getPercentage(hasStudent,maxStudent){
            let percentage = 100
            if (maxStudent>0){
                percentage = Number(hasStudent)*100/Number(maxStudent)
            }
            return percentage
        },
        getOpen(item, value) {
            let opentime = new Date()
            if (value == 'close') {
                return item.status == 2
            } else if (value == 'open') {
                return item.open_time < opentime.getTime()
            } else {
                return item.open_time > opentime.getTime()
            }
        },
        handleMenuCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = _.find(this.localdata.search.fields, {
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
                'value': this.localdata.teachlookup,
                'type': 'lookup'
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            filterObj.push({
                'key': 'order.order_type',
                'value': 1,
                'type': ''
            })
             filterObj.push({
                'key': 'lookup',
                'value': this.localdata.orderlookup,
                'type': 'lookup'
            })
            let status = this.localdata.form.status.trim()
            if (status.length > 0) {
                let opentime = new Date()
                if (status == '1') {
                    filterObj.push({
                        'key': 'open_time',
                        'value': opentime.getTime(),
                        'type': 'lte'
                    })
                }
                if (status == '0') {
                    filterObj.push({
                        'key': 'open_time',
                        'value': opentime.getTime(),
                        'type': 'gt'
                    })
                }
                if (status == '2') {
                    filterObj.push({
                        'key': 'status',
                        'value': 2,
                        'type': ''
                    })
                }
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then((obj)=>{   
               
                console.log(obj)     
            })
        },
        handleCommand({
            action,
            data
        }) {
            if (action == 'delete') {
                this.$confirm('此操作将永久删除该班级, 是否继续?', '提示', {
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
    },
}
</script>
