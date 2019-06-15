<template>
  <el-card class="box-card">

    <div slot="header" class="box-card-label" @click="openColorSelector(labelList)">
      <span style="color: black">{{labelList.labelName}}</span>
      <el-button class="box-card-label-button" style="float: right; padding: 3px 0" type="text">
      </el-button>
    </div>
    <div v-for="item in labelList.todolist"
         v-if="!item.complete"
         :key="labelList.labelId.toString()+'-'+item.affairId.toString()"
         class="todo-item" >
      <el-row :gutter = 20>
        <el-col :span = 2>
          <label>
            <input type="checkbox" class="todo-item-checkbox tui-checkbox" v-model="item.complete">
          </label>
        </el-col>
        <el-col :span = 22 class="todo-item-text-col">
          <div class="todo-item-text" @click="openEditSide(item)">
<!--            点击之后打开相关的编辑器-->
            {{ item.title }}
          </div>
        </el-col>
      </el-row>

    </div>
  </el-card>


</template>

<script>
//传入的是labelList
    export default {
        name: "todoCard",
        methods:{
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
  .el-card__header{
    background-color: #64B5F6;
  }
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
