import Button from '@/components/Button'

const components = {
  'vs-button': Button
}

export default function install (Vue, option) {
  Vue.prototype.$vs = option

  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })
}
