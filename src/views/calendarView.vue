<template>
  <div>
    <el-calendar :range="['2019-03-04', getCurrentTime]">
    </el-calendar>
  </div>
</template>

<script>
  export default {
    name: "calendarView",
    data(){
      return{
        now:'',
        weekAgo:'',
      }
    },
    computed:{
      getCurrentTime(){
        let time = new Date()
        this.now += time.getFullYear().toString() +'-'
        time.getMonth()<10 ?  this.now += '0' : this.now += ''
        this.now += time.getMonth().toString() + '-'
        time.getDate()<10 ?  this.now += '0' : this.now += ''
        this.now += time.getDate().toString()
        return this.now
      },
      getWeekAgo(){
        let time = new Date()
        console.log(time.getDay())
      }
    }
  }
</script>

<style scoped>

</style>
