<template>
    <div id="page-wrapper">
        <lb-breadcrumb>
        </lb-breadcrumb>
        <slot></slot>
    </div>
</template>
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