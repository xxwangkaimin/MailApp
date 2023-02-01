/**
 * 路由信息配置文件
 * 在使用路由时，请使用完整路由
 */
const routerList = [
  {
    url: "pages/login/login",
    meta: {
      auth: false
    }
  },
  {
    url: "pages/index/index",
    meta: {
      auth: false
    }
  },
  {
    url: "pages/category/category",
    meta: {
      auth: false
    }
  },
  {
    url: "pages/cart/cart",
    meta: {
      auth: false
    }
  },
  {
    url: "pages/userCenter/userCenter",
    meta: {
      auth: true
    }
  },
  {
    url: "pages/notFund/notFund",
    meta: {
      auth: false
    }
  }
]

export default routerList