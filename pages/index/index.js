import {
  request,
  baseUrl
} from '../../util/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    baseURL: '',
    bigTypeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSwiperList()
    this.getBigTypeList()
  },
  getBigTypeList() {
    request('bigType/findAll', {
      method: 'get'
    }).then(res => {
      this.setData({
        bigTypeList: res.message
      })
    })
  },
  getSwiperList() {
    request('product/findSwiper', {
      method: 'get'
    }).then(res => {
      this.setData({
        swiperList: res.message,
        baseURL: baseUrl
      })
    })
  }
})