<template>
    <div class="lbHeader">
        <div class="lbHeader_container">
            <div class="firstModule">
                <i class="fa fa-bars" @click='variety()'></i>
                <div class='menu' @click='handleClickShow()'>
                    <img src="/assets/images/a0.jpg">
                    <b>luban</b>
                    <span class="cart"></span>
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
            <div class="bodyTitle">
                {{getCurrMenu}}
            </div>
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
    padding: 5 20px;
    font-size: 25px;
}

.firstModule {
    background: rgb(42, 59, 76);
    height: 49px;
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
    padding: 10px 15px;
    float: right;
    border: 0;
    background: rgb(42, 59, 76);
    cursor: pointer;
    color: white;
}

.menu:hover {
    background: #33485c;
}

.menu img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;
}

.menu b {
    display: inline-block;
    background: rgb(42, 59, 76);
    position: relative;
}

.cart {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}

.menu:hover b {
    background: #33485c;
}

.menuShow {
    width: 160px;
    height: 114px;
    position: absolute;
    top: 49px;
    right: 0px;
    margin: 0;
    padding: 0;
    background-color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    z-index: 1;
}

.dispalyShow {
    display: block;
}

.displayNone {
    display: none;
}

.menu li {
    width: 100%;
    padding: 8px;
    color: #777777;
    font-size: 13px;
}

.menu li i {
    width: 16px;
}

.menu li:hover {
    background: #f7f7f8;
}
</style>
<script>
import menu from '~/stores/menu.js'
export default {
    name: 'header',
    data() {
        return {
            toShow: false
        }
    },
    computed: {
        getCurrMenu() {
            var menuName = ''
            let to = this.$store.state.system.router
            for (var item of menu) {
                if (item.to == to) {
                    menuName = item.menuTitle
                    break
                } else {
                    if (item.menu) {
                        for (var subitem of item.menu) {
                            if (subitem.to == to) {
                                menuName = subitem.menuTitle
                                break
                            }
                        }
                    }
                }
            }
            if (to == '/' || to == '/web') {
                menuName = '档案录入'
            }
            return menuName
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