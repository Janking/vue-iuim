import './loading.scss'
import Vue from 'vue'
import iuimLoading from './loading.vue'
let LoadingConstructor = Vue.extend(iuimLoading)
export default {
  install: function (Vue) {
    if (this.installed) return

    let config = {
      bind(el, binding) {
        let defaults = { fullscreen: false, context: 'body', visible: false, text: false, type: 1 }
        let options = typeof binding.value === 'object' ? binding.value : {}
        let setting = Object.assign({}, defaults, options)

        Vue.nextTick(() => {
          let loading = new LoadingConstructor({
            el: document.createElement('div'),
            data: setting
          })
          let contextEl = document.querySelector(setting.context)
          el.contextEl = contextEl
          contextEl.appendChild(loading.$el)
          el.instance = loading
          loading.$on('after-leave', () => {
            contextEl.classList.remove('iuim-loading-wrap')
          })
        })
      },
      update(el, binding) {
        let loading = el.instance
        if (binding.oldValue !== binding.value) {
          loading.visible = binding.value.visible
          if (loading.context !== 'body' && binding.value.visible) {
            el.contextEl.classList.add('iuim-loading-wrap')
          }
        }
      },
      unbind(el, binding) {
        el.instance.$el.remove()
      }
    }
    Vue.directive('loading', config)
  }
}
