<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper bg-white ng-scope" xo-rest="news" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="news">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t"></div>
                <div class="col-xs-12 col-md-8 m-t">
                    <div class="btn-group m-l">
                        <!--   <label btn-radio="'0'" ng-model="params.type" class="btn btn-default ng-untouched ng-valid ng-dirty">内部</label>
                        <label btn-radio="'1'" ng-model="params.type" class="btn btn-default ng-untouched ng-valid ng-dirty active ng-valid-parse">外部</label> -->
                        <lb-buttongroup :group-data="localdata.track_type" v-model="localdata.form.track_type" @input="handleSearch"></lb-buttongroup>
                    </div><a class="btn btn-success pull-right" @click="handleShowDialog('lb-announcement')">发布</a></div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>操作</th>
                            <th>标题</th> 
                            <th width="150">校区</th>
                            <th width="140">时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="item in getTablesData()">
                            <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                <td><a class="btn btn-xs btn-info" @click="handleShowDialog('lb-announcement',item )">编辑</a> <a class="btn btn-xs btn-danger ng-isolate-scope" @click="handleDelClick(item._id)">删除</a></td>
                                <td><a class="btn btn-link ng-binding" ui-sref="my.news_view({on_id:item.on_id})" href="#/my/news/173">{{item.news_title}}</a></td>
                                <td>
                                    <span class="label bg-info ng-binding" ng-bind="item.ob_id|branch_name:1">福师大</span></td>
                                <td><span class="text-muted ng-binding">2017-06-08 10:05</span></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="grid-data-result">
                </div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center"><small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 条记录">共 1 条记录</small></div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'news',
    data() {
        let localdata = {
            'form': {
                'track_type': '',
              


            },
            'track_type': [{
                'value': '0',
                'text': '内部'
            }, {
                'value': '1',
                'text': '外部'
            }],
       
        }
        return {
            localdata,
            tables: ['announcement'],
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
        handleSearch() {
            let filterObj = []
            let status = this.localdata.form.track_type.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'status',
                    'value': status,
                    'type': ''
                })
            }
         

       

            //console.log(filterObj)
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
