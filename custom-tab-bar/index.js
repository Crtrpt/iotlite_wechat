Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#fff000",
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "image/icon_component.png",
      },
      {
        "pagePath": "pages/device/device",
        "text": "设备",
        "iconPath": "image/icon_API.png",
      },
      {
        "pagePath": "pages/product/product",
        "text": "产品",
        "iconPath": "image/icon_component.png",
      }
      // {
      //   "pagePath": "pages/me/user",
      //   "text": "我的",
      //   "iconPath": "image/icon_API.png",
      // }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})