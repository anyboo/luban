<template>
    <div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="ng-scope"></div>
                <div class="modal-header ng-scope">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-shopping-cart"></i>学员
                        <span class="label bg-info ng-binding">{{localdata.form.student_name }}</span>报名&缴费
                    </h3>
                </div>
                <component v-bind:is="currentView"></component>
            </div>
        </div>
    </div>
</template>
<script>
import cc from './classclass.vue'
import storedValue from './storedvalue.vue'
import miscellaneousFees from './miscellaneousfees.vue'
import ordermain from './ordermain.vue'

export default {
    name: 'order',
    data() {
        let localdata = {
            'form': {
                'student_name': '',
            }
        }
        return {
            localdata,
            currentView: 'lb-ordermain'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
    },
    components: {
        'lb-cc': cc,
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
