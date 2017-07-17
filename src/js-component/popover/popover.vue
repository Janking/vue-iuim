<template>
  <div class="iuimPopover" @click="toggle" :style="{display:wrapDipslay}">
    <slot></slot>
    <transition name="popover" mode="out-in" @enter="enter">
      <div class="iuimPopover-context" v-if="state">
        <div class="iuimPopover-backdrop" :style="{'z-index':initZindex}"></div>
        <div class="iuimPopover-content" :class="triangle" :style="position">{{template}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
let getZindex = (function () {
  let zid = 9999
  return function () {
    return zid++
  }
})()

let getScrollTop = function (scrollEl) {
  let scrollElem = document.querySelector(scrollEl) || document.body
  let top = scrollElem.scrollTop
  let left = scrollElem.scrollLeft
  return { top, left }
}

const OFFSET_MAP = {
  'top-left': (matrix, scrollOffset, boxMatrix) => {
    // let w = matrix.width
    // let h = matrix.height
    let l = matrix.left
    let t = matrix.top
    let sl = scrollOffset.left
    let st = scrollOffset.top
    // let bw = boxMatrix.width
    let bh = boxMatrix.height

    return {
      top: t + st - bh - (bh * 0.1),
      left: sl + l
    }
  },
  'top-center': (matrix, scrollOffset, boxMatrix) => {
    let w = matrix.width
    // let h = matrix.height
    let l = matrix.left
    let t = matrix.top
    let sl = scrollOffset.left
    let st = scrollOffset.top
    let bw = boxMatrix.width
    let bh = boxMatrix.height
    return {
      top: t + st - bh - (bh * 0.1),
      left: sl + l - (bw / 2) + (w / 2)
    }
  },
  'top-right': (matrix, scrollOffset, boxMatrix) => {
    let w = matrix.width
    // let h = matrix.height
    let l = matrix.left
    let t = matrix.top
    let sl = scrollOffset.left
    let st = scrollOffset.top
    let bw = boxMatrix.width
    let bh = boxMatrix.height
    return {
      top: t + st - bh - (bh * 0.1),
      left: sl + l - (bw - w)
    }
  },
  'bottom-left': (matrix, scrollOffset, boxMatrix) => {
    // let w = matrix.width
    let h = matrix.height
    let l = matrix.left
    let t = matrix.top
    let sl = scrollOffset.left
    let st = scrollOffset.top
    // let bw = boxMatrix.width
    let bh = boxMatrix.height

    return {
      top: t + st + h + (bh * 0.1),
      left: sl + l
    }
  },
  'bottom-center': (matrix, scrollOffset, boxMatrix) => {
    let w = matrix.width
    let h = matrix.height
    let l = matrix.left
    let t = matrix.top
    let sl = scrollOffset.left
    let st = scrollOffset.top
    let bw = boxMatrix.width
    let bh = boxMatrix.height
    return {
      top: t + st + h + (bh * 0.1),
      left: sl + l - (bw / 2) + (w / 2)
    }
  },
  'bottom-right': (matrix, scrollOffset, boxMatrix) => {
    let w = matrix.width
    let h = matrix.height
    let l = matrix.left
    let t = matrix.top
    let sl = scrollOffset.left
    let st = scrollOffset.top
    let bw = boxMatrix.width
    let bh = boxMatrix.height
    return {
      top: t + st + h + (bh * 0.1),
      left: sl + l - (bw - w)
    }
  }
}

export default {
  name: 'iuimPopover',
  version: '1.0.0',
  props: {
    content: {
      type: String
    },
    scrollEl: {
      type: String,
      default: 'body'
    },
    arrow: {
      type: String,
      default: 'bottom-left'
    }
  },
  data() {
    return {
      state: false,
      initZindex: getZindex(),
      template: this.content,
      position: {},
      wrapDipslay: '',
      scroller: this.scrollEl,
      triangle: this.arrow
      // triSize:this.triangleSize
    }
  },
  methods: {
    toggle(event) {
      let isBackdrop = event.target.className.indexOf('iuimPopover-backdrop') > -1
      this.state = !isBackdrop
    },
    enter: function (el, next) {
      let selector = this.$el
      let relativeElem = selector.children.length ? selector.children[0] : selector
      let relativeElemMatrix = relativeElem.getBoundingClientRect()
      let scrollOffset = getScrollTop(this.scrollEl)
      let box = this.$el.querySelector('.iuimPopover-content').getBoundingClientRect()
      let matrix = OFFSET_MAP[this.triangle](relativeElemMatrix, scrollOffset, box)

      if (matrix.top < 0) {
        matrix = OFFSET_MAP[this.triangle.replace(/(\w+)-/, 'bottom-')](relativeElemMatrix, scrollOffset, box)
      }

      if (matrix.left < 0) {
        matrix = OFFSET_MAP[this.triangle.replace(/-(\w+)/, '-left')](relativeElemMatrix, scrollOffset, box)
      }

      this.position = {
        'left': matrix.left + 'px',
        'top': matrix.top + 'px',
        'z-index': getZindex()
      }
      next()
    }
  },
  mounted() {
    let selector = this.$el
    let relativeElem = selector.children.length ? selector.children[0] : selector
    this.wrapDipslay = window.getComputedStyle(relativeElem).getPropertyValue('display')
  }
}
</script>

<style lang="scss">
@import '../../scss-kit';
.popover-enter-active {
  transition: opacity .3s ease;
}

.popover-leave-active {
  transition: opacity .3s ease;
}

.popover-enter,
.popover-leave-to {
  opacity: 0;
}

.iuimPopover-backdrop {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#000, .5);
}

.iuimPopover-content {
  position: absolute;
  background-color: #fff;
  z-index: 10000;
  padding: rem(20);
  border-radius: rem(5);
  width: rem(500);
  white-space: normal;
  word-wrap: break-word;
  font-size: rem(28);
  text-align: left;
  &:after {
    content: '';
    position: absolute;
  }
  &.top-left:after {
    top: 100%;
    left: 10%;
    margin-top: -1px;
    @include triangle(rem(30), #fff transparent, down);
  }
  &.top-center:after {
    top: 100%;
    left: 50%;
    margin-top: -1px;
    margin-left: rem(-15);
    @include triangle(rem(30), #fff transparent, down);
  }
  &.top-right:after {
    top: 100%;
    right: 10%;
    margin-top: -1px;
    @include triangle(rem(30), #fff transparent, down);
  }
  &.bottom-left:after {
    top: rem(-15);
    left: 10%;
    margin-top: 1px;
    @include triangle(rem(30), #fff transparent, up);
  }
  &.bottom-center:after {
    top: rem(-15);
    left: 50%;
    margin-top: 1px;
    margin-left: rem(-15);
    @include triangle(rem(30), #fff transparent, up);
  }
  &.bottom-right:after {
    top: rem(-15);
    right: 10%;
    margin-top: 1px;
    margin-left: rem(-15);
    @include triangle(rem(30), #fff transparent, up);
  }
}
</style>
