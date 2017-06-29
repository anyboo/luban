<template>
    <div>
        <p class="changemode">
            <router-link to="/web">web模式</router-link>
            <router-link to="/window">Window模式</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<style>
.changemode {
    position: fixed;
    top: 0;
    left: 0;
    width: 180px;
    z-index: 100;
}
</style>
<script>
export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {
    },
    watch: {
        '$route.path': {
            handler(val) {
                console.log(val)
            }
        }
    },
    methods: {
    }
}
</script>
