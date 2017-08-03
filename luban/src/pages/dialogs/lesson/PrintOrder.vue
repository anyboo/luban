<template>
    <div class="modal-dialog modal-lg">
        <div class="modal-content" modal-transclude>
            <div class="print">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="icon-printer"></i>打印订单号
                        <span class="label bg-info ng-binding">{{ order.order_no}}</span>
                        的收据</h3>
                </div>
    
                <div class="modal-body">
                    <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column label="缴费日期">
                            <template scope="scope">{{}}</template>
                        </el-table-column>
                        <el-table-column prop="name" label="缴费金额">
                        </el-table-column>
                        <el-table-column prop="address" label="付款方式">
                        </el-table-column>
                        <el-table-column prop="address" label="收据">
                        </el-table-column>
                    </el-table>
                </div>
    
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">
                        <i class="icon fa fa-print"></i>
                        打印</button>
                    <button type="button" class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
            <div id="print_area" style="display: none">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PrintOrder',
    data() {
        let localdata = {}
        return {
            localdata,
            multipleSelection: [],
            order: {},
        }
    },
    mounted() {
        let vm = this
        if (vm.$store.state.dialogs.dailogdata) {
            vm.order = vm.$store.state.dialogs.dailogdata
            vm.localdata.form.order_id = vm.order._id
            vm.localdata.form.student_id = vm.order.student_id
            vm.localdata.form.class_id = vm.order.class_id
            vm.localdata.form.money_pay_amount = vm.order.unpay_amount
            vm.localdata.form.balance_pay_amount = 0


            vm.handleGetTableID('student', vm.order.student_id).then((obj) => {
                if (obj.data && obj.data.length > 0) {
                    vm.currStudent = obj.data[0]
                    if (this.order.order_type != 2) {
                        vm.localdata.form.balance_pay_amount = Number(vm.currStudent.amount)
                        if (vm.localdata.form.balance_pay_amount > vm.localdata.form.money_pay_amount) {
                            vm.localdata.form.balance_pay_amount = vm.localdata.form.money_pay_amount
                            vm.localdata.form.money_pay_amount = 0
                        }
                    }
                }
            })
        }
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>
