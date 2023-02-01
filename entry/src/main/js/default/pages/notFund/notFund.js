import { setSystemBarProperties } from '../../utils/index';
export default {
  data: {
    title: ""
  },
  onInit() {
    this.title = "Not Fund";
  },
  onShow() {
    this.initBarStatus()
  },
  initBarStatus() {
    setSystemBarProperties({
      statusBarColor: "#ffffff"
    })
  },
}
