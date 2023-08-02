<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Sidebar</h2>
    <button @click="$emit('changeNumber', guests + 1)">+</button>
    <span>{{ guests }}</span>
    <button @click="$emit('changeNumber', guests - 1)">-</button>
    <ul>
      <li v-for="dish in dishes" :key="dish.id">
        {{ dish.title }}
        <button @click="$emit('removeDish', dish.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { DishDetails } from "types";

defineProps<{
  guests: number;
  dishes: DishDetails[];
}>();

defineEmits<{
  changeNumber: [number];
  removeDish: [number];
}>();
</script>

<style></style>
