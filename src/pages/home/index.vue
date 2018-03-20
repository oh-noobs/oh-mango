<template>
  <div class="page">
    <!--header  -->
    <div class="header">
      <div class="left">
        酒仙桥中路
      </div>
      <div class="right">
        nickname[avatar]
      </div>
    </div>

    <!--top  -->
    <div class="flex top">
        Mango
    </div>

    <!--扫码  -->
    <div class="scan">
      <button class="scan-button" @click="tapScan">扫码定位货架</button>
    </div>

    <!--分割线  -->
    <div class='flex-split'>
      <div></div>
        <div>你可能在以下货架附近</div>
      <div></div>
    </div>

    <!--货架信息  -->
    <div class="shelves-container">
      <ul class='shelves'>
        <li v-for="shelf in shelfList" :key="shelf._id">
          <a :href="naviUrl(shelf.sid)">{{naviUrl(shelf.sid)}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from './store'

export default {
  onReady () {
    wx.getLocation({
      success: (res) => {
        // TODO:
        // 1. 根据经纬度获取当前位置名称
        // 2. 查询附近门店信息
        // 3. 更新门店信息
        console.log(res)
      }
    })
  },
  computed: {
    shelfList: () => {
      return store.state.shelfList
    }
  },
  methods: {
    tapScan: () => {
      console.log('tap scan')
    },
    naviUrl: (sid) => {
      const url = `/pages/cart/cart?sid=${sid}`
      console.log(url)
      return url
    }
  }
}
</script>
<style lang="less">
  .home-container {
    font-weight: 100;
    min-height: 100vh;
    background-color: #F7F7F7;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FDAA3C;
    color: #FFF;
    font-size: 16px;
  }

  .top {
    background-color: #FDAA3C;
  }

  .shelves-container {
    text-align: center;
  }

  .shelves {
    display: inline-block;
    max-width: 100%;
    padding: 0 30rpx 30rpx;
    text-align: left;
  }

  .shelve {
    display: inline-block;
    width: 330rpx;
    height: 370rpx;
    background-color: #FFF;
    border-radius: 8rpx;
  }

  .shelve:nth-child(n+3) {
    margin-top: 20rpx;
  }

  .shelve:nth-child(2n){
    margin-left: 30rpx;
  }
  .shelve-header {
    height: 220rpx;
  }
  .shelve-info {
    padding: 30rpx;
  }
  .shelve-info >view {
    line-height: 40rpx;
  }

  .dashed {
    opacity: 0.2;
    border-bottom: 1rpx dashed #556079;
  }

  .text-center {
    text-align: center;
  }

  .text-orange {
    color: #FDAA3C;
  }
</style>


