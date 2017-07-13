<template>
  <div class="markdown-body loading">
    <h1>加载动效组件</h1>
    <div class="loading__demo">
        <button v-loading.fullscreen="loading" class="btn" @click="toggle('loading')">全屏</button>
        <button class="btn" v-loading="{context:'.loading__demo',value:loading2}" @click="toggle('loading2')">局部</button>
    </div>
    <div v-html="doc"></div>
  </div>
</template>

<script>
import doc from './Loading.md';
import loading from 'js-component/loading';
import Vue from 'vue';
let timer = null;
Vue.use(loading);

export default {
  data() {
    return {
      doc: doc,
      loading:false,
      loading2:false
    }
  },
  methods:{
    toggle(name){
      let _this = this;
      _this[name] = !_this[name];
      timer = setTimeout(function(){
        clearTimeout(timer);
        _this[name] = !_this[name];
      },3000)
    }
  }
}
</script>

<style lang="scss">
@import '~scss-kit';
@import '~js-component/loading/loading.scss';
.loading {
  .btn {
    text-decoration: none;
    @extend %button-init;
    @include button-variant(#fff, #4AA6FC, #4AA6FC);
    @include button-size(rem(10), rem(70), rem(30), 1.4, rem(5));
    margin:0 rem(30)
  }
  #{&}__demo{
    text-align: center;
    padding: rem(100) 0;
  }
}
</style>
