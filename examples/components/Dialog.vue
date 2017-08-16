<template>
  <div class="markdown-body dialog">
    <h2>对话框</h2>
    <h2>Examples</h2>
    <div class="dialog__demo">
      <button class="btn" @click="open(defaultOption)">default</button>
      <button class="btn" @click="open(infoOption)">info</button>
      <button class="btn" @click="open(confirmOption)">confirm</button>
      <button class="btn" @click="open(onOpenOption)">onOpen</button>
      <button class="btn" @click="open(onCloseOption)">onClose</button>
      <button class="btn" @click="open(overlayOption)">overlay</button>
    </div>
    <div class="dialog__demo">
      <button class="btn" @click="open(zoomOption)">zoom</button>
      <button class="btn" @click="open(rotateOption)">rotate</button>
      <button class="btn" @click="open(fadeOption)">fade</button>
      <button class="btn" @click="open(flipOption)">flip</button>
      <button class="btn" @click="open(doorOption)">door</button>
      <button class="btn" @click="open(slideUpOption)">slideUp</button>
    </div>
    <iuimDialog ref="iuimDialog"></iuimDialog>
  </div>
</template>

<script>
import iuimDialog from 'js-component/dialog/dialog.vue'
export default {
  components: {
    iuimDialog
  },
  data() {
    return {
      defaultOption: {
        plugin: 'iuimDialog',
        message: 'Hey, I am Opened, but I dont have title',
        type: 'default'
      },
      infoOption: {
        plugin: 'iuimDialog',
        message: 'Hey, I am Opened, but I dont have title',
        type: 'info'
      },
      confirmOption: {
        plugin: 'iuimDialog',
        message: 'Hey, I am Opened, but I dont have title',
        type: 'confirm',
        onConfirm: function () {
          console.log('Hey, You Confirmed')
        }
      },
      onOpenOption: {
        plugin: 'iuimDialog',
        message: 'There should be an alert before you see this',
        onOpen: function () {
          console.log('Hey, I am called when alert is opened')
        }
      },
      onCloseOption: {
        plugin: 'iuimDialog',
        message: 'Click close to trigger custom function',
        onClose: function () {
          console.log('Hey, I am Close Function')
        }
      },
      overlayOption: {
        plugin: 'iuimDialog',
        message: 'Now You can not close me by clicking overlay',
        disableOverlayClick: true
      },

      zoomOption: {
        plugin: 'iuimDialog',
        message: 'zoom-enter',
        type: 'confirm',
        animateClass: 'zoom'
      },
      rotateOption: {
        plugin: 'iuimDialog',
        message: 'rotate-enter',
        type: 'confirm',
        animateClass: 'rotate'
      },
      fadeOption: {
        plugin: 'iuimDialog',
        message: 'fade-enter',
        type: 'confirm',
        animateClass: 'fade'
      },
      flipOption: {
        plugin: 'iuimDialog',
        message: 'flip-enter',
        type: 'confirm',
        animateClass: 'flip'
      },
      doorOption: {
        plugin: 'iuimDialog',
        message: 'door-enter',
        type: 'confirm',
        animateClass: 'door'
      },
      slideUpOption: {
        plugin: 'iuimDialog',
        message: 'slideUp-enter',
        type: 'confirm',
        animateClass: 'slideUp'
      }
    }
  },
  methods: {
    open (options) {
      this.$refs[options.plugin].openDialog(options)
    }
  }
}
</script>

<style lang="scss">
@import '~scss-kit';
.dialog {
  #{&}__demo {
    text-align: center;
    padding: rem(100) 0;
    border: 5px #7dc1f1 dashed;
    width: 49%;
    display: inline-block;
    vertical-align: top;
    .btn {
      display: block;
      margin-bottom: rem(40)
    }
  }
}
</style>
