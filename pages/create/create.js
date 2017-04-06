var app = getApp()
var util = require('../../utils/util')
Page({
  data: {
    staticData: {},
    task: {
      uid: "",
      levelIndex: 1,
      deadLine: "",
      time: "",
      everyday: false,
      title: "untitled ",
      description: "",
      tagIndex: 0
    }
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onLoad: function () {
    //设置静态数据
    this.setData({
      staticData: app.globalData.task
    })
    this.setData({
      "task.deadLine": util.formatDate(new Date()),
      "task.time": util.formatTime1(new Date())
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  levelChange: function(e){
    this.setData({
      "task.levelIndex": e.detail.value
    })
  },
  dateChange: function(e){
    this.setData({
      "task.deadLine": e.detail.value
    })
  },
  timeChange: function(e){
    this.setData({
      "task.time": e.detail.value
    })
  },
  everydayChange: function(e){
    this.setData({
      "task.everyday": e.detail.value
    })
  },
  bindInputTitle: function(e){
    this.setData({
      "task.title": e.detail.value
    })
  },
  bindInputDescription: function(e){
    this.setData({
      "task.description": e.detail.value
    })
  },
  tagChange: function(e){
    this.setData({
      "task.tagIndex": e.detail.value
    })
  },
  submit: function(e){
    // 设置 uid
    this.setData({
      "task.uid": 123
    })
    // 获取缓存中的任务数据
    var taskList = wx.getStorageSync('taskList') || []
    // 添加任务
    taskList.unshift(this.data.task)
    wx.setStorageSync('taskList', taskList)
    wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1500
        })
  }
})