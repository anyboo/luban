<template>
    <div id="title-breadcrumb-option-demo" class="page-title-breadcrumb">
        <div class="page-header pull-left">
            <div class="page-title">菜单</div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<script>
import breadcrumb from './breadcrumb.vue'

export default {
    name: 'breadcrumb',
    data() {
        let localdata = {}
        return {
            localdata
        }
    },
    components: {
        'lb-breadcrumb': breadcrumb
    },
}
</script>