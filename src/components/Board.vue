<template>
  <div class="board-grid">
    <div class="row-overlay" :style="rowOverlayStyles"></div>
    <cell v-for="(cell, i) in cells" :key="i" :index="i" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Cell from './Cell.vue'; // @ is an alias to /src
import { VuedokuState } from '../lib/types';


export default Vue.extend({
  name: 'board',
  components: {
    Cell,
  },
  computed: {
    ...mapState<VuedokuState>({
      cursorRow: state => state.cursor.row,
      cursorCol: state => state.cursor.col,
    }),
    cells() {
      return Array.from(Array(81)).map((_, i) => i);
    },
    rowOverlayStyles() {
      return {
        gridRow: `row-start ${this.cursorRow + 1}`,
      };
    },
  },
});
</script>

<style scoped lang="scss">
$cell-size: 80px;

.board-grid {
  display: grid;
  position: relative;
  grid-template-columns: repeat(9, [col-start] $cell-size [col-end]);
  grid-template-rows: repeat(9, [row-start] $cell-size [row-end]);
  grid-template-areas:
    "a a a b b b a a a"
    "a a a b b b a a a"
    "a a a b b b a a a"
    "b b b a a a b b b"
    "b b b a a a b b b"
    "b b b a a a b b b"
    "a a a b b b a a a"
    "a a a b b b a a a"
    "a a a b b b a a a";
}

.row-overlay {
// .board-grid::before {
  content: '';
  // grid-column:
  position: absolute;
  grid-column: span 9;
  height: $cell-size;
  background-color: blue;
  width: 9 * $cell-size;
  grid-row: row-start 2;
}
</style>
