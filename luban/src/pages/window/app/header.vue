<template>
    <div class="navbar header">
        <div class=" brand">
            <img src="/assets/images/logo.png">
            <a href="#">
                <span class="segoe">Luban</span>-
                <small>与众不同的
                    <span class="segoe">教育平台</span>
                </small>
            </a>
        </div>
        <lb-icon></lb-icon>
    </div>
</template>
<style>
.brand {
    width: 100%;
    float: none;
    padding: 10px;
    text-align: center;
    line-height: 27.5px;
}
.brand>a {
    text-decoration: none;
    color: #fff;
    text-shadow: 0 3px 7px rgba(0, 0, 0, 0.37);
    font-size: 20px;
}

.brand>a {
    font-size: 24px;
}

.header .navbar>li>a {
    font-size: 20px;
    color: #fff;
    -webkit-text-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    text-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}

.header .navbar>.active>a {
    background-color: !important;
    color: #777 !important;
}

.header .navbar>li>.dropdown-menu {
    margin-top: -1px;
    right: -1px;
    z-index: -1;
}

.header {
  
  
    z-index: 10;
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    margin-bottom: 0px;
  
}

@media screen and (min-width:680px) {
    .metro-inner {
        width: 680px;
        margin: 0px auto;
        text-align: left;
    }
    .header {
        padding-right: 0px;
        padding-left: 0px;
    }
    .brand {
        width: 380px;
        margin: 0px auto;
    }
}

@media screen and (min-width:1024px) {
    .header {
        padding-right: 50px;
        padding-top: 15px;
        background: none;
    }
    .metro-inner {
        margin-left: 50px;
        width: auto;
        text-align: left;
    }
    .brand {
        display: block;
        float: left;
        margin-left: 60px;
        text-align: left;
    }
    .brand img {
        height: 30px;
        margin-top: -10px;
        margin-right: 10px;
    }
}

.brand img {
    height: 22px;
    margin-top: -6px;
    margin-right: 10px;
    display: inline-block;
}

.ie8 .header {
    padding-right: 50px;
    padding-top: 15px;
    background: none;
}

.segoe {
    font-family: Segoe Script;
}
</style>
<script>
import body from './body.vue'
export default {
    name: 'header',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    components: {
        'lb-icon': body
    },
    methods: {
        handleClick() {
            this.$emit('dockhidden')
        }
    }
}
</script>
