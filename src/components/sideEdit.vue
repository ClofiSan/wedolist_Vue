<template>


  <div class="right-side">

    <div v-if="rightSideModel===0">
      <div class="right-side-null">请选取事项或者标签 </div>
    </div>

    <div v-else-if="rightSideModel===1">
      <div class = "input-affair-title right-side-item">
        <p class="right-side-text">
          <i class="el-icon-edit-outline"> </i>
          任务名</p>
        <el-input
          class = "input-affair-title-block"
          placeholder="输入任务名"
          v-model = "affairItem.title"
        >
        </el-input>

      </div>
      <div class="tag-box right-side-item">
        <div class="tag-chosen-container right-side-item">
          <p class="right-side-text">
            <i class="el-icon-collection-tag"> </i>
            标签</p>
          <el-tag
            class="right-side-chosen-tag"
            :color="chosenLabel.labelColor">
            {{chosenLabel.labelName}}
          </el-tag>
        </div>
        <div
          class="tag-box-tochoose right-side-item"
          style="display:inline-block;"
        >
          <el-tag
            v-for="item in labelList"
            :key="item.labelId"
            class="my-tags"
            :color=" item.labelColor "
            @click="chooseTheTag(item)"
          >
            {{item.labelName}}
          </el-tag>
        </div>

      </div>
      <div class="remind-time-picker right-side-item">
        <p class="right-side-text">
          <i class="el-icon-time"> </i>
          提醒我</p>
        <el-date-picker
          class="right-side-time-picker"
          type="datetime"
          style = "left: 0;"
          v-model ="affairItem.remindTime"

        >
        </el-date-picker>
      </div>

      <div class = "input-affair-content right-side-item">

        <p class="right-side-text">
          <i class="el-icon-tickets"></i>
          详情</p>
        <el-input
          style = "padding-left: 5%;width: 90%"
          type="textarea"
          :rows="7"
          placeholder="请输入详情"
          v-model="affairItem.content"
        >
        </el-input>


      </div>


      <div class="right-side-button-container right-side-item">
        <el-button
          class="right-side-button right-side-confirm"
          type="primary"
          @click="affairItem.affairId!==0?updateData(affairItem):addAffair(affairItem)"
        >
          确定
        </el-button>
        <el-button
          class="right-side-button right-side-quit"
          type="danger"
          @click="clearAllData"
        >
          关闭
        </el-button>

      </div>
    </div>
    <div v-else-if="rightSideModel===2">
      <color-selector></color-selector>
    </div>
    <div v-else-if="rightSideModel===3">
      <div class = "input-affair-title right-side-item">
        <p class="right-side-text">
          <i class="el-icon-edit-outline"> </i>
          任务名</p>

        <el-input
          class = "input-affair-title-block"
          placeholder="输入任务名"
          v-model = "affairItem.title"
          :disabled="true"
        >
        </el-input>

      </div>
      <div class="tag-box right-side-item">
        <div class="tag-chosen-container right-side-item">
          <p class="right-side-text">
            <i class="el-icon-collection-tag"> </i>
            标签</p>
          <el-tag
            class="right-side-chosen-tag"
            :color="'#999999'">
            {{affairItem.Label.labelName}}
          </el-tag>
        </div>


      </div>
      <div class="remind-time-picker right-side-item">
        <p class="right-side-text">
          <i class="el-icon-time"> </i>
          提醒我</p>
        <el-date-picker
          class="right-side-time-picker"
          type="datetime"
          style = "left: 0;"
          v-model ="affairItem.remindTime"
          :disabled="true"
        >
        </el-date-picker>
      </div>

      <div class = "input-affair-content right-side-item">

        <p class="right-side-text">
          <i class="el-icon-tickets"></i>
          详情</p>
        <el-input
          style = "padding-left: 5%;width: 90%"
          type="textarea"
          :rows="7"
          placeholder="请输入详情"
          v-model="affairItem.content"
          :disabled="true"
        >
        </el-input>


      </div>
  </div>
</div>


</template>

<script>
    import ColorSelector from "./ColorSelector";
    export default {
      name: "sideEdit",
      components: {ColorSelector},
      data(){
        return {
          minDate: new Date().getTime(),
          p_affairItem :{
            labelId:0,
            affairId:0,
            content:"",
            title:"",
            remindTime: this.minDate,
            complete: false,
            remindUser: null,
          },
          p_labelList:[],
          p_chooseLabel :{}
        }
      },
      methods:{
        addAffair(item){

          item.Label = this.chosenLabel
          if (item.Label.labelId===0)
            return;
          this.$store.commit("addNewAffair",item)
        },
        updateData(item){
          //将数据提交,将现在状态全部保存，也就是currentdata中的数据进行更新
          if (item.Label.labelId===0)
            return;
          this.$store.commit('updateAffair',item)
          this.$store.commit('setCurrentAcsDeleteLabel')
        },
        clearAllData(){
          //清除相关组件中的数据
          this.$store.commit('closeRightSide')
        },
        chooseTheTag(newLabel){
          this.$store.commit('updateCurrentEditDataLabel',newLabel)
        }
      },
      computed:{
        affairItem(){
          this.p_affairItem = this.$store.state.currentEditData
          return this.p_affairItem
        },
        rightSideModel(){
          return this.$store.state.rightSideModel
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
          this.p_labelList = list
          return list;
        },
        chosenLabel: {
          get(){
            return this.$store.state.currentEditDataChosenLabel
          },
          set(e){
            return e
          }
        }
      },
    }
</script>

<style scoped>
  .right-side-null{
    width: auto;
    font-size: 30px;
    text-align: center;
    margin-top: 50%;
  }
  .my-tags{
    display: inline-block;
    width: auto;
    height: 35px;
    text-align: center;
    color: white;

  }
  .right-side-item{
    margin-top: 3%;
  }
  .right-side-button-container{
    margin: auto;
    width: 50%;
    padding-top: 50px;
  }
  .right-side-button{
    width: 100px;
    height: 50px;

  }
  .right-side{
    font-size: 18px;
    text-align: left;
    top: 0;
    padding-top: 10px;
    position: fixed;
    margin-left: 70%;
    height: 100%;
    width: 30%;
    overflow: auto;
    background-color: #fafafa;
    border-left: 1px solid #ededed;

  }
  .right-side p{
     padding-left: 5%;
     width: auto;
     display: inline-block;
   }
  .input-affair-title p {

  }
  .right-side-chosen-tag{
    margin-left: 3%;
    width: auto;
    height: 35px;
    text-align: center;
    color: white;
  }
  .right-side-time-picker {
    margin-left: 3%;
    display: inline-block;
    width: 70%;

  }
  .input-affair-title-block{
    margin-left: 3%;
    display: inline-block;
    width: 70%;
  }
  .tag-box-tochoose{
    padding-left: 5%;
    width: auto;
  }
</style>
