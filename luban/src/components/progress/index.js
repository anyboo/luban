import LbProgress from './progress.vue'

/* istanbul ignore next */
LbProgress.install = function(Vue) {
    Vue.component(LbProgress.name, LbProgress)
}

export default LbProgress