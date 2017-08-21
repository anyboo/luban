 <template>
  <div>
    <div class="modal-dialog" v-if="alipay==2">
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
                  <td class="ng-binding">{{getLookUp(item.charge, 'relations')[item.chargePriceIndex].priced}}</td>
                  <td>
                    <a class="btn btn-danger btn-xs" @click="handleDelClick(item._id)">
                      <i class="icon-ban"></i> 删除</a>
                  </td>
                </tr>
              </tbody>
            </template>
            <tfoot>
              <tr>
                <td colspan="5" class="ng-binding">订单合计:{{totalMoney}}元</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="handcut">下一步</button>
          <button class="btn btn-warning m-l-xs" @click="lbClosedialog($event)">关闭</button>
        </div>
      </div>
    </div>
    <!--购买-->
    <div class="modal-dialog" v-if="alipay==1">
      <div class="modal-content">
        <div class="ng-scope">
          <div class="modal-header">
            <button class="close" type="button" @click="lbClosedialog($event)">
              <span>×</span>
              <span class="sr-only">关闭</span>
            </button>
            <h3 class="modal-title">
              <i class="fa fa-th-large"></i>购买服务</h3>
          </div>
          <div class="modal-body">
            <div class="bg-light lter padder padder-v">您的当前账户余额:
              <span class="text-success ng-binding">￥{{getData}}</span>元
              <span class="bg-light lter padder padder-v">订单余额:
                <span class="text-success ng-binding">￥{{totalMoney}}</span>元</span>
            </div>
            <div class="m-t ng-scope">
              <div class="m-t wrapper ng-scope" v-if="prices">
                <p class="m-t m-b text-danger text-2x text-center">
                  <i class="fa fa-exclamation-triangle"></i>您的账户余额不够!</p>
                <p class="text-center">
                  <a class="btn btn-danger" @click="alipay=3">立即充值</a>
                </p>
              </div>
              <div class="m-t wrapper ng-scope" v-if="!prices">
                <p class="text-center">
                  <a class="btn btn-danger" @click="handleClick">立即购买</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <lb-recharge v-if="alipay==3"></lb-recharge>
  </div>
</template>
<script>
import recharge from './recharge.vue'
export default {
  name: 'newsclass',

  data() {
    let localdata = {
      'form': {
        'priced': '',
        'balance': 0
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
      model: 'oder',
      alipay: '2',
      prices: false,
      orgid: '',
      balance: 0
    }
  },
  mounted() {
    this.getTableApidata('org')
  },
  components: {
    'lb-recharge': recharge,
  },
  computed: {
    totalMoney() {
      let money = 0
      let vm = this
      this.getTablesData().forEach((product) => {
        money += parseInt(vm.getLookUp(product.charge, 'relations')[product.chargePriceIndex].priced)
      })
      return money
    },
    getData() {
      let org = this.$store.state.models.models.org.data
      if (org.length > 0) {
        if (org[0].balance) {
          this.balance = parseInt(org[0].balance)
        }
        this.orgid = org[0]._id
      }
      return this.balance
      console.log('balance', this.balance)
    },
  },
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
      })
    },
    handleClick() {
      this.handleSave().then(() => {
        this.$message({
          message: '购买成功',
          type: 'success',
        })
        this.balance -= parseInt(this.totalMoney)
        this.updateTeble('org', this.orgid, { balance: this.balance }).then(() => {
          this.getTableApidata('org')
          this.lbClosedialog()
          this.$store.state.envs.currDialog = 'lb-cart'
        })
      })
    },
    handcut() {
      this.alipay = 1
      if (this.totalMoney > this.getData) {
        this.prices = !this.prices
      }
    },
  }
}
</script>