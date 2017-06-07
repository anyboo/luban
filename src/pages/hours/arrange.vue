<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class=" wrapper panel panel-default ng-scope">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="padder">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                       
                                    </div>
                                   
                                    <span class="input-group-btn">
                                <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status" @input="handleSearch"></lb-buttongroup>
                        <lb-buttongroup :group-data="localdata.view_mode" v-model="localdata.form.view_mode"></lb-buttongroup>
                        <button class="btn btn-default ng-isolate-scope">
                            <i class="glyphicon glyphicon-export"></i>导出Excel
                        </button>
                        <a @click="lbShowdialog($event,'lb-trash')" :class="{result:refreshData}">
                            <i class="icon-lock"></i>已封存档案
                        </a>
                    </div>
                </div>
                <div class=" list-student ">
                    <div class="row ng-scope" v-if="localdata.form.view_mode == 'image'">
                       
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>
<script>
export default {
    name: 'arrange',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
