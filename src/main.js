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
    pastMelodies: [],
    currentMelody: null,
  },
  mutations: {
    setCurrentMelody(state, melody) {
      if (state.currentMelody !== null) {
        state.pastMelodies.push(state.currentMelody);
      }
      state.currentMelody = melody;
      //state.generatedMelodies.push(melody);
    },

    markLastAnswer(state, answer) {
      state.currentMelody['answer'] = answer;
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
