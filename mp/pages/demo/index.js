Page({
  data: {
    msg: "",
  },
  clickMe: function () {
    this.setData({ msg: "Hello World" });
  },
  onHelloBtnClick() {
    wx.navigateTo({
      url: 'pages/list/index',
    });
  },
});
