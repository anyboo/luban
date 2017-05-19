<template>
    <div ui-view>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">课程</h1>
        </div>
        <div class="wrapper-xs" xo-rest="lessons" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="lesson" loading-container=".list-lesson" loading-text="正在加载课程列表..." empty-text="没有符合条件的课程!">
            <div class="panel panel-default">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-4">
                        <div class="padder">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-sm" data-html="1" bs-options="item.name as item.value for item in filter.fields">
                                            课程名
                                            <span class="caret"></span>
                                        </button>
                                    </div>
                                    <input type="text" class="input-sm form-control" placeholder="关键字">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button">搜索</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8">
                        <button class="btn btn-default btn-sm">
                            <i class="fa fa-filter"></i>过滤
                        </button>
                        <lb-buttongroup class="btn-group m-l"></lb-buttongroup>
                        <button class="btn btn-default pull-right" @click="lbShowdialog($event,'lb-cate')">
                            <i class="fa fa-list"></i>课程分类
                        </button>
                        <button class="btn btn-primary pull-right" @click="lbShowdialog($event,'lb-newlessonmodal')">
                            <i class="fa fa-plus"></i>添加课程
                        </button>
                    </div>
                </div>
                <div class="table-responsive m-t">
                    <lb-table :data="getTableData" stripe>
                        <lb-table-column prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default">
                                        <i class="fa fa-cog"></i>操作
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="300" prop="data" label="课程">
                            <template scope="scope">
                                <p>
                                    <span class="label bg-danger">班课</span>默认课程
                                    <small class="label bg-info m-l">DL</small>
                                </p>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="定价">
                            <template scope="scope">
                                <p>
                                    <span>按期收费</span>,课程单价:0.00元/次
                                </p>
                                <p>
                                    <label>课程售价:</label>
                                    <span class="label bg-info">1888.00</span>元
                                </p>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="内容">
                            <template scope="scope">
                                <p>
                                    <label>单次课时长:</label>
                                    <span class="label bg-info">1.00</span>时
                                </p>
                                <p>
                                    <label>课程包含:</label>
                                    <span class="label bg-info">1期,</span>
                                    <span class="label bg-info">10.00</span>课时
                                </p>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="适用校区">
                            <template scope="scope">
                                <p>
                                    <span>
                                        <label class="xlabel">小雪</label>
                                    </span>
                                </p>
                            </template>
                        </lb-table-column>
                    </lb-table>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12"></div>
                        <div class="col-sm-4 text-center">
                            <small class="text-muted inline m-t-sm m-b-sm">共 1 门课程</small>
                        </div>
                        <div class="col-sm-4 text-right text-center-xs">
                            <ul class="pagination-sm m-t-none pagination" total-items="grid.total" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'manage',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>