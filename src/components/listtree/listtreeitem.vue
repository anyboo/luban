<template>
    <li class="ng-scope angular-ui-tree-node" :collapsed="collapsed">
        <div class="tree-node tree-node-content ng-scope angular-ui-tree-handle">
            <div class="tree-node-content">
                <a class="btn btn-default btn-xs" @click="collapsed=!collapsed">
                    <i class="fa fa-minus-square-o" :class="{'fa-plus-square-o':collapsed,'fa-minus-square-o':!collapsed}"></i>
                </a>
                <input class="va-m ng-pristine ng-valid ng-scope ng-touched" type="text" v-model="treeItem.name" @input="handleChange">
                <a class="btn btn-primary btn-xs m-l-xs ng-scope" data-nodrag="" @click="save_cate" v-if="change" tooltip="保存">
                    <i class="fa fa-check" ng-show="!node._saving"></i>
                </a>
                <a class="pull-right btn btn-danger btn-xs" tooltip="删除" @click="remove_cate"><i class="fa fa-times"></i></a>
                <a class="pull-right btn btn-info btn-xs m-r-xs" tooltip="新增" @click="addItem"><i class="fa fa-plus"></i></a>
            </div>
        </div>
        <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" :class="{hidden: collapsed}">
            <template v-for="item in getTreeData">
                <lb-listtree-item :tree-item="item">
                </lb-listtree-item>
            </template>
        </ul>
    </li>
</template>
<script>
export default {
    name: 'LbListtreeItem',
    props: ['treeData', 'treeItem'],
    data() {
        let lb_localdata = {
            'form': {

            }
        }
        return {
            lb_localdata,
            collapsed: false,
            change: this.treeItem.save ? !this.treeItem.save : true,
            model: 'cate',
            lb_tables: ['cate']
        }
    },
    methods: {
        handleChange() {
            this.change = true
        },
        remove_cate() {
            let vm = this
            this.$confirm('删除分类, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleDelete(vm.treeItem._id).then(() => {
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
        save_cate() {
            let vm = this
            if (vm.treeItem) {
                if (vm.treeItem._id) {
                    vm.setEditModle(vm.treeItem._id)
                    vm.lb_localdata.form = vm.lodash.assign(vm.lb_localdata.form, vm.treeItem)
                } else {
                    vm.modalsType = vm.types.APPEND_API
                    vm.lb_localdata.form = vm.lodash.assign(vm.lb_localdata.form, vm.treeItem)
                }
                vm.lb_localdata.form.save = true
                vm.handleSave().then(() => {
                    //vm.treeItem = data
                    vm.change = false
                    vm.handleGetTable()
                }, (e) => {
                    console.log(e)
                })
            }
        },
        addItem() {
            let vm = this

            if (vm.treeItem && vm.treeItem._id) {
                vm.modalsType = vm.types.APPEND_API
                vm.lb_localdata.form = {
                    name: '',
                    pid: vm.treeItem._id,
                    save: false
                }
                vm.handleSave().then(() => {
                    vm.handleGetTable()
                }, (e) => {
                    console.log(e)
                })
            }
        },
    },
    computed: {
        getTreeData() {
            let vm = this
            if (vm.treeItem && vm.treeItem._id) {
                return vm.lodash.filter(this.$store.state.models.models.cate.data, function(o) {
                    return o.pid == vm.treeItem._id
                })
            }
            return []
        }
    },
}
</script>
