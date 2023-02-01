import { rand, setSystemBarProperties } from '../../utils/index';
import { navList } from '../../utils/categoryOptions';

export default {
  data: {
    searchKey: "",
    tabsIndex: 0,
    tabList: [],
    tabSecondList: [],
    dataLoading: false
  },
  onShow() {
    this.genSearchKey()
    this.initTabInfo()
    this.initBarStatus()
  },
  initBarStatus() {
    setSystemBarProperties({
      statusBarColor: "#c82519"
    })
  },
  initTabInfo() {
    this.tabList = navList
    this.genTabSecondList(this.tabsIndex)
  },
  genTabSecondList(index) {
    this.dataLoading = true
    let loadTimer = setTimeout(() => {
      this.tabSecondList = navList[index].children
      clearTimeout(loadTimer)
      loadTimer = null
      this.dataLoading = false
    }, 300)
  },
  genSearchKey() {
    const keyList = ["婴幼儿奶粉", "饮水机 立式", "路由器无线", "乳胶漆"]
    const index = rand(0, keyList.length) - 1
    this.searchKey = keyList[index]
  },
  handleTabClick(index) {
    if (this.tabsIndex === index) {
      return false
    }
    this.tabsIndex = index
    this.tabSecondList = []
    this.genTabSecondList(index)
    this.tabbarScroll(index)
  },
  /**
   * 左侧导航栏滚动逻辑
   */
  tabbarScroll(index) {
    console.log("index:" + index);
    // 导航栏容器对象
    const $tabbar = this.$refs.tabbar
    const tabbarScollOffset = $tabbar.getScrollOffset()
    console.log("tabbarScollOffset:" + JSON.stringify(tabbarScollOffset));
    const tabbarRect = $tabbar.getBoundingClientRect()
    // 导航栏容器高度
    const tabbarScrollHeight = tabbarRect.height
    console.log("tabbarScrollHeight:" + tabbarScrollHeight);
    // 导航栏容器可视区域的导航个数，下取整
    const visibilityCount = Math.floor(tabbarScrollHeight / 46)
    console.log("visibilityCount:" + visibilityCount);
    // 导航栏容器可视区域中间位置下标，上取整
    const visibilityCenterIndex = Math.ceil(visibilityCount / 2) - 1
    console.log("visibilityCenterIndex:" + visibilityCenterIndex);
    // 当点击的导航栏下标小于等于中间位置以及滚动位置不为0时，导航栏容器滚动到顶部
    if (index <= visibilityCenterIndex && tabbarScollOffset.y !== 0) {
      console.log("tabbar滚动？");
      $tabbar.scrollBy({
        dx: 0, dy: -tabbarScollOffset.y, smooth: true
      })
    } else if (index > visibilityCenterIndex) {
      console.log("总滚动：" + (index - visibilityCenterIndex) * 46)
      console.log("现在位置：" + tabbarScollOffset.y);
      $tabbar.scrollBy({
        dx: 0, dy: (index - visibilityCenterIndex) * 46 - tabbarScollOffset.y, smooth: true
      })
    }
  }
}
