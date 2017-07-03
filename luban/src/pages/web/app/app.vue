<template>
    <div>
        <lb-header></lb-header>
    </div>
</template>
<style>

</style>
<script>
import '~/styles/webmain.css'
import header from './header.vue'

export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    components: {
        'lb-header': header,
    },
    methods: {
        handleClick() {
            this.$emit('dockhidden')
        }
    }
}
</script>
