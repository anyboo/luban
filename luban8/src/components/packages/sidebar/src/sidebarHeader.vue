<template>
    <div class="lbSdebarHeader">
        <img src='/assets/images/logo.png'>
        <span class='logo-text'>鲁班</span>
    </div>
</template>
<style>
.lbSdebarHeader {
    width: 100%;
    height: 26px;
    padding: 12px 0;
    background: #2f4355;
    line-height: 20px;
}
.lbSdebarHeader img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
}
.logo-text {
    font-size: 18px;
    color: white;
    font-weight: 700;
    position: relative;
    left: 4px;
    top: -4px;
}
</style>
<script>
export default {
    name: 'sidebarHeader',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>