import http from '@ohos.net.http';

const baseUrl = "http://127.0.0.1/api/"
/**
 * 对象参数转链接参数
 * @param params
 */
export function addQueryString(params) {
  if (JSON.stringify(params) === "{}") {
    return ""
  }
  var str = '';
  for (var Key in params) {
    str += Key + '=' + params[Key] + '&';
  }
  return '?' + str.substr(0, str.length - 1);
}
/**
 * 发起请求
 * @param url 请求地址
 * @param method 请求方式
 * @param data 请求参数
 * @param stringify = false 针对post请求是否在URL后拼接参数
 */
function Request(url, method, data = {}, stringify = false) {
  url = baseUrl + url
  let extraData = {}
  // 如果是get请求或者post请求参数在URL拼接
  if (method === "GET" || (method === "POST" && stringify)) {
    url = url + addQueryString(data)
  } else {
    // 对象参数中value值转为字符串
    if (Object.prototype.toString.call(data) === "[object Object]") {
      Object.keys(data).forEach(key => {
        data[key] = String(data[key])
      })
    }
    extraData = data
  }
  const httpRequest = http.createHttp()
  const httpRequestOptions = {
    method
  }
  if (JSON.stringify(extraData) !== "{}") {
    httpRequestOptions.extraData = extraData
  }
  return new Promise((resolve, reject) => {
    httpRequest.request(url, httpRequestOptions, (err, data) => {
      if (!err) {
        try {
          if (typeof data.result === "string") {
            const dataResponse = JSON.parse(data.result)
            if (dataResponse.code === 200) {
              resolve(dataResponse)
            } else {
              console.log("responseError:" + JSON.stringify(dataResponse));
              reject(dataResponse)
            }
          } else {
            console.log("httpResponseNotString:" + data.result);
            reject(data.result)
          }
        } catch (e) {
          reject(e)
        }
      } else {
        httpRequest.destroy()
        console.log("errorData:" + JSON.stringify(data));
        console.log("httpError:" + JSON.stringify(err));
        reject(err)
      }
    })

//    httpRequest.request(url, httpRequestOptions).then(data => {
//      console.log(JSON.stringify(data));
//      try {
//        if (typeof data.result === "string") {
//          const dataResponse = JSON.parse(data.result)
//          if (dataResponse.code === 200) {
//            resolve(dataResponse)
//          } else {
//            console.log("responseError:" + JSON.stringify(dataResponse));
//            reject(dataResponse)
//          }
//        } else {
//          console.log("httpResponseNotString:" + data.result);
//          reject(data.result)
//        }
//      } catch (err) {
//        httpRequest.destroy()
//        console.log("httpError:" + JSON.stringify(err));
//        reject(err)
//      }
//    })
  })
}
/**
 * 全局get请求
 * @param url
 * @param params
 * @param stringify = false
 */
export function GET(url, params, stringify = false) {
  return Request(url, "GET", params, stringify)
}
/**
 * 全局post请求
 * @param url
 * @param data
 * @param stringify = false
 */
export function POST(url, data, stringify = false) {
  return Request(url, "POST", data, stringify)
}

export default Request