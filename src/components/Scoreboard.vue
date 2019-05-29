<template>
  <div class="scoreboard">
    <h1>I'm the scoreboard</h1>
    <h1>Board valid? {{ !boardIsInvalid ? 'Yes' : 'No' }}</h1>
    <h2>{{ cellsRemaining }} left!</h2>
    <div class="score-row" v-for="n in 9" :key="n">
      <span>{{ n }}</span>
      <span>{{ cellsRemainingByValue(n) }}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';

export default Vue.extend({
  name: 'scoreboard',
  props: {

  },
  computed: {
    ...mapState({
    }),
    ...mapGetters({
      cellsRemaining: 'cellsRemaining',
      cellsRemainingByValue: 'cellsRemainingByValue',
      boardIsInvalid: 'boardIsInvalid',
    }),
  },
  methods: {
  },
});
</script>


<style scoped lang="scss">
.score-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
