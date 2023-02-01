import { setSystemBarProperties } from '../../utils/index';
import { rand } from '../../utils/index';
import homeFunctionOptions from "../../utils/homeFunctionOptions"
import goodsOptions from "../../utils/goodsOptions"
import window from '@ohos.window';

export default {
  data: {
    searchKey: "",
    bannerList: [
      { image: "https://m15.360buyimg.com/mobilecms/jfs/t1/211075/1/28820/132155/63929aceEa1e28497/f3acf0f97b3cd84a.jpg!cr_1125x449_0_166!q70.jpg" },
      { image: "https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/66479/13/21399/65518/62e271dfE4dc4181f/2d7c014f2d37b45b.jpg!cr_1053x420_4_0!q70.jpg" },
      { image: "https://m15.360buyimg.com/mobilecms/jfs/t1/145420/35/33381/73430/63be12c0F9aebe043/94740f9b8471c01a.jpg!cr_1053x420_4_0!q70.jpg" },
      { image: "https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/19535/26/20349/38863/63aa4f80Fa0f42c16/e8006c8573dcf124.jpg!cr_1053x420_4_0!q70.jpg" }
    ],
    functionList: [],
    goodsLeftList: [],
    goodsRightList: []
  },
  onInit() {
    this.initFunctionList()
    this.initGoodsList()
  },
  onShow() {
    this.initBarStatus()
    this.genSearchKey()
  },
  initBarStatus() {
    setSystemBarProperties({
      statusBarColor: "#c82519"
    })
  },
  genSearchKey() {
    const keyList = ["婴幼儿奶粉", "饮水机 立式", "路由器无线", "乳胶漆"]
    const index = rand(0, keyList.length) - 1
    console.log("searchKeyIndex:" + index);
    this.searchKey = keyList[index]
  },
  searchKeyClick() {
    console.log("searchInputClick");
  },
  initFunctionList() {
    const functionOptions = []
    const chunk = 10
    const count = Math.ceil(homeFunctionOptions.length / 10)
    for (let i = 0; i < count; i++) {
      // 0 10
      // 10 20
      // 20 30
      functionOptions.push(homeFunctionOptions.slice(i * chunk, chunk * (i + 1)))
    }
    console.log(functionOptions.length);
    this.functionList = functionOptions
  },
  initGoodsList() {
    this.goodsLeftList = goodsOptions.filter((item, index) => index % 2 === 0)
    this.goodsRightList = goodsOptions.filter((item, index) => index % 2 === 1)
  }
}
