<template>
<div>
  <div>
    <div title="购物车">
      <icon slot="right" class="iconfont icon-saoma" @tap="scan"></icon>
    </div>
  </div>
  <div class="none-container">
    <div class="flex">
      <icon class="test-orange large-icon iconfont icon-huocang"></icon>
      <icon class="test-orange middle-icon iconfont icon-youjiantou"></icon>
      <icon class="test-orange large-icon iconfont icon-shouji"></icon>
    </div>
    <div class="desc-container text-center">
      <div>请选取商品并拿离货架</div>
      <div class="h6">商品信息自动添加至购物车</div>
      <div>路由带过来的query{{this.$root.$mp.query}}</div>
    </div>
  </div>
</div>
</template>

<script>
import store from './store'
export default {
  computed: {
    totalNum () {
      let num = 0
      store.state.cart.map(i => num = num + i.num)
      return num
    },
    totalPrice () {
      let price = 0
      store.state.cart.map(i => price = price + i.num * i.price)
      return price
    }
  }
}
</script>

<style>
  .icon-saoma {
    font-size: 50rpx;
    color: #FFF;
    height: 100%;
    line-height: 88rpx;
    vertical-align: middle;
  }

  .large-icon {
    font-size: 160rpx;
  }

  .middle-icon {
    font-size: 80rpx;
    margin: 0 20rpx 0 50rpx;
  }

  .none-container {
  }
</style>
