<template>
    <li @click="handleClick" class="ng-scope" :class="{'active':active}">
        <a class="auto ng-scope active" @click="handleRouter($event,menu)">
            <span class="pull-right text-muted active" v-if="menu.menu">
                <i class="fa fa-fw fa-angle-right text"></i>
                <i class="fa fa-fw fa-angle-down text-active active"></i>
            </span>
            <i class="fa fa-users" :class="menu.menuIcon" v-if="menu.menuIcon"></i>
            <span class="font-normal ng-binding">{{menu.menuTitle}}</span>
        </a>
        <ul class="nav nav-sub dk ng-scope active" style="top: auto; bottom: auto;">
            <template v-for="item in menu.menu">
                <li class="ng-scope active">
                    <a @click="handleRouter($event,item)">
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
        let localdata = {}
        return {
            localdata,
            active: true
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.active = !this.active
        },
        handleRouter(event, item) {
            this.$store.state.envs.currMenu = item.menuTitle
            if (item.to) {
                this.$router.push(item.to)
                event.stopPropagation()
            }
        }
    }
}
</script>
