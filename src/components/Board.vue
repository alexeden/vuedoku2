<template>
  <div class="board-grid">
    <div class="overlay"></div>
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
    <cell />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cell from './Cell.vue'; // @ is an alias to /src


export default Vue.extend({
  name: 'board',
  components: {
    Cell,
  },
});
</script>

<style scoped lang="scss">
.board-grid {
  display: grid;
  grid-template-columns: repeat(9, [col-start] minmax(80px, 1fr) [col-end]);
  grid-template-rows: repeat(9, [row-start] minmax(80px, 1fr) [row-end]);
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

.overlay {
  grid-column: col-start 3 / span 3;
  grid-row: 2;
}
</style>
