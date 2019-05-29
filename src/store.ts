import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface VuedokuState {
  cursor: {
    x: number;
    y: number;
  }
}

export default new Vuex.Store<VuedokuState>({
  state: {
    cursor: {
      x: 0,
      y: 0,
    },
  },
  mutations: {

  },
  actions: {

  },
});
