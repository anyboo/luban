<template>
    <div class="lbHeader">
        <div class="lbHeader_container">
            <div class="firstModule">
                <i class="fa fa-bars" @click='variety()'></i>
                <div class='menu' @click='handleClickShow()'>
                    <img src="/assets/images/a0.jpg">&nbsp;
                    <b>luban</b>
                    <i class="fa fa-sort-desc"></i>
                    <ul class="menuShow" :class="{'dispalyShow':toShow,'displayNone':!toShow}">
                        <li>
                            <i class="fa fa-user"></i>
                            个人资料
                        </li>
                        <li>
                            <i class="fa fa-lock"></i>
                            锁屏
                        </li>
                        <li>
                            <i class="fa fa-key"></i>
                            退出
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bodyTitle">22</div>
        </div>
    </div>
</template>
<style>
.lbHeader_container {
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1px;
}

.bodyTitle {
    background: #ffffff;
    border-bottom: 1px solid rgb(217, 219, 222);
}

.firstModule {
    background: rgb(42, 59, 76);
}

.fa-bars {
    font-size: 18px;
    margin-top: 3px;
    overflow: hidden;
    height: 12px;
    padding: 15px 20px;
    background: rgb(42, 59, 76);
    border: 0;
    color: #ffffff;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.fa-bars:hover {
    color: #e74c3c;
}

.menu {
    display: inline-block;
    width: 92px;
    height: 30px;
    padding: 10px 15px;
    float: right;
    border: 0;
    background: rgb(42, 59, 76);
    cursor: pointer;
}

.menu:hover {
    background: #33485c;
}

.menu img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.menu b {
    display: inline-block;
    background: rgb(42, 59, 76);
    font-weight: 900;
    color: #ffffff;
    position: relative;
    top: -6px;
    left: -5px;
}

.fa-sort-desc {
    padding: 0 1px 4px 0;
    position: relative;
    top: -8px;
    left: -5px;
    margin: 0;
    color: white
}

.menu:hover b {
    background: #33485c;
}

.menu:hover .fa-sort-desc {
    background: #33485c;
    ;
}

.menuShow {
    width: 160px;
    height: 114px;
    position: absolute;
    top: 51px;
    right: 0px;
    margin: 0;
    padding: 0;

    background-color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}

.dispalyShow {
    display: block;
}

.displayNone {
    display: none;
}

.menu li {
    width: 100%;
    height: 18px;
    padding: 10px;
    font-size: 13px;
    color: #777777;
}

.menu li:hover {
    background: #f7f7f8;
}
</style>
<script>

export default {
    name: 'header',
    data() {
        return {
            toShow: false
        }
    },
    methods: {
        variety() {
            this.$emit('variety')
        },
        handleClickShow() {
            this.toShow = !this.toShow
        }
    }
}
</script>