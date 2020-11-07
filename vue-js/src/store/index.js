import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sliderImg: require("@/assets/bg/bg-slide1.png")
  },
  getters: {
    getSliderImg: (state) => state.sliderImg
  },
  actions: {
    changeSliderImg({ commit }) {
      let siteLang = localStorage.getItem("lang");

      let newImg = (siteLang == null || siteLang == "en") ? this.sliderImg = require("@/assets/bg/bg-slide1.png") : this.sliderImg = require("@/assets/bg/bg-slide1-rtl.png");

      commit("setImg", newImg);
    }
  },
  mutations: {
    setImg: (state, newImg) => state.sliderImg = newImg
  }
})
