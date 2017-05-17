<template>
    <label class="btn btn-default ng-pristine ng-untouched ng-valid ng-binding ng-scope" @click="handleClick" :class="{'active':active}">
        <i :class='iclass' v-if="iclass"></i>{{itext}}
    </label>
</template>
<script>
export default {
    name: 'LbButtongroupItem',
    props: ['iclass', 'itext', 'ivalue'],
    data() {
        return {
            active: false
        }
    },
    methods: {
        handChange() {
            this.active = false
        },
        handleClick() {
            this.active = true
            let uid = this._uid
            if (this.active) {
                this.$parent.$children.forEach(child => {
                    if (child._uid !== uid) {
                        if (typeof(child.handChange) == 'function')
                            child.handChange()
                    }
                })
            }
            this.$emit('selected', this.ivalue)
        }
    },
    computed: {},
}
</script>
