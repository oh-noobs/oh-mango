<template>
  <div class="page">

    <!--header  -->
    <div class="header">
      <div class="left">
        酒仙桥中路
      </div>
      <div class="right">
          text
      </div>
    </div>

    <!--top  -->
    <div class='top'>
        Mango
    </div>

    <!--扫码  -->
    <div class="scan">
      <button class="scan-button" bindtap="tapScan">扫码定位货架</button>
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
        <li v-for="shelf in shelfList">
          <div>{{shelf.name}}</div>
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
    shelfList () {
      return store.state.shelfList
    }
  },
  methods: {
    tapScan: () => {
      console.log('tap scan')
    }
  }
}
</script>
<style>

</style>


