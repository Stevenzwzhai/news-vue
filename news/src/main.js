import Vue from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);
new Vue({
  el: '#app',
  render: h => h(App)
})
