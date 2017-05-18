<template>
    <div>
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude="">
                <div oc-lazy-load="['js/modules/order.js?v=2','xeditable']" class="ng-scope"></div>
                <div class="modal-header ng-scope">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-shopping-cart"></i>学员
                        <span class="label bg-info ng-binding">威锋</span>报名&缴费
                    </h3>
                </div>
                <component v-bind:is="currentView">
                </component>
            </div>
        </div>
    </div>
</template>
<script>
import cc from './classclass.vue'
import onetone from './onetone.vue'
import ch from './classhours.vue'
import storedValue from './storedvalue.vue'
import miscellaneousFees from './miscellaneousfees.vue'
import ordermain from './ordermain.vue'
export default {
    name: 'order.modal',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
            currentView: 'lb-ordermain'
        }
    },
    components: {
        'lb-cc': cc,
        'lb-onetone': onetone,
        'lb-ch': ch,
        'lb-storedValue': storedValue,
        'lb-miscellaneousFees': miscellaneousFees,
        'lb-ordermain': ordermain
    },
    watch: {},
    methods: {
        switchPage(page) {
            this.currentView = page
        }
    }
}
</script>
