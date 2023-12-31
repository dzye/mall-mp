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
    bigTypeList: [],
    hotProductList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSwiperList()
    this.getBigTypeList()
    this.getHotProductList()
  },
  getHotProductList() {
    request('product/findHot', {
      method: 'get'
    }).then(res => {
      this.setData({
        hotProductList: res.message
      })
    })
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