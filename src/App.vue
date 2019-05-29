<template>
  <div id="app">
    <Scoreboard />
    <Board />
  </div>
</template>

<style lang="scss">
  @import url('./styles/main.scss');

  #app {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

  }
</style>

<script lang="ts">
import Vue from 'vue';
import Board from '@/components/Board.vue';
import Scoreboard from '@/components/Scoreboard.vue';

export default Vue.extend({
  name: 'home',
  components: {
    Board,
    Scoreboard,
  },
});
</script>
