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
              :disabled="true"
              circle></el-button>
          </el-tooltip>
          <el-tooltip content="点击添加标签" placement="bottom" effect="light">
            <el-button
              class="my-header-button"
              icon="el-icon-collection-tag"
              :disabled="true"
              circle></el-button>
          </el-tooltip>

        </div>
      </div>


      <el-main class = "my-main">
        <el-timeline style="margin-top: 3%">
          <el-timeline-item
            style="text-align: left"
            v-for="(item, index) in historyList"
            :key="index"
            icon="el-icon-success"
            type="primary"
            :color="'#2196F3'"
            placement="top"
            size="large"
            :timestamp="item.completeTime">
            <el-card>
              <el-row>
                <el-col :span = 22>
                  <h2>{{item.title}}</h2>
                </el-col>
                <el-col :span = 2>
                  <el-button
                    icon="el-icon-more"
                    @click="openHistoryItem(item)"
                    circle></el-button>
                </el-col>
              </el-row>

              <p>{{item.content}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-main>
    </el-container>

    <side-edit style="z-index: 3"></side-edit>


</div>
</template>

<script>
  import LeftNav from "../components/LeftNav";
  import SideEdit from "../components/sideEdit";


  export default {
    name: 'historyView',
    components: {LeftNav,SideEdit},
    data(){
      return{
        //可以将右侧的控制结构写在这里
      }
    },
    methods:{
      openHistoryItem(item){

        this.$store.commit('setCurrentEditData',[item,3])
      },
    },
    mounted(){
    },
    computed:{
      historyList(){
        return this.$store.state.currentHistory
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







</style>
