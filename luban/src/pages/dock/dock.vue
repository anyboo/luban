<template>
    <div class="col-md-3 col-xs-12 col-sm-6 dock side" style="z-index: 9999; ">
        <div class="dock-inner">
            <header class="dock-header">
                <h3>
                    <span>{{dockTitle}}</span>
                    <span class="icon-circle-arrow-right smaller dock-close-btn" @click="handleClick('desktop')"></span>
                </h3>
            </header>
            <div class="dock-body">
                <component v-bind:is="currentView" @viewChange="handleviewChange">
                </component>
            </div>
        </div>
    </div>
</template>
<style>
.dock {
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

.dock-inner {
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
}

.dock-header {
    position: absolute;
    padding-left: 20px;
    z-index: 1;
    top: 0px;
}

.dock-body {
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 50px;
}

.dock-close-btn {
    cursor: pointer;
    display: inline-block;
}

@media screen and (min-width: 680px) {
    .dock-close-btn {
        display: none;
    }
}

.dock-close-btn:hover {
    color: #ccc;
}

.smaller {
    width: 32px;
    height: 32px;
    display: inline-block;
    text-align: right;
    margin-right: 10px;
}
</style>
<script>
import login from './login.vue'
import theme from './theme.vue'
import profile from './profile.vue'
import reg from './reg.vue'

export default {
    name: 'dock',
    data() {
        let localdata = {}
        return {
            localdata,
            currentView: this.view,
        }
    },
    props: ['view'],
    components: {
        'lb-login': login,
        'lb-theme': theme,
        'lb-reg': reg,
        'lb-profile': profile,
    },
    computed: {
        dockTitle() {
            let title = ''
            if (this.currentView == 'lb-theme') {
                title = '个性化设置'
            } else {
                title = '我的Luban'
            }
            return title
        }
    },
    watch: {
        view: function (val) {
            this.currentView = val
        }
    },
    methods: {
        handleviewChange(view) {
            this.currentView = view
        },
        handleClick() {
            this.$emit('dockhidden')
        }
    }
}
</script>