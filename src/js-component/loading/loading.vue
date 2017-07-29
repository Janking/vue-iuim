<template>
  <transition name="iuim-loading" mode="in-out" @afterLeave="removeWrap">
    <div class="iuim-loading" v-if="visible">
      <div class="iuim-loading-svg">
        <svg v-if="type === 1" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="spinner-type-1">
          <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" />
          </path>
        </svg>
        <svg v-if="type === 2" class="spinner-type-2" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" stroke-width="3" stroke-linecap="round" cx="25" cy="25" r="20"></circle>
        </svg>
        <svg v-if="type === 3" class="spinner-type-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="40px" height="40px" fill="white">
          <circle cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
        </svg>
  
        <div class="iuim-loading-text" v-if="text">{{text}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    removeWrap() {
      this.$emit('removeWrap')
    }
  }
}
</script>
