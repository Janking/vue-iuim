import loading from './src/js-component/loading'
import popover from './src/js-component/popover'

const COMPONENT = [loading, popover]

module.exports = {
  install: function (Vue) {
    if (this.installed) return

    COMPONENT.forEach((item, index) => {
      Vue.use(item)
    })
  }
}
