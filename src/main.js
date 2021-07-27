import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

createApp(App).use(router).use(store).mount('#app')
