<template>
    <div id="page-wrapper">
        <lb-breadcrumb>
        </lb-breadcrumb>
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