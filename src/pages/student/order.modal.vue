<template>
    <div>
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude>
                <div oc-lazy-load="['js/modules/order.js?v=2','xeditable']" class="ng-scope"></div>
                <div class="modal-header ng-scope">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-shopping-cart"></i>学员
                        <span class="label bg-info ng-binding">{{lb_localdata.form.student_name }}</span>报名&缴费
                    </h3>
                </div>
                <component v-bind:is="currentView"></component>
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
    name: 'order',
    data() {
        let lb_localdata = {
            'form': {
                'student_name': '',
            }
        }
        return {
            lb_localdata,
            currentView: 'lb-ordermain'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.lb_localdata.form = this.lodash.assign(this.lb_localdata.form, this.$store.state.dialogs.dailogdata)
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
