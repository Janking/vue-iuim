<template>
  <transition name="iuim-loading" mode="in-out" @afterLeave="removeWrap">
    <div class="iui-loading" v-if="visible">
      <svg version="1.1" id="loading-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946,s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634,c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
        <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0,C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(168 20 20)">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    removeWrap() {
      this.$emit('removeWrap')
    }
  }
}
</script>

<style>
.iuim-loading-enter-active {
  transition: opacity .3s ease;
}

.iuim-loading-leave-active {
  transition: opacity .3s ease;
}

.iuim-loading-enter,
.iuim-loading-leave-to {
  opacity: 0;
}

.iuim-loading-wrap {
  position: relative;
}

.iuim-loading-wrap .iui-loading {
  position: absolute;
}

.iuim-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 9999;
}

.iuim-loading svg {
  position: absolute;
  z-index: 99999999999;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: rem(80px);
  height: rem(80px);
}

svg path,
svg rect {
  fill: #eee;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
