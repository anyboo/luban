<template>
    <div class="ng-scope angular-ui-tree">
        <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes">
            <template v-for="item in getTreeData">
                <lb-listtree-item :tree-item="item">
                </lb-listtree-item>
            </template>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'LbListtree',
    props: ['treeData'],
    data() {
        let localdata = {
            'form': {

            }
        }
        return {
            localdata,
            model: 'cate',
            lb_tables: ['cate']
        }
    },
    methods: {
        addRoot() {
            let vm = this
            vm.modalsType = vm.types.APPEND_API
            vm.localdata.form =  {
                name: '',
                pid: '',
                save: false
            }
            vm.handleSave().then(() => {
                vm.handleGetTable()
            }, (e) => {
                console.log(e)
            })
        },
    },
    computed: {
        getTreeData() {
            return this.lodash.filter(this.$store.state.models.models.cate.data, function(o) {
                return o.pid == ''
            })
        }
    },
}
</script>
