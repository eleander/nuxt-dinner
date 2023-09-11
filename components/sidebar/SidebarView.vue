<template>
  <div class="p-4">
    <h1 class="font-bold text-2xl mb-3">Sidebar</h1>
    <div
      class="flex justify-around lg:justify-center lg:justify-items-center items-center"
    >
      <button @click="$emit('changeNumber', guests - 1)" class="btn btn-square">
        -
      </button>
      <p class="mx-3 text-center">{{ guests }} Guests</p>
      <button @click="$emit('changeNumber', guests + 1)" class="btn btn-square">
        +
      </button>
    </div>
    <ul class="grid grid-cols-1 divide-y">
      <li v-for="dish in dishes" :key="dish.id" class="py-2">
        <button
          @click="$emit('removeDish', dish.id)"
          class="btn btn-circle btn-sm mr-1"
        >
          X
        </button>
        <span>{{ dish.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ReducedDishDetails } from "types";

defineProps<{
  guests: number;
  dishes: ReducedDishDetails[];
}>();

defineEmits<{
  changeNumber: [number];
  removeDish: [number];
}>();
</script>

<style></style>
