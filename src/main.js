import Vue from 'vue'
import App from './App.vue'
import VsButton from '@/components/index.js'

Vue.config.productionTip = false

Vue.use(VsButton, { background: 'blue' })

new Vue({
  render: h => h(App)
}).$mount('#app')
