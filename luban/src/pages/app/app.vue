<template>
    <div class="pace-done">
        <lb-web></lb-web>
    </div>
</template>
<style>
.changemode {
    position: fixed;
    top: 0;
    left: 0;
    width: 180px;
    z-index: 2000;
}
</style>
<script>
import web from '~/pages/web/app/app.vue'
export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            isvariety: false,
        }
    },
    components: {
        'lb-web': web
    },
    computed: {},
    watch: {
        '$route.path': {
            handler(val) {
            }
        }
    },
    methods: {
    }
}
</script>
