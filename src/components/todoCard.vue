<template>
  <el-card
    :header-style="{backgroundColor:labelList.labelColor}"
    class="box-card">

    <div
        slot="header"
         class="box-card-label "
         @click="openColorSelector(labelList)">
      <div style="width: 100%;height: 100%;">
        <span style="color: white">{{labelList.labelName}}</span>
      </div>

    </div>
    <div v-for="item in labelList.todolist"
         v-if="!item.complete"
         :key="labelList.labelId.toString()+'-'+ (item.affairIndex).toString()"
         class="todo-item" >
      <el-row :gutter = 20>
        <el-col
          :span = 2>
          <label >
            <input
              type="checkbox"
              class="todo-item-checkbox tui-checkbox"
              v-model="item.complete"
              @click="addHistoryList(item)"
              >
          </label>
        </el-col>
        <el-col :span = 20 class="todo-item-text-col">
          <div class="todo-item-text" @click="openEditSide(item)">
<!--            点击之后打开相关的编辑器-->
            {{ item.title }}

          </div>
        </el-col>
        <el-col :span=2>
          <el-button
            icon="el-icon-delete"
            style="display: inline-block;"
            @click="deleteAffair(item)"
            circle>
          </el-button>
        </el-col>
      </el-row>

    </div>
  </el-card>


</template>

<script>
//传入的是labelList
    export default {
        name: "todoCard",
        data(){
            return{
              affairKey:0,
              selfCardHeader:'self-card-header'
            }
        },
        methods:{
          addHistoryList(item){
            //记录完成的时间戳即可
            item.Label = {
              labelId:this.labelList.labelId,
              labelName:this.labelList.labelName,
              labelColor:this.labelList.labelColor,
            }
            this.deleteAffair(item)
            let time = new Date()
            item.completeTime = ''
            item.completeTime += time.getFullYear().toString() +'-'
            item.completeTime += time.getMonth().toString() + '-'
            item.completeTime += time.getDate().toString() + ' '
            item.completeTime += time.getHours().toString() + ':'
            item.completeTime += time.getMinutes().toString() + ':'
            item.completeTime += time.getSeconds().toString() + ''

            this.$store.commit('addCurrentHistory',item)
            item.complete=true
          },
          deleteAffair(item){
            item.Label = {
              labelId:this.labelList.labelId,
              labelName:this.labelList.labelName,
              labelColor:this.labelList.labelColor,
            }
            // console.log(item)
            this.$store.commit('deleteAffair',item)
            this.$store.commit('setCurrentAcsDeleteLabel')

          },
          //每次点击相关的事项都会修改currentEditData的数据
          openEditSide(affairItem){
            // affairItem.append({labelId:this.labelList.labelId})
            affairItem.Label = {
              labelId:this.labelList.labelId,
              labelName:this.labelList.labelName,
              labelColor:this.labelList.labelColor,
            }
            this.$store.commit('setCurrentEditData',[affairItem,1])
          },
          openColorSelector(labelList){
            var labelInfo = {
              labelName:labelList.labelName,
              labelId:labelList.labelId,
              labelColor:labelList.labelColor
            }
            this.$store.commit('setCurrentColorSelectorData',[labelInfo,2])
            this.$store.commit('setCurrentAcsDeleteLabel')
          }

        },
        props: {
          labelList:{
            type:Object,
            default:function () {
              return Object;
            }
          }
        },
    }
</script>

<style scoped>



  .box-card-label{
    font-size: 20px;
  }

  .todo-item{

    text-align: left;
    font-size: 18px;
  }
  .todo-item input[type=checkbox]{
    display: inline-block;
  }
  .todo-item-text{
    width: 90%;
    padding-top: 9px;
    padding-bottom: 9px;
    /*vertical-align: top;*/
    display: inline-block;

  }
  .todo-item-text-col:hover{
    background-color: #EEEEEE;
  }
  .tui-checkbox:checked {
    background:#64B5F6
  }
  .tui-checkbox {
    width:25px;
    height:25px;
    background-color:#ffffff;
    border:solid 1px #dddddd;
    -webkit-border-radius:50%;
    border-radius:50%;
    font-size:0.8rem;
    margin:0;
    padding:0;
    position:relative;
    display:inline-block;
    vertical-align:bottom;
    cursor:default;
    -webkit-appearance:none;
    -webkit-user-select:none;
    user-select:none;
    -webkit-transition:background-color ease 0.1s;
    transition:background-color ease 0.1s;
  }
  .tui-checkbox:checked::after {
    content:'';
    top:5px;
    left:5px;
    position:absolute;
    background:transparent;
    border:#fff solid 2px;
    border-top:none;
    border-right:none;
    height:6px;
    width:10px;
    -moz-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -webkit-transform:rotate(-45deg);
    transform:rotate(-45deg);
  }
</style>
