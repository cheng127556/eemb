Page({
  data: {
    cities: ["武汉", "北京", "深圳"],
    citiesIndex: 0,
    date: "请选择日期",
    showTopTips: false

  },

  // 国家选择
  bindCountryChange: function (e) {
    this.setData({
      citiesIndex: e.detail.value
    })
  },

  // 日期选择
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },



})