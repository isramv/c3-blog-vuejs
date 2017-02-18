import Vue from 'vue'
import App from './App'
import router from './router/router'
/* eslint-disable no-unused-vars */
import uikit from '../src/assets/uikit-3.0.0-beta.12/css/uikit.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
