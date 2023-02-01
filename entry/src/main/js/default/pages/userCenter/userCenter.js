import { setSystemBarProperties } from '../../utils/index';
import maRouter from "../../maRouter"

export default {
  data: {
    title: ""
  },
  onInit() {
    this.title = "用户中心";
  },
  async onShow() {
    const params = await maRouter.getParams()
    console.log(JSON.stringify(params));
    this.initBarStatus()
  },
  initBarStatus() {
    setSystemBarProperties({
      statusBarColor: "#ffffff"
    })
  },
}
