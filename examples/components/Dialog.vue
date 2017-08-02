<template>
  <div class="markdown-body">
    <h1>对话框</h1>
    <div class="dialog__demo">
      <button class="btn" v-dialog="{visible:dialog}" @click="toggle('dialog')">default</button>
    </div>
  </div>
</template>

<script>
import dialog from 'js-component/dialog'
import Vue from 'vue'
Vue.use(dialog)
export default {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    toggle(name) {
      let _this = this
      _this[name] = !_this[name]
    }
  }
}
</script>

