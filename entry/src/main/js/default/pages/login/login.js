import { setSystemBarProperties } from '../../utils/index';
//import { normalLogin } from '../../api/auth/validateCode';
import inputMethod from '@ohos.inputmethod';
import prompt from '@system.prompt';
import { getLoginCode } from '../../api/hdd';
import { userTokenKey } from '../../utils/cacheKey';
import maRouter from "../../maRouter/index"
import storage from "../../utils/storage"
export default {
  data: {
    codeImage: "",
    form: {
      username: "",
      password: "",
      uuid: "mail-app",
      code: "",
      platType: 1
    },
    submitLoading: false
  },
  onInit() {
    this.getLoginCodeImage()
  },
  onShow(){
    this.initBarStatus()
  },
  initBarStatus() {
    setSystemBarProperties({
      statusBarColor: "#ffffff"
    })
  },
  getLoginCodeImage() {
    getLoginCode().then(res => {
      console.log(JSON.stringify(res));
      this.codeImage = "data:image/jpg;base64," + res.img
      this.form.uuid = res.uuid
    }).catch(() => {})
  },
  inputChange(type, e) {
    const value = e.value
    this.form[type] = value
  },
  async handleLogin() {
    if (this.submitLoading) {
      return false
    }
    if (!(this.form.username.trim())) {
      prompt.showToast({
        message: '请输入登录账号',
        duration: 1500,
      })
      return false
    }
    if (!(this.form.password.trim())) {
      prompt.showToast({
        message: '请输入登录密码',
        duration: 1500,
      })
      return false
    }
    if (!(this.form.code.trim())) {
      prompt.showToast({
        message: '请输入登录验证码',
        duration: 1500,
      })
      return false
    }
    try {
      const inputMethodController = inputMethod.getInputMethodController()
      inputMethodController.stopInput((error, result) => {
        if (error) {
          console.error('failed to stopInput because: ' + JSON.stringify(error));
          return;
        }
        if (result) {
          console.info('Success to stopInput.(callback)');
        } else {
          console.error('Failed to stopInput.(callback)');
        }
      });
    } catch (e) {
      console.log("inputMethodControllerError");
      console.log(e);
    }
    this.submitLoading = true
    setTimeout(async () => {
      prompt.showToast({
        message: '登录成功',
        duration: 2000,
      })
      // 模拟登录功能
      const params = await maRouter.getParams()
      await storage.setStorage(userTokenKey, this.form.username + this.form.password + this.form.uuid)
      if (params.redirect) {
        // 重定向之前删除登录页面缓存路由参数
        await maRouter.clearParams()
        maRouter.replace({
          url: params.redirect, params: params.redirectParams || {}
        })
      } else {
        maRouter.replace({
          url: "pages/index/index"
        })
      }
      this.submitLoading = false
    }, 2000)
//    normalLogin(this.form).then(res => {
//      console.log("login:" + JSON.stringify(res));
//      const data = res.data || {}
//      if (data.access_token) {
//        prompt.showToast({
//          message: '登录成功',
//          duration: 2000,
//        })
//        setTimeout(async () => {
//          // 模拟登录功能
//          const params = await maRouter.getParams()
//          await storage.setStorage(userTokenKey, data.access_token)
//          if (params.redirect) {
//            // 重定向之前删除登录页面缓存路由参数
//            await maRouter.clearParams()
//            maRouter.replace({url: params.redirect, params: params.redirectParams || {} })
//          } else {
//            maRouter.replace({
//              url: "pages/index/index"
//            })
//          }
//          this.submitLoading = false
//        }, 2000)
//      } else {
//        this.submitLoading = false
//        prompt.showToast({
//          message: res.msg,
//          duration: 2000,
//        })
//      }
//    }).catch(err => {
//      this.submitLoading = false
//      prompt.showToast({
//        message: JSON.stringify(err.msg ? err.msg : err),
//        duration: 2000,
//      })
//      this.getLoginCodeImage()
//      console.log("err:" + JSON.stringify(err));
//    })
  }
}
