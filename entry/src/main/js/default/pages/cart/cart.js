import prompt from '@system.prompt';
import { setSystemBarProperties } from '../../utils/index';
import cartList from "../../utils/cartList"

export default {
  data: {
    isEdit: false,
    dataLoading: false,
    cartList: [],
    checkedAll: false,
    dialogType: 1, // 1:收藏；2:删除
    dialogMessage: ""
  },
  computed: {
    totalCount: {
      set() {
        return 0
      },
      get() {
        return this.cartList.reduce((pre, cur) => {
          return pre + cur.sorted.length
        }, 0)
      }
    },
    totalPrice: {
      set() {
        return "0.00"
      },
      get() {
        if (!this.cartList.length) {
          return "0.00"
        }
        const checkedGoodsList = this.cartList.reduce((pre, cur) => {
          const checkedList = cur.sorted.filter(item => item.checked)
          return pre.concat(checkedList)
        }, [])
        const totalPrice = checkedGoodsList.reduce((pre, cur) => {
          return pre + ((cur.Price * cur.Num) - cur.Discount)
        }, 0)
        return totalPrice.toFixed(2)
      }
    },
    discountPrice: {
      set() {
        return "0.00"
      },
      get() {
        if (!this.cartList.length) {
          return "0.00"
        }
        const checkedGoodsList = this.cartList.reduce((pre, cur) => {
          const checkedList = cur.sorted.filter(item => item.checked)
          return pre.concat(checkedList)
        }, [])
        const discountPrice = checkedGoodsList.reduce((pre, cur) => {
          return pre + cur.Discount
        }, 0)
        return discountPrice.toFixed(2)
      }
    },
    buyTotal: {
      set() {
        return 0
      },
      get() {
        if (!this.cartList.length) {
          return 0
        }
        const checkedGoodsList = this.cartList.reduce((pre, cur) => {
          const checkedList = cur.sorted.filter(item => item.checked)
          return pre.concat(checkedList)
        }, [])
        let buyTotal = 0
        buyTotal = checkedGoodsList.reduce((pre, cur) => {
          return pre + cur.Num
        }, 0)
        return buyTotal
      }
    }
  },
  onInit() {
    console.log("cartOnInit");
    this.initCartList()
  },
  onShow() {
    this.initBarStatus()
//    this.initCartList()
    this.initCheckedAll()
  },
  handleChangeEdit() {
    this.isEdit = !this.isEdit
  },
  initCartList() {
    if (this.cartList.length === 0) {
      this.dataLoading = true
      setTimeout(() => {
        cartList.forEach(item => {
          item.checked = false
          item.sorted.forEach(sItem => {
            sItem.checked = false
          })
        })
        this.cartList = JSON.parse(JSON.stringify(cartList))
//        this.cartList = []
        this.initCheckedAll()
        this.dataLoading = false
      }, 1000)
    }
  },
  initCheckedAll() {
    if (this.cartList.length) {
      const shopCheckedAll = this.cartList.every(c => c.checked)
      this.checkedAll = shopCheckedAll
    } else {
      this.checkedAll = false
    }
  },
  initBarStatus() {
    setSystemBarProperties({
      statusBarColor: "#f6f6f6"
    })
  },
  handleShopSelect(item) {
    item.checked = !item.checked
    item.sorted.forEach(s => {
      s.checked = item.checked
    })
    if (item.checked) {
      const shopCheckedAll = this.cartList.every(c => c.checked)
      this.checkedAll = shopCheckedAll
    } else {
      this.checkedAll = false
    }
  },
  handleGoodsSelect(value, shop) {
    value.checked = !value.checked
    const goodsCheckedAll = shop.sorted.every(s => s.checked)
    if (goodsCheckedAll) {
      shop.checked = true
      const shopCheckedAll = this.cartList.every(c => c.checked)
      this.checkedAll = shopCheckedAll
    } else {
      shop.checked = false
      this.checkedAll = false
    }
  },
  handleCheckedAll() {
    this.checkedAll = !this.checkedAll
    this.cartList.forEach(item => {
      item.checked = this.checkedAll
      item.sorted.forEach(s => {
        s.checked = this.checkedAll
      })
    })
  },
  handleGoodsReduce(value) {
    if (value.Num > 1) {
      value.Num--
    }
  },
  handleGoodsIncrease(value) {
    value.Num++
  },
  toOrder() {
    if (!this.buyTotal) {
      prompt.showToast({
        message: '您还没有选择商品哦',
        duration: 1500,
      })
      return false
    }
  },
  getCheckedCount() {
    return this.cartList.reduce((pre, cur) => {
      return pre + cur.sorted.filter(s => s.checked).length
    }, 0)
  },
  handleCollect() {
    const checkedCount = this.getCheckedCount()
    if (!checkedCount) {
      prompt.showToast({
        message: '您还没有选择商品哦',
        duration: 1500,
      })
      return false
    }
    this.dialogType = 1
    this.dialogMessage = `确定要将这${checkedCount}种商品移入我的收藏？`
    this.$element('confirm-dialog').show()
  },
  handleDelete() {
    const checkedCount = this.getCheckedCount()
    if (!checkedCount) {
      prompt.showToast({
        message: '您还没有选择商品哦',
        duration: 1500,
      })
      return false
    }
    this.dialogType = 2
    this.dialogMessage = `确认要删除这${checkedCount}种商品吗？`
    this.$element('confirm-dialog').show()
  },
  handleDilaogConfirm() {
    try {
      // 把选中的商品删除掉
      const checkedCount = this.getCheckedCount()
      if (checkedCount === this.totalCount) {
        this.cartList = []
        this.isEdit = false
        return false
      }
      const cartList = []
      this.cartList.forEach(item => {
        if (!item.checked) {
          item.sorted = item.sorted.filter(s => !s.checked)
          cartList.push(item)
        }
      })
      this.cartList = cartList
      this.handleDialogCancel()
    } catch (e) {
      console.log(e);
    }
  },
  handleDialogCancel() {
    this.$element('confirm-dialog').close()
  },
  selectService(goods) {
    console.log(JSON.stringify(goods));
    this.showPanel()
  },
  showPanel() {
    this.$element('simplepanel').show()
  },
  closePanel() {
    this.$element('simplepanel').close()
  },
  handleClick(message) {
    console.log(message);
  }
}
