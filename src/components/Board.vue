<template>
  <div class="board-grid">
    <div class="row-overlay" :style="rowOverlayStyles"></div>
    <div class="col-overlay" :style="colOverlayStyles"></div>
    <cell
      v-for="(cell, i) in cells"
      @click="setCursorByIndex(i)"
      :cell="cell"
      :cursor="cursor"
      :key="i"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import Cell from './Cell.vue'; // @ is an alias to /src
import { VuedokuState } from '../lib/types';


export default Vue.extend({
  name: 'board',
  components: {
    Cell,
  },
  computed: {
    ...mapState({
      cursor: state => state.cursor,
      cells: state => state.cells,
    }),
    colOverlayStyles() {
      return {
        gridColumn: `col-start ${this.cursor.col + 1}`,
      };
    },
    rowOverlayStyles() {
      return {
        gridRow: `row-start ${this.cursor.row + 1}`,
      };
    },
  },
  methods: {
    ...mapActions({
      setCursorByIndex: 'setCursorByIndex',
    }),
  },
  mounted() {
    window.board = this;
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

.row-overlay, .col-overlay {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
}
.row-overlay {
  height: $cell-size;
  width: 9 * $cell-size;
  grid-column: span 9;
}
.col-overlay {
  height: 9 * $cell-size;
  width: $cell-size;
  grid-row: span 9;
}
</style>
