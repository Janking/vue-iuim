<template>
  <div class="markdown-body loading">
    <h1>弹出框</h1>
    <div class="demo">
      <iuimPopover :content="content" arrow="top-left">
        <button class="btn">top-left</button>
      </iuimPopover>
      <br>
      <br>
      <br>
      <br>
      <br>
      <iuimPopover :content="content" arrow="top-center">
        <button class="btn">top-center</button>
      </iuimPopover>
      <br>
      <br>
      <br>
      <br>
      <br>
      <iuimPopover :content="content" arrow="top-right">
        <button class="btn">top-right</button>
      </iuimPopover>
      <br>
      <br>
      <br>
      <br>
      <br>
      <iuimPopover :content="content" arrow="bottom-left">
        <button class="btn">bottom-left</button>
      </iuimPopover>
      <br>
      <br>
      <br>
      <br>
      <br>
      <iuimPopover :content="content" arrow="bottom-center">
        <button class="btn">bottom-center</button>
      </iuimPopover>
      <br>
      <br>
      <br>
      <br>
      <br>
      <iuimPopover :content="content" arrow="bottom-right">
        <button class="btn">bottom-right</button>
      </iuimPopover>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    <div v-html="doc"></div>
  </div>
</template>

<script>
import doc from './Popover.md'
import { iuimPopover } from 'js-component/popover'
// import Vue from 'vue'
// import mock from 'mockjs'

export default {
  components: {
    iuimPopover
  },
  data() {
    return {
      doc: doc,
      content: '按时；德里克放假啊；历史课打哦器物认束带结发拉克丝京东方；离开家请饿哦无人啊；施蒂利克房间里卡三等奖分路器噢诶如；阿拉山口地方交流卡萨丁剑锋李；及 world'
    }
  },
  methods: {
    toggle(name) { }
  }
}
</script>

<style lang="scss">
@import '~scss-kit';
.demo {
  text-align: center;
  padding: rem(100) 0;
}
</style>
