<template>
  <div class="login-body">
    <div class="login-image-container ">
      <div class="slogan-image-container">
        <div class="slogan-container">
         <p>
           光阴者，百代之过客
         </p>
          <p>
            而浮生若梦，为欢几何？
          </p>

        </div>
        <img src="../assets/mylogo.jpg" alt="">
      </div>

    </div>
    <el-card class="login-block">
      <p>在历史面前，每个人的生命都是有限的</p>
      <p>如果过完这一生，是值得每个人思考一生的问题 <br> </p>
      <br>
      <p>WeDoList通过记录事务的功能</p>
      <p>希望每一个人都在记录事务的时候</p>
      <p>都能想一想自己是否因为年华虚度而苦恨</p>
      <p>自己是否在忙忙碌碌中忘记了最初的梦想</p>
      <br>
      <p>WeDoList通过历史事务的功能</p>
      <p>希望每一个人都在查看历史事务的时候</p>
      <p>都能从自己过往中找到生命的意义 </p>


    </el-card>
  </div>
</template>

<script>
  export default {
    name: "aboutView",
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
  .slogan-container{
    position: relative;
    bottom:70px;
    display: inline-block;
    background-color: #64B5F6;
    font-size: 48px;
    text-align: left;
    margin-right: 8%;
    font-weight: bold;

  }
  .slogan-image-container{
    margin-left: 22%;
  }
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

  .login-label-text{
    width: 15%;
    display: inline-block;
    margin-right: 5%
  }
  .login-body{
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    text-align: left;
  }
  .login-image-container{
    margin: auto;
    width: 60%;
    padding: 5%;
    height: 25%;
    background-color: #64B5F6;
    margin-bottom: 2%;
  }
  .login-image-container img{
    /*margin-left: 60%;*/
    display: inline-block;

    width: 300px;
    height: 300px;
    z-index: 3;
    border-radius: 10%;
  }

  .login-block{
    padding: 2%;
    margin: auto;
    display: block;
    width: 35%;
    height: 40%;
    font-size: 24px;
    background-color: white;
  }
</style>
