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
                <td colspan="5" class="ng-binding">订单合计:500元</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="alipay=1">下一步</button>
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
              <span class="text-success ng-binding">￥0.00</span>元</div>
            <div class="m-t ng-scope">
              <div class="m-t wrapper ng-scope">
                <p class="m-t m-b text-danger text-2x text-center">
                  <i class="fa fa-exclamation-triangle"></i>您的账户余额不够!</p>
                <p class="text-center">
                  <a class="btn btn-danger" @click="alipay=3">立即充值</a>
                  <a class="btn btn-default m-l" @click="alipay=2">返回</a>
                </p>
              </div>
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
                    <lb-numberinput type="text" class="form-control ng-pristine ng-valid ng-touched" v-model.lazy="localdata.form.priced">
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
      <div class="modal-content" >
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
                <button class="btn btn-primary">确认充值</button>
                <button class="btn btn-default m-l"  @click="alipay=3">返回</button>
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
        'priced':''
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
      alipay: '2'
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
        // console.log(obj)
      })
    }
  }
}
</script>

