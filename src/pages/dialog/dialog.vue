<template>
    <div>
        <div class="modal-backdrop fade  in" style="z-index: 1040;"></div>
        <div tabindex="-1" role="dialog" class="modal fade ng-isolate-scope in" ng-click="close($event)" modal-window="" size="md" index="0" animate="animate" style="z-index: 1050; display: block;">
             <slot>sdfsf</slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dialog',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
