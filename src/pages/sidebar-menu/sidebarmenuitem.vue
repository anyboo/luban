<template>
    <li @click="handleClick" class="ng-scope" :class="{'active':active}">
        <a class="auto ng-scope">
            <span class="pull-right text-muted">
                <i class="fa fa-fw fa-angle-right text"></i>
                <i class="fa fa-fw fa-angle-down text-active"></i>
            </span>
            <i class="fa fa-users" :class="menu.menuIcon" v-if="menu.menuIcon"></i>
            <span class="font-normal ng-binding">{{menu.menuTitle}}</span>
        </a>
        <ul class="nav nav-sub dk ng-scope">
            <template v-for="item in menu.menu">
                <li class="ng-scope">
                    <a @click="handleRouter($event,item.to)">
                        <span class="ng-binding">{{item.menuTitle}}</span>
                    </a>
                </li>
            </template>
        </ul>
    </li>
</template>
<script>
export default {
    name: 'sidebarmenuitem',
    props: ['menu'],
    data() {
        return {
            active: false
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.active = !this.active
        },
        handleRouter(event, to) {
            this.$router.push(to)
            event.stopPropagation()
        }
    }
}
</script>