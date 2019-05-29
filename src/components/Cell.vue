<template>
  <div
    class="cell"
    :class="cssClasses"
    @click="handleClick()">
    {{ cell.value > 0 ? cell.value : '' }}
  </div>
</template>


<style scoped lang="scss">
$primary-font-family: "Lato";
$num-cols: 9;
$green: #76FF03;
$cell-error-color: #E53935;
$cell-height: 5rem;
$cell-padding: .15rem;
$cell-font-size: 2rem;
$cell-font-color: #ffffff;
$cell-font-weight: 400;
$cell-selected-font-weight: 900;
$cell-selected-background-color: rgba(white, .8);
$cell-border-color: rgba(255, 255, 255, .2);
$cell-selected-border-radius: 0%;
$nonet-border-color: rgba(white, .5);
$nonet-padding: 0rem;
$related-selected-background-color: rgba(white, .2);
$cell-selected-font-color: rgba(0, 0, 0, .6);

.cell {
  color: $cell-font-color;
  font-size: $cell-font-size;
  font-weight: $cell-font-weight;
  height: 100%;
  width: 100%;
  line-height: 75px;
  position: relative;
  text-align: center;
  transition: background .5s;
  z-index: 1;
}

.selected {
  background-color: $cell-selected-background-color;
  color: $cell-selected-font-color;
  font-weight: $cell-selected-font-weight !important;
}
</style>

<script>
import Vue from 'vue';

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
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit('click', this.cell);
    },
  },
});
</script>
