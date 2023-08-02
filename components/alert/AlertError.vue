<template>
  <div>
    <div class="alert alert-error">
      <Icon name="bi:exclamation-circle-fill" />
      <span> {{ errorMessage }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  errorMessage: string;
}>();
</script>

<style></style>
