import Vue from 'vue';
import Vuex from 'vuex';
import { VuedokuState } from './lib/types';

Vue.use<typeof Vuex>(Vuex);

export default new Vuex.Store<VuedokuState>({
  strict: true,
  state: {
    cursor: {
      row: 0,
      col: 0,
    },
  },
  getters: {

  },
  actions: {
    moveCursor: ({ commit, state }, { row, col }) => {
      state.cursor = {
        row: state.cursor.row + row,
        col: state.cursor.col + col,
      };
    },
  },
  mutations: {
    setCursor: (state, { row, col }) => {
      state.cursor = { row, col };
    },
  },
});
