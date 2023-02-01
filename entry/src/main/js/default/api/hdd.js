import { GET } from "./http"

/**
 * 获取登录验证码
 * @param params
 */
export function getLoginCode(params) {
  return GET("code", params)
}
