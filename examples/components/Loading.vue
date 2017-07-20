<template>
  <div class="markdown-body loading">
    <h1>加载动效组件</h1>
    <div class="loading__demo">
      <button v-loading="{visible:loading}" class="btn" @click="toggle('loading')">Fullscreen</button>
      <button class="btn" v-loading="{context:'.loading__demo',visible:loading2}" @click="toggle('loading2')">Local</button>
      <button class="btn" v-loading="{type:1,visible:loading3}" @click="toggle('loading3')">Loading Type 1</button>
      <button class="btn" v-loading="{type:2,visible:loading4}" @click="toggle('loading4')">Loading Type 2</button>
      <button class="btn" v-loading="{type:3,visible:loading5}" @click="toggle('loading5')">Loading Type 3</button>
      <button class="btn" v-loading="{type:4,visible:loading6}" @click="toggle('loading6')">Loading Type 4</button>
      <button class="btn" v-loading="{type:4,visible:loading7,text:'正在努力加载中'}" @click="toggle('loading7')">Loading Text</button>
    </div>
    <div v-html="doc"></div>
  </div>
</template>

<script>
import doc from './Loading.md'
import loading from 'js-component/loading'
import Vue from 'vue'
let timer = null
Vue.use(loading)
export default {
  data() {
    return {
      doc: doc,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      loading7: false
    }
  },
  methods: {
    toggle(name) {
      let _this = this
      _this[name] = !_this[name]
      timer = setTimeout(function () {
        clearTimeout(timer)
        _this[name] = !_this[name]
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
@import '~scss-kit';
.loading {
  #{&}__demo {
    text-align: center;
    padding: rem(100) 0;
    .btn {
      display: block;
      margin-bottom: rem(40)
    }
  }
}
</style>
