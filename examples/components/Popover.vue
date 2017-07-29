<template>
  <div class="markdown-body popover">
    <div class="article-content">
      <p>If you take a look at the animated GIF above, you'll notice that I have a dropdown of task icons on the left, I attempt to drag the row outside of the sortable's container element, and then, when I drop the row back, the SVG icons have completely disappeared. This insidious bug didn't seem to happen on Windows 7 IE11 in my tests, but, did happen in Windows 10's IE11! Although, in our example, the issue is happening due to use of a combination of
        <a>jQuery UI Sortable</a> and the
        <a>nestedSortable plugin</a> (which needs to be able to drag items off the container to achieve the nesting, any sort of detaching of DOM elements and/or moving them in the DOM, etc., could result in this disappearing behavior. Oddly, I wasn't able to find a Microsoft ticket at time of writing, but, if you have access to a Windows 10 / IE11 setup, you can see for yourself how this will happen in this
        <a>simple pen</a> which was forked from
        <a>fergaldoyle</a>. The Pen shows the same essential disappearing behavior happening, but, this time it's caused by simply moving an element containing an SVG icon via JavaScript's
        <code>appendChild</code>.</p>
    </div>
    <!-- <div class="list-item" v-for="(item,index) in list" :key="index" v-popover="{arrow:'bottom-center',content:item}">{{item}}</div> -->
    <div v-html="doc"></div>
  </div>
</template>

<script>
import doc from './Popover.md'
import popover from 'js-component/popover'
import Vue from 'vue'
import mock from 'mockjs'
Vue.use(popover)
export default {
  // components: {
  //   iuimPopover
  // },
  data() {
    return {
      doc: doc,
      content: '按时；德里克放假啊；历史课打哦器物认束带结发拉克丝京东方；离开家请饿哦无人啊；施蒂利克房间里卡三等奖分路器噢诶如；阿拉山口地方交流卡萨丁剑锋李；及 world',
      popoverVisible: false,
      list: (() => {
        let arr = []
        for (let i = 0; i < 100; i++) {
          arr.push(mock.Random.cparagraph(2, 2))
        }
        return arr
      })()
    }
  },
  methods: {
    toggle(name) { },
    test() {
      console.log('222222')
    }
  },
  mounted() {
    setTimeout(() => {
      // this.popoverVisible = true
    }, 2000)
    // console.log(this.list)
  }
}
</script>

<style lang="scss">
@import '~scss-kit';
.demo {
  padding: rem(100) 0;
}

.article-content {
  color: #333;
  line-height: 1.5;
}

.list-item {
  padding: 0 rem(20);
  height: rem(40);
  font-size: rem(32);
  margin-bottom: rem(30);
  width: 60%;
  @include ellipsis;
  color: #62bbfa;
}
</style>
