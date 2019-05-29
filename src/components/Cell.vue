<template>
  <div class="cell" @click="setCursorByIndex(index)">
    I am cell {{ index }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default Vue.extend({
  name: 'cell',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters({

    }),
  },
  methods: {
    ...mapActions({
      setCursorByIndex: 'setCursorByIndex',
    }),
    ...mapMutations({

    }),
  },
});
</script>

<style scoped lang="scss">
</style>
