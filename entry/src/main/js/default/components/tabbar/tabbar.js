import maRouter from "../../maRouter"

export default {
  data: {
    active: -1,
    tabbarList: [
      {
        inactiveIcon: "common/images/tabbar/home-normal.png",
        activeIcon: "common/images/tabbar/home-active.png",
        text: "首页",
        path: "pages/index/index"
      },
      {
        inactiveIcon: "common/images/tabbar/category-normal.png",
        activeIcon: "common/images/tabbar/category-active.png",
        text: "分类",
        path: "pages/category/category"
      },
      {
        inactiveIcon: "common/images/tabbar/cart-normal.png",
        activeIcon: "common/images/tabbar/cart-active.png",
        text: "购物车",
        path: "pages/cart/cart"
      },
      {
        inactiveIcon: "common/images/tabbar/my-normal.png",
        activeIcon: "common/images/tabbar/my-active.png",
        text: "我的",
        path: "pages/userCenter/userCenter"
      }
    ]
  },
  onPageShow() {
    const routerState = maRouter.getState()
    const index = this.tabbarList.findIndex(item => item.path === (routerState.path + routerState.name))
    if (index !== -1) {
      this.active = index
    }
  },
  itemClick(item) {
    const routerState = maRouter.getState()
    const currentRoute = routerState.path + routerState.name
    if (currentRoute !== item.path) {
      maRouter.push({ url: item.path })
    }
  }
}