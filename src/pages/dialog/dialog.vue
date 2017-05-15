<template>
    <div tabindex="-1" role="dialog" class="modal fade ng-isolate-scope in" modal-window="" size="md" index="0" animate="animate" :style="{ 'z-index': zindex, 'display': 'block'}">
        <slot>未加载</slot>
    </div>
</template>
<script>
export default {
    name: 'dialog',
    props: ['zindex'],
    data() {
        return {

        }
    },
    computed: {

    },
    watch: {},
    methods: {

    }
}
</script>