<template>
    <div class="col-md-3 col-xs-12 col-sm-6 hte-dock hte-side hte-dock-animate hte-dock-transform" style="z-index: 9999; transform: translate3d(0px, 0px, 0px); display: block;">
        <div class="hte-dock-inner">
            <header class="hte-dock-header">
                <h3>
                    <span>个性化设置</span>
                 
                </h3>
            </header>
           <div class="hte-dock-body"><div class="hte-settings-panel hte-webkit-scrollbar">
	<div class="hte-settings-inner">

	<ul class="nav nav-tabs  nav-justified" >
		<li class="active" style="height:47px;"@click="cut=0"><a href="#theme" data-toggle="tab" >
				<h4 class="main" style="color:white;font-size:18px;border-bottom:2px solid white;	line-height:47px">主题</h4>
		</a></li>
		<li style="height:47px;"><a href="#wallpaper" data-toggle="tab"@click="cut=1">
				<h4 class="main" style="color:white;font-size:18px;;border-bottom:2px solid white;line-height:47px">壁纸</h4>
		</a></li>
	</ul>

	<div >
	<div class="tab-pane fade hte-wallpaper-list active in" id="wallpaper" v-if="cut==1">
				<ul class="bg-size">
					<li class="wallpaper-actions">
						<div style="width:100%" class="jl">
						
						</div>
					</li>
					<li<img src="/assets/wallpager/10.jpg" ></li>
					<li<img src="/assets/wallpager/11.jpg"></li>
					<li<img src="/assets/wallpager/cloud.jpg" ></li>
					<li<img src="/assets/wallpager/wood.jpg" ></li>
					<li<img src="/assets/wallpager/Yuanye.jpg" ></li>
					<li <img src="/assets/wallpager/13.jpg" style="margin-bottom:40px;"></li>
				
				</ul>
		</div>
		<div v-if="cut==0">
			
	
		<ul class="list-group bgc">
  <li class="list-group-item"style="background-color: rgb(31,91,183);"></li>
  <li class="list-group-item"style="background-color: rgb(89,183,40);;"></li>
    <li class="list-group-item"style="background-color: rgb(155,29,171);"></li>
      <li class="list-group-item"style="background-color: rgb(204,53,53);"></li>
        <li class="list-group-item"style="background-color: rgb(208, 150, 21);"></li>
          <li class="list-group-item"style="background-color: rgb(84, 74, 74);"></li>
            <li class="list-group-item"style="background-color: rgb(47, 128, 82);"></li>
</ul>

		</div>
	
			
		</div>
	</div>
</div>
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
    padding-top: 50px;
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
.nav-tabs.nav-justified {
    width: 100%;
    border-bottom: 0;
}
.nav {
    padding-left: 0 !important;
    margin-bottom: 0 !important;
	margin-top:10px;


}
.nav-tabs.nav-justified>li {
    float: none;
}
ol,ul li{
	margin-left:90px;
}
ol, ul {
    margin-top: 0;
    margin-bottom: 10px;
	border-bottom:1px solid pink;
}

.active .h4 {
    font-size: 118px !important;
	
	
	}
.bgc li{
	margin-top:10px;
	margin-left:10px;
	margin-right:10px;
	list-style-type:none;
	height:60px;
	border:2px solid white

}	
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.wallpaper-actions .btn-pulls{
	float:left;
	position:relative;
	left:-100px;

}
.bg-size li{
		list-style-type:none;

}
.wallpaper-actions .jl{
	margin-top:10px;
	margin-bottom:10px;
}
.bg-size img{
	display: block;
    height: auto;
    max-width: 100%;
    line-height: 1;
	padding:5px;

	
}
.hte-wallpaper-list > ul {
    padding-right: 10px;
    position: relative;
    width: 100%;
    padding: 20px;
    overflow-y: scroll;
    height: 100%;

	
}


</style>
<script>
export default {
    name: 'docklogin',
    data() {
        let localdata = {}
        return {
            localdata,
            loginstaus: 0,    //1登录,0注册 2.用户信息
			cut:0
        }
    }
}

</script>