import { routerParamsKey, userTokenKey } from '../utils/cacheKey';
import router from '@system.router';
import routerList from "./routerList"
import storage from "../utils/storage"
/**
 * 要跳转的路由是否存在路由表中
 * @param url
 */
export function hasRouter(url) {
  return routerList.some(item => item.url === url)
}
/**
 * 通过鉴权判断要跳转的路由能否跳转
 * @param url
 */
export async function hasRouterAuth(url) {
  // 获取到要跳转的路由
  const routerItem = routerList.find(item => item.url === url)
  // 获取到路由是否需要鉴权
  const auth = routerItem.meta.auth
  if (!auth) {
    // 不需要鉴权直接返回true
    return true
  } else {
    const userToken = await storage.getStorage(userTokenKey)
    return!!userToken
  }
}

const maRouter = {
  async push({url, params = {}}) {
    // 如果路由为空则阻止行为
    if (!url) {
      return false
    }
    // 如果要跳转的路由不在路由表中则跳转到notFund页面
    if (!hasRouter(url)) {
      router.push({
        uri: "pages/notFund/notFund"
      })
    } else {
      const routerAuth = await hasRouterAuth(url)
      if (!routerAuth) {
        this.setParams("pages/login/login", { redirect: url, redirectParams: params })
        // 如果鉴权不通过，跳转到登录页面
        router.push({
          uri: "pages/login/login",
          params: {
            redirect: url,
            redirectParams: params
          }
        })
      } else {
        this.setParams(url, params)
        router.push({
          uri: url,
          params
        })
      }
    }
  },
  async replace({url, params = {}}) {
    // 如果路由为空则阻止行为
    if (!url) {
      return false
    }
    // 如果要跳转的路由不在路由表中则跳转到notFund页面
    if (!hasRouter(url)) {
      router.push({
        uri: "pages/notFund/notFund"
      })
    } else {
      const routerAuth = await hasRouterAuth(url)
      if (!routerAuth) {
        this.setParams("pages/login/login", { redirect: url, redirectParams: params })
        // 如果鉴权不通过，跳转到登录页面
        router.push({
          uri: "pages/login/login",
          params: {
            redirect: url,
            redirectParams: params
          }
        })
      } else {
        this.setParams(url, params)
        router.replace({
          uri: url,
          params
        })
      }
    }
  },
  async back({url, params = {}}) {
    if (url) {
      if (!hasRouter(url)) {
        router.push({
          uri: "pages/notFund/notFund"
        })
      } else {
        const routerAuth = await hasRouterAuth(url)
        if (!routerAuth) {
          this.setParams("pages/login/login", { redirect: url, redirectParams: params })
          // 如果url存在并且鉴权不通过跳转到登录页面
          router.push({
            uri: "pages/login/login",
            params: {
              redirect: url,
              redirectParams: params
            }
          })
        } else {
          this.setParams(url, params)
          router.back({
            uri: url,
            params
          })
        }
      }
    } else {
      router.back()
    }
  },
  clear() {
    router.clear()
  },
  getLength() {
    return router.getLength()
  },
  getState() {
    return router.getState()
  },
  enableAlertBeforeBackPage(message) {
    router.enableAlertBeforeBackPage({
      message
    })
  },
  disableAlertBeforeBackPage() {
    router.disableAlertBeforeBackPage()
  },
  async getParams(url) {
    // 先获取路由参数缓存数据
    const routerParams = await storage.getStorage(routerParamsKey) || {}
    if (url) {
      return routerParams[url] || {}
    } else {
      const routeState = this.getState()
      console.log(JSON.stringify(routerParams));
      console.log(routeState.path + routeState.name);
      return routerParams[routeState.path + routeState.name] || {}
    }
  },
  async setParams(url, params) {
    // 先获取路由参数缓存数据
    const routerParams = await storage.getStorage(routerParamsKey) || {}
    // 设置相应路由参数
    routerParams[url] = params
    // 重新设置路由参数
    storage.setStorage(routerParamsKey, routerParams)
  },
  async clearParams(url) {
    // 先获取路由参数缓存数据
    const routerParams = await storage.getStorage(routerParamsKey) || {}
    if (!url) {
      const routeState = this.getState()
      url = routeState.path + routeState.name
    }
    // 删除对应缓存数据
    delete routerParams[url]
    // 重新设置路由参数
    await storage.setStorage(routerParamsKey, routerParams)
  }
}

export default maRouter