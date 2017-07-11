<template>
  <div class="item1" >
      <div class="navHeader">
            <img src='/assets/images/logo.png'>
            <span class='logo-text'>鲁班</span>
            
      </div>
    <ul class='ulStyle'>
        <li >
            <i class="fa fa-users"></i>
            <span>学员</span>
              <lb-menu class="navSecondLevel"> </lb-menu>
            
        </li>
        <li >
            <i class="fa fa-book"></i>
            <span>课程</span>
              <lb-menu class="navSecondLevel" > </lb-menu>
        </li>
        <li >
            <i class="fa fa-money"></i>
            <span>学费</span>
              <lb-menu class="navSecondLevel" > </lb-menu>
        </li>
        <li >
            <i class="fa fa-tachometer"></i>
            <span>收支</span>
            <lb-menu class="navSecondLevel" > </lb-menu>
        </li>
        <li >
            <i class="fa fa-cog"></i>
            <span>设置</span>
              <lb-menu class="navSecondLevel" > </lb-menu>
        </li>
    </ul>
    
  </div>
</template>
<style>
    .item1 .navHeader{
        width:100%;
        height:20px;
        padding:12px 0;
    background:rgb(54,76,96);
        line-height:20px;
    }
    .item1 .navHeader img{
        width:20px;
        height:20px;
        margin-left:15px;
    }
    .item1 .navHeader .logo-text{
        font-size:18px;
        color:white;
        font-weight:700;
        position: relative;
        left:4px;
        top:-4px;
    }
    .item1 .ulStyle{
        list-style:none;
        width:100%;
        padding:0px;
        margin:0px;

    }
    .item1 .ulStyle li{
        width:100%;
        
        padding-top:12px;
        color:white;
       border-bottom:1px solid #374d63;
        cursor: pointer;
    }
    .item1 .ulStyle li:hover{
        background:#e74c3c;
        transition: 0.3s all ease-in-out;
    }
    .item1 .ulStyle li i{
        margin-left:15px;
    }
    .item1 .ulStyle li span{
        display:inline-block;
    margin-left:10px;
    padding-bottom:12px;
   
    }
.item1 .navSecondLevel{
    list-style:none;
    padding:0;
    margin:0;
    background:#2a3b4c;
}
 .navScondLevelT{
    display:block;
}
.navScondLevelF{
    display:none;
}
.item1 .navSecondLevel li{
    padding-bottom:12px;
}
.item1 .navSecondLevel li i{
    margin-left:45px;
}
.item1 .navSecondLevel li span{
    padding: 1.5px 0;
}
</style>
<script>
import menu from '../menu/menu.vue'
export default{
    name:'sidebar',
    data(){
        return {
            isToUl:false
        }
    },
    components:{
        'lb-menu':menu
    },
    methods:{
        handleClickColl(){
                this.isToUl=!this.isToUl
        }
    }
    
}
</script>