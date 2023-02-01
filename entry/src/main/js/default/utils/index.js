import window from '@ohos.window';
import fileio from '@ohos.fileio';
import featureAbility from '@ohos.ability.featureAbility'

var context = featureAbility.getContext()
/**
 * 获取该应用程序的内部存储目录
 */
export function getCacheDir() {
  return new Promise(resolve => {
    context.getCacheDir().then(data => {
      resolve(data)
    })
  })
}

/**
 * Promise方式复制文件，方便捕获到错误信息
 * @param src
 * @param dest
 */
export function copyFile(src, dest) {
  return new Promise((resolve, reject) => {
    fileio.copyFile(src, dest).then(() => {
      resolve()
    }).catch(error => {
      //      console.log("copy file fail:" + JSON.stringify(error));
      reject(error)
    })
  })
}
/**
 * 获取获取[m，n]区间内的随机整数
 * @param {number} m
 * @param {number} n
 * @return number
 */
export function rand(m, n) {
  return Math.floor(Math.random() * (m - n + 1)) + n
}
/**
 * 设置状态栏、导航栏
 * @param systemBarProperties
 */
export function setSystemBarProperties(systemBarProperties) {
  window.getTopWindow().then((data)=> {
    const windowClass = data
    windowClass.setSystemBarProperties(systemBarProperties)
  }).catch((err)=>{
    console.error('Failed to obtain the top window. Cause: ' + JSON.stringify(err));
  })
}