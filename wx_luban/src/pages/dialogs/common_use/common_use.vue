<template>
    <div class='gray overflower_hid'>
        <div class='card_header greener flexs'>
            <div class="back" @click="handleBack">
                <i class="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
            </div>
            <el-row>
                <el-col :span="24">
                    <div>
                        <h3 class='txt-center margin_bottom'>
                            {{getTitle}}
                        </h3>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="card_body overflower_show">
            <lb-scroll :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomPullText='bottomText' :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
                <div>
                    <!--   这里写你需要的另外的模块 -->
                    <template v-for="item in getTime(dbdata)">
                        <el-card class="box-card margin_bottom">
                            <template v-for="itemval in tableitem">
                                <div class="card_text card_item" @click="cardclick(itemval,item)">
                                    {{getInfo(itemval,item)}}
                                </div>
                            </template>
                        </el-card>
                    </template>
                </div>
                <div v-show="loading" slot="bottom" class="loading">
                    <div class="txt-center">
                        <img src="/assets/images/loadup.gif" style="height:15px;with:15px">
                    </div>
                </div>
            </lb-scroll>
        </div>
    </div>
</template>
<script>
import pagesmodule from '~/stores/modulestudentinfo'
export default {
    name: 'common',
    data() {
        return {
            dbdata: [],
            moduledata: null,
            scrollHeight: 0,
            scrollTop: 0,
            containerHeight: 0,
            loading: false,
            allLoaded: false,
            bottomText: '下拉加载更多...',
            bottomStatus: '',
            totalCount: '',
            tableitem: []
        }
    },
    mounted() {
        this.getpageTable()
        this.getdata()
    },
    computed: {
        getTitle() {
            let itemLable = ''
            this.moduledata = pagesmodule[this.$store.state.commondata.commondata]
            return this.moduledata.pageLable
        },
        //配置文件

    },
    watch: {},
    methods: {
        getpageTable() {
            var itemTable = []
            this.dbdata = []
            this.moduledata = pagesmodule[this.$store.state.commondata.commondata]
            this.tableitem = this.moduledata.pageTableField
            return itemTable
        },
        getdata() {
            let filterObj = []
            console.log(this.$store.state.classid.classid)
            if (this.moduledata.pageClasses) {
                filterObj.push({
                    'key': 'classes_id',
                    'value': this.$store.state.classid.classid,
                    'type': ''
                })
            } else {
                filterObj.push({
                    'key': 'student_id',
                    'value': this.$store.state.student_id.student_id,
                    'type': ''
                })
            }
            if (this.moduledata && this.moduledata.tableSearch && this.moduledata.tableSearch.length > 0) {
                let tablesSearch = this.moduledata.tableSearch
                for (let item of tablesSearch) {
                    if (item.type == '') {
                        filterObj.push(item)
                    } else if (item.type && item.type.length > 0) {
                        filterObj.push(item)
                    } else {
                        filterObj.push({
                            'key': 'lookup',
                            'value': item,
                            'type': 'lookup'
                        })
                    }
                }
            }
            //course
            console.log("-----", filterObj)
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            console.log("------", this.$store.state.commondata.commondata)
            this.handleGetFilterTableTable(this.moduledata.pageTable, filterTxt).then(obj => {
                this.dbdata = obj.data.data
                console.log(this.dbdata)
            })
        },
        getInfo(itemval, item) {
            let info
            info = itemval.label + ' : ' + item[itemval.prop]
            if (itemval.type == 'payment') {
                info = itemval.label + ' : ' + this.getDictData('2', item[itemval.prop])
            }
            if (itemval.type == 'subtext') {
                info = itemval.label + ' : ' + this.getSubText(item, itemval.prop, 'class_name')
            }
            if (itemval.type == 'tabletext') {
                info = itemval.label + ' : ' + this.getLookUp(item[itemval.table], itemval.prop)
            }
            if (itemval.prop == 'class_name') {
                info = itemval.label + ' : '
                if (item.classes && item.classes.length) {
                    info = itemval.label + ' : ' + item.classes[0].class_name
                }
            }
            if (itemval.prop == 'order_remark') {
                info = itemval.label + ' : '
                if (item.order && item.order.length) {
                    info = itemval.label + ' : ' + item.order[0].order_remark
                }
            }
            if (itemval.prop == 'name') {
                info = itemval.label + ' : '
                if (item.employee && item.employee.length) {
                    info = itemval.label + ' : ' + item.employee[0].name
                }
            }
            //getDatetimeRanget
             if (itemval.prop1 == 'start'&& itemval.prop2 == 'end') {
                 info = itemval.label + ' : '+ this.getDatetimeRanget(item[itemval.prop1],item[itemval.prop2])
                
             }
             if(itemval.prop== 'start'){
                  info = itemval.label + ' : '+this.getDateFormat(item[itemval.prop])
             } 
            if (itemval.prop == 'attence_flag') {
                if (item[itemval.prop] == 0) {
                    item[itemval.prop] = '未考勤'
                    info = itemval.label + ' : ' + item[itemval.prop]
                }
                if (item[itemval.prop] == 1) {
                    item[itemval.prop] = '考勤'
                    info = itemval.label + ' : ' + item[itemval.prop]
                }
                if (item[itemval.prop] == 2) {
                    item[itemval.prop] = '缺勤'
                    info = itemval.label + ' : ' + item[itemval.prop]
                }
                if (item[itemval.prop] == 3) {
                    item[itemval.prop] = '请假'
                    info = itemval.label + ' : ' + item[itemval.prop]
                }
            }
            return info
        },
        getTime(sum) {
            for (var i = 0; i < sum.length; i++) {
                if (sum[i].track_time || sum[i].arrangestart || sum[i].creattime) {
                    sum[i].track_time = this.getDateFormat(sum[i].track_time)
                    sum[i].arrangestart = this.getDateFormat(sum[i].arrangestart)
                    sum[i].creattime = this.getDateFormat(sum[i].creattime)
                    sum[i].createtime = this.getDateFormat(sum[i].createtime)
                    sum[i].daterange1 = this.getDateFormat(sum[i].daterange1)
                    sum[i].daterange2 = this.getDateFormat(sum[i].daterange2)
                    sum[i].start = this.getDateFormat(sum[i].start)
                    sum[i].end = this.getDateFormat(sum[i].end)
                }
            }
            return sum
        },
        handleBack() {
            this.$store.commit('homes', 'lb-home')
        },
        loadBottom: function() {
            let filterObj = []
            filterObj.push({
                'key': 'student_id',
                'value': this.$store.state.student_id.student_id,
                'type': ''
            })
            this.loading = true;
            this.pagination.currentPage += 1;   // 每次更迭加载的页数
            /*      console.log(this.pagination.currentPage) */
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            if (this.pagination.currentPage * this.pagination.pagesize < this.pagination.total) {
                // 当allLoaded = true时上拉加载停止
                this.loading = false;
                this.allLoaded = true;
                /*     api.commonApi(后台接口，请求参数) 这个api是封装的axios有不懂的可以看vue2+ vuex + axios那篇文章 */
                this.handleGetFilterTableTable(this.$store.state.commondata.commondata, filterTxt).then(res => {
                    setTimeout(() => {
                        /*       要使用的后台返回的数据写在setTimeout里面 */
                        this.$nextTick(() => {
                            this.loading = false;
                        })
                    }, 1000)
                });
            } else {
                this.loading = false;
                this.allLoaded = true;
            }


        },
        handleBottomChange(status) {
            this.bottomStatus = status;
        },
        cardclick(itemval, item) {
            if (this.moduledata.pageLink) {
                this.$store.state.classid.classid = item.classes_id
                this.$store.state.commondata.commondata = this.moduledata.pageLink
                this.moduledata = pagesmodule[this.$store.state.commondata.commondata]
                this.getpageTable()
                this.getdata()
            }
        }
    }
}
</script>
