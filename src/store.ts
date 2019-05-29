import Vue from 'vue';
import Vuex from 'vuex';
import { VuedokuState, Coordinates, Cell } from './lib/types';
import { Utils } from './lib/utils';

Vue.use<typeof Vuex>(Vuex);

export default new Vuex.Store<VuedokuState>({
  strict: true,
  state: () => {
    const values = [
      1, 8, 4, 2, 6, 3, 9, 5, 7,
      2, 7, 6, 5, 1, 0, 3, 4, 8,
      5, 3, 0, 0, 8, 7, 6, 1, 2,

      3, 6, 5, 7, 9, 8, 1, 2, 4,
      0, 4, 0, 6, 5, 1, 0, 9, 3,
      0, 1, 0, 3, 4, 2, 0, 6, 5,

      6, 0, 8, 0, 3, 0, 2, 7, 1,
      4, 2, 1, 8, 7, 6, 5, 3, 9,
      7, 0, 3, 1, 2, 0, 4, 8, 6,
    ];

    return {
      cells: Utils.createCells(values),
      cursor: {
        row: 0,
        col: 0,
        nonet: 0,
        index: 0,
      },
    };
  },
  getters: {
    selectedCell: state => state.cells[state.cursor.index],

    impossibleValuesByCell: ({ cells }) => (cell: Cell) =>
      Array.from(new Set([
        ...cells
          /* Ignore the passed-in cell */
          .filter(c =>
            typeof c.value === 'number'
              && c.index !== cell.index
              && (c.col === cell.col || c.row === cell.row || c.nonet === cell.nonet),
          )
          .map(c => c.value as number),
      ])),
  },
  actions: {
    moveCursor: ({ commit, state }, { row, col }) => {
      commit('setCursorCoords', Utils.coordsFromRowCol({
        row: state.cursor.row + row,
        col: state.cursor.col + col,
      }));
    },

    setSelectedCellValue({ state, commit, getters }, value: number) {
      if (value < 0 || value > 9 || getters.selectedCell.locked) return;
      commit('setCellValue', { cell: getters.selectedCell, value });
    },

    setCursorByIndex: ({ commit }, index: number) => {
      commit('setCursorCoords', Utils.coordsFromIndex(index));
    },
  },
  mutations: {
    setCellValue(state, { cell, value }) {
      cell.value = value;
    },
    setCursorCoords: (state, coords: Coordinates) => {
      state.cursor = { ...coords };
    },
  },
});
