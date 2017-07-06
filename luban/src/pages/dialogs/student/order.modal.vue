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
                    <h3 class="modal-title" style="font-size:16px;position: relative;top: -6px;">
                        <i class="fa fa-shopping-cart"></i>学员
                        <span class="label  ng-binding">{{localdata.form.student_name }}</span>报名&缴费
                    </h3>
                </div>
                <component v-bind:is="currentView"></component>
            </div>
        </div>
    </div>
</template>
<style >
.modal-header {
    border-bottom: 1px solid #eee;
    color: #fff;
    position: relative;
    background: #1892d1;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    min-height: 42px;
    height: 0px;
}

.modal-body {
    max-height: 700px !important;
    overflow-y: auto;
    overflow-x: hidden;
}

.modal-body {
    position: relative;
    padding: 5px;
}
.padder-v {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}

.block {
    display: block;
}



.item {
    position: relative;
}

.panel {
    border-radius: 1px;
}


.font-thin {
    font-weight: 300;
}

.block {
    display: block;
}

.text-white {
    color: #fff;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    -webkit-font-smoothing: antialiased;
    text-rendering: auto;
    -moz-osx-font-smoothing: grayscale;
}
.bg-warning .text-muted {
    color: #fbe9cf!important;
      cursor: grab;
    cursor: -webkit-grab;
}
.no-gutter [class*="col"] {
    padding: 0;
}






.bg-olive {
    background-color: #3d9970!important;
}



.bg-orange {
    background-color: #ff851b!important;
}


.block {
    display: block;
}

.bg-warning {
    color: #fffffe;
    background-color: #faa937;
}
</style>
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
