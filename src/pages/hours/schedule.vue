<template>
    <div>
        <div class="ng-scope schedule">
            <div class="wrapper-xs ng-scope">
                <div class="wrapper panel panel-default bg-white ng-scope">
                    <div class="row">
                        <div class="col-xs-12 col-md-4 " :class="{result:getSelectName}">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <lb-dropdowns menu-align="start" @command="handleCommand">
                                        <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                            {{localdata.search.search_value}}
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                        <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                            <template v-for="item in localdata.search.fields">
                                                <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                            </template>
                                        </lb-dropdown-menu>
                                    </lb-dropdowns>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                </span>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <lb-date-picker v-model="localdata.form.daterange" type="date" @change="handleSearch"></lb-date-picker>
                        </div>
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
                    <div class="row  m-t arrangeover">
                        <div class="col-xs-12 col-md-10">
                            <table class="scheduletable " width="1094">
                                <thead class="scheduleThead" width="1080">
                                    <tr>
                                        <th width="120">教室</th>
                                        <th width="120">时间</th>
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
                                <tbody class="scheduleTbody " width="1094">
                                    <template v-for="classitem in  getSClassesData">
                                        <template v-for="item,index in new Array(18)">
                                            <tr :class="getBgColor(index)">
                                                <td width="120" v-if="index==0" rowspan="18" style="vertical-align:middle;background-color: rgb(255, 255, 255);">{{classitem.class_name}}({{classitem.max_student_num}}人)</td>
                                                <td width="120">{{index+7}}:00</td>
                                                <template v-for="dayitem in new Array(7)">
                                                    <td width="120" :id="classitem._id" @drop="drop($event,index,classitem,dayitem)" @dragover="allowDrop($event,index)" @dragleave="dragleave($event,index)" @dragenter="dragenter($event,index)">{{index}}</td>
                                                </template>
                                            </tr>
                                        </template>
                                    </template>
                                    <template v-if="getTablesData().length==0">
                                        <tr>
                                            <td colspan="9" width="1080">暂无教室数据,请先添加教室
                                                <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i>新建教室
                                                </a>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-xs-12 col-md-2">
                            <table class="scheduletable " width="180">
                                <thead class="scheduleThead" width="180">
                                    <tr>
                                        <th width="180">班级</th>
                                    </tr>
                                </thead>
                                <tbody class="scheduleTbody" width="180">
                                    <template v-for="classitem in  getClassesData">
                                        <tr draggable :id="classitem._id" @dragstart="dragstart($event,classitem)" @dragend="dragend($event)">
                                            <td width="180">{{classitem.class_name}}
                                                <a @click="handleShowDialog('lb-arrangeedit',{class:classitem})" class="btn btn-primary pull-right">
                                                    <i class="fa fa-plus"></i>排课
                                                </a>
                                            </td>
                                        </tr>
                                    </template>
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
    </div>
</template>
<style>
.bg1 {
    background-color: rgb(246, 250, 254);
}

.bg2 {
    background-color: rgb(255, 242, 240);
}

.bg3 {
    background-color: rgb(254, 254, 246);
}

.bg4 {
    background-color: green;
    color: #fff
}

.schedule .scheduleThead {
    display: inline-block;
}

.schedule .scheduleTbody {
    display: inline-block;
    height: 600px;
    overflow-x: auto;
    overflow-y: scroll;
}

.schedule .tablewidth {
    width: 100%;
}

.schedule .scheduletable {
    border-top: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    border-collapse: collapse;
    border-spacing: 0;
    display: inline-block;
}

.schedule .scheduletable thead {
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
}

.schedule .scheduletable td {
    border-right: 1px solid #dddddd;
    padding: 8px 15px;
    border-bottom: 1px solid #dddddd;
}

.schedule .scheduletable th {
    border-right: 1px solid #dddddd;
    padding: 8px 15px;
}
</style>
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
                'search_value': '',
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
                'text': '老师选择班级',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '班级',
                'text': '班级选择班级',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '课程',
                'text': '课程选择班级',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '学员',
                'text': '学员选择班级',
                'show': 'lb-selectstudenttpl'
            }],
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '教室'
                }],
                'search_key': 'class_name',
                'search_value': '教室'
            }
        }
        return {
            localdata,
            tables: ['arrange'],
            currclass: {}
        }
    },
    mounted() {
        this.getTableApidata('classes')
        this.getTableApidata('sclasses')
    },
    computed: {
        getClassesData() {
            let classes = this.$store.state.models.models.classes.data
            return classes
        },
        getSClassesData() {
            let classes = this.$store.state.models.models.classes.data
            return classes
        },
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
            if (this.$store.state.envs.currDialog == 'lb-newsclass') {
                this.handleSearch()
            }
            return true
        },
    },
    watch: {},
    methods: {
        allowDrop(ev) {
            ev.preventDefault()
        },
        dragleave(ev, index) {
            ev.target.className = this.getBgColor(index)
            return true
        },
        dragenter(ev, index) {
            console.log(ev.target.id, index)
            ev.target.className = 'bg4'
            return true
        },
        drop(ev, index, classitem, dayitem) {
            let obj = {
                'startTime': index + 7,
                'startData': dayitem,
                'class': this.currclass,
                'sclasses': classitem
            }
            this.handleShowDialog('lb-arrangeedit', obj)
            console.log(ev.target.id, index)
            ev.preventDefault()
        },
        dragend(ev) {
            ev.target.className = ''
        },
        dragstart(ev, item) {
            this.currclass = item
            ev.target.className = 'bg4'
            console.log(ev.target.id)
        },
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
        },
        getBgColor(index) {
            let result = 'bg1'
            if (0 <= index && index <= 5) {
                result = 'bg1'
            } else if (5 < index && index < 12) {
                result = 'bg2'
            } else {
                result = 'bg3'
            }
            return result
        },
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
    }
}
</script>
