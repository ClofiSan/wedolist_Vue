<template>
    <div class="login-body">
      <div class="login-image-container">
        <img src="../assets/mylogo.jpg" alt="">
      </div>
      <el-card class="login-block">
<!--        <el-row>-->
<!--          <el-col :span="8"><p>用户名</p></el-col>-->
<!--          <el-col :span="16"><el-input></el-input></el-col>-->
<!--        </el-row>-->
        <div class="input-item"
        style="display: inline">
          <p class="login-label-text">用户名</p>
          <el-input
            class="login-input"
            style="margin-right: 0px"
            v-model="formLabelAlign.name"></el-input>
        </div>
        <div class="input-item">
          <p class="login-label-text">密码</p>
          <el-input
            class="login-input"
            v-model="formLabelAlign.region">
          </el-input>
        </div>
        <router-link to="/todoView">
          <el-button
            style="
            margin: 30px;
            position: relative;
            left: 30%;
            width: 30%;
            font-size: 20px;
            display: block;"
            type="primary">
            登录
          </el-button>
        </router-link>

        <el-divider
          content-position="center"
          style="margin-top:5%;font-size: 12px;color: #AAAAAA"
        >其他登录方式</el-divider>
            <div class="other-login-container">
              <div
                class="other-login-container-item"
              >
                <img
                  id="wechat"
                  src="../assets/Wechat.png" alt="">
              </div>

             <div
               class="other-login-container-item">
               <img src="../assets/Weibo.png" alt="">
             </div>

            <div
              class="other-login-container-item">
              <img src="../assets/QQ.png" alt="">
            </div>

            </div>

      </el-card>

    </div>
</template>

<script>
    export default {
        name: "loginView",
      data() {
        return {
          labelPosition: 'right',
          formLabelAlign: {
            name: '',
            region: '',
            type: ''
          }
        };
      }
    }
</script>

<style scoped>
  #wechat{

    width: 55%;
    height: 55%;

  }
  .other-login-container{
    width: 80%;
    margin-left: 12%;
    margin-right: 8%;
  }
  .other-login-container-item{
    display: inline-block;
    width: 30%;
    text-align: center;
  }
  .other-login-container img{
    margin: auto;
    display: inline-block;

    width: 60%;
    height: 60%;

  }
  .login-input{
    display: inline-block;
    width:70%;
    right: 0;
  }
  .login-label-text{
    width: 15%;
    display: inline-block;
    margin-right: 5%
  }
  .login-block{
    font-size: 20px;
  }
  .login-body{
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    text-align: left;
  }
  .login-image-container{
    margin-top: 5%;
    margin-bottom: 2%;
  }
  .login-image-container img{
    margin: auto;
    display: block;
    width: 120px;
    height: 120px;
  }

.login-block{
  padding: 2%;
  margin: auto;
  display: block;
  width: 25%;
  height: 40%;
  background-color: white;
}
</style>
