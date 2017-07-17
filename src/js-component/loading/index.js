import './loading.scss'

const loadingTemplate = `<svg version="1.1" id="loading-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
  <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 20 20"
      to="360 20 20"
      dur="0.5s"
      repeatCount="indefinite"/>
    </path>
  </svg>`

let contextEl
let guid = 1
let ELEMENT_CACHE = {}
let TIMER1 = {}
let TIMER2 = {}

function getUid() {
  return guid++
}

// let transitionEnd = (function () {
//   let name
//   let el = document.createElement('detect')
//   let transitions = {
//     'transition': 'transitionend',
//     'OTransition': 'oTransitionEnd',
//     'MozTransition': 'transitionend',
//     'WebkitTransition': 'webkitTransitionEnd'
//   }

//   for (name in transitions) {
//     if (el.style[name] !== undefined) {
//       return transitions[name]
//     }
//   }
// })()

function toggle(context, selector, value) {
  let id = selector.getAttribute('data-loading-id')
  let currentElem = ELEMENT_CACHE[id]

  if (value) {
    if (context !== document.body) {
      context.classList.add('iui-loading-wrap')
    }
    currentElem.classList.add('fade')
    TIMER1[id] = setTimeout(() => {
      clearTimeout(TIMER1[id])
      currentElem.classList.add('in')
    }, 30)
  } else {
    currentElem.classList.remove('in')
    TIMER2[id] = setTimeout(() => {
      clearTimeout(TIMER2[id])
      currentElem.classList.remove('fade')

      if (context !== document.body) {
        context.classList.add('iui-loading-wrap')
      }
    }, 300)
  }
}

const config = {
  inserted(el, binding) {
    // 有无配置参数
    let options = typeof binding.value === 'object' ? binding.value : null
    let loadingEl = document.createElement('div')
    let cacheKey = 'iui-loading-' + getUid()
    // let value = options ? options.value : binding.value
    // 如果有,context为options.context 或者 document.body
    contextEl = options && options.context ? (document.querySelector(options.context) || document.body) : binding.modifiers.fullscreen ? document.body : el
    loadingEl.className = 'iui-loading'
    loadingEl.innerHTML = loadingTemplate
    el.setAttribute('data-loading-id', cacheKey)
    ELEMENT_CACHE[cacheKey] = loadingEl
    contextEl.appendChild(loadingEl)
  },
  update(el, binding) {
    let value = typeof binding.value === 'object' ? binding.value.value : binding.value
    toggle(contextEl, el, value)
  },
  unbind() {
    for (let name in ELEMENT_CACHE) {
      ELEMENT_CACHE[name].remove()
      let wrapArr = Array.prototype.slice.call(document.querySelectorAll('.iui-loading-wrap'), 0)
      wrapArr.forEach(function (element) {
        element.classList.remove('iui-loading-wrap')
      })
    }
  }
}

export default {
  install: function (Vue) {
    if (this.installed) return
    Vue.directive('loading', config)
  }
}
