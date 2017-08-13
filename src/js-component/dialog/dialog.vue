<template>
  <!-- <div class="iuim-dialog" v-if="visible"> -->
  <div class="iuim-dialog">
    <div class="dialog-box" :class="classDialog">
      <div class="dialog-content">
        <div class="dialog-body">
          <div>Hey, I am Opened, but I dont have title</div>
        </div>
        <div class="dialog-footer">
          <button class="btn" @click="closeDialog()">Close</button>
        </div>
      </div>
    </div>
    <div class="dialog-backdrop" :class="classDialog"></div>
  </div>
</template>

<script>
export default {
  name: 'iuimDialog',

  data: function () {
    return {
      showDialog: false
    }
  },

  computed: {
    classDialog: function () {
      var clasz = ''
      if (this.showDialog) {
        clasz = 'show'
      }
      return clasz
    }
  },

  methods: {
    openDialog: function (options) {
      var _self = this
      _self.showDialog = true
    },
    closeDialog: function () {
      var _self = this
      _self.showDialog = false
    }
  }
}
</script>

<style lang="scss" src="./dialog.scss"></style>

