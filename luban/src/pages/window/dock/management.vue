<template>
    <div class="hte-dock-body">
        <div class="hte-overview lb-webkit-scrollbar" @mouseout="handleMouseout" @mouseover="handleMouseove">
            <div class="hte-overview-inner">
                <div class="hte-overview-content scrollbar" :style="getClientHeight">
                    <div class="bottoms">
                        <template v-for="(item, index) in menu">
                            <div class="hte-overview-group hte-overview-item " @click="show(index)">{{item.menuTitle}}
                                <span class="fa" :class="{'fa-chevron-up ':lodash.indexOf(menuselected,index)>=0,'fa-chevron-down':lodash.indexOf(menuselected,index)==-1}"></span></div>
                            <template v-for="sub in item.menu">
                                <div class="hte-overview-app hte-overview-item" v-if="lodash.indexOf(menuselected,index)>=0">
                                    <div class="hte-overview-app-icon menuicons"> <i :class="sub.menuIcon"></i></div>
                                    <div class="hte-overview-app-name">{{sub.menuTitle}}</div>
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
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
    bottom: 16px;
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

.menuicons i {
    font-size: 20px;
    margin-left: 6px;
    margin-top: 4px;
}


/*.scrollbar {
    padding-right: 10px;
    position: relative;
    width: 100%;
    padding: 2px;
    overflow-y: scroll;
    height: 100%;
}*/

.bottoms {
    margin-bottom: 15px
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
            menu,
            menuselected: [],
            lodash: _,
            overflowy: 'hidden',
            clientHeight: '500px',
        }
    },
    mounted() {
        this.clientHeight = document.body.clientHeight + 'px'
    },
    computed: {
        getClientHeight() {
            return {
                'max-height': this.clientHeight,
                'overflow-y': this.overflowy
            }
        }
    },
    methods: {
        show(index) {
            let findIndex = _.indexOf(this.menuselected, index)
            if (findIndex == -1) {
                this.menuselected.push(index)
            } else {
                this.menuselected.splice(findIndex, 1)
            }
        },
        handleMouseout() {
            this.clientHeight = document.body.clientHeight + 'px'
            this.overflowy = 'hidden'
        },
        handleMouseove() {
            this.clientHeight = document.body.clientHeight + 'px'
            this.overflowy = 'auto'
        },

    }
}
</script>
