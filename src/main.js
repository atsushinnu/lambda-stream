import Vue from 'vue'
import App from './App.vue'
import router from "./router"

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
Vue.use(Bootstrap)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
