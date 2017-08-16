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
              <span class="text-success ng-binding">￥{{$store.state.system.balance}}</span>元
              <span class="bg-light lter padder padder-v">订单余额:
                <span class="text-success ng-binding">￥{{totalMoney}}</span>元</span>
            </div>
  
            <div class="m-t ng-scope">
              <!--余额不够1-->
              <div class="m-t wrapper ng-scope" v-if="prices">
                <p class="m-t m-b text-danger text-2x text-center">
                  <i class="fa fa-exclamation-triangle"></i>您的账户余额不够!</p>
                <p class="text-center">
                  <a class="btn btn-danger" @click="alipay=3">立即充值</a>
                </p>
              </div>
              <!--余额不够-->
              <!--购买-->
              <div class="m-t wrapper ng-scope" v-if="prics">
                <p class="text-center">
                  <a class="btn btn-danger" @click="handleClick">立即购买</a>
                </p>
              </div>
              <!--购买-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--购买-->
    <!--充值-->
    <div class="modal-dialog" v-if="alipay==3">
      <div class="modal-content"> 
        <div class="ng-scope">
          <div class="modal-header">
            <button class="close" type="button" @click="alipay=1">
              <span>×</span>
              <span class="sr-only">关闭</span>
            </button>
            <h3 class="modal-title">
              <i class="fa fa-money"></i>系统充值</h3>
          </div>
          <div class="modal-body">
            <div class="ng-scope">
              <dl class="dl-horizontal">
                <dt>充值金额:</dt>
                <dd>
                  <div class="w-sm input-group">
                    <lb-numberinput type="number" class="form-control ng-pristine ng-valid ng-touched" v-model.lazy="localdata.form.priced">
                    </lb-numberinput>
                    <span class="input-group-addon">元</span>
                  </div>
                </dd>
                <dt class="m-t">支付方式:</dt>
                <dd class="m-t">
                  <ul class="list-group">
                    <li class="list-group-item ng-scope">
                      <img src="/assets/images/alipay.jpg">
                      <i class="fa fa-check-circle text-success pull-right ng-scope"></i>
                    </li>
                  </ul>
                </dd>
                <dt class="m-t"></dt>
                <dd class="m-t">
                  <button class="btn btn-primary" @click="alipay=4">立即充值</button>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--充值-->
    <!--确定充值-->
    <div class="modal-dialog" v-if="alipay==4">
      <div class="modal-content">
        <div page-controller="system_charge" class="ng-scope">
          <div class="modal-header">
            <button class="close" type="button" @click="alipay=1">
              <span>×</span>
              <span class="sr-only">关闭</span>
            </button>
            <h3 class="modal-title">
              <i class="fa fa-money"></i>系统充值</h3>
          </div>
          <div class="modal-body">
            <div ng-if="step == 2" class="ng-scope">
              <h4 class="text-center">确认充值</h4>
              <dl class="dl-horizontal m-t">
                <dt>充值方式:</dt>
                <dd>
                  <img src="/assets/images/alipay.jpg">
                </dd>
                <dt class="m-t">充值金额:</dt>
                <dd class="m-t ng-binding">{{this.localdata.form.priced}}</dd>
              </dl>
              <div class="text-center">
                <button class="btn btn-primary" @click="recharge">确认充值</button>
                <button class="btn btn-default m-l" @click="alipay=3">返回</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--确定充值-->
  </div>
</template>
<script>
export default {
  name: 'newsclass',

  data() {
    let localdata = {
      'form': {
        'priced':'',
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
      alipay: '2',

      prices: false,
      prics: false
    }
  },
  mounted() {  
  },
  computed: {
    totalMoney(){
      let money = 0
      let vm = this
      this.getTablesData().forEach((product) => {
        money += parseInt(vm.getLookUp(product.charge,'relations')[product.chargePriceIndex].priced)
        console.log('money',money)
      })
      return money
    }
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
        // console.log(obj)
      })
    },
    handleClick() {
      this.handleSave().then(() => {
        this.$message({
          message: '购买成功',
          type: 'success'
        })
        this.lbClosedialog()
        this.$store.state.envs.currDialog = 'lb-cart'
      })
    },
    recharge() {
      // this.handleSave().then(() => {
      //   this.$message({
      //     message: '充值成功',
      //     type: 'success',
      //   })
      //   this.$store.state.system.balance = this.localdata.form.balance
      //   this.$store.state.system.priced = this.localdata.form.priced
      //   let total = (this.$store.state.system.balance += parseInt(this.$store.state.system.priced))
      //   console.log(this.$store.state.system.balance)
      //   console.log(this.$store.state.system.priced)
      //   console.log(total)
      //   // console.log(this.localdata.form.balance)
      //   this.lbClosedialog()
      //   this.$store.state.envs.currDialog = 'lb-cart'
      // })
      this.localdata.form.balance+= parseInt(this.localdata.form.priced)
        this.$store.state.system.balance= this.localdata.form.balance
    },
    handcut() {
      this.alipay = 1
      if (this.totalMoney > this.localdata.form.balance) {
        this.prices = true
        this.prics = false
      } else {
        this.prices = false
        this.prics = true
      }
    },
  }
}
</script>