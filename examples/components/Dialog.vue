<template>
  <div class="markdown-body">
    <h1>对话框</h1>
    <div class="dialog__demo">
      <!-- <button class="btn" v-dialog="{visible:dialog}" @click="toggle('dialog')">default</button> -->
      <button class="btn" @click="open('iuimDialog',{message:'Hey, I am Opened, but I dont have title',type:'default'})">default</button>
      <iuimDialog ref="iuimDialog"></iuimDialog>
    </div>
  </div>
</template>

<script>
// import dialog from 'js-component/dialog'
import iuimDialog from 'js-component/dialog/dialog.vue'
// import Vue from 'vue'
// Vue.use(dialog)
export default {
  components: {
    iuimDialog
  },
  data() {
    return {
      // dialog: false
    }
  },
  methods: {
    toggle(name) {
      let _this = this
      _this[name] = !_this[name]
    },
    open (plugin, options) {
      this.$refs[plugin].openDialog(options)
    }
  },
  mounted: function() {
    // console.log(this)
  }
}
</script>

