<template>
    <div>
        <div ui-view class="ng-scope">
            <div class="wrapper-xs ng-scope">
                <div class="panel panel-default">
                    <div class="panel-body ng-scope" ui-view="">
                        <div xo-rest="students" xo-rest-url-param="[$stateParams.os_id,'match']" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="student_matches" loading-container=".table-responsive" loading-text="正在加载赛事记录..." empty-text="没有赛事记录!" class="ng-scope">
                            <a class="btn btn-default m-b" @click="handleShowDialog('lb-regstudentmatchmodal')"><i class="fa fa-plus">                   
                </i> 添加赛事记录</a>
                            <div class="row">
                                <lb-table :data="getTablesData()" stripe>
                                    <lb-table-column prop="data" label="日期">
                                        <template scope="scope">
                                            {{scope.row.join_date}}
                                        </template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="赛事名称">
                                        <template scope="scope"> {{scope.row.match_name}}</template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="比赛成绩">
                                        <template scope="scope"> {{scope.row.result}}</template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="录入时间">
                                        <template scope="scope">
                                            2017-06-06
                                        </template>
                                    </lb-table-column>
                                    <lb-table-column prop="data" label="操作">
                                        <template scope="scope"><a class="btn btn-default btn-xs" @click="handleShowDialog('lb-details')">查看详情</a> <a class="btn btn-danger btn-xs ng-isolate-scope" @click="handleDelClick(scope.row._id)">删除</a></template>
                                    </lb-table-column>
                                </lb-table>
                                <div class="panel-footer ">
                                    <div class="row ">
                                        <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                                        </lb-pagination>
                                    </div>
                                </div>
                                <div class="grid-data-result">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'recording',
    data() {
        let localdata = {}
        return {
            localdata,
            lb_tables: ['recording'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.handleGetTable()
            })
        },
    }
}
</script>
