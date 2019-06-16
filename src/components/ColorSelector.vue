<template>
    <div >
      <div class="label-name-input">
        <p class="right-side-text">
          <i class="el-icon-edit-outline"> </i>
          标签</p>
        <el-input
          class = "label-input"
          placeholder="输入标签名"
          v-model = "labelInfo.labelName"
        >
        </el-input>
      </div>
<!--      如果color的颜色是labelInfo的颜色，那就加个样式-->
      <div class="color-pick">
        <div v-for="colorSet in labelColorSet" :key="colorSet">
          <el-row>
            <div v-for="item in colorSet" :key="item">
              <el-col :span = 6>
                <div class="color-picker-item-container">
                  <div
                    :class="[colorPickerItem,labelInfo.labelColor === item ? borderColor:'']"
                    :style="{'background-color':item}"
                    @click="changeColor(item)"
                  >
                  </div>
                </div>
              </el-col>
            </div>
          </el-row>
        </div>
        <div class="tag-box right-side-item">
          <div class="tag-chosen-container right-side-item">
            <p class="right-side-text">
              <i class="el-icon-collection-tag"> </i>
              所有标签</p>

          </div>
          <div
            class="tag-box-tochoose right-side-item"
            style="padding-left: 5%;padding-right: 5%;display:inline-block;color: white"
          >
            <el-tag
              v-for="item in labelList"
              :key="item.labelId"
              class="my-tags"
              :color=" item.labelColor "
              @click="chooseLabel(item)"
            >
              {{item.labelName}}
            </el-tag>


          </div>

        </div>

        <div class="tag-box right-side-item">
          <div class="tag-chosen-container right-side-item">
            <p class="right-side-text">
              <i class="el-icon-collection-tag"> </i>
              可删除的标签</p>
            <el-divider></el-divider>
          </div>
          <div
            v-for="item in acsDeleteLabels"
            :key="item.labelId"
            class="tag-box-delete"
            style="display:inline;color: white;"
          >
            <el-row>
              <el-col :span = 18>
                <el-tag
                  class="my-tags my-tags-delete"
                  :color=" item.labelColor "

                >
                  {{item.labelName}}
                </el-tag>
              </el-col>
              <el-col :span = 6>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  style="display: inline-block;"
                  @click="deleteLabel(item)"
                  circle>
                </el-button>
              </el-col>
            </el-row>
          </div>
          <el-divider></el-divider>
        </div>





      </div>
      <div class="right-side-button-container right-side-item">
        <el-button
          class="right-side-button right-side-confirm"
          type="primary"
          @click="updateLabel(labelInfo)"
        >
          确定
        </el-button>
        <el-button
          class="right-side-button right-side-quit"
          type="danger"
          @click="closeThis"
        >
          关闭
        </el-button>

      </div>
    </div>
</template>

<script>
    export default {
      name: "ColorSelector",
      data(){
          return{
            labelColorSet: [
              ['#64B5F6', '#E91E63', '#9C27B0', '#673AB7'],
              ['#3F51B5', '#2196F3', '#00BCD4', '#009688'],
              ['#4CAF50', '#CDDC39', '#FBC02D', '#FFA000'],
              ['#EF6C00', '#FFAB91', '#00000F', '#757575']
            ],
            colorPickerItem:'color-picker-item',
            borderColor:'border-color',

          }
      },
      methods:{
        changeColor(item){
          this.labelInfo.labelColor = item;
        },
        closeThis(){
          this.$store.commit('closeRightSide')
        },
        deleteLabel(item){
          this.$store.commit('deleteLabel',item)
          this.$store.commit('setCurrentAcsDeleteLabel')
        },
        updateLabel(){
          this.$store.commit('updateLabel',this.labelInfo)
        },
        chooseLabel(labelsItem){
          var label = {
            labelName:labelsItem.labelName,
            labelId:labelsItem.labelId,
            labelColor:labelsItem.labelColor
          }
          this.$store.commit('setCurrentColorSelectorData',[label,2])

        }
      },
      computed:{
        labelInfo(){
          return this.$store.state.currentColorSelectorData
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

          return list;
        },
        acsDeleteLabels(){
          return this.$store.state.currentAcsDeleteLabel
        }
      }
    }
</script>

<style scoped>
  .tag-box-delete{

  }

  .right-side{
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
  .color-picker-item-container {
    padding: 10px;
    margin-left: 10%;
  }
  .right-side p{
    padding-left: 5%;
    width: auto;
    display: inline-block;
  }
  .label-input{
    display: inline-block;
    width: 70%;
    margin-left: 3%;
  }
  .color-picker-item {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 3px solid #AAAAAA;
  }
  .border-color {
    border: 3px solid;
  }

  .my-tags{
    display: inline-block;
    width: auto;
    height: 35px;
    text-align: center;
    color: white;
  }
  .my-tags-delete{
    margin-left: 10%;
  }
  .right-side-item{
    margin-top: 3%;
  }
  .right-side-button-container{
    margin: auto;
    width: 50%;
    padding-top: 50px;
  }

</style>
