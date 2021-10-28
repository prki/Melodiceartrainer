import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default-dark.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueMaterial)

const store = new Vuex.Store({
  state: {
    generatedMelodies: [],
  },
  mutations: {
    addMelody(state, melody) {
      state.generatedMelodies.push(melody);
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
