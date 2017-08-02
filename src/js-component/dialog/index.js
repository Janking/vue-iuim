import './dialog.scss'
import Vue from 'vue'
import iuimDialog from './dialog.vue'
let DialogConstructor = Vue.extend(iuimDialog)
export default {
  install: function (Vue) {
    if (this.installed) return

    let config = {
      bind(el, binding) {
        let defaults = { context: 'body', visible: false }
        let options = typeof binding.value === 'object' ? binding.value : {}
        let setting = Object.assign({}, defaults, options)

        Vue.nextTick(() => {
          let dialog = new DialogConstructor({
            el: document.createElement('div'),
            data: setting
          })
          let contextEl = document.querySelector(setting.context)
          el.contextEl = contextEl
          el.instance = dialog
          contextEl.appendChild(dialog.$el)
        })
      },
      update(el, binding) {
        let dialog = el.instance
        if (binding.oldValue !== binding.value) {
          dialog.visible = binding.value.visible
        }
      }
    }
    Vue.directive('dialog', config)
  }
}
