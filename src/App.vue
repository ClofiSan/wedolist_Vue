<template>
  <div id="app">

<!--    注意路由的配置-->
    <LeftNav></LeftNav>
    <!--    传入编辑的数据-->

    <el-container class="main-container" style="height: 100%;">
      <div class="my-header" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);text-align: left">
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
        <div v-for=" labelToDo in personalToDoList">
          <todo-card
            :label-list="labelToDo"
            :key="labelToDo.labelId">
          </todo-card>
        </div>
      </el-main>
    </el-container>

    <side-edit style="z-index: 3"></side-edit>


  </div>
</template>

<script>
import LeftNav from "./components/LeftNav";
import SideEdit from "./components/sideEdit";
import ColorSelector from "./components/ColorSelector";
import TodoCard from "./components/todoCard";

export default {
  name: 'App',
  components: {TodoCard, ColorSelector, LeftNav,SideEdit},
  data(){
    return{
      //可以将右侧的控制结构写在这里
    }
  },
  methods:{
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
      return this.$store.state.personalToDoList;
    }
  }
}

</script>

<style>
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







</style>
