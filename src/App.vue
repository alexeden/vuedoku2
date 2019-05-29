<template>
  <div id="app">
    <Board />
  </div>
</template>

<style lang="scss">
  @import url('./styles/main.scss');
</style>

<script lang="ts">
import Vue from 'vue';
import Board from '@/components/Board.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Board,
  },
});
</script>
