<template>
    <div class="settings-panel lb-webkit-scrollbar">
        <div class="settings-inner">
            <ul class="nav nav-tabs messager-nav nav-justified">
                <li :class="{active:cut==0}">
                    <a @click="cut=0">
                        <h4>主题</h4>
                    </a>
                </li>
                <li :class="{active:cut==1}">
                    <a @click="cut=1">
                        <h4>壁纸</h4>
                    </a>
                </li>
            </ul>
            <div style="height: 100%">
                <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                    <div class=" theme-list " :class="{active:cut==1}" v-if="cut==0">
                        <template v-for="item in theme">
                            <div class="theme-item" :style="{'background-color': item}" @click="handleChangeTheme(item)"></div>
                        </template>
                    </div>
                </transition>
                <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                    <div class=" wallpaper-list" :class="{active:cut==0}" v-if="cut==1">
                        <ul>
                            <li v-for="item in wallpaper" @click="handleChangeWallpaper(item)">
                                <img :src="'/assets/wallpaper/'+item">
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<style>
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
    position: relative;
    bottom: 16px;
}

.settings-panel .nav-tabs>li {
    display: table-cell;
    width: 1%;
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
            wallpaper: ['10.jpg', '11.jpg', 'cloud.jpg', 'wood.jpg', 'yuanye.jpg', 'wallpaper.jpg'],
            theme: ['rgba(31, 91, 183, 0.8)', 'rgba(89, 183, 40,0.8)', 'rgba(155, 29, 171, 0.8)',
                'rgba(204, 53, 53, 0.8)', 'rgba(208, 150, 21, 0.8)', 'rgba(84, 74, 74, 0.8)', 'rgba(47, 128, 82, 0.8)'
            ],
            cut: 0
        }
    },
    methods: {
        handleChangeTheme(item) {
            this.$store.commit('theme', item)
        },
        handleChangeWallpaper(item) {
            this.$store.commit('wallpaper', item)
        }
    }
}
</script>
