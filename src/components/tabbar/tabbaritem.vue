<template>
  <div class="tab-bar-item">
      <slot name="icon"></slot>
      <slot name="text"></slot>
  </div>
</template>

<script>
export default {
    name: 'tabbaritem'
}
</script>

<style>
    .tab-bar-item {
        flex: 1;
        color: #2c3e50;
        text-align: center;
        font-size: 14px;
    }
    .tab-bar-item img {
        height: 50%;
        margin-top: 5px;
        /* 去掉图片下的3个像素 */
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>