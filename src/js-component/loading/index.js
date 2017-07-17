import './loading.scss'
import Vue from 'vue'
import iuimLoading from './loading.vue'
let LoadingConstructor = Vue.extend(iuimLoading)

export default {
  install: function (Vue) {
    if (this.installed) return
    let contextEl
    let config = {
      bind(el, binding) {
        let defaults = { fullscreen: false, text: false, context: 'body', visible: false }
        let options = typeof binding.value === 'object' ? binding.value : {}
        let setting = Object.assign({}, defaults, options)
        Vue.nextTick(() => {
          let loading = new LoadingConstructor({
            el: document.createElement('div'),
            data: setting
          })
          contextEl = document.querySelector(setting.context)
          contextEl.appendChild(loading.$el)
          el.instance = loading
          loading.$on('after-leave', () => {
            contextEl.classList.remove('iui-loading-wrap')
          })
        })
      },
      update(el, binding) {
        let loading = el.instance
        if (binding.oldValue !== binding.value) {
          loading.visible = binding.value.visible
          if (loading.context !== 'body' && binding.value.visible) {
            contextEl.classList.add('iui-loading-wrap')
          }
        }
      },
      unbind() {
      }
    }

    Vue.directive('loading', config)
  }
}
