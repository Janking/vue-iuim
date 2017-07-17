import loading from './src/js-component/loading'
import popover from './src/js-component/popover'

const components = [loading, popover]

export default {
  install: function (Vue) {
    if (this.installed) return

    components.forEach((item, index) => {
      Vue.use(item)
    })
  }
}
