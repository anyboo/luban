<template>
    <div class="ng-scope schedule">
        <div class="wrapper-xs ng-scope">
            <div class="wrapper panel panel-default bg-white ng-scope">
                <div class="row">
                    <div class="col-xs-12 col-md-3 m-t " :class="{result:getSelectName}">
                        <div class="inline">
                            <lb-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></lb-date-picker>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-7 m-t ">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                        <div class="inline w-sm va-m m-l-xs">
                            <div class="input-group">
                                <input type="text" placeholder="请选择" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly" v-model="localdata.form.select_name">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" @click="handleSelect">
                                       {{localdata.form.show_type}}
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div class="inline w-sm va-m m-l-xs">
                            <div class="input-group">
                                <select class="form-control" v-model="localdata.form.show_type" @change="selectShowType">
                                    <template v-for="item in localdata.show_type">
                                        <option :value="item.value">{{item.text}}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-2 m-t " v-model="localdata.form.show_list_type">
                        <select class="form-control">
                            <option value="-1">按列表显示</option>
                            <option value="1">按月显示</option>
                            <option value="2">按周显示</option>
                            <option value="3">按天显示</option>
                        </select>
                    </div>
                </div>
                <div class="row  m-t arrangeover">
                    <div class="col-xs-12 col-md-12">
                        <table class="scheduletable " width="1094">
                            <thead class="scheduleThead" width="1080">
                                <tr width="100%">
                                    <th width="120">老师</th>
                                    <th width="120">时段</th>
                                    <th width="120">周一
                                        <label>(06/05)</label>
                                    </th>
                                    <th width="120">周二
                                        <label>(06/06)</label>
                                    </th>
                                    <th width="120">周三
                                        <label>(06/07)</label>
                                    </th>
                                    <th width="120">周四
                                        <label>(06/08)</label>
                                    </th>
                                    <th width="120">周五
                                        <label>(06/09)</label>
                                    </th>
                                    <th width="120">周六
                                        <label>(06/10)</label>
                                    </th>
                                    <th width="120">周日
                                        <label>(06/11)</label>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="scheduleTbody" width="1094">
                                <tr >
                                    <td rowspan="3" width="120">aaa</td>
                                    <td width="120">上午</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                </tr>
                                <tr>
                                    <td width="120">上午</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                </tr>
                                <tr>
                                    <td width="120">上午</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                    <td width="120">w</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="panlb-footer ">
                    <div class="row ">
                        <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </lb-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'arrange',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
                'duration': '',
                'select_name': '',
                'select_id': '',
                'show_type': '老师',
                'show_list_type': '-1',
            },
            'duration': [{
                'value': 'day',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }],
            'show_type': [{
                'value': '老师',
                'text': '按老师显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '教室',
                'text': '按教室显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '班级',
                'text': '按班级显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '课程',
                'text': '按课程显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '学员',
                'text': '按学员显示',
                'show': 'lb-selectstudenttpl'
            }]
        }
        return {
            localdata,
            tableData: [{
                date: '林ming',
                name: '上午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '下午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            tableData3: [{
                date: '2016-05-03',
                name: '晚上',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '上午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '上午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '上午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-08',
                name: '上午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '上午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '上午',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        }
    },
    computed: {
        getSelectName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.localdata.form.select_name = this.$store.state.envs.currDialogResult.student_name
                    this.localdata.form.select_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.localdata.form.select_id = ''
                    this.localdata.form.select_name = ''
                }
                this.handleSearch()
            }
            return true
        },
    },
    watch: {},
    methods: {
        handleSelect() {
            let obj = this.lodash.find(this.localdata.show_type, {
                'value': this.localdata.form.show_type
            })
            if (obj) {
                this.handleShowDialog(obj.show)
            }
        },
        selectShowType() {
            this.localdata.form.select_name = ''
            this.localdata.form.select_id = ''
            this.handleSearch()
        },
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
                //this.handleSearch()
        },
        handleSearch() {
            //let filterObj = []
            //let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            //this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
