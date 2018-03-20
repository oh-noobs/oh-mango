<template>
  <div class='component-header'>
    <div class="left">
      <slot name="left">
        <icon class="iconfont icon-back"></icon>
      </slot>
    </div>

    <div class="right">
      <div>{{name}}</div>
      <img src="{{avatar}}" alt="" background-size="cover" />
    </div>

    <div>
      <text class="h1">{{title}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['avatar', 'name']
  }
</script>

<style lang="less" scoped>

  .component-header {
    height: 44px;
    padding: 0 15px;
    overflow: hidden;
    text-align: center;
    background-color: orange;
    >div {
      &.left, &.right {
        color: #FFF;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &.left {
        float: left;
      }
      &.right {
        float: right;
      }
      &:nth-child(3){
        display: inline-block;
      }
    }
    .icon-back {
      height:100%;
      font-size: 16px;
      vertical-align:middle;
    }
    text {
      height: 100%;
      color: #FFFFFF;
      font-size: 16px;
      line-height: 44px;
      display: inline-block;
    }

    .h1 {
      font-size: 32px;
    }
  }
</style>
