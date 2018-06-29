let {
  windowWidth,
  windowHeight
} = wx.getSystemInfoSync()

Component({
  properties: {
    x: {
      type: Number,
      value: windowWidth - 70
    },
    y: {
      type: Number,
      value: windowHeight - 75
    }
  }
})
