<template>
    <li>
        <a @click="handleClick" :id="id">
            <i :class="icon" v-if="icon"></i>{{text}}
        </a>
    </li>
</template>
<script>
export default {
    name: 'LbDropdownMenuItem',
    props: ['url', 'icon', 'text', 'id'],
    data() {
        return {
        }
    },
    methods: {
        handleClick() {
            this.handleShowDialog(this.url)
        }
    },
    computed: {},
}
</script>
