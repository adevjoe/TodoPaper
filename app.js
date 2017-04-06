//小程序逻辑
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    version: "0.0.1",
    userInfo: null,
    hasLogin: false,
    //任务描述常量
    task: {
      level: ["无关紧要", "普通", "优先",　"紧急"],
      levelIcon: ["/img/level1.png", "/img/level2.png", "/img/level3.png",　"/img/level4.png"],
      tag: ["工作", "个人", "娱乐", "其它"],
      tagColor: ["#4268f4", "#41f4dc", "#e841f4", "#f44155"]
    }
  }
})