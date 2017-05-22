<template>
    <div class="btn-group m-l-xs ng-scope">
        <input type="hidden" :value="groupvalue" :name="name" :id="name" />
        <template v-for="item in groupData">
            <lb-buttongroup-item :iclass='item.iclass' :itext='item.text' :ivalue='item.value' :iactive='item.value==value' @selected="handleSelected"></lb-buttongroup-item>
        </template>
    </div>
</template>
<script>
import buttongroupitem from './buttongroupitem.vue'

export default {
    name: 'LbButtongroup',
    props: ['groupData', 'name', 'value'],
    data() {
        return {
            groupvalue: this.value
        }
    },
    components: {
        'lb-buttongroup-item': buttongroupitem
    },
    methods: {
        handleSelected(value) {
            this.groupvalue = value
            this.$emit('input', value)
        }
    },
    computed: {},
}
</script>
