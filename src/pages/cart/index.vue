<template>
<div>
  <div>
    <header title="购物车">
      <icon slot="right" class="iconfont icon-saoma" @tap="scan"></icon>
    </header>
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
    </div>
  </div>
</div>
</template>

<script>
  export default {
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
