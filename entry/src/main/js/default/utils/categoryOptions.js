function genList() {
  const $0 = { children: [] }
  const secondList = $0.children
  let mapList = []
  for (let item of secondList) {
    // console.log(item.children[0].innerHTML)
    let itemMap = { title: item.children[0].innerHTML, children: [] }
    let cateList = item.children[1].children
    for (let temp of cateList) {
      if (temp.children && temp.children[0]) {
        // console.log(temp.children)
        console.log(temp.children[0].children[0].currentSrc)
        console.log(temp.children[0].children[1].innerHTML)
        // console.log(temp.children[0].children[1])
        itemMap.children.push({
          image: temp.children[0].children[0].currentSrc,
          text: temp.children[0].children[1].innerHTML
        })
      }
    }
    mapList.push(itemMap)
  }
}

export const navList = [
  {
    "title": "热门推荐",
    "children": [
      {
        title: "热门分类",
        children: [
          {
            "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
            "text": "空调"
          },
          {
            "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg",
            "text": "冰箱"
          },
          {
            "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",
            "text": "电脑"
          },
          {
            "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
            "text": "手机"
          },
          {
            "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",
            "text": "全面屏手机"
          },
          {
            "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/134182/23/366/16758/5eccb3caE2b8d0c6d/7ab40f9d9441a2a5.jpg",
            "text": "保健品"
          },
          {
            "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",
            "text": "游戏手机"
          },
          {
            "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t1/114862/21/8081/13361/5ecb398fEc7c98869/4b4101d0acbf4ced.jpg",
            "text": "口罩"
          },
          {
            "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t1/136893/38/305/31308/5ecb84dcE410bc59a/36568e70a84f8807.jpg",
            "text": "驱蚊用品"
          },
          {
            "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t1/120301/21/3027/11815/5ecb80a8Ed94ec15d/c20f3541c5618e17.jpg",
            "text": "电磁炉"
          },
          {
            "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/111738/8/8168/9785/5ecb40ccE19924aec/1a1a91827d0f07ba.jpg",
            "text": "电热水壶"
          },
          {
            "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg",
            "text": "数据线"
          },
          {
            "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t1/131006/3/360/19831/5eccb047E2e95a92e/b425dc4923a20c15.jpg",
            "text": "图书"
          },
          {
            "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",
            "text": "美妆护肤"
          },
          {
            "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t1/104017/10/11956/27906/5e3e8936E54437217/e5905d3b63d5f6fb.jpg",
            "text": "除菌液"
          },
          {
            "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t1/129461/33/2827/16392/5ecb3dd2E2d178436/c4cd36d661e91665.jpg",
            "text": "休闲零食"
          },
          {
            "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg",
            "text": "充电宝"
          },
          {
            "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg",
            "text": "体温计"
          },
          {
            "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg",
            "text": "投影机"
          },
          {
            "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg",
            "text": "游戏机"
          }
        ]
      }
    ]
  },
  {
    "title": "手机数码",
    "children": [{
      "title": "热门品牌",
      "children": [{
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
        "text": "小米"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
        "text": "华为"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
        "text": "荣耀"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
        "text": "iPhone"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png",
        "text": "vivo"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png",
        "text": "OPPO"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg",
        "text": "魅族"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png",
        "text": "三星"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg",
        "text": "一加"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/108301/34/7712/3254/5e5f0de9E4ca2f4b5/c664966ee1d36d47.jpg",
        "text": "努比亚"
      }]
    }, {
      "title": "手机通讯",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
        "text": "老人机"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg",
        "text": "手机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg",
        "text": "全面屏手机"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg",
        "text": "游戏手机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg",
        "text": "拍照手机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg",
        "text": "对讲机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg",
        "text": "京东回收"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t1/109596/11/7650/2742/5e5f1074E76a2364e/09b2b19f13691c60.jpg",
        "text": "女性手机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg",
        "text": "京东维修"
      }]
    }, {
      "title": "运营商",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png",
        "text": "合约机"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png",
        "text": "选号卡"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg",
        "text": "办套餐"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t1/86212/5/13882/10155/5e5f10b7E0130f150/75eef80d6e68bba2.jpg",
        "text": "京东网厅"
      }]
    }, {
      "title": "手机配件",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg",
        "text": "数据线"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13657/281/912225045/5343/3109ae02/5a167b73Na69aae95.jpg",
        "text": "手机储存卡"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t1/107011/2/13826/4294/5e5f1150E2f5dd505/d9503871495a5a18.jpg",
        "text": "充电宝"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t17548/288/1331085893/6458/52545456/5ac486c6N0c8a93dc.jpg",
        "text": "手机贴膜"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t17284/353/1280266808/3696/32c00915/5ac486ccN2d8031c1.jpg",
        "text": "手机耳机"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t18091/128/1346418266/3819/9dc8206c/5ac486d1Ncae5823b.jpg",
        "text": "蓝牙耳机"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t19144/51/1301628112/4640/fbf9dfb6/5ac486d7N3afa8a3e.jpg",
        "text": "手机支架"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t19357/275/1266747041/8012/244ec91b/5ac486deN24e397cb.jpg",
        "text": "手机饰品"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t18796/230/1350793435/3980/3f19a427/5ac48749Nf95f399e.jpg",
        "text": "车载配件"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t16774/124/1318736793/3884/cb658723/5ac4874fN6bc007b0.jpg",
        "text": "充电器"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t18340/309/1327570911/1624/d7fd938c/5ac48770N435b114d.jpg",
        "text": "手机电池"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t19015/148/1326835130/7790/ddc201c3/5ac48776N9bf8b7c7.jpg",
        "text": "创意配件"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t19723/252/1293815631/3782/83b375cb/5ac4877eNa263158a.jpg",
        "text": "拍照配件"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t18556/113/1299885588/4128/81ee8564/5ac48786N17d8442a.jpg",
        "text": "苹果周边"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t1/87174/1/13815/4336/5e5f15e2E103f440f/be8812eec2e74c61.jpg",
        "text": "手机壳/保护套"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t1/88445/17/13789/4506/5e5f15feEf22f8fa4/dc08edc60977b020.jpg",
        "text": "无线充电器"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/106332/2/14035/4448/5e5f161bEaba81d22/0fefc1b200564b1b.jpg",
        "text": "背夹充电宝"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t1/97678/19/13946/1935/5e5f1631E94c6e613/8b0b4c154d39f97a.jpg",
        "text": "手机转接"
      }]
    }, {
      "title": "摄影摄像",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13765/295/926307178/7966/3228af24/5a1679f2Nc2f659b6.jpg",
        "text": "单反相机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12814/251/897168610/8107/60a873f/5a1679caNada7f827.jpg",
        "text": "数码相机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12103/88/911420740/3644/5d80c2d9/5a1679e9Nc3e2dd28.jpg",
        "text": "拍立得"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12586/176/939117172/2550/d16b4b6c/5a1679c3N67e2b3f1.jpg",
        "text": "户外器材"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12364/268/939218267/3342/780120ca/5a1679f1N577ba68b.jpg",
        "text": "单电/微单相机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12859/213/903907037/4465/aad95a43/5a1679daNbea69778.jpg",
        "text": "摄像机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13471/257/894155873/9479/7f38d7e/5a1679d5Nfdcfe9bb.jpg",
        "text": "运动相机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12154/164/880046972/2880/86b45b51/5a1679b9N42a5f8e5.jpg",
        "text": "镜头"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11101/333/2250404943/7079/da2367be/5a1679baNaffaf88c.png",
        "text": "冲印服务"
      }]
    }, {
      "title": "影音娱乐",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12931/44/891657494/2295/7609fca6/5a167864Ne52020f2.jpg",
        "text": "便携/无线音箱"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11518/28/2381795148/3559/268392b0/5a167859N01d8198b.jpg",
        "text": "音箱/音响"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12478/108/888997336/8147/a11bd237/5a16782fN5899ee5e.jpg",
        "text": "MP3/MP4"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13510/13/889605109/2757/5594d57f/5a167866N8c853168.jpg",
        "text": "耳机/耳麦"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13153/363/907758425/1791/3138302d/5a167834N97e065bb.jpg",
        "text": "麦克风"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13600/224/883450494/2256/801f9c0b/5a16782eN9012c0c4.jpg",
        "text": "专业音频"
      }]
    }, {
      "title": "数码配件",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11806/47/2248616132/4516/e4aec88e/5a1676e9N1ba70a81.jpg",
        "text": "存储卡"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11122/182/2222069305/1713/af6c4ea3/5a1676d7N70b9300c.jpg",
        "text": "三脚架/云台"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13960/1/896234990/3495/ba79dcd5/5a16769aNc48193e6.jpg",
        "text": "数码支架"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12013/240/926457268/3399/b9ae87a7/5a1676f9N0198258e.jpg",
        "text": "读卡器"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t14059/125/899971136/3385/dae73e41/5a1676efN42553f76.jpg",
        "text": "滤镜"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12184/276/902476544/2247/395ad640/5a1676d4Nb81ebdcb.jpg",
        "text": "相机清洁/贴膜"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13498/111/906841326/10806/3e913761/5a1676e6Na93e4fd1.jpg",
        "text": "相机包"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12871/119/940831255/3989/70c3fd57/5a1676ecNfdacde72.jpg",
        "text": "闪光灯/手柄"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12079/282/904418347/5828/f42b5c8e/5a16767bNe089435f.jpg",
        "text": "电池/充电器"
      }]
    }, {
      "title": "智能设备",
      "children": [{
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11977/66/2331987943/5747/c47a800b/5a1674a2Nf5dc75c6.jpg",
        "text": "智能手环"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11800/163/2392976653/6565/a9dc4c3b/5a16749eN34794086.jpg",
        "text": "智能手表"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13318/328/886534248/4667/81c8906/5a167490N092a2af2.jpg",
        "text": "智能家居"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13288/240/895737412/4317/a36e4d05/5a16745dNa1c329c2.jpg",
        "text": "智能机器人"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11944/353/2328891001/2068/a66878bd/5a16747aNeecc001b.jpg",
        "text": "体感车"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13885/191/891735699/5160/da2bded2/5a16745aN29dedc36.jpg",
        "text": "无人机"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12355/67/924284298/2140/cbf52719/5a167464Nb18dbd59.jpg",
        "text": "其他配件"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13930/266/903222742/3308/8b774f1b/5a167484N0a623a5b.jpg",
        "text": "VR眼镜"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13330/284/897613796/1872/cac5ade4/5a167467Ndd23929b.jpg",
        "text": "智能配饰"
      }]
    }, {
      "title": "电子教育",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11494/97/2366433924/3228/c6827521/5a167302N7103e54c.jpg",
        "text": "学生平板"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11977/187/2336671981/2658/10749ff6/5a167317Nde2f9a4b.jpg",
        "text": "电纸书"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13000/167/859650860/3237/a72abbe8/5a167312N33ea5808.jpg",
        "text": "录音笔"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13891/46/885209933/6676/d54b44d8/5a1672fbN487f682b.jpg",
        "text": "早教益智"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13432/76/902190959/2632/6175273e/5a167308Ne65f7b7c.jpg",
        "text": "点读机/笔"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12904/65/910326652/3090/c9fe6001/5a16730dN65cbc05a.jpg",
        "text": "复读机"
      }]
    }]
  },
  {
    "title": "京东超市",
    "children": [{
      "title": "休闲零食",
      "children": [{
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg",
        "text": "休闲零食"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11461/336/1331406760/15773/60c49ab7/59ffd6d0Ncb29412d.png",
        "text": "坚果炒货"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11890/195/1248876103/12648/403ce46a/59ffd6b9Nc88344b5.png",
        "text": "糖巧"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11500/115/1293305736/3233/7bb2056a/59ffd6ccNb9875d1d.jpg",
        "text": "饼干蛋糕"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11749/28/952474396/2583/64b85652/59fc31b6N4feb7d84.jpg",
        "text": "肉干肉脯"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11275/128/1281544342/3341/64f437e/59ffd6fbN047718c7.jpg",
        "text": "蜜饯果干"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t7570/153/3996735769/2714/a58d5793/59ffd6ffN95ab2f9b.jpg",
        "text": "无糖食品"
      }]
    }, {
      "title": "粮油调味",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t10495/93/1089311310/6581/6d04b65f/59dc753fN205018c1.jpg",
        "text": "大米"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11260/95/1647695392/2372/36b50b69/5a0564c7N3da70f2c.jpg",
        "text": "食用油"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13960/237/184398959/3756/deb95739/5a0564d3N315cbc9d.jpg",
        "text": "方便速食"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11896/289/1648594931/2393/a10449b5/5a0564ceN3a65d5eb.jpg",
        "text": "调味品"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13312/272/182485474/2406/ca89aed0/5a0564e7N24b2f750.jpg",
        "text": "南北干货"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12139/263/181438448/8809/53c7a2cb/5a0564b5Ne126460d.jpg",
        "text": "面粉"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13315/224/187738504/12862/7dcc50dd/5a0564bdN760afe2b.jpg",
        "text": "杂粮"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t14173/224/176225860/10297/a6266f4f/5a0564d6Na553bc94.jpg",
        "text": "烘焙原料"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13507/226/180805443/3090/b22770fe/5a0564dfN60e183fa.jpg",
        "text": "有机食品"
      }]
    }, {
      "title": "水饮茗茶",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13120/365/181384138/2502/3eb53542/5a056b11N78c98876.jpg",
        "text": "牛奶制品"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12181/363/183823010/2568/e92c4fe7/5a056b66Ne82a1269.jpg",
        "text": "茗茶"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13309/261/184399972/3734/830948b1/5a0569bdN28dfb4c9.jpg",
        "text": "饮用水"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12670/113/174191651/3245/1cc36ac6/5a056b6cN3b68c208.jpg",
        "text": "成人奶粉"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t7516/287/4519159825/3304/56011181/5a056afaN5db50aa8.jpg",
        "text": "饮料"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11491/1/1626234598/3499/92c24af5/5a056b14N6404e9ff.jpg",
        "text": "咖啡奶茶"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t14080/138/185079854/2956/b464265a/5a056b7aN919c5f27.jpg",
        "text": "冲饮谷物"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12043/48/185384379/3589/9bfccb6c/5a056b72Nc867599a.jpg",
        "text": "蜂蜜/柚子茶"
      }]
    }, {
      "title": "家居用品",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11752/101/1638319353/2874/c10cce77/5a058fb9Ncf8c0a7d.jpg",
        "text": "厨具"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11146/29/1680409082/1904/26326658/5a058fb1Nee2f334f.jpg",
        "text": "收纳用品"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11476/251/1649188972/2550/74e2eaef/5a058fe2N0110e541.jpg",
        "text": "女士内裤"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12355/283/202344319/1878/ac017b42/5a058febNa251a7b3.jpg",
        "text": "男士内裤"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t14185/111/185969392/1264/f8d0e039/5a059007N92578e36.jpg",
        "text": "被子被芯"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13231/331/206647099/1926/75928e0a/5a058f8cN02c94aa8.jpg",
        "text": "台灯"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13816/142/206683288/2487/492cc90a/5a059010N746bbc3d.jpg",
        "text": "床品套件"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12028/314/184912884/3052/b3a30cf7/5a058ffcN7568d47a.jpg",
        "text": "毛巾浴巾"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t1/104632/24/13978/3214/5e5f4ab1E2bd443ba/d8da2c28e6b68ec0.jpg",
        "text": "男袜"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12517/41/189740623/2878/9efb544e/5a058fccN60cc0b78.jpg",
        "text": "女袜"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/357/182777370/2783/b3057c40/5a058fa3Nfa87ad99.jpg",
        "text": "雨伞雨具"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12316/104/196444188/1811/36a8543b/5a058ff4Nd1a28dbd.jpg",
        "text": "睡衣家服"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12901/340/182237035/3038/549a612e/5a058f98Nd9f9d618.jpg",
        "text": "浴室用品"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13726/326/202239153/4510/64976d7f/5a058f81N52df34d6.jpg",
        "text": "宠物园艺"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12955/64/172063752/1876/271495d9/5a058fc4N15c3857f.jpg",
        "text": "文胸"
      }]
    }, {
      "title": "京东生鲜",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13114/249/194468242/12810/9ec2ff54/5a055de1N8c4e9dea.png",
        "text": "新鲜水果"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11302/13/1658731901/14577/364f5460/5a055f40N62903c0f.png",
        "text": "大闸蟹"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t14107/235/204148575/13630/1064e42a/5a055f22N6268fe11.jpg",
        "text": "精选肉类"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11158/348/1605392160/15862/b5b31d79/5a055f30N5c860a4f.png",
        "text": "新鲜蔬菜"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11731/254/1619959296/10831/7bdc8c60/5a055f0eNbd78b0ca.jpg",
        "text": "蛋类"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t1/101293/13/13869/3952/5e5f4b50E072e10a9/fe1988a182919b16.jpg",
        "text": "饮品甜品"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13762/235/168390137/17820/6b9c2819/5a055de9N801bbdd8.png",
        "text": "海鲜水产"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11803/102/1641100530/3311/dfde2aeb/5a055f39Nec72b58a.jpg",
        "text": "冷冻食品"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/105957/12/13828/7834/5e5f4b63E7c02459d/063de70a42863bcd.png",
        "text": "乳品冷饮"
      }]
    }, {
      "title": "个护清洁",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13684/103/181232450/2817/1bd36d3d/5a057f17Nc76b625d.jpg",
        "text": "纸品湿巾"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12136/32/190594635/3030/39a660be/5a057ef3N4b20576c.jpg",
        "text": "衣物清洁"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12046/51/196865136/2542/dd0cb394/5a057eeaNe24e73fb.jpg",
        "text": "洗发护发"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        "text": "家庭清洁"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11596/91/1612970162/2450/608966a4/5a057efdN543407fa.jpg",
        "text": "口腔护理"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t7282/295/4716826036/4665/da4c4dd2/5a057ed7N507ef94b.jpg",
        "text": "一次性用品"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13519/304/184655750/2450/608966a4/5a057eaaNf62e9b4f.jpg",
        "text": "清洁工具"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12019/118/199015154/1066/8a0a6d18/5a057eb7N89a5a55a.jpg",
        "text": "电动牙刷"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13576/83/193136329/1665/b2075f8d/5a057f0bNb48aef37.jpg",
        "text": "女性护理"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12973/327/191750501/2504/e8a0bab4/5a057ecdN8f5ef29b.jpg",
        "text": "驱虫用品"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t7501/107/4530131676/3235/ada990b/5a057ebfN8eee8a15.jpg",
        "text": "皮具护理"
      }]
    }, {
      "title": "中外名酒",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t14053/98/330802079/4340/9d4c5c69/5a093518N3e8cfba7.jpg",
        "text": "白酒"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13921/118/353147812/4301/d9cb79e6/5a093524N09e5cea5.jpg",
        "text": "葡萄酒"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t7552/85/4676409381/2618/b5d87387/5a093556N24025bbe.jpg",
        "text": "洋酒"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12919/187/327879043/5850/b002a260/5a093560Na0f06c0b.jpg",
        "text": "啤酒"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11671/134/1822792627/3680/caa1a475/5a093569N9d505ba6.jpg",
        "text": "黄酒/养生酒"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12760/237/346020035/3258/968a962a/5a093573Nd9687c5c.jpg",
        "text": "陈年老酒"
      }]
    }, {
      "title": "小家电",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11959/66/1662051435/1625/1c2b7e6a/5a05788eNbc08fb6a.jpg",
        "text": "剃须刀"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13747/142/187778257/1856/4565ffa7/5a057889Nc82d45d2.jpg",
        "text": "电吹风"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13192/100/175648491/2852/43b11921/5a05787fNcbce3408.jpg",
        "text": "厨房小电"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12358/342/194338505/1137/4c4b9a19/5a05788aN9e71aa64.jpg",
        "text": "生活电器"
      }]
    }, {
      "title": "母婴玩具",
      "children": [{
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13102/131/204407163/2679/f0dfe61d/5a059267Nc98d0438.jpg",
        "text": "尿裤湿巾"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11410/281/1674917744/5129/971fb80/5a0591fcN32b4ed1f.jpg",
        "text": "奶粉"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12169/124/189038740/2530/b76485c5/5a05922eN133a5d03.jpg",
        "text": "妈妈专区"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13201/145/182429635/2783/1d31a54c/5a059271Nfcffbb91.jpg",
        "text": "营养辅食"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t7855/321/4251231448/2819/e00d5bec/5a059255N8bd77350.jpg",
        "text": "洗护用具"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11683/17/1653766818/2890/346a356d/5a05924aN9a206dd3.jpg",
        "text": "童装"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11122/174/1526072586/4235/188d3396/5a05921bN49c436fb.jpg",
        "text": "童车童床"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13948/58/175163174/1974/e2a557ed/5a05920fN26e6af32.jpg",
        "text": "玩具"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11461/156/1629913679/1657/fda22bc3/5a059205Nfc45c925.jpg",
        "text": "乐器"
      }]
    }, {
      "title": "营养保健",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12184/96/341801013/2450/c7634634/5a091238N6e451ae2.jpg",
        "text": "营养健康"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12913/239/337002211/4372/475c0564/5a09121fNdd9bb4d2.jpg",
        "text": "计生用品"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11770/28/1782958379/2099/c0a9ffb/5a091227N71d2b2c1.jpg",
        "text": "滋补养生"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13384/294/318449447/2093/8541505f/5a091230Ncf13842b.jpg",
        "text": "营养成分"
      }]
    }, {
      "title": "美妆护肤",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12508/122/196020504/1687/e1fe001b/5a057b68Nbff8cd3f.jpg",
        "text": "沐浴用品"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11818/270/1635522748/3877/c426d79e/5a057b7aN12b6e2d3.jpg",
        "text": "女士护肤"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12514/300/194344013/3388/a76015d0/5a057b6fN4f96118b.jpg",
        "text": "男士护肤"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11134/352/1667762543/2534/b98c4d77/5a057b2bN40c96d25.jpg",
        "text": "面膜"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12415/324/175484946/2325/d05778d7/5a057b55Nbbc7822c.jpg",
        "text": "彩妆"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12400/82/186855132/2635/2a8b452d/5a057b60Ne234aaed.jpg",
        "text": "香水"
      }]
    }, {
      "title": "进口食品",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12784/319/334904619/3729/6dbd61e4/5a093af5N193312ed.jpg",
        "text": "饼干蛋糕"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t7876/30/4347131177/2298/65ece369/5a093ae8N1b102134.jpg",
        "text": "冲调饮品"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12307/351/342663737/3150/eeca87cb/5a093ad9Nc6721d03.jpg",
        "text": "休闲零食"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12178/159/330093114/3795/8a546a4a/5a093aeeNf37638ca.jpg",
        "text": "糖果巧克力"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11410/206/1817931809/4604/8abe93c/5a093ae4Nea740638.jpg",
        "text": "粮油调味"
      }]
    }]
  },
  {
    "title": "家用电器",
    "children": [{
      "title": "厨房小电",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg",
        "text": "电压力锅"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg",
        "text": "电水壶/热水瓶"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg",
        "text": "电饭煲"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg",
        "text": "电磁炉"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg",
        "text": "微波炉"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg",
        "text": "电饼铛"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg",
        "text": "豆浆机"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13192/9/990491166/2453/36169f1b/5a17f1ccN019c7fda.jpg",
        "text": "多用途锅"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg",
        "text": "料理机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13264/165/968827574/9255/7d10ad8c/5a17f224N9756f6e5.jpg",
        "text": "榨汁机/原汁机"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12094/76/967581282/2377/4611685d/5a17f1f1N9c125c81.jpg",
        "text": "电烤箱"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11947/325/2422338843/8842/231908b2/5a17c966Nd140f4e3.jpg",
        "text": "养生壶/煎药壶"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13009/346/964112809/2968/91b03a47/5a17f1aeNf7647558.jpg",
        "text": "电炖锅"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11140/308/2445458495/9043/1753bd3c/5a17f1a9N8a775fab.jpg",
        "text": "电烧烤炉"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12367/112/996967887/2205/e8c82674/5a17f20aNde6af185.jpg",
        "text": "面包机"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t14074/98/970407567/2153/72273815/5a17f208N6ea88eba.jpg",
        "text": "咖啡机"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11086/93/2414691741/2722/d9d248ff/5a17f1e3Nbb40dec0.jpg",
        "text": "煮蛋器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11356/153/2385394139/7948/dc2a0170/5a17c968Nb5ea6a23.jpg",
        "text": "电热饭盒"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11251/274/2452446468/6155/a25e078d/5a17c946N052e26a3.jpg",
        "text": "面条机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12274/166/997017520/2640/6e2fa67/5a17f1deN2f022a90.jpg",
        "text": "酸奶机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12307/139/1000478874/7910/ea6813ca/5a17f1fbNc9df1b71.jpg",
        "text": "空气炸锅"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12124/341/992252635/3589/bd16ee5/5a17f1b7N26b23a3a.jpg",
        "text": "蔬果解毒机"
      }]
    }, {
      "title": "个护健康",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13981/225/965020395/7369/1740dbbb/5a17c20fN16e27ed9.png",
        "text": "电吹风"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11539/356/2296587411/5881/9d96908e/5a17c221Nf85c1934.jpg",
        "text": "剃须刀"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11125/324/2448652642/4268/cd0fff76/5a17c201N6f968e89.jpg",
        "text": "理发器"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11209/303/2393582425/2406/d7c577aa/5a17c1eeNb9958e28.jpg",
        "text": "足浴盆"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13306/243/970438254/1447/a2be4ca5/5a17c21bN9fa5f473.jpg",
        "text": "剃/脱毛器"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13306/163/993416845/6361/f53b0e98/5a17c1f5Nb9390d12.jpg",
        "text": "按摩器"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12421/326/945805627/2801/4c9985ca/5a17c1ddNba83885a.jpg",
        "text": "卷/直发器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13297/176/988569238/3559/8b7e1e75/5a17c1fcN516045fe.jpg",
        "text": "按摩椅"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11779/36/2420240260/4056/d6ce030b/5a17c214N2eab4352.jpg",
        "text": "口腔护理"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13615/96/1004728348/4470/f3e62def/5a17c1e8Nbfc87330.jpg",
        "text": "电子秤"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11065/145/2436762903/1153/41871627/5a17c209Nff3d08aa.jpg",
        "text": "美容器"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t1/109022/23/7637/3768/5e5f1954E6cba8f2e/b3a7808943cf3198.jpg",
        "text": "其他健康电器"
      }]
    }, {
      "title": "冰箱",
      "children": [{
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t14047/217/992011228/3503/5b1fa21a/5a17f699N94996c85.jpg",
        "text": "全部"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13153/44/964603695/1011/21d660d2/5a17f6aeN280056ea.jpg",
        "text": "双门冰箱"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13588/266/943842715/1088/c4ae40e4/5a17f6c5Ne56d7e26.jpg",
        "text": "对开门冰箱"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13711/311/977302673/2235/1a734ffc/5a17f6caNd7a7e0aa.jpg",
        "text": "十字对开门"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12247/42/992183546/1010/e5504689/5a17f6aeN47ef140c.jpg",
        "text": "三门冰箱"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13180/287/985506867/3709/3aab0a22/5a17f6aeN55f73ab4.jpg",
        "text": "单门冰箱"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t14092/321/992718608/844/c060eb1/5a17f6c0N8cf0d399.jpg",
        "text": "多门冰箱"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12928/273/1007467483/3549/52dad666/5a17f69eN1d10e257.jpg",
        "text": "冷柜/冰吧"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13642/254/981330701/2754/e38f6249/5a17f69fN782e2397.jpg",
        "text": "冰箱配件"
      }]
    }, {
      "title": "洗衣机",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t7927/184/4204864436/1170/5c6edbfd/5a17f6e7Nd3e178e9.jpg",
        "text": "波轮洗衣机"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12481/129/1018625238/1840/43d49869/5a17f6eaN9ec936de.jpg",
        "text": "滚筒洗衣机"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11683/55/2479822092/6785/8133604c/5a17f6d4Ne2a84dc3.jpg",
        "text": "全部"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11596/353/2418450536/1557/950e51b6/5a17f6d9Nd153842e.jpg",
        "text": "洗烘一体机"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13951/348/993649154/1944/da120406/5a17f6f4N217289e8.jpg",
        "text": "迷你洗衣机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11494/337/2455709327/1570/97d5c835/5a17f6daN7348da74.jpg",
        "text": "洗衣机配件"
      }]
    }, {
      "title": "厨卫大电",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11053/246/2459202669/4318/fd6bd8d1/5a17f356Nd692ab74.jpg",
        "text": "电热水器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13504/319/968427925/3517/a85d3fa1/5a17f352N64668f4c.jpg",
        "text": "燃气热水器"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12655/352/1019492969/2972/845bce79/5a17f371N09a18e9f.jpg",
        "text": "燃气灶"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12397/149/1011362977/3192/f5044ef7/5a17f374Na646a5b2.jpg",
        "text": "油烟机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11203/309/2445819268/3262/aeef9ed1/5a17f369N6a55ff3f.jpg",
        "text": "烟灶套装"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t14059/323/992046170/6209/e1c94a8/5a17f366N01b7f2a2.jpg",
        "text": "消毒柜"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13462/50/978926878/2617/2df51e84/5a17f361Nd0b768e5.jpg",
        "text": "洗碗机"
      }]
    }, {
      "title": "电视",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11842/356/2416901099/2164/ab77fbaa/5a17f71eN25360979.jpg",
        "text": "互联网电视"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11386/179/2470866031/2353/dfc7d933/5a17f72cN97075084.jpg",
        "text": "4K超高清"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13318/98/977001060/2750/23b1f7d1/5a17f724N6b00846c.jpg",
        "text": "超薄电视"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11497/215/2431437398/2303/13a78d00/5a17f73eN1ed10bce.jpg",
        "text": "曲面电视"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13741/85/997235602/2442/d633a9d1/5a17f726N196bd924.jpg",
        "text": "量子点电视"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13675/83/1003983777/1869/5025c50c/5a17f719N7371175e.jpg",
        "text": "HDR"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11704/206/2456199866/2326/c82043c8/5a17f71bN47c72a89.jpg",
        "text": "电视配件"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13540/87/982529943/2109/a637038c/5a17f70fN00d172ce.jpg",
        "text": "OLED电视"
      }]
    }, {
      "title": "生活电器",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t7291/93/4198968251/5097/2496dd10/5a17c456Nfeca1ee2.jpg",
        "text": "吸尘器/除螨仪"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13492/252/972395552/1357/869af368/5a17c46dN60cc3fc1.jpg",
        "text": "饮水机"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12280/88/975500573/2696/fe5de665/5a17c45dN98f86edd.jpg",
        "text": "挂烫机/熨斗"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13585/287/939427251/2538/55dd2f8c/5a17c47dNca9d0918.jpg",
        "text": "电风扇"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12679/49/995945596/6618/b10d8864/5a17c411Nf0cbb389.jpg",
        "text": "扫地机器人"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13975/235/991532349/2142/27417789/5a17c466Nb13ef479.jpg",
        "text": "净水器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11425/108/2429467873/1852/9e57cb3/5a17c485N8f01fa4e.jpg",
        "text": "取暖电器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t14053/258/980517283/5580/3429ca94/5a17c473N3cfb0086.jpg",
        "text": "空气净化器"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12481/340/987816776/4380/2b789ad5/5a17c441N1b8aa7da.jpg",
        "text": "插座"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t14170/218/976083925/8104/10de8a5b/5a17c44cN1f398dda.jpg",
        "text": "电话机"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12022/331/972410030/4455/41eadbc7/5a17c431N89ecf984.jpg",
        "text": "加湿器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11584/255/2392836844/4604/ce8029e2/5a17c41aNfefa67e6.jpg",
        "text": "其他生活电器"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11494/218/2434985803/8762/9e43f2c7/5a17c446Ne3786824.jpg",
        "text": "除螨机"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11953/278/2455582974/11016/1e209537/5a17c4c1N99d9cd55.jpg",
        "text": "除湿机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12289/228/966390430/1910/86e8a782/5a17c438N32c789e0.jpg",
        "text": "收录/音机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12142/130/971396530/1564/c63b7e4/5a17c478N9413050f.jpg",
        "text": "冷风扇"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11155/117/2334165482/3059/fceb491/5a17c404Nb4deccb1.jpg",
        "text": "生活电器配件"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12625/101/985726806/6610/6c0fb75/5a17c423N355a415c.jpg",
        "text": "清洁机"
      }]
    }, {
      "title": "空调",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12058/333/988659369/2356/40b65021/5a17f6f6Ndfe746aa.jpg",
        "text": "壁挂式空调"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11653/86/2434484739/2995/5e325e47/5a17f70dN5ecd3e87.jpg",
        "text": "柜式空调"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12286/335/981024064/4500/bb0106e/5a17f6e4N2357e87a.jpg",
        "text": "中央空调"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13330/39/972335009/1124/354fbfaf/5a17f6eaNc63b2c10.jpg",
        "text": "空调配件"
      }]
    }, {
      "title": "家庭影音",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12358/108/970872312/1724/2ef57e5d/5a17bed3N7e971414.jpg",
        "text": "迷你音响"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11914/269/2440740961/1226/da3ee242/5a17bed4Ne3f36920.jpg",
        "text": "DVD/电视盒子"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13510/276/992976963/2755/b5b8a097/5a17beddN189f610f.jpg",
        "text": "家庭影院"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t14053/113/960709684/9724/39473025/5a17bf70Ndc14566d.jpg",
        "text": "回音壁/Soundbar"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11941/290/2451440942/4336/f9041b68/5a17bea8N02fa11cb.jpg",
        "text": "影音配件"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13021/150/959922587/6655/120329c5/5a17be98N64f3fb3d.png",
        "text": "功放"
      }]
    }, {
      "title": "推荐品牌",
      "children": [{
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13864/93/1013549478/5788/729f2dd3/5a17f748N5da2e515.jpg",
        "text": "海尔"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t14098/181/986519925/3718/429b95eb/5a17f735N85426bd4.jpg",
        "text": "格力"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/100233/27/13858/3148/5e5f1916Ef863c48e/2e6e0002b0a72c4c.jpg",
        "text": "风行电视"
      }]
    }, {
      "title": "进口电器",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13228/257/969297235/2085/35090c2e/5a17bdf4Nc9c96fda.jpg",
        "text": "进口电器"
      }]
    }]
  },
  {
    "title": "电脑办公",
    "children": [{
      "title": "热卖分类",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png",
        "text": "轻薄本"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png",
        "text": "游戏本"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg",
        "text": "机械键盘"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg",
        "text": "组装电脑"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg",
        "text": "移动硬盘"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg",
        "text": "显卡"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg",
        "text": "游戏台式机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg",
        "text": "家用打印机"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t1/98581/29/13884/5125/5e5f1d66E8357cf2e/7232090502f87411.jpg",
        "text": "吃鸡装备"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg",
        "text": "曲屏显示器"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13492/261/938265048/5840/b5e4bdb6/5a17ba61N61a74bc3.jpg",
        "text": "投影机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/97514/11/13831/2863/5e5f1d77Ee5ab96e7/70294c751c6ce6f5.jpg",
        "text": "日本文具"
      }]
    }, {
      "title": "电脑整机",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg",
        "text": "笔记本"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg",
        "text": "平板电脑"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg",
        "text": "一体机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg",
        "text": "台式机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg",
        "text": "笔记本配件"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg",
        "text": "游戏台式机"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13138/231/1001350583/7486/6d001868/5a17b94eN820f6506.jpg",
        "text": "商用台式机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg",
        "text": "游戏本"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13504/44/947654756/2419/ca768bc2/5a17b8dcNd0418625.jpg",
        "text": "平板电脑配件"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12499/273/957225674/6892/8281d4a7/5a17b962Nf77d9f6c.jpg",
        "text": "轻薄本"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11944/224/2479637242/6222/ac9759/5a17b93dN89330bb3.jpg",
        "text": "二合一平板"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13840/141/950958975/1812/362471fe/5a17b921Nf71bb1a4.jpg",
        "text": "服务器/工作站"
      }]
    }, {
      "title": "外设产品",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11881/31/2355374158/3676/22da94de/5a16a5f0Nc6b32dda.jpg",
        "text": "鼠标"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12112/355/904591745/4308/6201dffe/5a16a5aaNdac2fe89.jpg",
        "text": "U盘"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13636/255/952363201/5216/92808140/5a16a5f6Nad15240a.jpg",
        "text": "键盘"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13378/75/927818435/4870/595967f9/5a16a5b5N4075325c.jpg",
        "text": "鼠标垫"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12139/119/906364755/3899/3e9bfbca/5a16a5adN67c1a043.jpg",
        "text": "移动硬盘"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11734/189/2377033150/4145/b78bfcf/5a16a594Ncb41c95a.jpg",
        "text": "手写板"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13420/80/910285628/2736/5f202fd8/5a16a59eNadecac30.jpg",
        "text": "硬盘盒"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13219/359/921087235/4445/bb62050e/5a16a592N7e614f3d.jpg",
        "text": "线缆"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12511/359/951124397/4655/1f4b2503/5a16a585N73dd2d73.jpg",
        "text": "手机U盘"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t14092/4/926363914/5049/8bf96ca4/5a16a57dNed5b68f6.jpg",
        "text": "电脑清洁"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12031/206/932335399/3567/d6d59ad9/5a16a578N283a0f75.jpg",
        "text": "插座"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t13687/323/893934580/3715/4657a7e6/5a16a56dN9e6309e0.jpg",
        "text": "键鼠套装"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12571/97/935919461/4129/7e1b9069/5a16a566N8fb4f9ae.jpg",
        "text": "UPS电源"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12292/173/915309013/5554/78f4ab5e/5a16a560Nc7626d33.jpg",
        "text": "电脑工具"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11455/75/2350304185/6636/e301e187/5a16a58cNb6b027df.jpg",
        "text": "机械键盘"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12499/54/910206832/5998/f91002f8/5a16a588Nff477d9d.jpg",
        "text": "摄像头"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12583/285/927237069/5490/e730e27e/5a16a572N83179fdc.jpg",
        "text": "网络仪表仪器"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/99545/38/13753/2529/5e5f1d8aE48ce0285/97e6d73f5438a246.jpg",
        "text": "网络存储"
      }]
    }, {
      "title": "电脑配件",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12055/263/988628886/5209/e79d6986/5a17b610N6ab3c530.jpg",
        "text": "显示器"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11101/105/2338497620/4171/14a94479/5a17b5fdN5902ff1c.jpg",
        "text": "硬盘"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11353/299/2402077156/2935/14c2980/5a17b5d6Ndd76bc59.jpg",
        "text": "电源"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12430/209/999346936/2994/bc6ab03f/5a17b5f6N09faf599.jpg",
        "text": "内存"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12685/330/958049282/6665/7716f391/5a17b602N70cb6fae.jpg",
        "text": "CPU"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t13588/295/987294429/6804/d7eb5a44/5a17b5f0N06ab312c.jpg",
        "text": "机箱"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12313/348/980409633/9513/6515f5d3/5a17b5dbN84f9f393.jpg",
        "text": "散热器"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11335/190/2427063449/5833/dfddd951/5a17b5e2Ne87b72a2.jpg",
        "text": "刻录机/光驱"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t11104/135/2422361524/5286/46c04948/5a17b615Nb96e7337.jpg",
        "text": "组装电脑"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t13876/331/976729253/13206/684d2b62/5a17b60bN67eeb4eb.png",
        "text": "曲面屏显示器"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11143/123/2433274265/3022/920793e3/5a17b567Nb7530d99.jpg",
        "text": "声卡/扩展卡"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12832/78/990152115/2771/20fd8fcc/5a17b559Nf7b25cf4.jpg",
        "text": "装机配件"
      }]
    }, {
      "title": "网络产品",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12544/90/909965833/3928/5f12a3cd/5a16a0c0Nc9e4641e.jpg",
        "text": "路由器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13156/37/910606768/2464/21ffdb12/5a16a0cbN03d41e72.jpg",
        "text": "网卡"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12190/262/936150426/1553/313aa78c/5a16a0bdNd3bc6d55.jpg",
        "text": "网络配件"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12808/45/890840358/1435/d3f476c2/5a16a0d2Nd1e83955.jpg",
        "text": "4G/3G上网"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t11059/148/2348973561/2618/a35dcf76/5a16a0c2N5926aded.jpg",
        "text": "网络盒子"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12832/349/921864097/1555/2d8c2be3/5a16a0b1Nd29a04bf.jpg",
        "text": "交换机"
      }]
    }, {
      "title": "办公设备",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12628/315/898303570/3133/eaff328b/5a169f9fN086c1597.jpg",
        "text": "安防监控"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12331/245/903867378/3119/852bea2b/5a16a000Na535727b.jpg",
        "text": "多功能一体机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12931/188/924944333/2986/d4408a2a/5a169ffaN432b60b4.jpg",
        "text": "打印机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12409/166/920419787/5840/b5e4bdb6/5a169ff4Nd36c2ac2.jpg",
        "text": "投影机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t12424/307/927690085/3128/c49b2731/5a169fdbN8670f3ed.jpg",
        "text": "验钞/点钞机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t13030/47/916473882/1850/1a97dcb9/5a169fd1Naf22e820.jpg",
        "text": "投影配件"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12805/68/915239505/1684/6f078216/5a169fd0Nb4b3355d.jpg",
        "text": "家用打印机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13018/70/891306089/3323/7da54977/5a169fb6N7c15a724.jpg",
        "text": "传真设备"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t11287/266/2363713650/2967/a6cb507f/5a169fd4Nacba62e0.jpg",
        "text": "扫描设备"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11605/93/2353917798/2342/247eba2d/5a169fa4N712d120f.jpg",
        "text": "装订/封装机"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t13084/19/914205801/3460/24698e64/5a169fbdN57149e63.jpg",
        "text": "考勤机"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12790/41/910746688/2378/1e821880/5a169fafNcd14b6db.jpg",
        "text": "会议音频视频"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11632/278/2374144705/4193/de1378a7/5a169fa9N133b5781.jpg",
        "text": "保险柜"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t11200/218/2389231043/2300/988ec570/5a169fc4N88455546.jpg",
        "text": "碎纸机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12028/235/946579783/2955/66a86fa8/5a169fb7Nfd0acdc3.jpg",
        "text": "收银机"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t14077/329/899390101/3150/9470ed02/5a169f94N33ac0e26.jpg",
        "text": "白板"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13540/19/897596378/2822/47e70834/5a169f9aNfdc0ff6f.jpg",
        "text": "办公家具"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11812/35/2250598231/2714/607b1b26/5a169fcaN26350f25.jpg",
        "text": "复合机"
      }]
    }, {
      "title": "文具耗材",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t13114/247/935435737/4252/34df0327/5a169742N0af905e2.jpg",
        "text": "纸类"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12205/67/936536391/2097/7c41f874/5a1696f6N3408697c.jpg",
        "text": "笔类"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t12403/331/917158160/4100/704d7789/5a16972cNd40a4079.jpg",
        "text": "墨盒"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t11962/17/2371493266/4632/b3ed7f24/5a169702N98a42bf9.jpg",
        "text": "计算器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t12646/127/932267731/2582/a3721744/5a169725Ndfca5501.jpg",
        "text": "办公文具"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t11947/1/2356196495/6077/77357527/5a169749N31cd0500.jpg",
        "text": "学生文具"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t12070/295/922707459/2307/78ce592e/5a16973cNc9f13a7c.jpg",
        "text": "硒鼓/墨粉"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t12727/164/910189409/2461/14546b8c/5a169733N126aaad9.jpg",
        "text": "色带"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t12928/135/915064453/5810/d736452b/5a169719N15f63ce6.jpg",
        "text": "文件管理"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t12994/105/933978750/3658/3769030e/5a16970fN05bf943b.jpg",
        "text": "财会用品"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11104/219/2427152074/1849/f0db31cc/5a1696feN7f69306f.jpg",
        "text": "激光笔"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t13663/102/894707283/4277/76deb85e/5a1696eeN6f61ae93.jpg",
        "text": "画具画材"
      }]
    }, {
      "title": "游戏设备",
      "children": [{
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t11668/226/2397294737/4421/ceffabb5/5a16a013N851d3dbf.jpg",
        "text": "游戏耳机"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t14008/167/890282625/4955/6332a016/5a16a018N24b3c8be.jpg",
        "text": "游戏机"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t14005/149/929673992/6044/5f94504f/5a169ff0Nce537fbc.jpg",
        "text": "手柄/方向盘"
      }]
    }]
  },
  {
    "title": "玩具乐器",
    "children": [{
      "title": "适用年龄",
      "children": [{
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t20632/73/182006321/17625/cd050730/5b02a109N15951410.jpg",
        "text": "0-6个月"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t20500/79/189012836/13613/b1beb4a2/5b02a10eN399ceaea.jpg",
        "text": "6-12个月"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t19381/31/2616382291/12312/d7bfab0e/5b02a113Na7a0c350.jpg",
        "text": "1-3岁"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t20521/286/199006524/12995/b6ff1595/5b02a119Neaa0e73e.jpg",
        "text": "3-6岁"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t19858/95/607601384/8768/4e1ce32d/5b02a11fN3cc755cc.jpg",
        "text": "6-14岁"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t18589/45/2615710906/8707/4fa69a2b/5b02a124N6429c78c.jpg",
        "text": "14岁以上"
      }]
    }, {
      "title": "遥控电动",
      "children": [{
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t17908/265/2637004465/8576/588ed433/5b02a0c0Ne124990e.jpg",
        "text": "机器人"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t17575/123/2617650159/16720/74c14629/5b02a0c6N3f2770d9.jpg",
        "text": "遥控车"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t20473/3/194410986/9860/6be4280d/5b02a0cdN9cf1d8a3.jpg",
        "text": "遥控飞机"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t21202/251/197603029/18264/a6f230b7/5b02a0d4Nb01feba8.jpg",
        "text": "轨道/助力"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t21217/262/186253182/13889/7e81afd/5b02a0dcNdf2b072c.jpg",
        "text": "遥控船"
      }]
    }, {
      "title": "积木拼插",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t19891/12/621117324/16405/ba660035/5b02a087Nf6f357db.jpg",
        "text": "立体拼插"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t20224/233/188290327/11350/8245595e/5b02a08fN9ec30c5f.jpg",
        "text": "积木"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t17632/123/2653656492/22135/10808384/5b02a094Nd7c5b479.jpg",
        "text": "拼图"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t19996/15/619143939/22280/51419995/5b02a09aN5227d7d7.jpg",
        "text": "磁力片/棒"
      }]
    }, {
      "title": "健身玩具",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t18859/111/2655931949/20632/b33b63d2/5b02a02cNdbf3135f.jpg",
        "text": "炫舞毯"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t18319/337/2590742287/19694/3324c259/5b02a032Nb73b098c.jpg",
        "text": "户外玩具"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t21364/198/207013599/12677/ebfed2b2/5b02a062N58a0e6f4.jpg",
        "text": "戏水玩具"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t18991/302/2617652191/12520/b29b4b0e/5b02a069N1f2651f2.jpg",
        "text": "爬行垫/毯"
      }]
    }, {
      "title": "乐器",
      "children": [{
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t22120/26/202935938/8891/c589e08f/5b029fb1N21c932ca.jpg",
        "text": "口琴/口风琴/竖笛"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t21805/54/196399419/8197/3a725fc4/5b029fbdNf7342f80.jpg",
        "text": "电子琴"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t17518/72/2635104761/9977/e0879c57/5b029fc3N3cf6d4f7.jpg",
        "text": "吉他"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t16708/195/2680658898/10572/d19e466/5b029fcaN1e63c5f3.jpg",
        "text": "钢琴"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t19822/289/621984348/19923/3100aaf7/5b029fd0N832c5581.jpg",
        "text": "手风琴"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t19552/119/2652076485/6711/51c04a0a/5b029fd8Nb0816b59.jpg",
        "text": "尤克里里"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t19099/131/2615880580/5560/93caef70/5b029fdeN5934ecd5.jpg",
        "text": "民族管弦乐器"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t16720/231/2612797000/7717/29c80b22/5b029feaNa2019559.jpg",
        "text": "西洋管弦"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t21349/138/198257424/13739/dd3126b9/5b029ff3N420e1a5d.jpg",
        "text": "打击乐器"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t16915/98/2633050649/10421/b5f82aea/5b029ffaN15b89c7d.jpg",
        "text": "乐器配件"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t20320/120/195879798/11523/5066d7ff/5b02a001N905262bd.jpg",
        "text": "电脑音乐"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t20020/69/629387816/13509/ae618919/5b02a007N78278a69.jpg",
        "text": "工艺礼品乐器"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t19072/235/2596187990/11861/9590aea3/5b02a00cN09a20354.jpg",
        "text": "电钢琴"
      }]
    }, {
      "title": "益智玩具",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t21259/55/199312362/7118/d2a000bc/5b029f4dNd1b38076.jpg",
        "text": "早教启智"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t20296/51/184668971/12115/55396c29/5b029f64Naa9b7f48.jpg",
        "text": "健身架"
      }, {
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t17038/287/2586626756/14531/849db02b/5b029f5eNa8af5f9a.jpg",
        "text": "拖拉玩具"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t20992/40/194673374/15321/bd2c3f04/5b029f58Nb15d78b9.jpg",
        "text": "摇铃/床铃"
      }]
    }, {
      "title": "娃娃玩具",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t19420/182/2634176746/9654/b766b31f/5b029f26N5ea1f076.jpg",
        "text": "芭比娃娃"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t20383/22/187535112/16756/a55aa77/5b029f2dN9bbcb8e0.jpg",
        "text": "卡通娃娃"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t18154/191/2609512422/11163/228e6400/5b029f32N94b13a27.jpg",
        "text": "智能娃娃"
      }]
    }, {
      "title": "毛绒布艺",
      "children": [{
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t18616/35/2637940288/8740/635e9ea3/5b029edfN66192514.jpg",
        "text": "毛绒/布艺"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t18277/108/2555744201/12661/202a0cfe/5b029eecN697ff18a.jpg",
        "text": "靠垫/抱枕"
      }]
    }, {
      "title": "模型玩具",
      "children": [{
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t19360/67/2590447976/12208/f60fec3b/5b029ea2Nab9d5f94.jpg",
        "text": "拼插模型"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t21247/349/189501229/10860/259add7a/5b029ea8N18643408.jpg",
        "text": "仿真模型"
      }, {
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t20842/327/187680696/10976/eb13fe1b/5b029eafN4016945a.jpg",
        "text": "收藏爱好"
      }]
    }, {
      "title": "创意减压",
      "children": [{
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t18313/114/2575372934/8809/cde7b48a/5b029e7eN4540d07e.jpg",
        "text": "减压玩具"
      }, {
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t22408/254/192043985/11776/f5b42e02/5b029e86N323d2d35.jpg",
        "text": "创意玩具"
      }]
    }, {
      "title": "动漫玩具",
      "children": [{
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t21202/306/199603033/14045/2352c490/5b029e4fNd107ff03.jpg",
        "text": "电影周边"
      }, {
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t18115/267/2636258657/14915/253f2e5d/5b029e56Nb8782d85.jpg",
        "text": "卡通周边"
      }, {
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t16987/129/2555682361/7002/acc471c0/5b029e5dNd25a5940.jpg",
        "text": "网游周边"
      }]
    }, {
      "title": "绘画DIY",
      "children": [{
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t17710/26/2627779496/15893/4d306cd7/5b029d37N1c79a120.jpg",
        "text": "绘画工具"
      }, {
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t18760/92/2626101159/12215/335931f1/5b029d44Nbfc36cda.jpg",
        "text": "情景玩具"
      }, {
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t19774/313/2620928670/13798/c03db1c0/5b029d54N653ba3a7.jpg",
        "text": "手工彩泥"
      }]
    }]
  },
  { "title": "家居厨具", "children": [] },
  { "title": "家具家装", "children": [] },
  { "title": "男装", "children": [] },
  { "title": "男鞋", "children": [] },
  { "title": "女装", "children": [] },
  { "title": "女鞋", "children": [] },
  { "title": "美妆护肤", "children": [] },
  { "title": "医药保健", "children": [] },
  { "title": "酒水饮料", "children": [] },
  { "title": "运动户外", "children": [] },
  { "title": "汽车生活", "children": [] },
  { "title": "礼品鲜花", "children": [] },
  { "title": "京东国际", "children": [] },
  { "title": "宠物生活", "children": [] },
  { "title": "二手商品", "children": [] },
  { "title": "拍卖", "children": [] },
  { "title": "箱包手袋", "children": [] },
  { "title": "钟表珠宝", "children": [] },
  { "title": "农资绿植", "children": [] },
  { "title": "生活旅行", "children": [] },
  { "title": "奢侈品", "children": [] },
  { "title": "计生情趣", "children": [] },
  { "title": "艺术邮币", "children": [] },
  { "title": "特产馆", "children": [] },
  { "title": "京东金融", "children": [] },
  { "title": "国际名牌", "children": [] },
  { "title": "房产", "children": [] },
  { "title": "工业品", "children": [] }
]
