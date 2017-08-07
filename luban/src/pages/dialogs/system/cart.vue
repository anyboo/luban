<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button class="close" type="button" @click="lbClosedialog($event)">
          <span aria-hidden="true">×</span>
          <span class="sr-only">关闭</span>
        </button>
        <h3 class="modal-title">
          <i class="fa fa-flag-checkered"></i>购物车</h3>
      </div>
      <div class="modal-body">
        <table class="table table-hover table-striped table-border m-t" style="margin-top:0px;">
          <thead>
            <tr>
              <th>商品</th>
              <th>金额</th>
              <th></th>
            </tr>
          </thead>
          <template v-for="item in getTablesData()">
            <tbody class="ng-scope">
              <tr class="ng-scope">
                <td class="ng-binding">{{getLookUp(item.charge, 'name')}}</td>
                <td class="ng-binding">{{getLookUp(item.charge, 'relations')[item.chargePriceIndex].priced }}</td>
                <td>
                  <a class="btn btn-danger btn-xs" @click="handleDelClick(item._id)">
                    <i class="icon-ban"></i> 删除</a>
                </td>
              </tr>
            </tbody>
          </template>
          <tfoot>
            <tr>
              <td colspan="5" class="ng-binding">订单合计:￥520 元</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary">下一步</button>
        <button class="btn btn-warning m-l-xs" @click="lbClosedialog($event)">关闭</button>
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
        num: 1,
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
      tables: ['cart'],
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
          message: '删除购物车成功',
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
        console.log(obj)
      })
    }
  }
}
</script>
