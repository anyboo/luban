<template>
    <div class='margins-tops'>
        <template v-for="item in menu">
            <lb-icon :icondata="item"></lb-icon>
        </template>
    </div>
</template>
<style>
.margins-tops {
    margin-top: 4.3rem;
}
</style>
<script>
import menu from '~/stores/menu'
import icon from './icon.vue'
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata,
            Array: '',
            menu
        }
    },
    components: {
        'lb-icon': icon
    }
}
</script>
