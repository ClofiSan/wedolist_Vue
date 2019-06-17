export default {
  minDate: new Date().getTime(),
  maxDate: new Date(2023, 10, 1).getTime(),
  labelColorSet: [
    ['#64B5F6', '#E91E63', '#9C27B0', '#673AB7'],
    ['#3F51B5', '#2196F3', '#00BCD4', '#009688'],
    ['#4CAF50', '#CDDC39', '#FBC02D', '#FFA000'],
    ['#EF6C00', '#FFAB91', '#00000F', '#757575']],

  personalTodoList: [
    {
      labelId: 1,
      labelName: "SE2019春",
      labelColor: '#64B5F6',
      todolist: [
        {
          affairId: 1,
          affairIndex: 1,
          title: "整一整没找过我的小组",
          content: "嘿嘿最开心啦",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
        {
          affairId: 2,
          affairIndex: 2,
          title: "准备最终评审",
          content: "捏一捏最终评审的软柿子",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
      ]
    },
    {
      labelId: 2,
      labelName: "运动-减肥",
      labelColor: '#E91E63',
      todolist: [
        {
          affairId: 1,
          affairIndex: 1,
          title: "骑自行车",
          content: "美利达呀，头盔戴上",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
        {
          affairId: 2,
          affairIndex: 2,
          title: "跑步",
          content: "这件事情好像从来没有做过？",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },

      ]
    },
    {
      labelId: 3,
      labelName: "和助教的日常",
      labelColor: '#009688',
      todolist: [
        {
          affairId: 1,
          affairIndex: 1,
          title: "下次吃什么",
          content: "虽然这个问题没什么意思，但是对于孩子们来说这是个严肃的问题",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
        {
          affairId: 2,
          affairIndex: 2,
          title: "需求助教",
          content: "选谁当助教呢？",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
        {
          affairId: 3,
          affairIndex: 3,
          title: "数据结构助教",
          content: "emmmmm最好找个很会刷题的那种助教吧",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        }
        ]
    },
        {
          labelId: 4,
          labelName: "日常",
          labelColor: '#757575',
          todolist: [
            {
              affairId: 1,
              affairIndex: 1,
              title: "在另一个账号上",
              content: "I am not Holly Yang!!!",
              remindTime: this.minDate,
              complete: false,
              remindUser: null
            },
            {
              affairId: 2,
              affairIndex:2,
              title: "在另一个账号上",
              content: "I am not Holly Yang!!!",
              remindTime: this.minDate,
              complete: false,
              remindUser: null
            },
            {
              affairId: 3,
              affairIndex:3,
              title: "在另一个账号上",
              content: "I am not Holly Yang!!!",
              remindTime: this.minDate,
              complete: false,
              remindUser: null
            },
          ]
        },
    {
      labelId: 5,
      labelName: "如果东西超了该怎么办",
      labelColor: '#EF6C00',
      todolist: [
        {
          affairIndex:1,
          affairId: 1,
          title: "在另一个账号上",
          content: "I am not Holly Yang!!!",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
        {
          affairId: 2,
          affairIndex: 2,
          title: "在另一个账号上",
          content: "I am not Holly Yang!!!",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
        {
          affairId: 3,
          affairIndex: 3,
          title: "在另一个账号上",
          content: "I am not Holly Yang!!!",
          remindTime: this.minDate,
          complete: false,
          remindUser: null
        },
      ]
    }
        ],
  historyList:[
    {
      affairId: 1,
      title: "整一整没找过我的小组",
      content: "嘿嘿最开心啦",
      remindTime: this.minDate,
      completeTime:'yyyy-MM-dd hh:mm:ss',
      complete: true,
      remindUser: null,
      Label:{
        labelId :0,
        labelName:'什么',
        labelColor:'#999999'
      }
    },
    {
      affairId: 2,
      title: "整一整没找过我的小组",
      content: "嘿嘿最开心啦",
      remindTime: this.minDate,
      completeTime:'yyyy-MM-dd hh:mm:ss',
      complete: true,
      remindUser: null,
      Label:{
        labelId :0,
        labelName:'什么',
        labelColor:'#E91E63'
      }
    },
    {
      affairId: 3,
      title: "整一整没找过我的小组",
      content: "嘿嘿最开心啦",
      remindTime: this.minDate,
      completeTime:'yyyy-MM-dd hh:mm:ss',
      complete: true,
      remindUser: null,
      Label:{
        labelId :0,
        labelName:'什么',
        labelColor:'#E91E63'
      }
    },
    {
      affairId: 4,
      title: "整一整没找过我的小组",
      content: "嘿嘿最开心啦",
      remindTime: this.minDate,
      completeTime:'yyyy-MM-dd hh:mm:ss',
      complete: true,
      remindUser: null,
      Label:{
        labelId :0,
        labelName:'什么',
        labelColor:'#E91E63'
      }
    },
  ]
  }

