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
              <th>单价</th>
              <th>数量</th>
              <th>金额</th>
              <th></th>
            </tr>
          </thead>
          <template v-for="item in getTablesData()">
            <tbody class="ng-scope">
              <tr class="ng-scope">
                <td class="ng-binding">考勤卡设计服务费</td>
                <td class="ng-binding">￥600</td>
                <td class="w-sm">
                  <template>
                    <el-input-number v-model="localdata.form.num" size="small"></el-input-number>
                  </template>
                </td>
                <td class="ng-binding">￥600</td>
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
        ' num: ': '1',
      }
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
            this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleDelete(id).then(() => {
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
        },
  }
}
</script>
