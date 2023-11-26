export const baseUrl = 'http://localhost:8080/'
export const request = (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: options.method,
      data: options.data,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}