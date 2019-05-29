<template>
  <div class="cell">
    I am cell {{ index }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

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
    ...mapMutations({

    }),
  },
});
</script>

<style scoped lang="scss">
</style>
