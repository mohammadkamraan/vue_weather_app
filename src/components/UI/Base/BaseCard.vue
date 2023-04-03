<template>
  <div :class="['card', ...styles]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["styles"],
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>
