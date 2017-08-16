<template>
  <div class="iuim-dialog">
    <transition :name="animateClass">
      <div class="dialog-box" :class="classBox" @click="closeOverlay" v-if="showDialog">
        <div class="dialog__content dialog__content--radius">
          <div class="dialog-body">
            <div v-html="message"></div>
          </div>
          <div class="dialog-footer" v-if="!hideAllButton">
            <button class="btn" v-if="useConfirmBtn" @click="whenConfirm">Confirm</button>
            <button class="btn" @click="closeDialog">Close</button>
          </div>
        </div>
      </div>
    </transition>
    <div class="dialog-backdrop" :class="classBackdrop"></div>
  </div>
</template>

<script>
export default {
  name: 'iuimDialog',

  data: function () {
    return {
      showDialog: false,
      message: '',
      hideAllButton: false,
      useConfirmBtn: false,
      onConfirm: null,
      onOpen: null,
      onClose: null,
      disableOverlayClick: false,
      animateClass: '',
      customClass: ''
    }
  },

  computed: {
    classBox: function () {
      let clasz = this.customClass
      if (this.showDialog) {
        clasz = this.customClass + 'dialog--shown'
      }
      return clasz
    },
    classBackdrop: function () {
      let clasz = this.customClass
      if (this.showDialog) {
        clasz = this.customClass + 'dialog--shown dialog-fade-enter'
      } else {
        clasz = 'dialog-fade-leave'
      }
      return clasz
    }
  },

  methods: {
    closeOverlay: function (event) {
      let _self = this

      if (event.target.className.indexOf('dialog--shown') > 0 && !_self.disableOverlayClick) {
        _self.showDialog = false
      }
    },

    whenConfirm: function (event) {
      let _self = this
      event.preventDefault()

      _self.showDialog = false

      if (_self.onConfirm !== null) {
        _self.onConfirm()
      }
    },

    openDialog: function (options) {
      let _self = this

      if (options.type === 'info') {
        _self.hideAllButton = true
      } else {
        _self.hideAllButton = false
      }

      if (typeof options.animateClass !== 'undefined') {
        _self.animateClass = options.animateClass
      } else {
        _self.animateClass = ''
      }

      if (options.type === 'confirm') {
        _self.useConfirmBtn = true
      } else {
        _self.useConfirmBtn = false
      }

      if (typeof options.disableOverlayClick !== 'undefined') {
        _self.disableOverlayClick = options.disableOverlayClick
      } else {
        _self.disableOverlayClick = false
      }

      if (typeof options.onConfirm !== 'undefined' && options.onConfirm !== null) {
        _self.onConfirm = options.onConfirm
      } else {
        _self.onConfirm = null
      }

      if (typeof options.onClose !== 'undefined' && options.onClose !== null) {
        _self.onClose = options.onClose
      } else {
        _self.onClose = null
      }

      if (typeof options.onOpen !== 'undefined') {
        _self.onOpen = options.onOpen
      } else {
        _self.onOpen = null
      }

      if (_self.onOpen !== null) {
        _self.onOpen()
      }

      _self.showDialog = true
      _self.message = options.message
    },

    closeDialog: function (event) {
      let _self = this
      event.preventDefault()

      _self.showDialog = false

      if (_self.onClose !== null) {
        _self.onClose()
      }
    }
  }

}
</script>

<style lang="scss" src="./animate.scss"></style>
<style lang="scss" src="./dialog.scss"></style>
