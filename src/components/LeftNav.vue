<template>
  <el-container class="left-nav">

    <el-aside>

        <div class="left-user-date">
          <el-dropdown
            style="color: black"
            trigger="click">
          <div id = 'user-message'>
            <img
              id = 'user-head-img'
              src="../assets/head.jpg" alt=""
            >
            <span id='user-name'>
           Ventura
         </span>

          </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>同步</el-dropdown-item>
              <el-dropdown-item>统计</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
              <router-link to="/aboutView">
                <el-dropdown-item divided>关于</el-dropdown-item>
              </router-link>
              <el-dropdown-item>高级会员</el-dropdown-item>
              <el-dropdown-item divided>小程序</el-dropdown-item>
              <el-dropdown-item></el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
<!--          <div class="left-nav-header-date">-->
<!--            <p class="solar-date">阳历时间 </p>-->
<!--            <p class="lunar-date">阴历时间 </p>-->
<!--          </div>-->

        </div>



      <el-menu
        style = 'width: 100%;font-size: 18px'
        :default-openeds = "['1']"
        background-color="#fafafa"
        text-color="black"
        active-text-color="#ffd04b">
        <el-menu-item index = "1">

          <template slot="title">

            <router-link
              to="/todoView"
              @click.native="tohistoryView">
              <i class="el-icon-document"></i>
              <span class="menu-item-text">待办</span>
            </router-link>

          </template>


        </el-menu-item>

        <el-menu-item index = "2">
          <router-link
            to="/historyView"
            @click.native="tohistoryView">
            <i class="el-icon-document"></i>
            <span class="menu-item-text">历史</span>
          </router-link>


        </el-menu-item>
        <el-menu-item index = "3">

          <i class="el-icon-date"></i>
            <span class="menu-item-text">日历</span>

        </el-menu-item>
        <el-menu-item index = "5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span class="menu-item-text">设置</span>
          </template>

        </el-menu-item>


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
        },
        tohistoryView(){
          this.$store.commit('setRightSideModel',0)
          console.log("to history")
        },
        labelList(){
          // console.log(this.$store.state.labelList)
          var personalToDoList = this.$store.state.personalToDoList;
          var list = []
          for (let i=0;i<personalToDoList.length;i++){
            list.push({
              labelName: personalToDoList[i].labelName,
              labelId: personalToDoList[i].labelId,
              labelColor: personalToDoList[i].labelColor,
            })
          }
          console.log(list)
          return list;
        },
      }
    }
</script>

<style scoped>
  /*.left-nav a{*/
  /*  color: #000;*/
  /*  text-decoration: none;*/
  /*}*/
  a{
    color: #000;
    text-decoration: none;
  }
  .menu-item-text{
    font-size: 20px;
  }
.left-nav{
  /*不能少于300px*/
  /*text-align: right;*/
  border-right: 1px solid #ededed;
  top: 0;
  padding-top: 2%;
  position: fixed;
  float: right;
  height: 100%;
  min-width: 300px;
  width: 20%;
  background-color: #fafafa;
  color: black;
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
  font-size: 18px;
  display: block;
  margin: 10px 0 20px 0;
}
#user-head-img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border:solid #2c3e50 1px;
}

</style>
