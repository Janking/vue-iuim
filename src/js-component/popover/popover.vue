<template>
  <transition name="popover" mode="out-in" @enter="enter" @after-enter="afterEnter">
    <div v-if="state">
      <div class="iuimPopover-content" :class="triangle" :style="position">{{template}}</div>
      <div class="iuimPopover-backdrop" :style="{height:contentHeight}" @click="hide"></div>
    </div>
  </transition>
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
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      state: this.active,
      initZindex: getZindex(),
      template: this.content,
      position: {},
      wrapDipslay: '',
      scroller: this.scrollEl,
      triangle: this.arrow,
      contentHeight: '100%'
    }
  },
  methods: {
    show() {
      this.state = true
    },
    hide() {
      this.state = false
    },
    enter(el, next) {
      this.contentHeight = document.querySelector(this.scrollEl).getBoundingClientRect().height + 'px'
      next()
    },
    afterEnter(el, next) {
      let relativeElemMatrix = this.targetEl.getBoundingClientRect()
      let scrollOffset = getScrollTop(this.scrollEl)
      let box = el.querySelector('.iuimPopover-content').getBoundingClientRect()
      let matrix = OFFSET_MAP[this.triangle](relativeElemMatrix, scrollOffset, box)
      let newArrow
      if (matrix.top < 0) {
        newArrow = this.triangle.replace(/(\w+)-/, 'bottom-')
        matrix = OFFSET_MAP[newArrow](relativeElemMatrix, scrollOffset, box)
        this.triangle = newArrow
      }
      if (matrix.left < 0) {
        newArrow = this.triangle.replace(/(-\w+)/, '-left')
        matrix = OFFSET_MAP[newArrow](relativeElemMatrix, scrollOffset, box)
        this.triangle = newArrow
      }
      this.position = {
        'left': matrix.left + 'px',
        'top': matrix.top + 'px',
        'z-index': getZindex()
      }
    }
  }
}
</script>
