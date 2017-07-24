<template>
    <div class="angular-ui-tree">
        <ul class="list-unstyled ng-pristine ng-untouched ng-valid angular-ui-tree-nodes">
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
