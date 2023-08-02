<template>
  <div class="flex justify-center">
    <div class="join">
      <button class="join-item btn" @click="$emit('prevPage')">«</button>
      <button class="join-item btn">
        Page {{ currentPage }} / {{ totalPages }}
      </button>
      <button class="join-item btn" @click="$emit('nextPage')">»</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  totalPages: number;
  currentPage: number;
}>();

defineEmits<{
  prevPage: [];
  nextPage: [];
}>();
</script>

<style></style>
