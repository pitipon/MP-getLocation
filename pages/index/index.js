//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    let page = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        var userLocation = {
           accuracy : res.accuracy,
           altitude : res.altitude,
           horizontalAccuracy : res.horizontalAccuracy,
           latitude : res.latitude,
           longitude : res.longitude,
           speed : res.speed,
           verticalAccuracy : res.verticalAccuracy
        }
        page.setData({ userLocation })
      }
    })


  }
})
