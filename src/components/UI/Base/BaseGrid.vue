<template>
  <div :class="[baseGridClass, gridWithRowsClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    needRows: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    baseGridClass() {
      return "base-grid";
    },
    gridWithRowsClass() {
      return {
        rows: this.needRows,
      };
    },
  },
};
</script>

<style scoped>
.base-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.base-grid.rows {
  grid-template-rows: repeat(6, minmax(0, 1fr));
}
</style>
