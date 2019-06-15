// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import affairData from './todoAffair'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */



const store = new Vuex.Store({
  state :{
    personalToDoList: [],

    //rightside开启的状态，因为是跨域组件，消息要互传
    RIGHT_MODEL_COLOR_SELECT:2,
    RIGHT_MODEL_NULL:0,
    RIGHT_MODEL_EDIT:1,
    rightSideModel:0,
    currentEditData:{},//包括affair信息和label信息
    currentColorSelectorData:{},
    currentEditDataChosenLabel:{}
  },
  getters :{



  },
  mutations :{


    updateCurrentEditDataLabel(state,data){
      state.currentEditDataChosenLabel = data
    },
    setCurrentEditData(state,data){
      state.currentEditData  = data[0];
      state.currentEditDataChosenLabel = data[0].Label
      state.rightSideModel = data[1];
    },

    setCurrentColorSelectorData(state,data){
      state.currentColorSelectorData = data[0];
      state.rightSideModel = data[1];
    },

    setPersonalToDoList (state,data){
      state.personalToDoList = data;

    },
    updateLabel(state,data){
      for(let i=0;i< state.personalToDoList.length;i++){
        if (state.personalToDoList[i].labelId === data.labelId){
          state.personalToDoList[i].labelColor = data.labelColor
          state.personalToDoList[i].labelName = data.labelName

          break
        }
      }
    },
    closeRightSide(state){
      state.rightSideModel = 0;
    },
    addNewAffair(state,data){
      //data : labelId,affairall
      var labelId = data.Label.labelId
      state.personalToDoList[labelId-1].todolist.push({
        affairId: state.personalToDoList[labelId-1].todolist.length,
        title: data.title,
        content: data.content,
        remindTime: data.remindTime,
        complete: false,
        remindUser: null
      })
    },
    addNewLabel(state,data){
      //data : labelall
      state.personalToDoList.add(data);
    },
    updateAffair(state,data){
      //先进行选择label的匹配
      var oldLabelId = data.Label.labelId
      var newLabelId = state.currentEditDataChosenLabel.labelId
      var personaldolist = state.personalToDoList
      var editData = {
        affairId: data.affairId,
        title: data.title,
        content: data.content,
        remindTime: data.remindTime,
        complete: false,
        remindUser: null
      }
      //不能直接根据ID调用列表，不然会出错误的，应该去遍历匹配进行修改
      if (oldLabelId !== newLabelId){

        state.personalToDoList[oldLabelId-1].todolist.splice(editData.affairId-1,1)
        //重新整理affairid
        for(let i=editData.affairId-1;i<state.personalToDoList[oldLabelId-1].todolist.length;i++){
          state.personalToDoList[oldLabelId-1].todolist[i].affairId = state.personalToDoList[oldLabelId-1].todolist[i].affairId - 1;
        }
        editData.affairId = personaldolist[newLabelId-1].todolist.length + 1
        state.personalToDoList[newLabelId-1].todolist.push(editData)
      }else {
        state.personalToDoList[newLabelId-1].todolist[data.affairId-1] = editData
      }

      state.rightSideModel = 0;


    }

  },
  actions :{
    getPersonalToDoList (context){

      setTimeout(()=>(
        context.commit('setPersonalToDoList',affairData.personalTodoList)
      ),500)
    }
  }

})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


