<template>
    <div id="page-wrapper" >
        <lb-breadcrumb>
        </lb-breadcrumb>
        <div class="fatherContaiter">
            <div class="bottoms">
                <slot></slot>
            </div>
        </div>
        
    </div>
</template>
<style>
.fatherContaiter{
    overflow: auto;
    height: 100%;
}
.bottoms{
    margin-bottom: 100px;
}
</style>
<script>
import breadcrumb from './breadcrumb.vue'

export default {
    name: 'body',
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