
Page({
  data: {
    region: ['广东省', '广州市', '海珠区'],
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  fromsubmit(e) {
    var userInfo = e.detail.value
    userInfo.region = this.data.region
    console.log(userInfo)
    wx: wx.navigateTo({
      url: '/pages/address/address',
      success: function (res) {
        console.log(res)
      }
    })
  }
})