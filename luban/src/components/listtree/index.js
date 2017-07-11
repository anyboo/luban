import LbListTree from './listtree.vue'
import LbListtreeItem from './listtreeitem.vue'

LbListTree.install = function(Vue) {
    Vue.component(LbListTree.name, LbListTree)
}

export default {LbListTree,LbListtreeItem}
