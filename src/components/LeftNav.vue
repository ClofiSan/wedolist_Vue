<template>
  <el-container class="left-nav">

    <el-aside>
      <div class="left-user-date">

        <div id = 'user-message'>
          <img
            id = 'user-head-img'
            src="" alt="">
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
</template>

<script>
    export default {
      name: "LeftNav",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
.left-nav{
  /*不能少于300px*/
  /*text-align: right;*/
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

</style>
