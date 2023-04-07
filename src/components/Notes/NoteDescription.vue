<template>
  <p>{{ description }}</p>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    description: {
      require: true,
      type: String as PropType<string>,
    },
  },
});
</script>
