<template>
    <div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-flag-checkered"></i>我的充值记录</h3> 
                </div>
                <div class="modal-body">
                    <table class="table table-hover table-striped table-border m-t" style="margin-top:0px;">
                        <thead>
                            <tr>
                                <th>充值金额</th>
                                <th>充值日期</th>
                            </tr>
                        </thead>
                        <template v-for="item in getTablesData()">
                            <tbody class="ng-scope">
                                <tr class="ng-scope">
                                    <td class="ng-binding">{{item.priced}}元</td>
                                    <td class="ng-binding">{{new Date()}}</td>
                                    <td>
                                        <a class="btn btn-danger btn-xs" @click="handleDelClick(item._id)">
                                            <i class="icon-ban"></i> 删除</a>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </table>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-warning m-l-xs" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newsclass',

    data() {
        let localdata = {
            'form': {
            },
            'lookup': {
                'localField': 'charge_id',
                'from': 'charge',
                'foreignField': '_id',
                'as': 'charge'
            },
        }
        return {
            localdata,
            tables: ['money'],
        }
    },
    mounted() {
    },
    computed: {},
    watch: {},
    methods: {
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除充值记录成功',
                    type: 'success'
                })
                this.handleSearch()
            })
        },
        handleSearch() {
            let filterObj = []
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then(obj => {
                // console.log(obj)
            })
        },
    }
}
</script>









