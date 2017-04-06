var app = getApp()
Page({
  data: {
    userInfo: null,
    version: '0.0.1',
    hasUserInfo: false,
    menu: [{
      "name": "已完成任务数",
      "icon": "/img/finish.png",
      "page": "pages/finish/finish"
    }, {
      "name": "个人信息",
      "icon": "/img/info.png",
      "page": "pages/info/info"
    }],
    help: [{
      "name": "设置",
      "icon": "/img/config.png",
      "page": "pages/config/config"
    }, {
      "name": "帮助",
      "icon": "/img/help.png",
      "page": "pages/help/help"
    }, {
      "name": "反馈",
      "icon": "/img/feedback.png",
      "page": "pages/feedback/feedback"
    }]
  },
  onLoad: function(options) {
      this.setData({
        version: "版本号：" + app.globalData.version
      })
  },
  onShow: function(options) {
      
  },
  getUserInfo: function () {
    var that = this

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 1500
          })
        }
      })
    }
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: null
    })
  }
})