var app = getApp()
Page({
  data: {
    userInfo: {},
    finishedTask: [],
    count: 0
  },
  onLoad: function () {
    console.log('App Load')
  },
  onShow: function () {
    console.log('App Show')
    var finishedTask = wx.getStorageSync('finishedTask') || []
    this.setData({
      finishedTask: finishedTask,
      count: finishedTask.length
    })
  }
})
