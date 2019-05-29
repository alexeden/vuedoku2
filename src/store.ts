import Vue from 'vue';
import Vuex from 'vuex';
import { VuedokuState, Coordinates } from './lib/types';
import { Utils } from './lib/utils';

Vue.use<typeof Vuex>(Vuex);

export default new Vuex.Store<VuedokuState>({
  strict: true,
  state: {
    cursor: {
      row: 0,
      col: 0,
      nonet: 0,
      index: 0,
    },
  },
  getters: {

  },
  actions: {
    moveCursor: ({ commit, state }, { row, col }) => {
      // state.cursor = {
      //   row: state.cursor.row + row,
      //   col: state.cursor.col + col,
      // };
    },
    setCursorByIndex: ({ commit }, index: number) => {
      console.log('setting by index', index);
      commit('setCursorCoords', Utils.coordsFromIndex(index));
    },
  },
  mutations: {
    setCursorCoords: (state, coords: Coordinates) => {
      console.log('setting coords', coords);
      state.cursor = { ...coords };
    },
  },
});
