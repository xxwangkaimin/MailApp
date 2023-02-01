import { POST } from "../http"

const serviceController = "auth/validateCode/front/"

/**
 * 登录
 * @param params
 */
export function normalLogin(params) {
  return POST(serviceController + "normalLogin", params)
}

/**
 * 退出登录
 */
//export function logout() {
//  return DELETE("auth/logout")
//}
