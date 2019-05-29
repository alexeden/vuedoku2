<template>
  <div class="board">
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
</style>
