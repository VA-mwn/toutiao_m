<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view />
    <h1>黑马头条</h1>
    <div>
      <i class="iconfont icon-shipin"></i>
    </div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>

    <div class="box">Hello world</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
  .box {
    width: 555px;
    height: 64px;
    background-color: skyblue;
  }
</style>
