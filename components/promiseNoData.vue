<template>
  <div v-if="error">
    <h1>{{ error.message }}</h1>
  </div>
  <div v-else-if="pending"><h1>Loading...</h1></div>
  <div v-else>
    <slot />
  </div>
</template>

<script lang="ts" setup>
// const props = defineProps[("error", "data", "pending")];

const props = defineProps<{
  error: Error | null;
  data: any;
  pending: boolean;
}>();
</script>

<style></style>
