<template>
    <li @click="handerClick" class="ng-scope" :class="{'active':active}">
        <a class="auto ng-scope">
            <span class="pull-right text-muted">
                <i class="fa fa-fw fa-angle-right text"></i> 
                <i class="fa fa-fw fa-angle-down text-active"></i>
            </span>
            <i class="fa fa-users" :class="menu.menuIcon"></i>
            <span class="font-normal ng-binding">{{menu.menuTitle}}</span>
        </a>
        <ul class="nav nav-sub dk ng-scope">
            <template v-for="item in menu.menu">
                <li class="ng-scope">
                    <a href="#/student/add"><span class="ng-binding">{{menu.menuTitle}} </span></a>
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
    computed: {
    },
    watch: {},
    methods: {
        handerClick() {
            console.log(this.menu)
            this.active = !this.active
        }
    }
}
</script>
