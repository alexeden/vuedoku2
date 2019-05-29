<template>
  <div
    class="cell"
    :class="cssClasses"
    @click="handleClick()">
    {{ cell.value > 0 ? cell.value : '' }}
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'cell',
  props: {
    cell: {
      type: Object,
      required: true,
    },
    cursor: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isSelected() {
      return this.cursor.index === this.cell.index;
    },
    cssClasses() {
      return {
        selected: this.isSelected,
        locked: this.cell.locked,
        impossible: this.hasImpossibleValue,
      };
    },
    hasImpossibleValue() {
      const impossibleValues = this.$store.getters.impossibleValuesByCell(this.cell);

      return this.cell.value > 0
        ? impossibleValues.includes(this.cell.value)
        : false;
    },
  },
  methods: {
    handleClick() {
      this.$emit('click', this.cell);
    },
  },
});
</script>


<style scoped lang="scss">
$cell-error-color: #E53935;
$cell-font-size: 2rem;
$cell-font-color: #ffffff;
$cell-font-weight: 900;
$cell-selected-font-weight: 900;
$cell-selected-background-color: rgba(white, .8);
$cell-border-color: rgba(255, 255, 255, .2);
$cell-selected-border-radius: 0%;
$related-selected-background-color: rgba(white, .2);
$cell-selected-font-color: rgba(0, 0, 0, .9);

.cell {
  color: $cell-font-color;
  font-size: $cell-font-size;
  font-weight: $cell-font-weight;
  height: 100%;
  width: 100%;
  line-height: 75px;
  position: relative;
  text-align: center;
  transition: background .25s;
  z-index: 1;
}

.selected {
  background-color: $cell-selected-background-color;
  color: $cell-selected-font-color;
  font-weight: $cell-selected-font-weight !important;
}

.locked {
  font-weight: 300;
  font-size: 1.6rem;
}

.locked.selected {
  color: rgba($cell-selected-font-color, 0.5);
}

.impossible {
  border: $cell-error-color 1px solid;
  background-color: $cell-error-color;
  color: $cell-font-color !important;
}

</style>
