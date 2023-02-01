import { GET } from "../http"

const serviceController = "hdd-base/aa/front/"

/**
 * 获取轮播图
 * @param params
 */
export function getListByCode(params) {
  return GET(serviceController + "getListByCode", params)
}
