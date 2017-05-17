<template>
    <div class="btn-group m-l-xs ng-scope">
        <template v-for="item in groupData">
            <label class="btn btn-default ng-pristine ng-untouched ng-valid ng-binding ng-scope">
                <i :class='item.iclass' v-if="item.iclass"></i>{{item.text}}
            </label>
        </template>
    </div>
</template>
<script>
export default {
    name: 'LbButtongroup',
    props: ['groupData'],
    data() {
        return {
            open: false
        }
    },
    methods: {
        handleOpen() {
            this.open = true
        },
        handleClose() {
            this.open = false
        }
    },
    computed: {},
}
</script>
