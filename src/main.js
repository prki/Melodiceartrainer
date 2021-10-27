import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

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
