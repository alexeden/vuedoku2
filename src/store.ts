import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface VuedokuState {
  cursor: {
    row: number;
    col: number;
  }
}

export default new Vuex.Store<VuedokuState>({
  state: {
    cursor: {
      row: 0,
      col: 0,
    },
  },
  actions: {

  },
  mutations: {

  },
});
