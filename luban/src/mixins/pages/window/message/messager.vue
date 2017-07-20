<template>
    <div class="messager">
        <div class="messager-content" :style="{'background-color': $store.state.system.theme}">
            <div class="messager-title">
                <h2>{{messageTitle}}</h2>
            </div>
            <component v-bind:is="currentView" @viewChange="handleviewChange" @messageclose="handleMessageClose">
            </component>
        </div>
    </div>
</template>
<style>
.messager {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99998;
    -webkit-transition: all .3s;
    -webkit-transition-delay: 0;
    transition: all .3s;
    transition-delay: 0;
    -ms-transition: all .3s;
    -ms-transition-delay: 0;
    -webkit-transition-timing-function: ease-out;
    text-align: center;
}

.messager-content {
    padding: 30px 10px;
    width: 100%;
    height: 100%;
    color: #fff;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    text-align: left;
}

.messager-inputs {
    padding-top: 10px;
}

.message-loading {
    width: 100%;
    text-align: center;
}

.message-progress {
    width: 100%;
    text-align: center;
    margin-bottom: -10px;
}

.message-progress-inline .message-progress-text {
    display: inline-block;
    font-size: 14pt;
    line-height: 40px;
    padding-left: 20px;
}

.message-progress-inline .message-progress-preload>img {
    margin-top: -8px;
}

.messager-input {
    marin: 5px 0px;
}

.message-progress-preload {
    display: inline-block;
    margin: 20px 0px;
}

@media (min-width:768px) {
    .messager-content {
        margin-top: 200px;
        width: 700px;
        height: auto;
        padding-left: 60px;
        padding-right: 60px;
    }
    .messager-input {
        width: 300px;
    }
}

.ie8 .messager-content {
    width: 700px;
    padding-left: 60px;
    padding-right: 60px;
}

.ie8 .messager-input {
    width: 300px;
}

.messager-buttons {
    padding: 20px 0px 10px;
    text-align: right;
}

.messager-body {
    padding: 10px 0px;
}

.messager-btn {
    margin-left: 10px;
}

.message-preload {
    height: 40px;
}

.messager-panel {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0px 20px 20px 20px;
}

.messager-inner {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.messager-panel .nav-tabs>li.active>a,
.messager-panel .nav-tabs>li.active>a:hover,
.messager-panel .nav-tabs>li.active>a:focus {
    background-color: transparent;
    border: none;
    color: #fff;
    border-bottom: 3px solid #fff;
}

.messager-panel .nav-tabs>li>a {
    background-color: transparent;
    border: none;
    color: #fff;
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.messager-panel .nav-tabs>li>a:HOVER {
    background-color: transparent;
    border-bottom: 3px solid #ccc;
}

.messager-panel .nav-tabs.nav-justified>li>a {
    border-radius: 0px;
    padding: 10px 0px 0px 0px;
    text-align: center;
}

.messager-panel .nav-tabs>li {
    display: table-cell;
    width: 1%;
}

.messager-panel .tab-content {
    padding-top: 20px;
}
</style>
<script>
import sysinfo from './sysinfo.vue'
import feedback from './feedback.vue'

export default {
    name: 'messager',
    data() {
        let localdata = {}
        return {
            localdata,
            currentView: this.view,
        }
    },
    props: ['view'],
    components: {
        'lb-sysinfo': sysinfo,
        'lb-feedback': feedback
    },
    computed: {
        messageTitle() {
            let title = ''
            if (this.currentView == 'lb-sysinfo') {
                title = '欢迎'
            } else if (this.currentView == 'lb-feedback') {
                title = '反馈意见'
            } else {
                title = '对话框'
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
        handleMessageClose() {
            this.$emit('messageclose')
        }
    }
}
</script>