<template>
    <div class="hte-dock-body">
        <div class="hte-overview hte-webkit-scrollbar">
            <div class="hte-overview-inner">
                <div class="hte-overview-content">
                    <template v-for="item in menu">
                        <div class="hte-overview-group hte-overview-item">{{item.menuTitle}}</div>
                        <template v-for="sub in item.menu">
                            <div  class="hte-overview-app hte-overview-item">
                                <div class="hte-overview-app-icon"><img src="images/apps/icons/adf28bd452ff464a0152ff4ab9320000.png"></div>
                                <div class="hte-overview-app-name">{{sub.menuTitle}}</div>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.hte-profile {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 10px 20px 20px 20px;
}

.hte-profile-inner {
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
    line-height:
}

.hte-profile-footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 0px;
    z-index: 1;
    width: 100%;
}

.hte-profile-action {
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 6px;
}

.hte-profile-action .glyphicon {
    font-size: 20px;
}

.hte-profile-action>a {
    width: 100%;
    color: #fff;
    line-height: 1.5;
}

.hte-profile-content {
    padding-bottom: 85px;
    height: 100%;
    position: relative;
}

.hte-profile-panel {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 80px;
    width: 100%;
    display: none;
    overflow: auto;
}

.hte-profile-panel.active {
    display: block;
}

.hte-profile-face>img {
    max-height: 120px;
    max-width: 120px;
}

.hte-dock-animate {
    -webkit-transition: all .2s;
    -webkit-transition-delay: 0;
    transition: all .2s;
    transition-delay: 0;
    -ms-transition: all .2s;
    -ms-transition-delay: 0;
    -webkit-transition-timing-function: ease-out;
}

.hte-dock-transform {
    transform: translate3d(600px, 0px, 0px);
}

.hte-dock {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    background-color: rgba(208, 150, 21, 0.98);
    z-index: 1000;
    overflow: hidden;
    padding: 0px;
    box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.2);
}

.hte-dock-inner {
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
}

.hte-dock-header {
    position: absolute;
    padding-left: 20px;
    z-index: 1;
    top: 0px;
}

.hte-dock-body {
    height: 100%;
    width: 100%;
    position: relative;
}

.hte-dock-close-btn {
    cursor: pointer;
    display: inline-block;
}

@media screen and (min-width: 680px) {
    .hte-dock-close-btn {
        display: none;
    }
}

.hte-dock-close-btn:hover {
    color: #ccc;
}

.smaller {
    width: 32px;
    height: 32px;
    display: inline-block;
    text-align: right;
    margin-right: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    font-family: 'Microsoft YaHei', 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', Tahoma, 'Hiragino Sans GB', STHeiti;
}

.h1,
.h2,
.h3,
h1,
h2,
h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}

.h3,
h3 {
    font-size: 24px;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow:
}

input,
.btn,
.form-control,
.input-group-addon {
    border-radius: 0px;
}

.hte-webkit-scrollbar::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.1);
}

.hte-overview {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
    padding: 10px 20px 30px 20px;
}

.hte-overview-inner {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.hte-overview-group {
    padding: 8px 5px;
    font-size: 13pt;
    cursor: default;
    border-bottom: 1px solid #fff;
    margin-bottom: 5px;
}

.hte-overview-item {
    width: 100%;
    height: 40px;
    vertical-align: top;
}

.hte-overview-app-name {
    height: 100%;
    width: 100%;
    padding-left: 40px;
    line-height: 32px;
    font-size: 13px;
    text-align: left;
}

.hte-overview-app-icon {
    position: absolute;
    width: 32px;
    height: 32px;
    top: 100pxpx;
    left: 4px;
    background-color: rgba(0, 0, 0, 0.2);
}

.hte-overview-app-icon img {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 5px;
    left: 5px;
}

.hte-overview-app {
    padding: 5px;
    font-size: 13px;
    cursor: pointer;
    position: relative;
}
</style>
<script>
import menu from '~/stores/menu'
export default {
    name: 'management',
    data() {
        let localdata = {}
        return {
            localdata,
            loginstaus: 0,
            menu
        }
    },



}
</script>
