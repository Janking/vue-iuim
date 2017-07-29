import './popover.scss'
import Vue from 'vue'
import popoverComponent from './popover.vue'
let Popover = Vue.extend(popoverComponent)
let body = document.body
let clickCb = (component) => (event) => {
  component.show()
}
let directiveHook = {
  bind(el, binding) {
    let options = binding.value
    if (Object.prototype.toString.call(options) !== '[object Object]') return
    let popover = new Popover({
      el: document.createElement('div'),
      propsData: options,
      data: {
        targetEl: el
      }
    })

    el.clickCb = clickCb(popover)

    el.addEventListener('click', el.clickCb, false)

    Vue.nextTick((ctx) => {
      body.appendChild(popover.$el)
    })
  },
  unbind(el, binding) {
    el.removeEventListener('click', el.clickCb, false)
  }
}
export default {
  install: function (Vue) {
    if (this.installed) return
    Vue.directive('popover', directiveHook)
  }
}

// export const iuimPopover = popover
