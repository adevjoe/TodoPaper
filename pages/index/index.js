//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    taskList: [],
    staticData: {}
  },
  onLaunch: function () {
    console.log('index Launch')
  },
  onLoad: function () {
    //设置静态数据
    this.setData({
      staticData: app.globalData.task
    })
    console.log('index Load')
  },
  onShow: function () {
    var that = this
    console.log('index Show')
    wx.getStorage({
      key: 'taskList',
      success: function(res){
        // success
        that.setData({
          taskList: res.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onPullDownRefresh: function(){
    var that = this
    wx.getStorage({
      key: 'taskList',
      success: function(res){
        // success
        that.setData({
          taskList: res.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        wx.stopPullDownRefresh()
        console.log(that.data.taskList)
      }
    })
  },
  openCloseMenu: function (event) {
    var that = this
    var index = event.target.dataset.taskIndex
    wx.showActionSheet({
      itemList: ["完成任务", "删除任务"],
      success: function(res) {
        if (res.tapIndex == 0){
          var taskList = wx.getStorageSync('taskList')
          var finishedTask = wx.getStorageSync('finishedTask') || []
          finishedTask.unshift(taskList[index])
          taskList.splice(index,1)
          wx.setStorageSync('finishedTask', finishedTask)
          wx.setStorageSync('taskList', taskList)
          that.setData({
            taskList: taskList
          })
        } else if (res.tapIndex == 1){
          var taskList = wx.getStorageSync('taskList')
          taskList.splice(index,1)
          wx.setStorageSync('taskList', taskList)
          that.setData({
            taskList: taskList
          })
        }
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  }
})
