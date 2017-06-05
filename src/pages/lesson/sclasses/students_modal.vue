<template>
    <div>
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude="">
                <div oc-lazy-load="['js/modules/sclasses.js']" class="ng-scope"></div>
                <div ng-controller="SclassStudentsCtl" class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" @click="lbClosedialog($event)"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                        <h3 class="modal-title ng-binding"><i class="icon-user"></i>高中五班 学员管理</h3>
                    </div>
                    <component v-bind:is="currentView">
                    </component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import main from './main.vue'
import management from './management.vue'
export default {
    name: 'students_modal',
    data() {
        let localdata = {}
        return {
            localdata,
            currentView: 'lb-main'
        }
    },
    components: {
        'lb-main': main,
        'lb-management': management

    },
    computed: {},
    watch: {},
    methods: {
        switchPage(page) {
            this.currentView = page
        }
    }
}
</script>
