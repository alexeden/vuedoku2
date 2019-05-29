<template>
  <div class="board-grid">
    <div class="row-overlay" :style="rowOverlayStyles"></div>
    <div class="col-overlay" :style="colOverlayStyles"></div>
    <div class="col-line col-line--1"></div>
    <div class="col-line col-line--2"></div>
    <div class="row-line row-line--1"></div>
    <div class="row-line row-line--2"></div>
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
      moveCursor: 'moveCursor',
      setCursorByIndex: 'setCursorByIndex',
      setSelectedCellValue: 'setSelectedCellValue',
    }),
    handleKeyDown(e) {
      if (e.metaKey) return;
      e.preventDefault();

      switch (e.keyCode) {
        case 37: // left arrow
          this.moveCursor({ row: 0, col: -1 });
          break;
        case 38: // up arrow
          this.moveCursor({ row: -1, col: 0 });
          break;
        case 39: // right arrow
          this.moveCursor({ row: 0, col: 1 });
          break;
        case 40: // down arrow
          this.moveCursor({ row: 1, col: 0 });
          break;
        case 49: // 1
        case 50: // 2
        case 51: // 3
        case 52: // 4
        case 53: // 5
        case 54: // 6
        case 55: // 7
        case 56: // 8
        case 57: // 9
          this.setSelectedCellValue(+e.key);
          break;
        case 8: // backspace
        case 46: // delete
          this.setSelectedCellValue(0);
          break;
        default: break;
      }
    },
  },
  mounted() {
    this.$root.$el.parentElement.addEventListener('keydown', this.handleKeyDown.bind(this));
  },
});
</script>

<style scoped lang="scss">
$cell-size: 80px;
$line-thickness: 1px;
$line-color: white;

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
.col-line {
  position: absolute;
  height: 9 * $cell-size;
  width: $line-thickness;
  background: $line-color;
  grid-row: span 9;
  &--1 {
    grid-column: col-end 3 / col-start 4;
  }
  &--2 {
    grid-column: col-end 6 / col-start 7;
  }
}
.row-line {
  position: absolute;
  width: 9 * $cell-size;
  height: $line-thickness;
  background: $line-color;
  grid-column: span 9;
  &--1 {
    grid-row: row-end 3 / row-start 4;
  }
  &--2 {
    grid-row: row-end 6 / row-start 7;
  }
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
