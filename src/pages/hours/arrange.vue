<template>
    <div class="ng-scope">
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
                <div class="row  m-t">
                    <table class="table">
                        <thead>
                            <tr class="scheduleByWeek">
                                <th width="100px">老师</th>
                                <th width="60px">时段</th>
                                <th width="200px">周一
                                    <label>(06/05)</label>
                                </th>
                                <th width="200px">周二
                                    <label>(06/06)</label>
                                </th>
                                <th width="200px">周三
                                    <label>(06/07)</label>
                                </th>
                                <th width="200px">周四
                                    <label>(06/08)</label>
                                </th>
                                <th width="200px">周五
                                    <label>(06/09)</label>
                                </th>
                                <th width="200px">周六
                                    <label>(06/10)</label>
                                </th>
                                <th width="200px">周日
                                    <label>(06/11)</label>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="scheduleList2" class="notOnlyWeek">
                            <tr>
                                <td rowspan="3">aaa</td>
                                <td class="scheduleWeek">上午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="schedule-course" data-index="0" data-detai="{&quot;stime&quot;:&quot;11:30&quot;,&quot;etime&quot;:&quot;12:50&quot;,&quot;name&quot;:&quot;aaaaa&quot;,&quot;teachername&quot;:&quot;aaa&quot;,&quot;classroom&quot;:&quot;202&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;01:20&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">11:30-12:50 <span class="scheduleClassName">aaaaa</span></div>
                                </td>
                                <td>
                                    <div class="schedule-course" data-index="1" data-detai="{&quot;stime&quot;:&quot;11:30&quot;,&quot;etime&quot;:&quot;12:50&quot;,&quot;name&quot;:&quot;aaaaa&quot;,&quot;teachername&quot;:&quot;aaa&quot;,&quot;classroom&quot;:&quot;202&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;01:20&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">11:30-12:50 <span class="scheduleClassName">aaaaa</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">下午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">晚上</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="3">陈星,3,开元舞蹈,清华优才</td>
                                <td class="scheduleWeek">上午</td>
                                <td>
                                    <div class="schedule-course" data-index="2" data-detai="{&quot;stime&quot;:&quot;08:30&quot;,&quot;etime&quot;:&quot;17:00&quot;,&quot;name&quot;:&quot;JAVA201706全日制第三期&quot;,&quot;teachername&quot;:&quot;陈星,3,开元舞蹈,清华优才&quot;,&quot;classroom&quot;:&quot;201&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;08:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">08:30-17:00 <span class="scheduleClassName">JAVA201706全日制第三期</span></div>
                                </td>
                                <td>
                                    <div class="schedule-course" data-index="3" data-detai="{&quot;stime&quot;:&quot;08:30&quot;,&quot;etime&quot;:&quot;17:00&quot;,&quot;name&quot;:&quot;JAVA201706全日制第三期&quot;,&quot;teachername&quot;:&quot;陈星,3,开元舞蹈,清华优才&quot;,&quot;classroom&quot;:&quot;201&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;08:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">08:30-17:00 <span class="scheduleClassName">JAVA201706全日制第三期</span></div>
                                </td>
                                <td>
                                    <div class="schedule-course" data-index="4" data-detai="{&quot;stime&quot;:&quot;08:30&quot;,&quot;etime&quot;:&quot;17:00&quot;,&quot;name&quot;:&quot;JAVA201706全日制第三期&quot;,&quot;teachername&quot;:&quot;陈星,3,开元舞蹈,清华优才&quot;,&quot;classroom&quot;:&quot;201&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;08:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">08:30-17:00 <span class="scheduleClassName">JAVA201706全日制第三期</span></div>
                                </td>
                                <td>
                                    <div class="schedule-course" data-index="5" data-detai="{&quot;stime&quot;:&quot;08:30&quot;,&quot;etime&quot;:&quot;17:00&quot;,&quot;name&quot;:&quot;JAVA201706全日制第三期&quot;,&quot;teachername&quot;:&quot;陈星,3,开元舞蹈,清华优才&quot;,&quot;classroom&quot;:&quot;201&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;08:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">08:30-17:00 <span class="scheduleClassName">JAVA201706全日制第三期</span></div>
                                </td>
                                <td>
                                    <div class="schedule-course" data-index="6" data-detai="{&quot;stime&quot;:&quot;08:30&quot;,&quot;etime&quot;:&quot;17:00&quot;,&quot;name&quot;:&quot;JAVA201706全日制第三期&quot;,&quot;teachername&quot;:&quot;陈星,3,开元舞蹈,清华优才&quot;,&quot;classroom&quot;:&quot;201&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;08:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">08:30-17:00 <span class="scheduleClassName">JAVA201706全日制第三期</span></div>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">下午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">晚上</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="3">吴老师</td>
                                <td class="scheduleWeek">上午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="schedule-course" data-index="7" data-detai="{&quot;stime&quot;:&quot;08:00&quot;,&quot;etime&quot;:&quot;10:00&quot;,&quot;name&quot;:&quot;GX01_正开&quot;,&quot;teachername&quot;:&quot;吴老师&quot;,&quot;classroom&quot;:&quot;教室6&quot;,&quot;studentCount&quot;:1,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;02:00&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">08:00-10:00 <span class="scheduleClassName">GX01_正开</span></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">下午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="schedule-course" data-index="8" data-detai="{&quot;stime&quot;:&quot;13:00&quot;,&quot;etime&quot;:&quot;14:30&quot;,&quot;name&quot;:&quot;KC1小班&quot;,&quot;teachername&quot;:&quot;吴老师&quot;,&quot;classroom&quot;:&quot;123&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;01:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">13:00-14:30 <span class="scheduleClassName">KC1小班</span></div>
                                </td>
                                <td>
                                    <div class="schedule-course" data-index="9" data-detai="{&quot;stime&quot;:&quot;13:00&quot;,&quot;etime&quot;:&quot;14:30&quot;,&quot;name&quot;:&quot;KC1小班&quot;,&quot;teachername&quot;:&quot;吴老师&quot;,&quot;classroom&quot;:&quot;123&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;01:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">13:00-14:30 <span class="scheduleClassName">KC1小班</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">晚上</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="3">闻斯行</td>
                                <td class="scheduleWeek">上午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="schedule-course" data-index="10" data-detai="{&quot;stime&quot;:&quot;10:10&quot;,&quot;etime&quot;:&quot;12:10&quot;,&quot;name&quot;:&quot;99春季数学一对一_ Aaron_测试学员107&quot;,&quot;teachername&quot;:&quot;闻斯行&quot;,&quot;classroom&quot;:&quot;教室11&quot;,&quot;studentCount&quot;:1,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;02:00&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;数学&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">10:10-12:10 <span class="scheduleClassName">99春季数学一对一_ Aaron_测试学员107（数学）</span></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">下午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">晚上</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowspan="3">曹老师</td>
                                <td class="scheduleWeek">上午</td>
                                <td></td>
                                <td>
                                    <div class="schedule-course" data-index="11" data-detai="{&quot;stime&quot;:&quot;09:00&quot;,&quot;etime&quot;:&quot;10:30&quot;,&quot;name&quot;:&quot;周三上午1班&quot;,&quot;teachername&quot;:&quot;曹老师&quot;,&quot;classroom&quot;:&quot;智能钢琴教室&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;01:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">09:00-10:30 <span class="scheduleClassName">周三上午1班</span></div>
                                </td>
                                <td></td>
                                <td>
                                    <div class="schedule-course" data-index="12" data-detai="{&quot;stime&quot;:&quot;09:00&quot;,&quot;etime&quot;:&quot;10:30&quot;,&quot;name&quot;:&quot;周三上午1班&quot;,&quot;teachername&quot;:&quot;曹老师&quot;,&quot;classroom&quot;:&quot;智能钢琴教室&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;01:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">09:00-10:30 <span class="scheduleClassName">周三上午1班</span></div>
                                </td>
                                <td></td>
                                <td>
                                    <div class="schedule-course" data-index="13" data-detai="{&quot;stime&quot;:&quot;09:00&quot;,&quot;etime&quot;:&quot;10:30&quot;,&quot;name&quot;:&quot;周三上午1班&quot;,&quot;teachername&quot;:&quot;曹老师&quot;,&quot;classroom&quot;:&quot;智能钢琴教室&quot;,&quot;studentCount&quot;:0,&quot;attendCount&quot;:0,&quot;time&quot;:&quot;01:30&quot;,&quot;status&quot;:&quot;未上课&quot;,&quot;IsClassFinished&quot;:0,&quot;Finished&quot;:0,&quot;subjectName&quot;:&quot;&quot;,&quot;campusName&quot;:&quot;总部&quot;,&quot;masterName&quot;:&quot;&quot;,&quot;showMasterNameRight&quot;:false}">09:00-10:30 <span class="scheduleClassName">周三上午1班</span></div>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">下午</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="scheduleWeek">晚上</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
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
<style>
.table {
    width: 100%;
    text-align: center !important;
    table-layout: fixed !important;
    border-collapse: collapse !important;
    border-spacing: 0;
    text-align: center!important;
    
}
.table>thead>tr>th {
    padding: 8px 15px;
    font-weight: normal;
    color: #000;
    background-color: #f4f5f9;
    border-bottom: 0;
    text-align: center}

thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    border: 1px solid #dddddd;
}

.scheduleByWeek {
    display: table-row !important;
}

td {
    text-align: left;
    padding: 0 5px;
    height: 64px !important;
    border: 1px solid #dddddd;
    text-align: center!important;
     vertical-align: middle;
    width: 200px;
}

.scheduleByWeek th {
    border: 1px solid #dddddd;

}
.table>tbody>tr>td{
     text-align: center!important;

}
#scheduleList2 td:first-child {
    vertical-align: middle;
    text-align: center!important;
    font-size: 14px;
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
