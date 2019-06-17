<template>
<div>

    <left-nav></left-nav>

    <el-container class="main-container" style="height: 100%;">
      <div class="my-header" style="text-align: left">
        <el-input
          class="my-header-search"
          style = "width: 70%;position: relative;left: 20px"
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
        >
        </el-input>
        <div class="my-header-buttons">
          <el-tooltip content="点击添加待办事项" placement="bottom" effect="light">
            <el-button
              class="my-header-button"
              icon="el-icon-tickets"
              @click="addAffair"
              circle></el-button>
          </el-tooltip>
          <el-tooltip content="点击添加标签" placement="bottom" effect="light">
            <el-button
              class="my-header-button"
              icon="el-icon-collection-tag"
              @click="addTag"
              circle></el-button>
          </el-tooltip>

        </div>
      </div>
      <!--      <el-header class="my-header" style = "box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">-->
      <!--        -->
      <!--      </el-header >-->



      <el-main class = "my-main">
        <div class="null" v-if="!personalToDoList.length">
          请添加标签
        </div>
        <div v-else>
          <div v-for=" labelToDo in personalToDoList">
            <todo-card
              :label-list="labelToDo"
              :key="labelToDo.labelId">
            </todo-card>
          </div>
        </div>


      </el-main>
    </el-container>

    <side-edit style="z-index: 3"></side-edit>


  </div>
</template>

<script>
  import LeftNav from "../components/LeftNav";
  import SideEdit from "../components/sideEdit";
  import ColorSelector from "../components/ColorSelector";
  import TodoCard from "../components/todoCard";

  export default {
    name: 'todoView',
    components: {TodoCard, ColorSelector, LeftNav,SideEdit},
    data(){
      return{
        //可以将右侧的控制结构写在这里
      }
    },
    methods:{
      openHistoryItem(item){
        this.$store.commit('setCurrentEditData',[item,3])
      },
      addTag(){
        var label = {
          labelId:0,
          labelColor: '#64B5F6',
          labelName: '',
          todolist:[]
        }
        this.$store.commit('setCurrentColorSelectorData',[label,2])
      },
      addAffair(){
        //清空cur数据区域，时间等于现在，然后在全局写个函数
        var data = {
          affairId: 0,
          title: "",
          content: "",
          remindTime: new Date().getTime(),
          complete: false,
          remindUser: null,
          Label:{
            labelId:0,
            labelName:"暂无标签请选择",
            labelColor:'#00000F'
          }
        }
        this.$store.commit('setCurrentEditData',[data,1])

      }
    },
    mounted(){
      this.$store.dispatch('getPersonalToDoList')
    },
    computed:{
      personalToDoList (){
        this.$store.commit('setCurrentAcsDeleteLabel')
        return this.$store.state.personalToDoList;
      },
      historyList(){
        return this.$store.state.currentHistory
      }
    }
  }

</script>

<style>
  .null{
    width: auto;
    font-size: 30px;
    text-align: center;
    margin-top: 50%;
  }
  .my-header-buttons{
    display: inline-block;
    margin-left: 10%;
  }
  .my-header-button{
    display: inline-block;
    width: 60px;
    height: 60px;
  }
  .main-container{
    top:0;
    margin-left: 20%;
    width: 50%;
    background-color: white;
  }
  .my-header{
    border-left: 1px solid #ededed;
    background-color: #fafafa;
    position: fixed;
    top:0;
    width: 50%;
    padding: 1%;
    z-index: 2;
  }
  .my-main{
    margin-top: 8%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
    height: 100%;
    width: 100%;
  }
  .box-card{
    margin-left: 3%;
    margin-bottom: 3%;
  }
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
