<template>
  <div class="markdown-body loading">
    <h2>加载动效组件</h2>
    <p>指令型组件，支持全屏、局部，内置3种不同的SVG动图</p>
    <h2>Examples</h2>
    <div class="loading__demo">
      <button v-loading="{visible:loading}" class="btn" @click="toggle('loading')">Fullscreen</button>
      <button class="btn" v-loading="{context:'.loading__demo',visible:loading1}" @click="toggle('loading1')">Local Loading</button>
      <button class="btn" v-loading="{context:'.loading__demo',visible:loading2,type:2}" @click="toggle('loading2')">Local Loading 2</button>
      <button class="btn" v-loading="{context:'.loading__demo',visible:loading3,type:3}" @click="toggle('loading3')">Local Loading 3</button>
      <button class="btn" v-loading="{context:'.loading__demo',visible:loading4,type:2,text:'正在加载'}" @click="toggle('loading4')">Local Loading Text</button>
      <button class="btn" v-loading="{type:1,visible:loading5}" @click="toggle('loading5')">Loading Type 1</button>
      <button class="btn" v-loading="{type:2,visible:loading6}" @click="toggle('loading6')">Loading Type 2</button>
      <button class="btn" v-loading="{type:3,visible:loading7}" @click="toggle('loading7')">Loading Type 3</button>
      <button class="btn" v-loading="{type:2,visible:loading8,text:'正在加载'}" @click="toggle('loading8')">Loading Text</button>
    </div>
  </div>
</template>

<script>
import loading from 'js-component/loading'
import Vue from 'vue'
let timer = null
Vue.use(loading)
export default {
  data() {
    return {
      loading: false,
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      loading7: false,
      loading8: false,
      loading9: false
    }
  },
  methods: {
    toggle(name) {
      let _this = this
      _this[name] = !_this[name]
      timer = setTimeout(function () {
        clearTimeout(timer)
        _this[name] = !_this[name]
      }, 3000)
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
    border: 5px #7dc1f1 dashed;
    .btn {
      display: block;
      margin-bottom: rem(40)
    }
  }
}
</style>
