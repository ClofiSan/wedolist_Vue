<template>
  <div id="app">


   <el-container class="left-nav">

     <el-aside>
       <div class="left-user-date">

         <div id = 'user-message'>
           <img
             id = 'user-head-img'
             src="./assets/logo.png" alt="">
           <span id='user-name'>
           Ventura
         </span>
         </div>

         <div class="left-nav-header-date">
           <p class="solar-date">阳历时间 </p>
           <p class="lunar-date">阴历时间 </p>
         </div>

       </div>

       <el-menu
         style = 'width: 100%'
         :default-openeds = "['1']"
         background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b">
         <el-submenu index = "1">
           <template slot="title">
             <i class="el-icon-document"></i>
             <span>所有</span>
           </template>
           <el-menu-item index = '1-1'>
             标签1
           </el-menu-item>
           <el-menu-item index = '1-2'>
             标签2
           </el-menu-item>
         </el-submenu>
         <el-submenu index = "2">
           <template slot="title">
             <i class="el-icon-document"></i>
             <span>历史</span>
           </template>
           <el-menu-item index = '1-1'>
             标签1
           </el-menu-item>
           <el-menu-item index = '1-2'>
             标签2
           </el-menu-item>
         </el-submenu>
         <el-submenu index = "3">
           <template slot="title">
             <i class="el-icon-delete"></i>
             <span>垃圾箱</span>
           </template>
           <el-menu-item index = '3-1'>
             标签
           </el-menu-item>
           <el-menu-item index = '3-2'>
             待办
           </el-menu-item>
         </el-submenu>
         <el-submenu index = "4">
           <template slot="title">
             <i class="el-icon-date"></i>
             <span>日历</span>
           </template>
         </el-submenu>
         <el-submenu index = "5">
           <template slot="title">
             <i class="el-icon-setting"></i>
             <span>设置</span>
           </template>
           <el-menu-item index = '5-1'>
             用户设置
           </el-menu-item>
           <el-menu-item index = '5-2'>
             主题设置
           </el-menu-item>
           <el-menu-item index = '5-3'>
             关于
           </el-menu-item>
         </el-submenu>


       </el-menu>
     </el-aside>
   </el-container>

    <el-container class="main-container" style="height: 100%;">
      <el-header class="my-header" style = "text-align: center">
        <el-input
          style = "top: 2%;width: 80%;position: relative;right: 5%"
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
        >
        </el-input>
      </el-header >
      <el-main class = "my-main">
      这个地方放标签和待办事项

      </el-main>
    </el-container>

    <div class="right-side">
        <el-input
          placeholder="输入标题"
        >
        </el-input>
      <div class="tag-box">
        这个地方放tag
      </div>
      <el-date-picker
        v-model="value1"
        type="datetime"
        style = "left: 0">
      </el-date-picker>

      <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
        >
        </el-input>

    </div>


  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import LeftNav from "./components/LeftNav";
export default {
  name: 'App',
  components: {LeftNav, HelloWorld},
  data(){
    return{
      value1:''
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left-nav{
  /*不能少于300px*/
  top: 0;
  padding-top: 2%;
  position: fixed;
  float: right;
  height: 100%;
  min-width: 300px;
  width: 20%;
  background-color: #545c64;
  color: #fff;
}
.left-user-date{
  display: inline-block;
  position: relative;
  left: 40px;
}
.left-nav-header-date{
  display: inline-block;
  margin-left: 20px;
}
.solar-date{
  font-size: 8px;
}
.lunar-date{
  font-size: 14px;
}
.today-date{
  font-size: 30px;
}
#user-message{
  display: inline-block;
}
#user-name{
  display: block;
  margin: 10px 0 20px 0;
}
#user-head-img{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border:solid #2c3e50 1px;
}

.main-container{
  top:0;
  margin-left: 20%;
  width: 50%;
  background-color: white;
}
.my-main{

}


.right-side{
  top: 0;
  padding-top: 10px;
  position: fixed;
  margin-left: 70%;
  height: 100%;
  width: 30%;
  overflow: auto;
  background-color: #EEEEEE;

}



</style>
