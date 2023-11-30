import {
  request,
  baseUrl
} from "../../util/request"

Page({
  data: {
    selectId: 1,
    baseURL: '',
    leftMenuList: [],
    rightMenuList: [],
    rightScrollTop: 0
  },
  cates: [],
  onLoad() {
    this.getSmallTypeList()
  },
  getSmallTypeList() {
    request("bigType/findCategories", {
      method: 'get'
    }).then(res => {
      this.cates = res.message;
      const rightMenuList = res.message[0].smallTypeList
      this.setData({
        baseURL: baseUrl,
        rightMenuList: rightMenuList,
        leftMenuList: res.message,
        selectId: res.message[0].id
      })
    })
  },
  getRightList(e) {
    const curItem = e.currentTarget.dataset.item;
    this.setData({
      rightMenuList: curItem.smallTypeList || [],
      selectId: curItem.id,
      rightScrollTop: 0
    })
  }
})