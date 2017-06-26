<template>
    <div class="settings-panel lb-webkit-scrollbar">
        <div class="settings-inner">
            <ul class="nav nav-tabs messager-nav nav-justified">
                <li class="">
                    <a href="#"  @click="cut=0">
                        <h4>主题</h4>
                    </a>
                </li>
                <li class="active">
                    <a href="#" @click="cut=1">
                        <h4>壁纸</h4>
                    </a>
                </li>
            </ul>
            <div class="tab-content" style="height: 100%" >
                <div class="tab-pane fade theme-list " :class="{active:cut==1}"   v-if="cut==1">
                    <div class="hte-theme-item" style="background-color: rgb(31,91,183);" data-theme="blue"></div>
                    <div class="hte-theme-item" style="background-color: rgb(89,183,40);" data-theme="green"></div>
                    <div class="hte-theme-item" style="background-color: rgb(155,29,171);" data-theme="purple"></div>
                    <div class="hte-theme-item" style="background-color: rgb(204,53,53);" data-theme="red"></div>
                    <div class="hte-theme-item" style="background-color: rgb(208, 150, 21);" data-theme="orange"></div>
                    <div class="hte-theme-item" style="background-color: rgb(84, 74, 74);" data-theme="gray"></div>
                    <div class="hte-theme-item" style="background-color: rgb(47, 128, 82);" data-theme="cyan"></div>
                </div>
                <div class="tab-pane fade wallpaper-list "  :class="{active:cut==0}"  v-if="cut==0">
                    <ul>
                        <li>
                            <img src="/assetsimages/wallpaper/10.jpg">
                        </li>
                        <li>
                            <img src="/assetsimages/wallpaper/11.jpg">
                        </li>
                        <li>
                            <img src="/assetsimages/wallpaper/cloud.jpg">
                        </li>
                        <li>
                            <img src="/assetsimages/wallpaper/wood.jpg">
                        </li>
                        <li>
                            <img src="/assetsimages/wallpaper/Yuanye.jpg">
                        </li>
                        <li>
                            <img src="/assetsimages/wallpaper.jpg">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.lb-webkit-scrollbar ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: rgba(255,255,255,0.1);
}
.lb-webkit-scrollbar ::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.2);
}
.lb-webkit-scrollbar ::-webkit-scrollbar-track {
    background-color: rgba(255,255,255,0.1);
}

.wallpaper-list {
    position: relative;
    padding-bottom: 60px;
    height: 100%;
}

.wallpaper-list>ul {
    padding-right: 10px;
    position: relative;
    width: 100%;
    padding: 2px;
    overflow-y: scroll;
    height: 100%;
}

.wallpaper-list>ul>li {
    list-style: none;
    margin: 10px 0px;
    display: block;
    position: relative;
}

.wallpaper-list>ul>li>img {
    display: block;
    height: auto;
    max-width: 100%;
    line-height: 1;
}

.wallpaper-list>ul>li:hover {
    outline: 1px solid #FFF;
    -moz-box-shadow: 0 0 5px #CCC;
    -webkit-box-shadow: 0 0 5px #CCC;
    box-shadow: 0 0 5px #CCC;
}

.wallpaper-list>ul>.wallpaper-actions {
    outline: none !important;
    box-shadow: none !important;
}

.wallpaper-list>ul>li:first-child {
    margin-top: 0px;
}

.wallpaper-list>ul>li:last-child {
    margin-bottom: 0px;
}

.theme-list {
    padding: 0px 2px 60px;
    position: relative;
    height: 100%;
    overflow: auto;
}

.theme-list>.theme-item {
    outline: 2px solid #FFF;
    display: inline-block;
    height: 60px;
    width: 100%;
    margin: 5px 0px;
    cursor: pointer;
    -webkit-transition: all .25s;
    -webkit-transition-delay: 0;
    transition: all .25s;
    transition-delay: 0;
    -ms-transition: all .25s;
    -ms-transition-delay: 0;
}

.theme-list>.theme-item:hover {
    outline: 2px solid #ccc;
    box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.2);
    opacity: 0.7;
}


.settings-panel {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0px 20px 10px 20px;
}

.settings-inner {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.settings-panel .nav-tabs>li {
    display: table-cell;
   
}

.settings-panel .nav-tabs>li.active>a,
.settings-panel .nav-tabs>li.active>a:hover,
.settings-panel .nav-tabs>li.active>a:focus {
    background-color: transparent;
    border: none;
    color: #fff;
    border-bottom: 3px solid #fff;
}

.settings-panel .nav-tabs>li>a {
    background-color: transparent;
    border: none;
    color: #fff;
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 0px;
}

.settings-panel .nav-tabs>li>a:HOVER {
    background-color: transparent;
    border-bottom: 3px solid #ccc;
}

.settings-panel .nav-tabs.nav-justified>li>a {
    text-align: center;
    padding: 10px 0px 0px 0px;
}

.settings-panel .tab-content {
    padding-top: 10px;
}
</style>
<script>
export default {
    name: 'theme',
    data() {
        let localdata = {}
        return {
            localdata,
            cut: 0
        }
    }
}

</script>