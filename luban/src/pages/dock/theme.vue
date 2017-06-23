<template>
    <div class="hte-settings-panel hte-webkit-scrollbar">
        <div class="hte-settings-inner">
            <ul class="nav nav-tabs  nav-justified">
                <li class="active" style="height:47px;" @click="cut=0">
                    <a href="#theme" data-toggle="tab">
                        <h4 class="main" style="color:white;font-size:18px;border-bottom:2px solid white;line-height:47px">主题</h4>
                    </a>
                </li>
                <li style="height:47px;">
                    <a href="#wallpaper" data-toggle="tab" @click="cut=1">
                        <h4 class="main" style="color:white;font-size:18px;;border-bottom:2px solid white;line-height:47px">壁纸</h4>
                    </a>
                </li>
            </ul>
            <div>
                <div class="tab-pane fade hte-wallpaper-list active in" id="wallpaper" v-if="cut==1">
                    <ul class="bg-size">
                        <li class="wallpaper-actions">
                            <div style="width:100%" class="jl"> </div>
                        </li>
                        <li>
                            <img src="/assets/wallpager/10.jpg">
                        </li>
                        <li>
                            <img src="/assets/wallpager/11.jpg">
                        </li>
                        <li>
                            <img src="/assets/wallpager/cloud.jpg">
                        </li>
                        <li>
                            <img src="/assets/wallpager/wood.jpg">
                        </li>
                        <li>
                            <img src="/assets/wallpager/Yuanye.jpg">
                        </li>
                        <li>
                            <img src="/assets/wallpager/13.jpg" style="margin-bottom:40px;">
                        </li>
                    </ul>
                </div>
                <div v-if="cut==0">
                    <ul class="list-group bgc">
                        <li class="list-group-item" style="background-color: rgb(31,91,183);" ></li>
                        <li class="list-group-item" style="background-color: rgb(89,183,40);;"></li>
                        <li class="list-group-item" style="background-color: rgb(155,29,171);"></li>
                        <li class="list-group-item" style="background-color: rgb(204,53,53);"></li>
                        <li class="list-group-item" style="background-color: rgb(208, 150, 21);"></li>
                        <li class="list-group-item" style="background-color: rgb(84, 74, 74);"></li>
                        <li class="list-group-item" style="background-color: rgb(47, 128, 82);"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.wallpaper-actions .btn-pulls {
    float: left;
    position: relative;
    left: -100px;
}
.bg-size li {
    list-style-type: none;
}
.wallpaper-actions .jl {
    margin-top: 10px;
    margin-bottom: 10px;
}
.bg-size img {
    display: block;
    height: auto;
    max-width: 100%;
    line-height: 1;
    padding: 5px;
}

.hte-wallpaper-list>ul {
    padding-right: 10px;
    position: relative;
    width: 100%;
    padding: 20px;
    overflow-y: scroll;
    height: 100%;
}
.bgc li{
    height: 60px;


    margin-top: 2.5px;
    margin-bottom: 2.5px;
    border:2px solid white;
}
.bgc{
    margin-top: 20px;
}
.hte-settings-panel {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0px 20px 10px 20px;
}
.hte-settings-inner {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.nav-tabs.nav-justified {
    width: 100%;
    border-bottom: 0;
}
.nav-justified li{
    margin-left: 80px;
}

</style>
<script>
export default {
    name: 'theme',
    data() {
        let localdata = {}
        return {
            localdata,
            loginstaus: 0,    //1登录,0注册 2.用户信息
            cut: 0
        }
    }
}

</script>