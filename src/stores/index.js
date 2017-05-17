import Vue from 'vue'
import Vuex from 'vuex'
import model from './modules/model'
import dailoglist from './modules/dialog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        models: model,
        dialogs: dailoglist
    }
})
